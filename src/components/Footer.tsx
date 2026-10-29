import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer
      id="footer"
      aria-label="Footer"
      className="w-full bg-[#030407] relative overflow-hidden text-white pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-12 px-6 sm:px-10 lg:px-16 border-t border-white/[0.08]"
    >
      {/* ========================================================= */}
      {/* 1. BACKGROUND ARTWORK & LARGE VYRO WORDMARK               */}
      {/* ========================================================= */}
      <div
        className="absolute inset-0 w-full h-full bg-bottom bg-no-repeat bg-cover pointer-events-none opacity-85 select-none"
        style={{
          backgroundImage: `url('/assets/footer-bg.png')`,
          backgroundPosition: 'center bottom',
        }}
        aria-hidden="true"
      />

      {/* Subtle top ambient vignette to ensure contrast */}
      <div
        className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#030407]/90 via-[#030407]/40 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* ========================================================= */}
      {/* 2. FOREGROUND CONTENT: BRAND, LINKS & SOCIAL ICONS        */}
      {/* ========================================================= */}
      <div className="w-full max-w-[1360px] mx-auto relative z-10 flex flex-col justify-between">
        
        {/* Upper Main Area: Brand Column (Left) + Nav Columns (Right) */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">
          
          {/* ------------------------------------------------------- */}
          {/* Left Column: Logo, Tagline, Social Icons, Description   */}
          {/* ------------------------------------------------------- */}
          <div className="flex flex-col items-start max-w-[420px]">
            {/* Logo + Wordmark */}
            <a
              href="#"
              className="flex items-center gap-2.5 group select-none mb-2"
              aria-label="VYRO Homepage"
            >
              <svg
                className="w-6 h-5 text-[#22C7F2] transition-transform duration-300 group-hover:scale-105"
                viewBox="0 0 28 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <polygon points="1,19 8,7 13,19" />
                <polygon points="11,19 19,1 27,19" />
              </svg>
              <span className="text-white font-bold text-[17px] tracking-[0.2em]">
                VYRO
              </span>
            </a>

            {/* Tagline */}
            <p className="text-[#9299A4] text-[12.5px] sm:text-[13px] font-medium tracking-tight mb-4 select-none">
              Your thoughts. Turned into progress.
            </p>

            {/* Social Icons Row (Instagram, LinkedIn, X, YouTube) */}
            <div className="flex items-center gap-2.5 mb-6">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-[#9299A4] hover:text-[#22C7F2] hover:border-[#22C7F2]/40 hover:bg-[#22C7F2]/10 transition-all duration-200"
                aria-label="VYRO on Instagram"
              >
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-[#9299A4] hover:text-[#22C7F2] hover:border-[#22C7F2]/40 hover:bg-[#22C7F2]/10 transition-all duration-200"
                aria-label="VYRO on LinkedIn"
              >
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              {/* X (Twitter) */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-[#9299A4] hover:text-[#22C7F2] hover:border-[#22C7F2]/40 hover:bg-[#22C7F2]/10 transition-all duration-200"
                aria-label="VYRO on X"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-[#9299A4] hover:text-[#22C7F2] hover:border-[#22C7F2]/40 hover:bg-[#22C7F2]/10 transition-all duration-200"
                aria-label="VYRO on YouTube"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>

            {/* Brand Description */}
            <p className="text-[#828894] text-[12px] sm:text-[13px] leading-[1.6] m-0">
              Your ideas, tasks, and projects — brought together in one intelligent
              workspace. Stay focused, simplify your workflow, and turn everyday plans
              into meaningful progress.
            </p>
          </div>

          {/* ------------------------------------------------------- */}
          {/* Right Area: Three Navigation Columns                   */}
          {/* ------------------------------------------------------- */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 md:gap-16 lg:gap-20 w-full lg:w-auto">
            
            {/* Column 1 — Explore */}
            <div className="flex flex-col items-start">
              <span className="text-white text-[11px] sm:text-[12px] font-semibold tracking-[0.14em] uppercase mb-3.5 select-none">
                Explore
              </span>
              <ul className="flex flex-col gap-2 list-none m-0 p-0 text-[12.5px] sm:text-[13px]">
                <li>
                  <a
                    href="#product"
                    className="text-[#8E95A2] hover:text-[#22C7F2] transition-colors duration-150"
                  >
                    Product
                  </a>
                </li>
                <li>
                  <a
                    href="#workflow"
                    className="text-[#8E95A2] hover:text-[#22C7F2] transition-colors duration-150"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#platforms"
                    className="text-[#8E95A2] hover:text-[#22C7F2] transition-colors duration-150"
                  >
                    Platforms
                  </a>
                </li>
                <li>
                  <a
                    href="#download"
                    className="text-[#8E95A2] hover:text-[#22C7F2] transition-colors duration-150"
                  >
                    Download
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2 — Resources */}
            <div className="flex flex-col items-start">
              <span className="text-white text-[11px] sm:text-[12px] font-semibold tracking-[0.14em] uppercase mb-3.5 select-none">
                Resources
              </span>
              <ul className="flex flex-col gap-2 list-none m-0 p-0 text-[12.5px] sm:text-[13px]">
                <li>
                  <a
                    href="#about"
                    className="text-[#8E95A2] hover:text-[#22C7F2] transition-colors duration-150"
                  >
                    About VYRO
                  </a>
                </li>
                <li>
                  <a
                    href="#help"
                    className="text-[#8E95A2] hover:text-[#22C7F2] transition-colors duration-150"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-[#8E95A2] hover:text-[#22C7F2] transition-colors duration-150"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-[#8E95A2] hover:text-[#22C7F2] transition-colors duration-150"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 — Legal */}
            <div className="flex flex-col items-start col-span-2 sm:col-span-1">
              <span className="text-white text-[11px] sm:text-[12px] font-semibold tracking-[0.14em] uppercase mb-3.5 select-none">
                Legal
              </span>
              <ul className="flex flex-col gap-2 list-none m-0 p-0 text-[12.5px] sm:text-[13px]">
                <li>
                  <a
                    href="#privacy"
                    className="text-[#8E95A2] hover:text-[#22C7F2] transition-colors duration-150"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#terms"
                    className="text-[#8E95A2] hover:text-[#22C7F2] transition-colors duration-150"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#security"
                    className="text-[#8E95A2] hover:text-[#22C7F2] transition-colors duration-150"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* --------------------------------------------------------- */}
        {/* Bottom Bar: Copyright & Subtle Branding Space             */}
        {/* Positioned above the lower glow / large wordmark area     */}
        {/* --------------------------------------------------------- */}
        <div className="w-full mt-16 sm:mt-24 md:mt-32 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 text-[#5A606E] text-[11px] sm:text-[12px] select-none">
          <span>© 2026 VYRO. All rights reserved.</span>
          <span className="text-[#3E4552]">Designed with precision for focus and flow.</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
