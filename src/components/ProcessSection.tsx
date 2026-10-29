import React from 'react';

export const ProcessSection: React.FC = () => {
  return (
    <section
      id="process"
      aria-label="Our Process"
      className="w-full bg-[#050608] py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 lg:px-10 text-[#F5F8FC]"
    >
      <div className="w-full">
        {/* Top Panels: The Problem (Left) & The Solution (Right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 w-full">
          {/* Left Panel — Problem (White Card) */}
          <div className="bg-[#F5F7FA] rounded-[24px] sm:rounded-[28px] p-8 sm:p-12 md:p-14 lg:p-16 flex flex-col justify-start min-h-[420px] sm:min-h-[460px] md:min-h-[500px] transition-all">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#087EBD]/10 border border-[#087EBD]/20 mb-6 sm:mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#087EBD]" />
                <span className="text-[#087EBD] text-[12px] sm:text-[13px] font-semibold tracking-[0.08em] uppercase select-none">
                  THE PROBLEM
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#080B10] leading-[1.12] tracking-tight m-0 max-w-xl">
                Productivity is fragmented, noisy, and complex.
              </h3>
              <p className="text-[#555C68] text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed mt-6 sm:mt-8 m-0 font-normal max-w-xl">
                Your ideas, tasks, projects, and notes often live in disconnected silos. Jumping between tabs, manual scheduling, and context fragmentation drains your cognitive energy before real work even starts.
              </p>
            </div>
          </div>

          {/* Right Panel — Solution (Cyan-Blue Card with Pure White Text) */}
          <div className="bg-[#22C7F2] rounded-[24px] sm:rounded-[28px] p-8 sm:p-12 md:p-14 lg:p-16 flex flex-col justify-start min-h-[420px] sm:min-h-[460px] md:min-h-[500px] transition-all shadow-[0_20px_60px_rgba(34,199,242,0.22)]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/30 mb-6 sm:mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-white text-[12px] sm:text-[13px] font-semibold tracking-[0.08em] uppercase select-none">
                  THE SOLUTION
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.12] tracking-tight m-0 max-w-xl">
                One intelligent, autonomous workspace for everything.
              </h3>
              <p className="text-white/95 text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed mt-6 sm:mt-8 m-0 font-normal max-w-xl">
                VYRO unites capture, cognitive scheduling, uninterrupted execution, and compounding reviews into a single intelligent operating system. Move effortlessly from raw thoughts to high-velocity progress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
