import React from 'react';

export const TabletShowcaseSection: React.FC = () => {
  return (
    <section
      id="tablet-experience"
      aria-label="VYRO Tablet Experience Showcase"
      className="w-full bg-[#FFFFFF] py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden select-none"
    >
      <div className="w-[94%] max-w-[1400px] mx-auto">
        <div className="w-full rounded-[24px] sm:rounded-[32px] md:rounded-[40px] border border-black/[0.08] sm:border-[1.5px] sm:border-black/[0.1] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] bg-[#F5F5F7]">
          <img
            src="/assets/image%20copy%202.png"
            alt="VYRO Cross-Device Tablet Workspace Experience"
            className="w-full h-auto object-cover block"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default TabletShowcaseSection;
