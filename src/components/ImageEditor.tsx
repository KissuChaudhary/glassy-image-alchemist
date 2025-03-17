
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { generateEditedImage } from "@/lib/gemini-api";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { 
  UploadCloud, 
  Wand2, 
  Image as ImageIcon, 
  Trash2, 
  Download,
  Sparkles,
  History,
  PlusCircle,
  Loader2,
  Undo2,
  AlertCircle
} from "lucide-react";

const ImageEditor: React.FC = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [outputImage, setOutputImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState<{prompt: string, imageUrl: string}[]>([]);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
      setOutputImage(null);
    }
  };
  
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setImageFile(file);
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
      setOutputImage(null);
    }
  };
  
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  
  const clearImage = () => {
    setImageFile(null);
    setImagePreview(null);
    setOutputImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  
  const handleGenerateImage = async () => {
    if (!imageFile) {
      toast({
        title: "Missing image",
        description: "Please upload an image to edit.",
        variant: "destructive"
      });
      return;
    }
    
    if (!prompt) {
      toast({
        title: "Missing prompt",
        description: "Please enter a prompt describing the edits you want.",
        variant: "destructive"
      });
      return;
    }
    
    if (!apiKey) {
      toast({
        title: "Missing API key",
        description: "Please enter your Gemini API key.",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    toast({
      title: "Processing",
      description: "Sending your image to Gemini AI for editing...",
    });
    
    try {
      const result = await generateEditedImage(imageFile, prompt, apiKey);
      
      if (result.success && result.imageUrl) {
        setOutputImage(result.imageUrl);
        setHistory(prev => [
          { prompt, imageUrl: result.imageUrl! },
          ...prev.slice(0, 4) // Keep only last 5 items
        ]);
        
        toast({
          title: "Image generated!",
          description: "Your edited image has been created successfully.",
        });
      } else {
        toast({
          title: "Generation failed",
          description: result.error || "Failed to generate image. Please try a different prompt.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error("Error generating image:", error);
      toast({
        title: "Error",
        description: "Failed to connect to Gemini API. Check your API key and try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const downloadImage = () => {
    if (outputImage) {
      const link = document.createElement("a");
      link.href = outputImage;
      link.download = `gemini-edit-${Date.now()}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  
  const revertToOriginal = () => {
    setOutputImage(null);
  };
  
  return (
    <div className="w-full mx-auto">
      <div className="glass-panel rounded-xl p-6 md:p-8 mb-8">
        <h2 className="text-xl font-semibold flex items-center mb-6">
          <Wand2 className="w-5 h-5 mr-2 text-primary" />
          <span className="text-gradient">Image Transformation</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column - Upload and controls */}
          <div className="flex flex-col space-y-6">
            {/* File upload area */}
            <div
              className={cn(
                "relative w-full h-64 rounded-xl glass-input flex flex-col items-center justify-center cursor-pointer transition-all duration-300 overflow-hidden",
                imagePreview ? "border-primary/30" : "border-dashed"
              )}
              onClick={() => fileInputRef.current?.click()}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleFileChange}
              />
              
              {imagePreview ? (
                <>
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 flex items-end justify-center p-4">
                    <div className="flex space-x-3">
                      <Button 
                        variant="secondary" 
                        size="sm" 
                        className="glass-panel"
                        onClick={(e) => {
                          e.stopPropagation();
                          fileInputRef.current?.click();
                        }}
                      >
                        <PlusCircle className="h-4 w-4 mr-2" />
                        Change
                      </Button>
                      <Button 
                        variant="destructive" 
                        size="sm" 
                        className="glass-panel"
                        onClick={(e) => {
                          e.stopPropagation();
                          clearImage();
                        }}
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <UploadCloud className="h-12 w-12 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground text-center">
                    Drag & drop an image here, or click to select
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Supports JPG, PNG, WebP (Max 10MB)
                  </p>
                </>
              )}
            </div>
            
            {/* API key input */}
            <div className="space-y-2">
              <label htmlFor="apiKey" className="text-sm font-medium text-muted-foreground flex items-center">
                Gemini API Key
                <div className="ml-2 cursor-help group relative">
                  <AlertCircle className="h-4 w-4 text-muted-foreground" />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 p-2 bg-black/80 rounded-md text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    You need a Gemini API key with access to the gemini-2.0-flash-exp-image-generation model. Get it from Google AI Studio.
                  </div>
                </div>
              </label>
              <Input
                id="apiKey"
                type="password"
                className="glass-input"
                placeholder="Enter your Gemini API key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                Your API key is used locally and never stored on our servers.
              </p>
            </div>
            
            {/* Prompt input */}
            <div className="space-y-2">
              <label htmlFor="prompt" className="text-sm font-medium text-muted-foreground">
                Editing Prompt
              </label>
              <Textarea
                id="prompt"
                className="glass-input min-h-[100px]"
                placeholder="Describe how you want to edit the image... e.g. 'Make the sky more dramatic with stormy clouds'"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                Be specific and descriptive. The model works best with clear instructions.
              </p>
            </div>
            
            {/* Action buttons */}
            <div className="flex space-x-3">
              <Button 
                className="flex-1 neo-glow bg-primary hover:bg-primary/90"
                onClick={handleGenerateImage}
                disabled={isLoading || !imageFile}
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                ) : (
                  <Sparkles className="h-4 w-4 mr-2" />
                )}
                <span>{isLoading ? "Processing..." : "Transform Image"}</span>
              </Button>
              
              {outputImage && (
                <Button
                  variant="outline"
                  className="glass-panel"
                  onClick={downloadImage}
                >
                  <Download className="h-4 w-4" />
                </Button>
              )}
              
              {outputImage && (
                <Button
                  variant="outline"
                  className="glass-panel"
                  onClick={revertToOriginal}
                >
                  <Undo2 className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
          
          {/* Right column - Output image */}
          <div className="flex flex-col space-y-6">
            <div className="relative w-full h-64 rounded-xl glass-panel flex items-center justify-center overflow-hidden">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center">
                  <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
                  <p className="text-sm text-center text-muted-foreground">
                    AI is working on your image...
                  </p>
                </div>
              ) : outputImage ? (
                <img 
                  src={outputImage} 
                  alt="Generated" 
                  className="w-full h-full object-contain animate-zoom-in"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-muted-foreground">
                  <ImageIcon className="h-12 w-12 mb-2 opacity-50" />
                  <p className="text-sm text-center">
                    {imagePreview ? "Transformed image will appear here" : "Upload an image to start"}
                  </p>
                </div>
              )}
            </div>
            
            {/* History section */}
            {history.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-sm font-medium flex items-center text-muted-foreground">
                  <History className="h-4 w-4 mr-2" />
                  Recent Transformations
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {history.map((item, index) => (
                    <div key={index} className="group relative rounded-lg overflow-hidden glass-panel h-24 hover:ring-1 hover:ring-primary/50 transition-all cursor-pointer">
                      <img 
                        src={item.imageUrl} 
                        alt={`History ${index}`} 
                        className="w-full h-full object-cover"
                        onClick={() => setOutputImage(item.imageUrl)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end opacity-0 group-hover:opacity-100 transition-opacity p-2">
                        <p className="text-xs truncate w-full">{item.prompt}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageEditor;
