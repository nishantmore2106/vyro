import React from 'react';

export const BrandPresenceSection: React.FC = () => {
  return (
    <section
      id="brand-ecosystem"
      aria-label="Brand Presence & Product Ecosystem"
      className="w-full bg-[#030405] min-h-screen py-24 sm:py-32 md:py-40 px-4 sm:px-6 flex flex-col items-center justify-center relative overflow-hidden text-[#FFFFFF]"
    >
      {/* Subtle Ambient Radial Glow */}
      <div
        className="absolute -top-32 inset-x-0 mx-auto w-[700px] h-[400px] bg-[#087EBD]/15 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Vertically Centered Floating Interface Mockups */}
      <div className="flex flex-col items-center gap-10 sm:gap-12 md:gap-16 w-full max-w-[1200px] mx-auto relative z-10">
        
        {/* MOCKUP 01 — VYRO Brand Profile (Top & Largest Card) */}
        <div className="w-full max-w-[320px] sm:max-w-[340px] md:max-w-[350px] bg-[#111316] border border-[#242830] rounded-[20px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)] flex flex-col select-none transition-transform duration-300 hover:scale-[1.015]">
          
          {/* Top Visual Banner: Generated Twitter Channel Banner */}
          <div className="relative w-full h-36 sm:h-40 overflow-hidden bg-[#070A0F]">
            <img
              src="/images/vyro-twitter-banner.jpg"
              alt="VYRO Twitter Channel Banner"
              className="w-full h-full object-cover object-center select-none"
              loading="eager"
            />
          </div>

          {/* Overlapping App Avatar Icon */}
          <div className="relative z-10 -mt-9 ml-5 w-16 h-16 rounded-[16px] bg-[#080B10] border-[3px] border-[#111316] shadow-xl flex items-center justify-center p-3">
            <svg
              className="w-full h-full text-[#22C7F2]"
              viewBox="0 0 28 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <polygon points="1,19 8,7 13,19" />
              <polygon points="11,19 19,1 27,19" />
            </svg>
          </div>

            {/* Lower Profile Content */}
            <div className="px-5 pt-3 pb-6 flex flex-col">
              {/* Brand Name + Verified Badge */}
              <div className="flex items-center gap-1.5">
                <span className="text-white font-bold text-[18px] tracking-tight">VYRO</span>
                <span
                  className="w-4 h-4 rounded-full bg-[#22C7F2] text-[#080B10] inline-flex items-center justify-center"
                  aria-label="Verified Brand"
                >
                  <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>

              {/* Handle & Category */}
              <span className="text-[#9299A4] text-[12px] font-mono mt-0.5">
                @vyro · AI Productivity
              </span>

              {/* Bio Statement */}
              <p className="text-white/90 text-[13px] leading-relaxed mt-3.5 m-0 font-normal">
                Ideas, organized. Progress, accelerated.
              </p>

              {/* Profile-Style Metadata Row */}
              <div className="flex items-center gap-5 mt-4 pt-3.5 border-t border-white/[0.08] text-[12px]">
                <div className="flex items-center gap-1.5">
                  <strong className="text-white font-semibold">Workspace</strong>
                  <span className="text-[#9299A4]">v2.4</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <strong className="text-white font-semibold">Ecosystem</strong>
                  <span className="text-[#9299A4]">Multi-Platform</span>
                </div>
              </div>

              {/* Domain Link */}
              <div className="flex items-center gap-1.5 mt-3 text-[#22C7F2] text-[12px] font-medium">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
                <span>vyro.app</span>
              </div>
            </div>

          </div>

          {/* MOCKUP 02 — VYRO App Listing (Middle Card) */}
          <div className="w-full max-w-[240px] sm:max-w-[260px] bg-[#111316] border border-[#242830] rounded-[18px] p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex flex-col select-none transition-transform duration-300 hover:scale-[1.015]">
            
            {/* Top Row: App Icon + Name + Explore Button */}
            <div className="flex items-center gap-3.5">
              {/* App Icon */}
              <div className="w-12 h-12 rounded-[13px] bg-[#070A0F] border border-white/10 flex items-center justify-center p-2.5 shadow-md flex-shrink-0">
                <svg
                  className="w-full h-full text-[#22C7F2]"
                  viewBox="0 0 28 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <polygon points="1,19 8,7 13,19" />
                  <polygon points="11,19 19,1 27,19" />
                </svg>
              </div>

              {/* Title & Category & Explore Button */}
              <div className="flex flex-col min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold text-[15px] leading-tight truncate">
                    VYRO
                  </span>
                  <button
                    type="button"
                    tabIndex={-1}
                    className="px-3 py-1 rounded-full bg-[#22C7F2] text-[#080B10] font-semibold text-[11px] hover:bg-[#38d4fc] transition-colors flex-shrink-0 pointer-events-none"
                  >
                    Explore
                  </button>
                </div>
                <span className="text-[#9299A4] text-[11px] leading-tight mt-0.5 truncate">
                  AI Productivity
                </span>
              </div>
            </div>

            {/* Bottom Row: Metadata Indicator Badges */}
            <div className="mt-4 pt-3 border-t border-white/[0.08] grid grid-cols-3 text-center">
              <div>
                <span className="text-[9.5px] text-[#9299A4] block uppercase font-mono tracking-wider">
                  Module
                </span>
                <span className="text-[12px] font-semibold text-white mt-0.5 block">Tasks</span>
              </div>
              <div>
                <span className="text-[9.5px] text-[#9299A4] block uppercase font-mono tracking-wider">
                  System
                </span>
                <span className="text-[12px] font-semibold text-white mt-0.5 block">Projects</span>
              </div>
              <div>
                <span className="text-[9.5px] text-[#9299A4] block uppercase font-mono tracking-wider">
                  Core
                </span>
                <span className="text-[12px] font-semibold text-[#22C7F2] mt-0.5 block">AI</span>
              </div>
            </div>

          </div>

          {/* MOCKUP 03 — VYRO Social Profile (Bottom Compact Card) */}
          <div className="w-full max-w-[210px] sm:max-w-[230px] bg-[#111316] border border-[#242830] rounded-[16px] p-3.5 sm:p-4 shadow-[0_16px_40px_rgba(0,0,0,0.85)] flex flex-col select-none transition-transform duration-300 hover:scale-[1.015]">
            
            {/* Top Header Bar: Back Chevron, Title, Icons */}
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.06] text-[#9299A4]">
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-white font-medium text-[11.5px]">VYRO</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C7F2]" />
              </div>
              <div className="flex items-center gap-1 text-[11px] tracking-widest text-[#777D86]">
                ···
              </div>
            </div>

            {/* Content Row: Avatar + Info */}
            <div className="flex items-center gap-2.5 mt-1">
              <div className="w-8 h-8 rounded-full bg-[#080B10] border border-[#22C7F2]/40 flex items-center justify-center p-1.5 flex-shrink-0">
                <svg
                  className="w-full h-full text-[#22C7F2]"
                  viewBox="0 0 28 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <polygon points="1,19 8,7 13,19" />
                  <polygon points="11,19 19,1 27,19" />
                </svg>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-white text-[12px] font-semibold leading-tight truncate">
                  VYRO
                </span>
                <span className="text-[#9299A4] text-[10px] leading-tight truncate">
                  AI Workspace
                </span>
              </div>
            </div>

            {/* Short Description */}
            <p className="text-white/80 text-[10.5px] mt-2.5 m-0 leading-relaxed font-normal">
              Capture ideas. Focus deeply. Make progress.
            </p>

            {/* Website Link */}
            <div className="flex items-center gap-1 mt-2 text-[#22C7F2] text-[10.5px] font-medium">
              <svg
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
              <span>vyro.app</span>
            </div>

          </div>

        </div>
    </section>
  );
};

export default BrandPresenceSection;
