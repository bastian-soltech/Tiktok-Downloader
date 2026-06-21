import React, { useState } from "react";
import { Download, Music, Heart, MessageCircle, Share2 } from "lucide-react";

export default function VideoResultCard({ videoData }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Pengaman jika videoData belum selesai di-load dari API
  if (!videoData) return null;

  const toggleReadMore = () => setIsExpanded(!isExpanded);

  // Fungsi pembulatan angka statistik (Like, Comment, Share)
  const formatNumber = (num) => {
    if (!num) return 0;
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num;
  };

  return (
    <div className="relative w-full max-w-sm mx-auto rounded-2xl overflow-hidden border border-gray-900 bg-[#1c1528]/80 backdrop-blur-md shadow-xl transition-all duration-300">
      
      {/* Bagian Atas / Cover Video Thumbnail */}
      <div className="relative h-56 bg-black flex items-center justify-center overflow-hidden group">
        <img 
          src={videoData.videoImage} 
          alt={videoData.videoTitle || "TikTok Thumbnail"} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        {/* Lapisan bayangan tipis di atas gambar */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1528] via-transparent to-transparent opacity-60"></div>
      </div>

      {/* Foto Profil Author (Menggantung di antara thumbnail & konten) */}
      <div className="relative z-10 flex justify-center -mt-10">
        <div className="w-20 h-20 rounded-full border-4 border-[#1c1528] shadow-lg overflow-hidden bg-gray-900">
          <img 
            src={videoData.imageAuthorLink} 
            alt={videoData.authorName || "Author"} 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>

      {/* Info Author & Username */}
      <div className="text-center mt-2 px-5">
        <h3 className="text-base font-semibold text-white tracking-wide">
          {videoData.authorName || "TikTok Creator"}
        </h3>
        <p className="text-xs text-gray-400">
          @{videoData.author?.unique_id || "tiktok_user"}
        </p>
      </div>

      {/* Deskripsi / Judul Video dengan Fitur Read More */}
      <div className="mt-4 px-5 text-center">
        <p className="text-sm text-gray-200 leading-relaxed">
          {isExpanded
            ? videoData.videoTitle
            : `${videoData.videoTitle?.substring(0, 60) || ""}${
                videoData.videoTitle?.length > 60 ? "..." : ""
              }`}
        </p>
        {videoData.videoTitle?.length > 60 && (
          <button
            onClick={toggleReadMore}
            className="text-xs text-cyan-400 hover:text-cyan-300 font-medium mt-1.5 transition-colors focus:outline-none"
          >
            {isExpanded ? "Tampilkan Lebih Sedikit" : "Tampilkan Lebih Banyak"}
          </button>
        )}
      </div>

      {/* Baris Statistik Interaksi (Warna Solid Minimalis) */}
      <div className="mt-5 px-5 grid grid-cols-3 gap-2 border-t border-b border-gray-900/60 py-3 bg-black/20">
        {/* Like */}
        <div className="flex flex-col items-center justify-center text-center">
          <Heart className="w-4 h-4 text-gray-400 mb-0.5" />
          <span className="text-[10px] uppercase tracking-wider text-gray-500">Suka</span>
          <span className="text-xs font-bold text-gray-200">{formatNumber(videoData.stats?.statsLike)}</span>
        </div>

        {/* Comment */}
        <div className="flex flex-col items-center justify-center text-center border-x border-gray-900/60">
          <MessageCircle className="w-4 h-4 text-gray-400 mb-0.5" />
          <span className="text-[10px] uppercase tracking-wider text-gray-500">Komentar</span>
          <span className="text-xs font-bold text-gray-200">{formatNumber(videoData.stats?.statsComment)}</span>
        </div>

        {/* Share */}
        <div className="flex flex-col items-center justify-center text-center">
          <Share2 className="w-4 h-4 text-gray-400 mb-0.5" />
          <span className="text-[10px] uppercase tracking-wider text-gray-500">Bagikan</span>
          <span className="text-xs font-bold text-gray-200">{formatNumber(videoData.stats?.statsShare)}</span>
        </div>
      </div>

      {/* Tombol Aksi Download Akhir (Warna Solid Bersih) */}
      <div className="mt-5 px-5 pb-5 flex gap-2">
        {/* Download Video */}
        <a
          href={videoData.videoLink}
          download="tiktok-video.mp4"
          target="_blank"
          rel="noreferrer"
          className="flex-1 px-4 py-2.5 bg-white hover:bg-gray-200 text-black text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 text-center"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Video</span>
        </a>

        {/* Download Audio */}
        <a
          href={videoData.audioLink}
          download="tiktok-audio.mp3"
          target="_blank"
          rel="noreferrer"
          className="flex-1 px-4 py-2.5 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 text-center"
        >
          <Music className="w-3.5 h-3.5 text-cyan-400" />
          <span>Audio</span>
        </a>
      </div>

    </div>
  );
}