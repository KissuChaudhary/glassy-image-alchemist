
import { toast } from "@/components/ui/use-toast";
import { GoogleGenerativeAI } from "@google/generative-ai";

interface GenerateImageResponse {
  success: boolean;
  imageUrl?: string;
  error?: string;
}

export async function generateEditedImage(
  imageFile: File,
  prompt: string,
  apiKey: string
): Promise<GenerateImageResponse> {
  try {
    // Initialize the Google Generative AI client
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp-image-generation",
    });

    // Convert File to base64 string
    const base64Image = await fileToBase64(imageFile);
    
    // Configure the generation settings
    const generationConfig = {
      temperature: 1,
      topP: 0.95,
      topK: 40,
      maxOutputTokens: 8192,
    };

    // Start a chat session with the provided image
    const chatSession = model.startChat({
      generationConfig,
      history: []
    });

    console.log("Starting chat session with prompt:", prompt);
    
    // Send the message with the image and prompt
    const result = await chatSession.sendMessage([
      {
        inlineData: {
          mimeType: imageFile.type,
          data: base64Image.split(",")[1] // Remove the data:image/jpeg;base64, part
        }
      },
      { text: prompt }
    ]);

    // Extract the response
    const response = result.response;
    
    // Check for inline data in the response
    const parts = response.candidates?.[0]?.content?.parts || response.parts;
    
    for (const part of parts) {
      if (part.inlineData) {
        // If there's inline data, it's an image
        const responseImageBase64 = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
        return {
          success: true,
          imageUrl: responseImageBase64
        };
      }
    }
    
    // If we reach here, the model didn't return an image as expected
    console.error("No image found in the model response");
    return {
      success: false,
      error: "No image found in the model response"
    };
  } catch (error) {
    console.error("Error generating image:", error);
    toast({
      title: "Error",
      description: error instanceof Error ? error.message : "Failed to generate image. Please try again.",
      variant: "destructive"
    });
    
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error"
    };
  }
}

// Helper function to convert File to base64
function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });
}
