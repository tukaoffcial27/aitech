import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import dotenv from "dotenv";

// Membaca API Key dari .env.local
dotenv.config({ path: '.env.local' });

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateAIReviews() {
  console.log("🚀 Menginisialisasi Mesin Autoblog dengan Gemini 2.0 Flash...");
  
  try {
    // Menggunakan model terbaru dan paling stabil di 2026
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `Give me 10 newly released or trending AI tools in 2026. 
    Output MUST be a valid JSON array of objects.
    Structure:
    [
      {
        "slug": "unique-slug-for-the-review",
        "aiName": "The AI Name",
        "category": "Technology Category",
        "usp": "One sentence professional value proposition",
        "link": "https://official-link.com"
      }
    ]
    IMPORTANT: Provide ONLY the raw JSON array. No markdown, no explanations.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();

    // Pembersihan paksa untuk memastikan hanya JSON yang terbaca
    const jsonMatch = text.match(/\[[\s\S]*\]/);
    if (!jsonMatch) throw new Error("AI tidak mengembalikan format JSON yang valid");
    
    const newData = JSON.parse(jsonMatch[0]);
    const filePath = "./global-ai.json";

    // Pastikan file JSON ada
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, "[]");
    }

    const existingData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    
    // Gabungkan: Data baru diletakkan di paling atas (Trending)
    const updatedData = [...newData, ...existingData];

    fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));
    
    console.log("------------------------------------------");
    console.log(`✅ TERTIB! 10 Review AI (2.0) Berhasil Ditambahkan.`);
    console.log(`📊 Total Database Sekarang: ${updatedData.length} Halaman.`);
    console.log("------------------------------------------");

  } catch (error) {
    console.error("❌ Kegagalan Teknis:", error.message);
    console.log("Tip: Jika error 404 berlanjut, cek apakah model 'gemini-2.0-flash' sudah diaktifkan di region Anda.");
  }
}

generateAIReviews();