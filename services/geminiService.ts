import { GoogleGenAI } from "@google/genai";

let client: GoogleGenAI | null = null;

const getClient = () => {
  if (!client) {
    // Ideally check if API key exists, but instructions say assume valid process.env.API_KEY
    client = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return client;
};

export const chatWithAssistant = async (message: string): Promise<string> => {
  try {
    const ai = getClient();
    // Use a lightweight model for quick chat responses
    const model = 'gemini-2.5-flash';
    
    const response = await ai.models.generateContent({
      model: model,
      contents: message,
      config: {
        systemInstruction: `You are a helpful medical receptionist AI assistant for Dr. Sarah Bennett's clinic. 
        Your tone is professional, warm, empathetic, and concise.
        
        Clinic Info:
        - Dr. veran-akamahal Practitioner specializing in Integrative Medicine.
        - Location: 123 melany homes syokimau
        - Phone: +1 (555) 123-4567.
        - Services: General Practice, Cardiology Support, Mental Wellness, Lab Diagnostics, Pediatrics.
        
        Rules:
        1. Answer questions about opening hours (Mon-Fri 9am-5pm), location, and services.
        2. IF a user asks for specific medical advice (diagnose symptoms, prescription requests), politely decline and tell them to use the "Book Appointment" button or call 911 for emergencies.
        3. Keep answers short (under 50 words) unless detailed info is requested.
        `,
      }
    });

    return response.text || "I apologize, I'm having trouble retrieving that information right now. Please call the clinic directly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently offline. Please contact the clinic via phone.";
  }
};