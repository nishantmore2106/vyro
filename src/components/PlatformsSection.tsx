import React from 'react';

export const PlatformsSection: React.FC = () => {
  return (
    <section
      id="platforms"
      aria-label="Platforms & Cross-Device Experience"
      className="w-full bg-[#FFFFFF] py-20 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-12 text-[#080B10] overflow-hidden"
    >
      <div className="w-[94%] max-w-[1400px] mx-auto flex flex-col">
        
        {/* ========================================================= */}
        {/* 1. UPPER HEADER AREA: Left Label + Right Multiline Headline */}
        {/* ========================================================= */}
        <div className="w-full flex flex-col md:flex-row items-start justify-between gap-6 md:gap-14 mb-12 sm:mb-16 md:mb-20">
          
          {/* Left Platforms Label */}
          <div className="flex-shrink-0 pt-1 md:pt-2">
            <span className="text-[#22C7F2] text-[11px] sm:text-[13px] font-semibold tracking-[0.18em] uppercase select-none">
              PLATFORMS
            </span>
          </div>

          {/* Right Headline (Aligned to right half of the section) */}
          <div className="w-full md:max-w-[760px] lg:max-w-[840px] text-left">
            <h2 className="font-bold tracking-tight text-[30px] sm:text-[38px] md:text-[44px] lg:text-[48px] leading-[1.12] m-0 select-none">
              <span className="text-[#777D86] block">Your workspace</span>
              <span className="text-[#080B10] block">adapts seamlessly</span>
              <span className="text-[#080B10] block">to every screen size,</span>
              <span className="text-[#22C7F2] block">delivering a consistent</span>
              <span className="text-[#080B10] block">experience across all devices.</span>
            </h2>
          </div>

        </div>

        {/* ========================================================= */}
        {/* 2. CENTERPIECE — VYRO Smartwatch Showcase                */}
        {/* ========================================================= */}
        <div className="w-full flex justify-center items-center my-6 sm:my-10 md:my-14 select-none">
          <div className="relative group">
            {/* Soft Ambient Radial Floor Shadow */}
            <div
              className="absolute -bottom-3 inset-x-8 h-8 bg-black/25 blur-xl rounded-full pointer-events-none"
              aria-hidden="true"
            />
            {/* Smartwatch Mockup Image */}
            <img
              src="/images/vyro-smartwatch.jpg"
              alt="VYRO Smartwatch Cross-Device Mockup"
              className="w-[210px] sm:w-[250px] md:w-[280px] lg:w-[300px] h-auto object-contain transition-transform duration-500 hover:scale-[1.02] pointer-events-none"
              loading="eager"
            />
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3. BOTTOM SHOWCASE — Three Device Cards (Mobile, Tablet, Desktop) */}
        {/* ========================================================= */}
        <div className="mt-8 sm:mt-12 md:mt-16 w-full grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
          
          {/* --------------------------------------------------------- */}
          {/* CARD 1 — Mobile App (Solid Cyan-Blue Background)          */}
          {/* --------------------------------------------------------- */}
          <div className="bg-[#22C7F2] rounded-[20px] sm:rounded-[24px] p-6 sm:p-7 md:p-8 min-h-[540px] sm:min-h-[580px] lg:h-[610px] flex flex-col justify-between relative overflow-hidden select-none">
            
            {/* Top-Left Label */}
            <div className="w-full flex items-start justify-between z-10">
              <div className="flex flex-col text-white font-sans text-[13px] sm:text-[14px] font-bold tracking-[0.06em] uppercase leading-[1.15]">
                <span>MOBILE</span>
                <span>APP</span>
              </div>
            </div>

            {/* Centered Phone Mockup: VYRO Dark Mobile Dashboard */}
            <div className="w-full flex items-center justify-center my-auto py-2 z-10">
              <div className="w-[220px] sm:w-[235px] md:w-[245px] h-[450px] sm:h-[475px] md:h-[495px] relative flex-shrink-0">
                {/* Contact Shadow beneath Phone */}
                <div
                  className="absolute -bottom-4 inset-x-6 h-7 bg-black/40 blur-lg rounded-full pointer-events-none"
                  aria-hidden="true"
                />

                {/* Outer Metallic Phone Chassis */}
                <div className="w-full h-full bg-[#0C0F15] rounded-[42px] p-[8px] border-[2px] border-[#2A303D] shadow-[0_25px_60px_rgba(0,0,0,0.45)] relative flex flex-col">
                  
                  {/* Screen Glass Surface */}
                  <div className="w-full h-full bg-[#05070B] rounded-[34px] overflow-hidden flex flex-col justify-between relative border border-white/[0.06]">
                    
                    {/* Dynamic Island Notch */}
                    <div
                      className="absolute top-2 inset-x-0 mx-auto w-[76px] h-[18px] bg-[#000000] rounded-full z-30 flex items-center justify-end pr-2"
                      aria-hidden="true"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#0B1528] border border-white/10" />
                    </div>

                    {/* Status Bar */}
                    <div className="w-full h-7 px-4 pt-1 flex items-center justify-between text-white text-[9.5px] font-semibold tracking-tight z-20">
                      <span>9:41</span>
                      <div className="flex items-center gap-1 text-white">
                        <svg className="w-3 h-2 fill-current" viewBox="0 0 16 12">
                          <rect x="0" y="9" width="2.5" height="3" rx="0.5" />
                          <rect x="4.5" y="6" width="2.5" height="6" rx="0.5" />
                          <rect x="9" y="3" width="2.5" height="9" rx="0.5" />
                          <rect x="13.5" y="0" width="2.5" height="12" rx="0.5" />
                        </svg>
                        <svg className="w-3 h-2.5 fill-current" viewBox="0 0 16 12">
                          <path d="M8 9.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-4.2-3.2a6 6 0 018.4 0 .8.8 0 001.1-1.1 7.6 7.6 0 00-10.6 0 .8.8 0 101.1 1.1zm-2.8-2.8a10 10 0 0114 0 .8.8 0 001.1-1.1 11.6 11.6 0 00-16.2 0 .8.8 0 001.1 1.1z" />
                        </svg>
                        <div className="w-4 h-2 border border-white/80 rounded-[2px] p-[1px] flex items-center">
                          <div className="w-full h-full bg-white rounded-[1px]" />
                        </div>
                      </div>
                    </div>

                    {/* Inner Dashboard View */}
                    <div className="flex-1 flex flex-col justify-between px-3 pt-0.5 pb-1 text-left">
                      
                      {/* Greeting Header */}
                      <div className="flex items-center justify-between pb-0.5">
                        <div>
                          <span className="text-[#777D86] text-[9px] leading-tight block">Good morning,</span>
                          <span className="text-white text-[13px] font-bold tracking-tight block">Alex</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-5 h-5 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/80">
                            <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                          </div>
                          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#087EBD] to-[#22C7F2] flex items-center justify-center text-[#080B10] font-bold text-[9px]">
                            A
                          </div>
                        </div>
                      </div>

                      {/* Focus Mode Card */}
                      <div className="p-2 rounded-[10px] bg-[#10141D] border border-white/[0.08] flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-[7px] bg-[#22C7F2]/10 border border-[#22C7F2]/25 flex items-center justify-center text-[#22C7F2] flex-shrink-0">
                            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="12" cy="12" r="10" />
                              <circle cx="12" cy="12" r="3" />
                            </svg>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-white text-[10px] font-semibold leading-tight">Focus Mode</span>
                            <span className="text-[#777D86] text-[8px] leading-tight mt-0.5">Turn your ideas into progress.</span>
                          </div>
                        </div>
                        <svg className="w-3 h-3 text-white/40" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>

                      {/* 2x2 Feature Tiles */}
                      <div className="grid grid-cols-2 gap-1.5 my-0.5">
                        <div className="p-1.5 rounded-[9px] bg-[#10141D] border border-white/[0.07] flex flex-col">
                          <svg className="w-3 h-3 text-[#22C7F2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                          </svg>
                          <span className="text-white text-[9.5px] font-semibold mt-1">Tasks</span>
                          <span className="text-[#777D86] text-[7.5px]">12 active</span>
                        </div>
                        <div className="p-1.5 rounded-[9px] bg-[#10141D] border border-white/[0.07] flex flex-col">
                          <svg className="w-3 h-3 text-[#22C7F2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                          </svg>
                          <span className="text-white text-[9.5px] font-semibold mt-1">Projects</span>
                          <span className="text-[#777D86] text-[7.5px]">3 ongoing</span>
                        </div>
                        <div className="p-1.5 rounded-[9px] bg-[#10141D] border border-white/[0.07] flex flex-col">
                          <svg className="w-3 h-3 text-[#22C7F2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                          </svg>
                          <span className="text-white text-[9.5px] font-semibold mt-1">Notes</span>
                          <span className="text-[#777D86] text-[7.5px]">Capture ideas</span>
                        </div>
                        <div className="p-1.5 rounded-[9px] bg-[#10141D] border border-white/[0.07] flex flex-col">
                          <svg className="w-3 h-3 text-[#22C7F2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                          </svg>
                          <span className="text-white text-[9.5px] font-semibold mt-1">AI Assistant</span>
                          <span className="text-[#777D86] text-[7.5px]">Summarize</span>
                        </div>
                      </div>

                      {/* Today Task List */}
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-white text-[9.5px] font-semibold">Today</span>
                          <span className="text-[#22C7F2] text-[8.5px] font-medium">See all</span>
                        </div>
                        <div className="p-1.5 rounded-[7px] bg-[#10141D] border border-white/[0.06] flex items-center justify-between mb-1">
                          <div className="flex items-center gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full border border-white/30" />
                            <span className="text-white/90 text-[8.5px]">Design landing page</span>
                          </div>
                          <span className="bg-[#FF334B]/15 text-[#FF5C6E] border border-[#FF334B]/30 text-[7px] px-1 py-0.2 rounded-full font-medium">
                            High
                          </span>
                        </div>
                        <div className="p-1.5 rounded-[7px] bg-[#10141D] border border-white/[0.06] flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full border border-white/30" />
                            <span className="text-white/90 text-[8.5px]">Review project proposal</span>
                          </div>
                          <span className="bg-[#087EBD]/20 text-[#38BDF8] border border-[#087EBD]/40 text-[7px] px-1 py-0.2 rounded-full font-medium">
                            Work
                          </span>
                        </div>
                      </div>

                    </div>

                    {/* Bottom Nav */}
                    <div className="w-full border-t border-white/[0.08] bg-[#0A0D14] px-2 py-1 flex items-center justify-around">
                      <div className="flex flex-col items-center text-[#22C7F2]">
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        </svg>
                        <span className="text-[7.5px] font-semibold">Home</span>
                      </div>
                      <div className="flex flex-col items-center text-[#777D86]">
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="9 11 12 14 22 4" />
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                        </svg>
                        <span className="text-[7.5px]">Tasks</span>
                      </div>
                      <div className="flex flex-col items-center text-[#777D86]">
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                        </svg>
                        <span className="text-[7.5px]">Projects</span>
                      </div>
                      <div className="flex flex-col items-center text-[#777D86]">
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                        </svg>
                        <span className="text-[7.5px]">AI</span>
                      </div>
                    </div>

                    {/* Home Indicator */}
                    <div className="w-20 h-0.5 bg-white/25 rounded-full mx-auto my-0.5" />

                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* --------------------------------------------------------- */}
          {/* CARD 2 — Tablet App (Light Grey Background)               */}
          {/* --------------------------------------------------------- */}
          <div className="bg-[#F1F2F3] border border-black/[0.04] rounded-[20px] sm:rounded-[24px] p-6 sm:p-7 md:p-8 min-h-[540px] sm:min-h-[580px] lg:h-[610px] flex flex-col justify-between relative overflow-hidden select-none">
            
            {/* Top-Left Label */}
            <div className="w-full flex items-start justify-between z-10">
              <div className="flex flex-col text-[#080B10] font-sans text-[13px] sm:text-[14px] font-bold tracking-[0.06em] uppercase leading-[1.15]">
                <span>TABLET</span>
                <span>APP</span>
              </div>
            </div>

            {/* Centered Tablet Mockup in Landscape */}
            <div className="w-full flex items-center justify-center my-auto py-2 z-10">
              <div className="w-[320px] sm:w-[350px] md:w-[370px] h-[255px] sm:h-[280px] md:h-[295px] relative flex-shrink-0">
                {/* Contact Shadow beneath Tablet */}
                <div
                  className="absolute -bottom-3 inset-x-8 h-7 bg-black/15 blur-lg rounded-full pointer-events-none"
                  aria-hidden="true"
                />

                {/* Tablet Hardware Chassis */}
                <div className="w-full h-full bg-[#12161F] rounded-[22px] sm:rounded-[26px] p-[7px] sm:p-[8px] border-[2px] border-[#2A303D] shadow-[0_20px_45px_rgba(0,0,0,0.18)] relative flex flex-col">
                  
                  {/* Tablet Glass Display */}
                  <div className="w-full h-full bg-[#080B10] rounded-[16px] sm:rounded-[20px] overflow-hidden flex relative border border-white/[0.06]">
                    
                    {/* Left Dark Sidebar (38% width) */}
                    <div className="w-[38%] h-full bg-[#0B0E14] border-r border-white/[0.08] p-2.5 sm:p-3 flex flex-col justify-between text-left">
                      <div>
                        {/* Logo + Name */}
                        <div className="flex items-center gap-1.5 mb-2">
                          <svg className="w-4 h-3 text-[#22C7F2]" viewBox="0 0 28 20" fill="currentColor">
                            <polygon points="1,19 8,7 13,19" />
                            <polygon points="11,19 19,1 27,19" />
                          </svg>
                          <span className="text-white text-[11px] font-bold tracking-[0.18em]">VYRO</span>
                        </div>

                        {/* Search Bar */}
                        <div className="w-full py-1 px-1.5 rounded-[5px] bg-white/[0.04] border border-white/[0.06] flex items-center gap-1 text-[#777D86] text-[8px] mb-2">
                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                          </svg>
                          <span>Search...</span>
                        </div>

                        {/* Navigation Items */}
                        <div className="flex flex-col gap-0.5 text-[8.5px]">
                          <div className="flex items-center gap-1.5 px-1.5 py-0.5 rounded-[5px] bg-[#22C7F2]/15 text-[#22C7F2] font-semibold">
                            <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor">
                              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            </svg>
                            <span>Home</span>
                          </div>
                          <div className="flex items-center gap-1.5 px-1.5 py-0.5 text-[#777D86]">
                            <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <polyline points="9 11 12 14 22 4" />
                            </svg>
                            <span>Tasks</span>
                          </div>
                          <div className="flex items-center gap-1.5 px-1.5 py-0.5 text-[#777D86]">
                            <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                            </svg>
                            <span>Projects</span>
                          </div>
                          <div className="flex items-center gap-1.5 px-1.5 py-0.5 text-[#777D86]">
                            <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            </svg>
                            <span>Notes</span>
                          </div>
                          <div className="flex items-center gap-1.5 px-1.5 py-0.5 text-[#777D86]">
                            <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                            </svg>
                            <span>AI Assistant</span>
                          </div>
                        </div>
                      </div>

                      {/* Bottom User Account */}
                      <div className="pt-1.5 border-t border-white/[0.08] flex items-center gap-1.5">
                        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#087EBD] to-[#22C7F2] flex items-center justify-center text-[#080B10] font-bold text-[7.5px]">
                          A
                        </div>
                        <div className="flex flex-col truncate">
                          <span className="text-white text-[8px] font-semibold leading-none">Alex</span>
                          <span className="text-[#777D86] text-[6.5px] leading-tight">alex@vyro.app</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Light Content Panel (62% width) */}
                    <div className="w-[62%] h-full bg-[#FFFFFF] p-2.5 sm:p-3 flex flex-col justify-between text-left">
                      <div>
                        {/* Header Greeting */}
                        <div className="mb-2">
                          <span className="text-[#777D86] text-[8px] leading-none block">Good morning,</span>
                          <span className="text-[#080B10] text-[13px] font-bold tracking-tight block">Alex</span>
                        </div>

                        {/* Top Summary Stat Cards */}
                        <div className="grid grid-cols-2 gap-1.5 mb-2.5">
                          <div className="p-1.5 rounded-[7px] bg-[#F4F6F8] border border-black/[0.05] flex flex-col">
                            <span className="text-[#080B10] text-[8.5px] font-semibold">Tasks</span>
                            <span className="text-[#777D86] text-[7px]">12 active</span>
                          </div>
                          <div className="p-1.5 rounded-[7px] bg-[#F4F6F8] border border-black/[0.05] flex flex-col">
                            <span className="text-[#080B10] text-[8.5px] font-semibold">Projects</span>
                            <span className="text-[#777D86] text-[7px]">3 ongoing</span>
                          </div>
                        </div>

                        {/* Recent Projects List */}
                        <div>
                          <span className="text-[#080B10] text-[9px] font-bold block mb-1">Recent Projects</span>
                          <div className="flex flex-col gap-1">
                            <div className="p-1 rounded-[5px] bg-[#F4F6F8] flex items-center justify-between text-[7.5px]">
                              <div className="flex items-center gap-1.5 truncate">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#22C7F2]" />
                                <span className="text-[#080B10] font-medium truncate">Design System</span>
                              </div>
                              <span className="text-[#777D86] text-[6.5px] flex-shrink-0">Updated 2h ago</span>
                            </div>
                            <div className="p-1 rounded-[5px] bg-[#F4F6F8] flex items-center justify-between text-[7.5px]">
                              <div className="flex items-center gap-1.5 truncate">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                <span className="text-[#080B10] font-medium truncate">Website Redesign</span>
                              </div>
                              <span className="text-[#777D86] text-[6.5px] flex-shrink-0">Updated 5h ago</span>
                            </div>
                            <div className="p-1 rounded-[5px] bg-[#F4F6F8] flex items-center justify-between text-[7.5px]">
                              <div className="flex items-center gap-1.5 truncate">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                <span className="text-[#080B10] font-medium truncate">Product Roadmap</span>
                              </div>
                              <span className="text-[#777D86] text-[6.5px] flex-shrink-0">Updated 1d ago</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Home Indicator */}
                      <div className="w-14 h-0.5 bg-black/20 rounded-full mx-auto" />

                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* --------------------------------------------------------- */}
          {/* CARD 3 — Desktop App (Pure Black Background)              */}
          {/* --------------------------------------------------------- */}
          <div className="bg-[#050607] rounded-[20px] sm:rounded-[24px] p-6 sm:p-7 md:p-8 pb-0 sm:pb-0 md:pb-0 min-h-[540px] sm:min-h-[580px] lg:h-[610px] flex flex-col justify-between relative overflow-hidden select-none">
            
            {/* Top-Left Label */}
            <div className="w-full flex items-start justify-between z-10">
              <div className="flex flex-col text-white font-sans text-[13px] sm:text-[14px] font-bold tracking-[0.06em] uppercase leading-[1.15]">
                <span>DESKTOP</span>
                <span>APP</span>
              </div>
            </div>

            {/* Desktop / Laptop Screen (Cropped naturally within card) */}
            <div className="w-full flex items-center justify-center mt-auto pt-4 z-10">
              <div className="w-[320px] sm:w-[350px] md:w-[375px] relative flex flex-col items-center">
                
                {/* Laptop Display Chassis */}
                <div className="w-full h-[225px] sm:h-[245px] md:h-[260px] bg-[#121620] rounded-t-[14px] sm:rounded-t-[16px] p-[6px] sm:p-[7px] pb-0 border-t border-x border-[#2A303D] shadow-[0_20px_50px_rgba(0,0,0,0.9)] relative flex flex-col">
                  
                  {/* Top Display Bezel + Camera Notch */}
                  <div className="w-full flex justify-center pb-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-black border border-white/10" />
                  </div>

                  {/* Desktop Screen Content */}
                  <div className="w-full h-full bg-[#080B10] rounded-t-[10px] overflow-hidden flex border-t border-x border-white/[0.06]">
                    
                    {/* Left Sidebar (32% width) */}
                    <div className="w-[32%] h-full bg-[#090C12] border-r border-white/[0.08] p-2 flex flex-col justify-between text-left">
                      <div>
                        {/* Logo */}
                        <div className="flex items-center gap-1.5 mb-2.5">
                          <svg className="w-3.5 h-2.5 text-[#22C7F2]" viewBox="0 0 28 20" fill="currentColor">
                            <polygon points="1,19 8,7 13,19" />
                            <polygon points="11,19 19,1 27,19" />
                          </svg>
                          <span className="text-white text-[10px] font-bold tracking-[0.18em]">VYRO</span>
                        </div>

                        {/* Navigation List */}
                        <div className="flex flex-col gap-0.5 text-[8px]">
                          <div className="flex items-center gap-1.5 px-1.5 py-0.5 rounded-[4px] bg-[#22C7F2]/15 text-[#22C7F2] font-semibold">
                            <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor">
                              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            </svg>
                            <span>Home</span>
                          </div>
                          <div className="flex items-center gap-1.5 px-1.5 py-0.5 text-[#777D86]">
                            <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <polyline points="9 11 12 14 22 4" />
                            </svg>
                            <span>Tasks</span>
                          </div>
                          <div className="flex items-center gap-1.5 px-1.5 py-0.5 text-[#777D86]">
                            <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                            </svg>
                            <span>Projects</span>
                          </div>
                          <div className="flex items-center gap-1.5 px-1.5 py-0.5 text-[#777D86]">
                            <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            </svg>
                            <span>Notes</span>
                          </div>
                          <div className="flex items-center gap-1.5 px-1.5 py-0.5 text-[#777D86]">
                            <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                            </svg>
                            <span>AI Assistant</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Main Projects Panel (68% width) */}
                    <div className="w-[68%] h-full bg-[#0E121A] p-2 sm:p-2.5 flex flex-col justify-start text-left">
                      {/* Projects Heading */}
                      <span className="text-white text-[11px] font-bold block mb-1.5">Projects</span>

                      {/* Filter Pills */}
                      <div className="flex items-center gap-1 mb-2 text-[7.5px]">
                        <span className="px-2 py-0.5 rounded-full bg-[#22C7F2] text-[#080B10] font-semibold">All</span>
                        <span className="px-2 py-0.5 rounded-full bg-white/[0.06] text-[#777D86]">Active</span>
                        <span className="px-2 py-0.5 rounded-full bg-white/[0.06] text-[#777D86]">Completed</span>
                      </div>

                      {/* Projects Cards List */}
                      <div className="flex flex-col gap-1 overflow-hidden">
                        <div className="p-1.5 rounded-[6px] bg-[#141924] border border-white/[0.06] flex items-center justify-between">
                          <div className="flex items-center gap-1.5 truncate">
                            <div className="w-4 h-4 rounded-[4px] bg-[#22C7F2]/15 flex items-center justify-center text-[#22C7F2]">
                              <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                              </svg>
                            </div>
                            <div className="flex flex-col truncate">
                              <span className="text-white text-[8px] font-semibold truncate leading-tight">Design System</span>
                              <span className="text-[#777D86] text-[6.5px] leading-tight">12 tasks · In progress</span>
                            </div>
                          </div>
                        </div>

                        <div className="p-1.5 rounded-[6px] bg-[#141924] border border-white/[0.06] flex items-center justify-between">
                          <div className="flex items-center gap-1.5 truncate">
                            <div className="w-4 h-4 rounded-[4px] bg-purple-500/20 flex items-center justify-center text-purple-400">
                              <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="3" width="20" height="14" rx="2" />
                              </svg>
                            </div>
                            <div className="flex flex-col truncate">
                              <span className="text-white text-[8px] font-semibold truncate leading-tight">Website Redesign</span>
                              <span className="text-[#777D86] text-[6.5px] leading-tight">8 tasks · In progress</span>
                            </div>
                          </div>
                        </div>

                        <div className="p-1.5 rounded-[6px] bg-[#141924] border border-white/[0.06] flex items-center justify-between">
                          <div className="flex items-center gap-1.5 truncate">
                            <div className="w-4 h-4 rounded-[4px] bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                              <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <rect x="5" y="2" width="14" height="20" rx="2" />
                              </svg>
                            </div>
                            <div className="flex flex-col truncate">
                              <span className="text-white text-[8px] font-semibold truncate leading-tight">Mobile App</span>
                              <span className="text-[#777D86] text-[6.5px] leading-tight">6 tasks · Planning</span>
                            </div>
                          </div>
                        </div>

                        <div className="p-1.5 rounded-[6px] bg-[#141924] border border-white/[0.06] flex items-center justify-between">
                          <div className="flex items-center gap-1.5 truncate">
                            <div className="w-4 h-4 rounded-[4px] bg-amber-500/20 flex items-center justify-center text-amber-400">
                              <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                              </svg>
                            </div>
                            <div className="flex flex-col truncate">
                              <span className="text-white text-[8px] font-semibold truncate leading-tight">Marketing Plan</span>
                              <span className="text-[#777D86] text-[6.5px] leading-tight">4 tasks · Not started</span>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>

                {/* Laptop Base Lip / Hinge */}
                <div className="w-[104%] h-[6px] sm:h-[8px] bg-[#202532] rounded-b-[6px] border-b border-x border-[#3A4050] shadow-md flex items-center justify-center">
                  <div className="w-10 h-1 bg-black/40 rounded-full" />
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default PlatformsSection;
