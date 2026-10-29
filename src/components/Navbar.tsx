import React, { useState } from 'react';

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: 'Product', href: '#about' },
  { label: 'Features', href: '#process' },
  { label: 'Security', href: '#security' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Download', href: '#download' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative w-full z-50">
      <nav
        aria-label="Main Navigation"
        className="w-full h-20 md:h-[84px] px-[5%] flex items-center justify-between bg-transparent"
      >
        {/* Left: Brand Identity */}
        <a
          href="/"
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-sm"
          aria-label="VYRO Homepage"
        >
          {/* Minimal Geometric VYRO Symbol */}
          <svg
            className="w-6 h-5 text-white transition-opacity group-hover:opacity-90"
            viewBox="0 0 28 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <polygon points="1,19 8,7 13,19" />
            <polygon points="11,19 19,1 27,19" />
          </svg>
          <span className="text-[17px] font-bold tracking-[0.22em] text-white select-none">
            VYRO
          </span>
        </a>

        {/* Center: Navigation Links (Desktop) */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-11 list-none m-0 p-0 absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-[14px] lg:text-[15px] font-normal text-white/80 hover:text-white hover:text-cyan-200/90 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Account Actions (Desktop) */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <a
            href="#signin"
            className="text-[14px] lg:text-[15px] font-normal text-white/80 hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-sm"
          >
            Sign in
          </a>
          <a
            href="#get-vyro"
            className="inline-flex items-center justify-center px-5 py-2 text-[14px] lg:text-[15px] font-medium text-white rounded-full border border-white/20 hover:border-cyan-400/80 hover:text-cyan-100 hover:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            Get VYRO
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-white/80 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.75"
            stroke="currentColor"
            aria-hidden="true"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full inset-x-0 bg-[#030712]/95 backdrop-blur-xl border-b border-white/10 px-[5%] py-6 flex flex-col gap-4 shadow-2xl animate-hero-fade">
          <ul className="flex flex-col gap-4 list-none m-0 p-0">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-[16px] text-white/85 hover:text-white py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="#signin"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[15px] text-white/85 hover:text-white py-1"
            >
              Sign in
            </a>
            <a
              href="#get-vyro"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center w-full px-5 py-2.5 text-[15px] font-medium text-white rounded-full border border-white/20 hover:border-cyan-400/80 hover:text-cyan-100 transition-all text-center"
            >
              Get VYRO
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
