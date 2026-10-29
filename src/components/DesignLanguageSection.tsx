import React from 'react';

export const DesignLanguageSection: React.FC = () => {
  return (
    <section
      id="design-language"
      aria-label="VYRO Design Language"
      className="w-full bg-[#FFFFFF] py-20 sm:py-28 md:py-36 px-6 sm:px-10 lg:px-16 text-[#080B10] overflow-hidden"
    >
      <div className="w-full max-w-[1360px] mx-auto flex flex-col justify-between min-h-[82vh]">
        
        {/* ========================================================= */}
        {/* 1. TOP LABELS: Left Tag + Right Weight Annotations        */}
        {/* ========================================================= */}
        <div className="w-full flex flex-row items-center justify-between gap-4 select-none mb-10 sm:mb-16 md:mb-20">
          
          {/* Top-Left Label */}
          <div>
            <span className="text-[#22C7F2] text-[11px] sm:text-[12px] font-semibold tracking-[0.18em] uppercase">
              VYRO / DESIGN LANGUAGE
            </span>
          </div>

          {/* Top-Right Annotations */}
          <div className="flex items-center gap-5 sm:gap-9 md:gap-14">
            <span className="text-[#22C7F2] text-[11px] sm:text-[12px] font-semibold tracking-[0.18em] uppercase">
              BOLD
            </span>
            <span className="text-[#22C7F2] text-[11px] sm:text-[12px] font-semibold tracking-[0.18em] uppercase">
              MEDIUM
            </span>
            <span className="text-[#22C7F2] text-[11px] sm:text-[12px] font-semibold tracking-[0.18em] uppercase">
              REGULAR
            </span>
          </div>

        </div>

        {/* ========================================================= */}
        {/* 2. CENTRAL BRAND SYMBOL & BLUEPRINT CONSTRUCTION GUIDES   */}
        {/* ========================================================= */}
        <div className="w-full flex justify-center items-center my-6 sm:my-10 md:my-12 select-none">
          <div className="relative w-full max-w-[660px] flex justify-center items-center">
            
            {/* SVG Construction Blueprint & Monochrome VYRO Symbol */}
            <svg
              className="w-[320px] sm:w-[420px] md:w-[500px] lg:w-[560px] h-auto overflow-visible select-none"
              viewBox="0 0 640 380"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                {/* Subtle linear fades for extended guideline edges */}
                <linearGradient id="guide-h-fade" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#CBD5E1" stopOpacity="0.1" />
                  <stop offset="15%" stopColor="#CBD5E1" stopOpacity="0.85" />
                  <stop offset="85%" stopColor="#CBD5E1" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#CBD5E1" stopOpacity="0.1" />
                </linearGradient>
              </defs>

              {/* ----------------------------------------------------- */}
              {/* Construction Guides: Horizontal Reference Lines       */}
              {/* ----------------------------------------------------- */}
              {/* Top Cap Line across Right Peak Apex (Y = 112) */}
              <line
                x1="20"
                y1="112"
                x2="620"
                y2="112"
                stroke="url(#guide-h-fade)"
                strokeWidth="1.25"
                strokeDasharray="4 4"
              />

              {/* Left Peak Apex Line (Y = 178) */}
              <line
                x1="40"
                y1="178"
                x2="600"
                y2="178"
                stroke="url(#guide-h-fade)"
                strokeWidth="1.25"
                strokeDasharray="4 4"
              />

              {/* Intermediate Shoulder / Crossbar Guide (Y = 244) */}
              <line
                x1="60"
                y1="244"
                x2="580"
                y2="244"
                stroke="url(#guide-h-fade)"
                strokeWidth="1.25"
                strokeDasharray="4 4"
              />

              {/* Baseline Guide across Base of both Triangles (Y = 310) */}
              <line
                x1="10"
                y1="310"
                x2="630"
                y2="310"
                stroke="url(#guide-h-fade)"
                strokeWidth="1.25"
                strokeDasharray="4 4"
              />

              {/* ----------------------------------------------------- */}
              {/* Construction Guides: Diagonal Projections              */}
              {/* Extended along triangle edges past apexes & base       */}
              {/* ----------------------------------------------------- */}
              {/* Right Peak — Left Edge Projection (through 287,310 and 375,112) */}
              <line
                x1="265"
                y1="360"
                x2="414"
                y2="25"
                stroke="#CBD5E1"
                strokeWidth="1.2"
                strokeDasharray="4 4"
                opacity="0.85"
              />

              {/* Right Peak — Right Edge Projection (through 463,310 and 375,112) */}
              <line
                x1="485"
                y1="360"
                x2="336"
                y2="25"
                stroke="#CBD5E1"
                strokeWidth="1.2"
                strokeDasharray="4 4"
                opacity="0.85"
              />

              {/* Left Peak — Left Edge Projection (through 177,310 and 254,178) */}
              <line
                x1="148"
                y1="360"
                x2="311"
                y2="80"
                stroke="#CBD5E1"
                strokeWidth="1.2"
                strokeDasharray="4 4"
                opacity="0.75"
              />

              {/* Left Peak — Right Edge Projection (through 309,310 and 254,178) */}
              <line
                x1="330"
                y1="360"
                x2="213"
                y2="80"
                stroke="#CBD5E1"
                strokeWidth="1.2"
                strokeDasharray="4 4"
                opacity="0.75"
              />

              {/* Vertical Centerline through Main Right Apex */}
              <line
                x1="375"
                y1="36"
                x2="375"
                y2="345"
                stroke="#CBD5E1"
                strokeWidth="1.1"
                strokeDasharray="3 4"
                opacity="0.6"
              />

              {/* Vertical Centerline through Left Peak Apex */}
              <line
                x1="254"
                y1="90"
                x2="254"
                y2="345"
                stroke="#CBD5E1"
                strokeWidth="1.1"
                strokeDasharray="3 4"
                opacity="0.6"
              />

              {/* ----------------------------------------------------- */}
              {/* THE MONOCHROME BLACK VYRO LOGO SYMBOL                 */}
              {/* Exact geometric proportions from VYRO brand mark      */}
              {/* ----------------------------------------------------- */}
              {/* Left Peak (Smaller Mountain) */}
              <polygon
                points="177,310 254,178 309,310"
                fill="#080B10"
              />

              {/* Right Peak (Primary Mountain) */}
              <polygon
                points="287,310 375,112 463,310"
                fill="#080B10"
              />

              {/* Subtle Drafting Vertex Points */}
              <circle cx="375" cy="112" r="2.5" fill="#22C7F2" />
              <circle cx="254" cy="178" r="2.5" fill="#22C7F2" />
              <circle cx="177" cy="310" r="2" fill="#777D86" />
              <circle cx="463" cy="310" r="2" fill="#777D86" />
              <circle cx="298" cy="310" r="2" fill="#777D86" />
            </svg>

          </div>
        </div>

        {/* ========================================================= */}
        {/* 3. MAIN HEADLINE — “Ideas into Progress.”                  */}
        {/* ========================================================= */}
        <div className="w-full text-center my-6 sm:my-8 md:my-10 select-none">
          <h2
            className="font-bold tracking-tight text-[#080B10] leading-[1.04] m-0 p-0"
            style={{
              fontSize: 'clamp(64px, 11vw, 116px)',
            }}
          >
            <span>Ideas into </span>
            <span className="text-[#22C7F2]">Progress.</span>
          </h2>
        </div>

        {/* ========================================================= */}
        {/* 4. SUPPORTING COPY — Lower-Left and Lower-Right           */}
        {/* ========================================================= */}
        <div className="w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-12 mt-10 sm:mt-16 md:mt-20">
          
          {/* Lower-Left Description */}
          <div className="max-w-[340px] sm:max-w-[380px] text-left">
            <p className="text-[#777D86] text-[13px] sm:text-[14px] md:text-[15px] leading-[1.55] m-0">
              VYRO brings ideas, tasks, projects, and notes into one focused workspace.
            </p>
          </div>

          {/* Lower-Right Description */}
          <div className="max-w-[340px] sm:max-w-[400px] text-left md:text-right">
            <p className="text-[#777D86] text-[13px] sm:text-[14px] md:text-[15px] leading-[1.55] m-0">
              Designed for clarity, consistent workflows, and meaningful progress across every device.
            </p>
          </div>

        </div>

        {/* ========================================================= */}
        {/* 5. TYPOGRAPHY SCALE ALONG THE BOTTOM                     */}
        {/* ========================================================= */}
        <div className="w-full mt-12 sm:mt-18 md:mt-24 pt-6 sm:pt-10 flex items-center justify-between text-[#22C7F2] font-semibold text-[11px] sm:text-[12.5px] md:text-[13.5px] tracking-[0.14em] uppercase select-none">
          <span>16 PX</span>
          <span>24 PX</span>
          <span>32 PX</span>
          <span>56 PX</span>
          <span>80 PX</span>
        </div>

      </div>
    </section>
  );
};

export default DesignLanguageSection;
