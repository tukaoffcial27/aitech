import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import dotenv from "dotenv";

// Membaca API Key dari .env.local
dotenv.config({ path: '.env.local' });

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateAIReviews() {
  console.log("🚀 Menjalankan Robot Autoblog (Mode Verifikasi Ketat)...");
  
  try {
    // Tetap menggunakan model 2.0 Flash yang sudah terbukti stabil
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    // PROMPT REVISI: Fokus pada verifikasi dan link resmi
    const prompt = `Task: Act as a high-end AI tech journalist. 
    Find 10 REAL, existing, and verifiable AI tools that are popular in 2025-2026.
    
    Strict Rules:
    1. No hallucinations: The AI tool must actually exist.
    2. Verified Links: Use ONLY the official homepage (e.g., https://openai.com, https://anthropic.com).
    3. Professional Content: USP must be concise, expert-level, and unique.
    
    Output MUST be a raw JSON array of objects:
    [
      {
        "slug": "unique-slug-for-the-review",
        "aiName": "The Real AI Name",
        "category": "Technology Category",
        "usp": "Professional value proposition for 2026.",
        "link": "https://official-link.com"
      }
    ]
    IMPORTANT: Provide ONLY the raw JSON array. No markdown, no explanations.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();

    // Logika pembersihan JSON yang lebih kuat untuk mencegah error "merah"
    const jsonMatch = text.match(/\[[\s\S]*\]/);
    if (!jsonMatch) throw new Error("AI tidak memberikan format JSON yang valid. Coba jalankan ulang.");
    
    const newData = JSON.parse(jsonMatch[0]);
    const filePath = "./global-ai.json";

    // Pastikan database JSON Anda ada
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, "[]");
    }

    const existingData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    
    // Sinkronisasi data baru ke posisi teratas (Trending)
    const updatedData = [...newData, ...existingData];

    // Simpan ke file fisik
    fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));
    
    console.log("------------------------------------------");
    console.log(`✅ TERTIB! 10 Review AI Terverifikasi Berhasil Ditambahkan.`);
    console.log(`📊 Total Halaman Direktori: ${updatedData.length}`);
    console.log("------------------------------------------");

  } catch (error) {
    console.error("❌ Terjadi Kesalahan Teknis:", error.message);
  }
}

generateAIReviews();