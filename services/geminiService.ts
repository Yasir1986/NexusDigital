
import { GoogleGenAI, Type, GenerateContentResponse } from "@google/genai";
import { EstimateResult } from "../types";

/**
 * Helper to implement exponential backoff for API calls
 */
const withRetry = async <T>(fn: () => Promise<T>, retries = 3, delay = 1000): Promise<T> => {
  try {
    return await fn();
  } catch (error) {
    if (retries <= 0) throw error;
    await new Promise(resolve => setTimeout(resolve, delay));
    return withRetry(fn, retries - 1, delay * 2);
  }
};

export const getProjectEstimate = async (prompt: string): Promise<EstimateResult> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  return withRetry(async () => {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview', // High reasoning model for complex estimation
      contents: `Analyze this project request from a web agency perspective and provide a professional technical estimation: "${prompt}"`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            complexity: { type: Type.STRING, enum: ['Low', 'Medium', 'High'] },
            estimatedWeeks: { type: Type.INTEGER },
            suggestedTechStack: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            briefAnalysis: { type: Type.STRING }
          },
          required: ['complexity', 'estimatedWeeks', 'suggestedTechStack', 'briefAnalysis']
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("Empty response from AI");
    return JSON.parse(text);
  });
};

export const generateProjectImage = async (prompt: string, aspectRatio: '1:1' | '16:9' | '4:3' | '3:4' = '1:1'): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  return withRetry(async () => {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image', // Standard recommended image model
      contents: {
        parts: [{ text: `High-quality professional digital agency branding visual: ${prompt}` }]
      },
      config: {
        imageConfig: {
          aspectRatio: aspectRatio,
        }
      },
    });

    // Iterate through parts to find the image data
    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
      }
    }
    
    throw new Error("No image data found in AI response");
  });
};
