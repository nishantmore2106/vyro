import React from 'react';

export const ProductShowcase: React.FC = () => {
  return (
    <section
      id="showcase"
      aria-label="Product Showcase & App Experience"
      className="w-full bg-[#FFFFFF] py-20 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-8 text-[#080B10]"
    >
      <div className="w-[92%] max-w-[1400px] mx-auto flex flex-col items-center">
        
        {/* Top Area — Brand Statement */}
        <div className="w-full max-w-4xl text-center flex flex-col items-center mb-12 sm:mb-16 md:mb-20">
          
          {/* Centered Minimal Geometric VYRO Symbol */}
          <div className="flex justify-center mb-5 sm:mb-6 select-none" aria-hidden="true">
            <svg
              className="w-7 h-5 sm:w-8 sm:h-6 text-[#080B10]"
              viewBox="0 0 28 20"
              fill="currentColor"
            >
              <polygon points="1,19 8,7 13,19" />
              <polygon points="11,19 19,1 27,19" />
            </svg>
          </div>

          {/* Main Headline Container */}
          <div className="flex flex-col items-center w-full">
            <h2 className="sr-only">
              VYRO is a unified workspace for turning ideas into meaningful progress.
            </h2>
            
            {/* Top Headline Line(s) — In pure black #080B10 */}
            <div
              className="font-bold tracking-tight text-[#080B10] text-center m-0 p-0"
              style={{
                fontSize: 'clamp(32px, 4vw, 56px)',
                lineHeight: 1.15,
              }}
              aria-hidden="true"
            >
              <span>VYRO is a unified workspace for </span>
              <span className="block sm:inline">turning ideas into</span>
            </div>

            {/* Flanked Row: Left supporting text + "meaningful progress." + Right supporting text */}
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-5 md:gap-7 lg:gap-9 mt-3 sm:mt-4">
              {/* Left Supporting Text Block */}
              <p className="text-[#777D86] text-[13px] sm:text-[14px] md:text-[15px] font-normal m-0 max-w-[260px] text-center md:text-right leading-relaxed order-2 md:order-1">
                Simplify your workflow and reduce mental clutter.
              </p>

              {/* Center Accent: meaningful progress. */}
              <span
                className="font-bold tracking-tight text-[#22C7F2] text-center whitespace-nowrap order-1 md:order-2"
                style={{
                  fontSize: 'clamp(32px, 4vw, 56px)',
                  lineHeight: 1.15,
                }}
                aria-hidden="true"
              >
                meaningful progress.
              </span>

              {/* Right Supporting Text Block */}
              <p className="text-[#777D86] text-[13px] sm:text-[14px] md:text-[15px] font-normal m-0 max-w-[260px] text-center md:text-left leading-relaxed order-3 md:order-3">
                Work with focus, plan smarter, and make meaningful progress.
              </p>
            </div>
          </div>
        </div>

        {/* Showcase Images: Two Side-by-Side Images + One Wide Image Below */}
        <div className="w-full flex flex-col gap-3 sm:gap-4 md:gap-5">
          
          {/* First Row: Two Equal Square Images Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5 w-full">
            
            {/* Image 01 — VYRO Geometric Monogram */}
            <div className="relative w-full aspect-square rounded-[18px] sm:rounded-[22px] md:rounded-[24px] overflow-hidden bg-black shadow-lg group">
              <img
                src="/images/image%20copy%203.png"
                alt="VYRO Geometric Monogram"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>

            {/* Image 02 — VYRO Focus Mode */}
            <div className="relative w-full aspect-square rounded-[18px] sm:rounded-[22px] md:rounded-[24px] overflow-hidden bg-[#080B10] shadow-lg group">
              <img
                src="/images/image.png"
                alt="VYRO Focus Mode Dashboard"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>

          </div>

          {/* Second Row: Image 03 — Wide Showcase Banner with Increased Height */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[2.2/1] md:aspect-[2.4/1] rounded-[18px] sm:rounded-[22px] md:rounded-[24px] overflow-hidden bg-[#080B10] shadow-lg group">
            <img
              src="/images/image%20copy%202.png"
              alt="Person using VYRO Workspace Application"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.01]"
              loading="lazy"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProductShowcase;
