import React from 'react';

export const AppScreensShowcase: React.FC = () => {
  return (
    <section
      id="app-screens"
      aria-label="App Screens Showcase"
      className="w-full bg-[#FFFFFF] py-20 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-12 text-[#080B10]"
    >
      <div className="w-[94%] max-w-[1400px] mx-auto flex flex-col items-center">
        
        {/* Top Centered VYRO Geometric Logo */}
        <div className="flex justify-center mb-5 sm:mb-6 select-none" aria-hidden="true">
          <svg
            className="w-8 h-6 text-[#22C7F2]"
            viewBox="0 0 28 20"
            fill="currentColor"
          >
            <polygon points="1,19 8,7 13,19" />
            <polygon points="11,19 19,1 27,19" />
          </svg>
        </div>

        {/* Main Headline */}
        <h2 className="text-center font-bold tracking-tight text-[#080B10] text-[32px] sm:text-[42px] md:text-[50px] lg:text-[56px] leading-[1.12] max-w-[1050px] mx-auto m-0">
          A modern workspace for
          <br className="hidden sm:inline" />{' '}
          ideas, tasks, projects, and{' '}
          <span className="text-[#22C7F2]">real progress.</span>
        </h2>

        {/* Supporting Text — Two Balanced Columns Side by Side */}
        <div className="w-full max-w-[920px] mx-auto mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 md:gap-10 text-center md:text-left">
          <p className="text-[#777D86] text-[14px] sm:text-[15px] leading-relaxed m-0 md:text-right">
            Capture ideas, organize work, and stay focused — all in one place.
          </p>
          <p className="text-[#777D86] text-[14px] sm:text-[15px] leading-relaxed m-0 md:text-left">
            Built for individuals and teams to move from thoughts to results.
          </p>
        </div>

        {/* Two Large Showcase Cards Side by Side */}
        <div className="mt-12 sm:mt-16 md:mt-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
                 {/* ========================================================= */}
          {/* LEFT CARD — VYRO Splash Screen (Solid Flat Cyan Background) */}
          {/* ========================================================= */}
          <div className="bg-[#1ACFFC] rounded-[24px] sm:rounded-[28px] md:rounded-[32px] p-6 sm:p-8 md:p-10 min-h-[660px] sm:min-h-[700px] lg:h-[750px] flex flex-col justify-between relative overflow-hidden select-none">
            
            {/* Top-Left Card Label */}
            <div className="w-full flex items-start justify-between z-10">
              <div className="flex flex-col text-white font-mono text-[12px] sm:text-[13px] font-bold tracking-[0.14em] uppercase leading-tight">
                <span>SPLASH</span>
                <span>SCREEN</span>
              </div>
            </div>

            {/* Centered Phone Mockup: Splash Screen from image copy 4.png */}
            <div className="w-full flex items-center justify-center my-auto py-2 z-10">
              <img
                src="/images/image%20copy%204.png"
                alt="VYRO Splash Screen Smartphone Mockup"
                className="max-h-[500px] sm:max-h-[550px] md:max-h-[590px] w-auto object-contain select-none pointer-events-none"
                loading="eager"
              />
            </div>

            {/* Bottom-Left Card Label */}
            <div className="w-full flex items-center justify-between text-white/90 font-mono text-[11px] sm:text-[12px] tracking-wider uppercase z-10">
              <span>VYRO SPLASH SCREEN</span>
            </div>

          </div>

          {/* ========================================================= */}
          {/* RIGHT CARD — VYRO Dashboard Screen (Solid Flat Black)     */}
          {/* ========================================================= */}
          <div className="bg-[#000000] rounded-[24px] sm:rounded-[28px] md:rounded-[32px] p-6 sm:p-8 md:p-10 min-h-[660px] sm:min-h-[700px] lg:h-[750px] flex flex-col justify-between relative overflow-hidden select-none">
            
            {/* Top Row: Label & Three Dots */}
            <div className="w-full flex items-center justify-between z-10">
              <div className="flex flex-col text-white font-mono text-[12px] sm:text-[13px] font-bold tracking-[0.14em] uppercase leading-tight">
                <span>DASHBOARD</span>
                <span>SCREEN</span>
              </div>
              <div className="text-white/60 tracking-[0.25em] text-[15px] select-none" aria-hidden="true">
                •••
              </div>
            </div>

            {/* Centered Phone Mockup: Dashboard Screen from image copy 5.png */}
            <div className="w-full flex items-center justify-center my-auto py-2 z-10">
              <img
                src="/images/image%20copy%205.png"
                alt="VYRO Dashboard Screen Smartphone Mockup"
                className="max-h-[500px] sm:max-h-[550px] md:max-h-[590px] w-auto object-contain select-none pointer-events-none"
                loading="eager"
              />
            </div>

            {/* Bottom-Left Card Label matching the left card */}
            <div className="w-full flex items-center justify-between text-white/90 font-mono text-[11px] sm:text-[12px] tracking-wider uppercase z-10">
              <span>VYRO DASHBOARD SCREEN</span>
            </div>

          </div>

          {/* ========================================================= */}
          {/* CARD 03 — Team Members Screen (image copy 6.png)         */}
          {/* ========================================================= */}
          <div className="bg-[#F8F8F8] border border-black/[0.06] rounded-[24px] sm:rounded-[28px] md:rounded-[32px] p-6 sm:p-8 md:p-10 min-h-[660px] sm:min-h-[700px] lg:h-[750px] flex flex-col justify-between relative overflow-hidden select-none">
            
            {/* Top-Left Card Label */}
            <div className="w-full flex items-start justify-between z-10">
              <div className="flex flex-col text-[#080B10] font-mono text-[12px] sm:text-[13px] font-bold tracking-[0.14em] uppercase leading-tight">
                <span>TEAM</span>
                <span>MEMBERS</span>
              </div>
            </div>

            {/* Centered Phone Mockup: Team Members from image copy 6.png */}
            <div className="w-full flex items-center justify-center my-auto py-2 z-10">
              <img
                src="/images/image%20copy%206.png"
                alt="VYRO Team Members Collaboration Smartphone Mockup"
                className="max-h-[500px] sm:max-h-[550px] md:max-h-[590px] w-auto object-contain select-none pointer-events-none"
                loading="lazy"
              />
            </div>

            {/* Bottom-Left Card Label */}
            <div className="w-full flex items-center justify-between text-[#777D86] font-mono text-[11px] sm:text-[12px] tracking-wider uppercase z-10">
              <span>VYRO COLLABORATION SCREEN</span>
            </div>

          </div>

          {/* ========================================================= */}
          {/* CARD 04 — Assets Workspace Screen (image copy 7.png)      */}
          {/* ========================================================= */}
          <div className="bg-[#08D0FC] rounded-[24px] sm:rounded-[28px] md:rounded-[32px] p-6 sm:p-8 md:p-10 min-h-[660px] sm:min-h-[700px] lg:h-[750px] flex flex-col justify-between relative overflow-hidden select-none">
            
            {/* Top Row: Label & Three Dots */}
            <div className="w-full flex items-center justify-between z-10">
              <div className="flex flex-col text-white font-mono text-[12px] sm:text-[13px] font-bold tracking-[0.14em] uppercase leading-tight">
                <span>ASSETS</span>
                <span>WORKSPACE</span>
              </div>
              <div className="text-white/60 tracking-[0.25em] text-[15px] select-none" aria-hidden="true">
                •••
              </div>
            </div>

            {/* Centered Phone Mockup: Assets Workspace from image copy 7.png */}
            <div className="w-full flex items-center justify-center my-auto py-2 z-10">
              <img
                src="/images/image%20copy%207.png"
                alt="VYRO Assets Workspace Smartphone Mockup"
                className="max-h-[500px] sm:max-h-[550px] md:max-h-[590px] w-auto object-contain select-none pointer-events-none"
                loading="lazy"
              />
            </div>

            {/* Bottom-Left Card Label */}
            <div className="w-full flex items-center justify-between text-white/90 font-mono text-[11px] sm:text-[12px] tracking-wider uppercase z-10">
              <span>VYRO ASSETS SCREEN</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AppScreensShowcase;
