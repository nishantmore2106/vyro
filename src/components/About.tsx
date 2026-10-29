import React from 'react';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      aria-label="About VYRO"
      className="w-full bg-[#FFFFFF] min-h-[85vh] flex items-center px-6 sm:px-[8%] lg:px-[10%] py-24 sm:py-32 md:py-40"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8 md:gap-16 lg:gap-24">
        {/* Left Column — approx 30-35% width */}
        <div className="w-full md:w-[32%] lg:w-[30%] flex-shrink-0 pt-1 md:pt-3">
          <span className="text-[#22C7F2] text-[14px] sm:text-[15px] font-semibold tracking-[0.05em] uppercase select-none">
            ABOUT VYRO
          </span>
        </div>

        {/* Right Column — approx 65-70% width */}
        <div className="w-full md:w-[68%] lg:w-[70%] max-w-4xl flex flex-col items-start">
          <h2
            className="font-bold tracking-tight text-left m-0 p-0"
            style={{
              fontSize: 'clamp(28px, 5.2vw, 76px)',
              lineHeight: 1.14,
            }}
          >
            <span className="text-[#080B10]">VYRO is your AI workspace for </span>
            <span className="text-[#080B10]">turning ideas into </span>
            <span className="text-[#22C7F2]">meaningful progress.</span>
          </h2>

          <p className="text-[#777D86] text-[16px] sm:text-[19px] md:text-[22px] leading-[1.6] max-w-[560px] mt-6 sm:mt-8 md:mt-12 text-left font-normal m-0">
            Capture ideas, organize tasks, manage projects, and use AI to turn scattered thoughts into clear, actionable work — all in one focused workspace.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
