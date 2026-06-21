import React from "react";

export default function ResultLayout({ children, ref }) {
  return (
    <section
      id="result"
      ref={ref}
      className="py-12 md:py-16 bg-[#0c0414] text-white relative overflow-hidden rounded-2xl border border-gray-900 shadow-2xl my-4 mx-auto max-w-6xl"
    >
      {/* Magenta Orb Grid Background (Tema Gelap/Dark Mode) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.12) 0%, rgba(168, 85, 247, 0.04) 40%, transparent 70%)
          `,
          backgroundSize: "40px 40px, 40px 40px, 100% 100%",
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        
        {/* Header - Tanpa Gradien Teks */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
            Hasil Unduhan
          </h2>
          <p className="mt-2 text-gray-400 text-sm md:text-base font-light">
            Video siap diunduh tanpa watermark
          </p>
        </div>

        {/* Slot Konten Tempat Card Hasil Muncul */}
        <div className="min-h-[20vh] flex flex-col items-center justify-center">
          {children ? (
            <div className="w-full flex justify-center">
              {children}
            </div>
          ) : (
            <p className="text-gray-600 text-center text-sm italic">
              Tidak ada hasil untuk ditampilkan.
            </p>
          )}
        </div>

      </div>
    </section>
  );
}