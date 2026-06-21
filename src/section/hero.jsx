"use client";

import React from "react";
import { Link, Download, AlertCircle } from "lucide-react";

const HeroTikDown = ({ url, setUrl, handleDownload, loading, error, logo }) => {
  return (
    <section id="hero" className="min-h-[80vh] bg-[#0c0414] text-white flex flex-col relative overflow-hidden rounded-2xl border border-gray-950 shadow-xl my-4">
      
      {/* Ambient Light Minimalis (Bukan Gradien Strip) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-cyan-500/10 blur-[8rem] rounded-full pointer-events-none z-[0]"></div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 w-full">
          
          {/* Logo Section */}
          <div className="flex justify-center mb-2">
            <img
              src={logo || "/logo.png"}
              alt="Tik-Down Logo"
              className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white/5 p-2 shadow-md backdrop-blur-md border border-white/10 transition-transform hover:scale-105"
            />
          </div>

          {/* Badge Pengenalan - Warna Solid */}
          <div className="flex justify-center">
            <div className="bg-[#1c1528] border border-gray-800 rounded-full px-4 py-1.5 flex items-center gap-2 w-fit mx-4">
              <span className="text-xs font-medium tracking-wide text-gray-300 flex items-center gap-2">
                <span className="bg-white/10 p-1 rounded-full text-xs">🚀</span>
                Versi Tercepat Tanpa Watermark
              </span>
            </div>
          </div>

          {/* Headline & Subtitle - Menggunakan Putih & Abu-abu Solid */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-white">
              Tik-Down
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
              Unduh video TikTok tanpa watermark, cepat, gratis, dan tanpa iklan!
            </p>
          </div>

          {/* Search bar / Input & Button */}
          <div className="relative max-w-2xl mx-auto w-full group px-2">
            <div className="bg-[#1c1528]/90 backdrop-blur-xl rounded-2xl p-2.5 flex flex-col sm:flex-row items-center gap-3 border border-gray-800 focus-within:border-gray-700 shadow-2xl transition-all">
              <div className="flex items-center w-full pl-3 gap-2">
                <Link className="w-5 h-5 text-gray-500 shrink-0" />
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Tempel link video TikTok di sini..."
                  className="bg-transparent flex-1 outline-none text-gray-200 placeholder-gray-600 text-sm md:text-base py-2"
                />
              </div>
              
              <button
                onClick={handleDownload}
                disabled={loading}
                className={`w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer select-none shrink-0 ${
                  loading
                    ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                    : "bg-white text-black hover:bg-gray-200 shadow-md active:scale-95"
                }`}
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    <span>Memproses...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Unduh Video</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Error Message Box */}
          {error && (
            <div className="mt-4 max-w-xl mx-auto bg-red-950/20 border border-red-900/50 text-red-400 rounded-xl px-4 py-3 flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
              <p className="text-sm font-medium text-left">{error}</p>
            </div>
          )}

          {/* Panduan Arah */}
          <p className="text-gray-600 text-xs md:text-sm font-medium tracking-wide pt-4">
            Hasil unduhan otomatis tampil di bawah ini 👇
          </p>

        </div>
      </div>
    </section>
  );
};

export default HeroTikDown;