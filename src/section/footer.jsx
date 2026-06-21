import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0c0414] text-gray-400 pt-16 pb-8 border-t border-gray-950">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="md:flex md:justify-between md:items-start mb-10 gap-8">
          
          {/* Logo & Brand Info */}
          <div className="mb-8 md:mb-0 space-y-3">
            <a href="https://tik-down-seven.vercel.app/" className="inline-block">
              <span className="text-2xl font-extrabold text-white tracking-tight">
                Tik-Down
              </span>
            </a>
            <p className="text-sm text-gray-500 max-w-xs font-light leading-relaxed">
              Unduh video TikTok tanpa watermark — cepat, gratis, dan tanpa iklan.
            </p>
          </div>

          {/* Links Directories */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 shrink-0">
            {/* Resources */}
            <div>
              <h3 className="mb-4 text-xs font-semibold text-gray-200 uppercase tracking-widest">
                Resources
              </h3>
              <ul className="space-y-2.5 text-sm font-light">
                <li>
                  <a
                    href="https://tiktok.com/"
                    className="hover:text-cyan-400 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TikTok
                  </a>
                </li>
                <li>
                  <a
                    href="https://api.tilkydown.eu.org"
                    className="hover:text-cyan-400 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tilkydown API
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="mb-4 text-xs font-semibold text-gray-200 uppercase tracking-widest">
                Follow Us
              </h3>
              <ul className="space-y-2.5 text-sm font-light">
                <li>
                  <a
                    href="https://github.com/bastian-soltech"
                    className="hover:text-cyan-400 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@tyan.dev?is_from_webapp=1&sender_device=pc"
                    className="hover:text-cyan-400 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TikTok
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
          
          </div>

        </div>

        {/* Divider Tipis Sekali */}
        <hr className="my-8 border-gray-900/60" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          
          {/* Copyright */}
          <div className="text-xs text-gray-600 font-light">
            © {new Date().getFullYear()}{" "}
            <a
              href="https://tik-down-seven.vercel.app/"
              className="font-medium text-gray-500 hover:text-cyan-400 transition-colors"
            >
              Tik-Down™
            </a>
            . All Rights Reserved.
          </div>

          {/* Social Icons (Warna Solid Tipis) */}
          <div className="flex justify-center space-x-5">
            {/* Discord */}
        
            
            {/* Twitter / X */}
          
            {/* GitHub */}
            <a
              href="https://github.com/bastian-soltech"
              className="text-gray-600 hover:text-cyan-400 transition-colors duration-200"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}