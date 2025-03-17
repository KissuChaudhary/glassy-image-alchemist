
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

    // Get the response from the model
    const response = result.response;
    
    // Check if we have responseModalities with image
    if (response.candidates && response.candidates.length > 0) {
      const candidate = response.candidates[0];
      if (candidate.content && candidate.content.parts) {
        for (const part of candidate.content.parts) {
          if (part.inlineData) {
            // If there's inline data, it's an image
            const responseImageBase64 = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
            return {
              success: true,
              imageUrl: responseImageBase64
            };
          }
        }
      }
    }
    
    // If we reach here, check if the response contains any base64 data (based on the screenshot)
    // The screenshot shows that Google might directly return an object with base64 image data
    const responseText = JSON.stringify(response);
    const base64Match = responseText.match(/"data"\s*:\s*"([A-Za-z0-9+/=]+)"/);
    
    if (base64Match && base64Match[1]) {
      // We found what appears to be base64 data
      return {
        success: true,
        imageUrl: `data:image/jpeg;base64,${base64Match[1]}`
      };
    }
    
    // If we reach here, the model didn't return an image as expected
    console.error("No image found in the model response");
    console.error("Response structure:", JSON.stringify(response));
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
