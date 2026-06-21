import React from "react";
import { Zap, ShieldCheck, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: <Zap className="w-8 h-8 text-white" />,
    title: "Lebih Cepat",
    description: "Teknologi canggih memungkinkan proses unduh dalam hitungan detik tanpa buffering.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
    title: "Tanpa Iklan",
    description: "Nikmati pengalaman bebas iklan — aman dari virus, popup, dan gangguan lainnya.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-white" />,
    title: "Mudah Digunakan",
    description: "Cukup salin URL TikTok, tempel di sini, dan unduh — tanpa registrasi atau instalasi.",
  },
];

export default function Benefit() {
  return (
    <section className="bg-[#0c0414] py-16 md:py-24 border-t border-gray-950" id="benefit-section">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Header - Teks Solid Minimalis */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            Kenapa Harus Menggunakan Tik-Down?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-light leading-relaxed">
            Solusi terbaik untuk mengunduh video TikTok tanpa watermark, cepat, dan 100% gratis.
          </p>
        </div>

        {/* Grid Cards Modern & Bersih */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-[#1c1528]/80 backdrop-blur-md border border-gray-900 rounded-2xl p-8 transition-all duration-300 hover:bg-[#1c1528] hover:border-gray-800 hover:-translate-y-1 shadow-lg"
            >
              {/* Wadah Ikon Minimalis */}
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 transition-colors group-hover:bg-white/10">
                {benefit.icon}
              </div>
              
              {/* Judul & Deskripsi */}
              <h3 className="text-lg font-semibold text-white mb-3 tracking-wide">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}