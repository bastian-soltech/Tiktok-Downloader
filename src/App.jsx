import React, { useRef, useState } from "react";
import logo from "../public/logo.png";
import "./App.css";
import axios from "axios";
import Navbar from "./component/navbar";
import Card from "./component/card";
import Tutorial from "./section/tutorial";
import Footer from "./section/footer";
import ResultLayout from "./layout/ResultLayout";
import Benefit from "./section/benefit";
import HeroTikDown from "./section/hero";

function App() {
  const [isExpand, setIsExpand] = useState(false);
  const [url, setUrl] = useState("");
  const resultRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [videoData, setVideoData] = useState(null);
  const [error, setError] = useState("");

  const handleDownload = async () => {
    if (!url.trim()) {
      setError("Masukkan URL TikTok terlebih dahulu.");
      return;
    }

    resultRef.current?.scrollIntoView({ behavior: "smooth" });
    setLoading(true);
    setError("");

    try {
      const response = await axios.get(
        `https://profesor-api.vercel.app/api/tiktok/v1/download?url=${encodeURIComponent(url)}`
      );
      setVideoData(response.data.data);
    } catch (err) {
      setError("Gagal mengunduh video. Pastikan URL valid dan berasal dari TikTok.");
      setVideoData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0414] text-white">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <HeroTikDown url={url} setUrl={setUrl} handleDownload={handleDownload} loading={loading} logo={logo}/>
        {/* Result Section */}
        <div ref={resultRef} className="mt-16">
          <ResultLayout>
            {loading && (
              <div className="flex justify-center my-10">
                <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            {!loading && videoData && <Card videoData={videoData} />}
            {!loading && !videoData && !error && (
              <p className="text-center text-gray-500 mt-10">Belum ada hasil. Masukkan URL untuk memulai.</p>
            )}
          </ResultLayout>
        </div>

        {/* Other Sections */}
        <Tutorial />
        <Benefit />
      </main>

      <Footer />
    </div>
  );
}

export default App;