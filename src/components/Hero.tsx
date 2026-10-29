import React from 'react';
import { Navbar } from './Navbar';

export const Hero: React.FC = () => {
  return (
    <section
      aria-label="Hero"
      className="relative w-full h-screen h-[100svh] overflow-hidden bg-cover bg-center bg-no-repeat bg-[#030712] flex flex-col justify-between items-center"
      style={{
        backgroundImage: "url('/assets/image.png')",
      }}
    >
      {/* 1. Slim, elegant Navbar at top of viewport */}
      <Navbar />

      {/* 2. Hero typography centrally positioned above the phone mockup */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-1 sm:pt-3 md:pt-4 animate-hero-fade">
        <h1 className="tracking-tight text-white flex flex-col items-center m-0 p-0">
          <span
            className="font-light tracking-[-0.01em] text-white"
            style={{
              fontSize: 'clamp(32px, 4vw, 64px)',
              lineHeight: 1.1,
            }}
          >
            Your thoughts.
          </span>
          <span
            className="font-semibold tracking-[-0.015em] text-white mt-1 sm:mt-1.5"
            style={{
              fontSize: 'clamp(34px, 4.5vw, 70px)',
              lineHeight: 1.1,
            }}
          >
            Turned into progress.
          </span>
        </h1>
      </div>

      {/* 3. Existing VYRO phone-screen mockup centered beneath the text with +10px corner radius and slide-up animation */}
      <div className="relative z-10 flex justify-center items-start w-full px-4 mt-6 sm:mt-9 md:mt-12 pointer-events-none flex-1 overflow-visible">
        <img
          src="/assets/vyro-app-mockup.png"
          alt="VYRO Mobile App Interface"
          className="w-[270px] sm:w-[360px] md:w-[440px] lg:w-[470px] max-w-[88vw] h-auto object-contain rounded-[54px] sm:rounded-[65px] drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)] filter select-none animate-hero-phone"
          loading="eager"
        />
      </div>

      {/* 4. Full-width dark gradient at the bottom of the hero section */}
      <div
        className="absolute inset-x-0 bottom-0 h-44 sm:h-52 md:h-60 pointer-events-none bg-gradient-to-t from-black via-black/80 to-transparent z-20"
        aria-hidden="true"
      />

      {/* 5. Minimal bottom information row: Supporting text on left, Integration logos on right */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 inset-x-0 z-30 px-5 sm:px-[5%] pointer-events-auto">
        <div className="w-full flex flex-col sm:flex-row items-center sm:items-end justify-between gap-3 sm:gap-6">
          {/* Left Side: Supporting Text */}
          <p className="text-[#A7B5C5] text-[10.5px] sm:text-[12px] md:text-[13px] leading-[1.4] sm:leading-[1.5] max-w-[300px] sm:max-w-[340px] md:max-w-[360px] text-center sm:text-left m-0 font-normal select-none">
            Your ideas, tasks, and projects — brought together in one intelligent workspace. Stay focused, simplify your workflow, and turn everyday plans into meaningful progress.
          </p>

          {/* Right Side: Integration Logos (Notion, Google Calendar, Slack, Trello) */}
          <div className="flex items-center gap-5 sm:gap-6 md:gap-7 select-none">
            {/* Notion */}
            <span
              aria-label="Notion"
              title="Notion"
              className="opacity-80 hover:opacity-100 transition-opacity text-white/80 hover:text-white inline-flex items-center"
            >
              <svg className="h-5 sm:h-[22px] w-auto" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.69c-.42-.326-.98-.653-2.053-.56L2.64 2.296c-.373.047-.466.326-.326.56l2.146 1.352zm1.073 3.638v14.128c0 .56.28.746.84.7l13.914-.84c.606-.046.746-.42.746-.886V6.96c0-.513-.233-.746-.7-.7l-14.1.84c-.513.047-.7.28-.7.746zm12.375.933c.093.42 0 .84-.42.886l-.98.14v10.49c-.606.326-1.166.513-1.633.513-.746 0-1.026-.233-1.633-1.026l-4.71-6.716v6.53c.466.046.98.093 1.353.186.14.047.186.233.14.42-.047.14-.14.28-.42.28l-3.36.186c-.14 0-.28-.093-.28-.28 0-.14.093-.28.28-.326l.98-.14V9.61c-.42-.047-.886-.047-1.353-.093-.14-.047-.186-.233-.14-.42.047-.14.186-.233.42-.28l3.407-.233c.14 0 .28.093.373.233l4.85 6.95V9.937l-1.073-.093c-.14-.047-.233-.187-.233-.373 0-.14.093-.28.28-.28l3.267-.187c.28-.047.42.094.466.327z" />
              </svg>
            </span>

            {/* Google Calendar */}
            <span
              aria-label="Google Calendar"
              title="Google Calendar"
              className="opacity-80 hover:opacity-100 transition-opacity text-white/80 hover:text-white inline-flex items-center"
            >
              <svg className="h-5 sm:h-[22px] w-auto" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z" />
              </svg>
            </span>

            {/* Slack */}
            <span
              aria-label="Slack"
              title="Slack"
              className="opacity-80 hover:opacity-100 transition-opacity text-white/80 hover:text-white inline-flex items-center"
            >
              <svg className="h-5 sm:h-[22px] w-auto" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
              </svg>
            </span>

            {/* Trello */}
            <span
              aria-label="Trello"
              title="Trello"
              className="opacity-80 hover:opacity-100 transition-opacity text-white/80 hover:text-white inline-flex items-center"
            >
              <svg className="h-5 sm:h-[22px] w-auto" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.5 2h-15A2.5 2.5 0 0 0 2 4.5v15A2.5 2.5 0 0 0 4.5 22h15a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 19.5 2zm-8.5 13.5a1.5 1.5 0 0 1-1.5 1.5H6.5A1.5 1.5 0 0 1 5 15.5V6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v9zm8-4a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 13 11.5V6.5A1.5 1.5 0 0 1 14.5 5h3A1.5 1.5 0 0 1 19 6.5v5z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
