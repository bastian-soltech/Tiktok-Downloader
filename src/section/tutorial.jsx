import React from "react";
import tutor1 from "../../public/img/tutor1.png";
import tutor2 from "../../public/img/tutor2.png";
import tutor3 from "../../public/img/tutor3.png";
import tutor4 from "../../public/img/tutor4.png";

const steps = [
  {
    title: "Salin URL dari TikTok",
    description:
      "Klik tombol 'Bagikan', lalu pilih <strong>Salin Tautan</strong> untuk menyalin link video.",
    image: tutor1,
    imageFirst: false,
  },
  {
    title: "Tempel URL ke Tik-Down",
    description:
      "Tempel URL yang telah disalin ke kolom input di <a href='https://tik-down-seven.vercel.app' class='text-cyan-400 hover:underline'>Tik-Down</a>, lalu klik tombol <strong>Unduh</strong>.",
    image: tutor2,
    imageFirst: true,
  },
  {
    title: "Lihat Hasil Unduhan",
    description:
      "Tunggu proses selesai. Hasil akan muncul di bawah berupa pratinjau video dan tombol <strong>Download</strong>.",
    image: tutor3,
    imageFirst: false,
  },
  {
    title: "Unduh Video",
    description:
      "Klik tombol <strong>Download</strong>, lalu pada halaman video, tekan ikon titik tiga (⋯) di pojok kanan dan pilih <strong>Simpan</strong>.",
    image: tutor4,
    imageFirst: true,
  },
];

export default function Tutorial() {
  return (
    <section id="tutorial-section" className="py-16 md:py-24 bg-[#0c0414] border-t border-gray-950">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            Cara Mengunduh Video TikTok
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-light leading-relaxed">
            Ikuti langkah-langkah sederhana berikut untuk mengunduh video TikTok tanpa watermark.
          </p>
        </div>

        {/* Steps Grid Flow */}
        <div className="space-y-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Text Content */}
              <div className={`space-y-4 ${step.imageFirst ? "lg:order-last" : ""}`}>
                <div className="flex items-center gap-4">
                  {/* Badge Angka Minimalis */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-cyan-400 font-bold text-lg shrink-0">
                    {index + 1}
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white tracking-wide">
                    {step.title}
                  </h3>
                </div>
                <p
                  className="text-gray-400 text-sm md:text-base font-light leading-relaxed pl-14"
                  dangerouslySetInnerHTML={{ __html: step.description }}
                />
              </div>

              {/* Image Frame Preview */}
              <div className="flex justify-center">
                <div className="rounded-2xl overflow-hidden border border-gray-900 bg-[#1c1528]/40 p-2.5 backdrop-blur-sm shadow-xl transition-all duration-300 hover:border-gray-800 w-full max-w-md">
                  <img
                    src={step.image}
                    alt={`Langkah ${index + 1}`}
                    className="w-full h-auto object-contain rounded-xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}