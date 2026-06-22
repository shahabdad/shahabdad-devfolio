
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import logoImage from '../assets/logo02.png';

const links = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // 1. Initial scroll to hash if present in URL
    const hash = window.location.hash;
    if (hash) {
      const targetId = hash.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        const timer = setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
        return () => clearTimeout(timer);
      }
    } else {
      // If direct route pathname exists like /about, scroll to it
      const path = window.location.pathname.replace('/', '');
      if (path) {
        const el = document.getElementById(path);
        if (el) {
          const timer = setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth' });
          }, 150);
          return () => clearTimeout(timer);
        }
      }
    }
  }, []);

  useEffect(() => {
    // 2. Setup Intersection Observer to monitor active section
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // detects sections in viewport focus
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    links.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => {
      links.forEach((link) => {
        const el = document.getElementById(link.id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Automatically close mobile menu when switching to desktop screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      // Update hash in URL
      window.history.pushState(null, '', `#${id}`);
      setActiveSection(id);
    }
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/90 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-md">
        <div className="flex h-16 w-full items-center justify-between gap-3 px-4 sm:h-20 sm:px-6 lg:h-24 lg:px-10">
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center focus:outline-none"
              title="View Logo"
            >
              <img
                src={logoImage}
                alt="Shahab Dad Logo"
                className="h-10 w-10 bg-slate-950 p-1.5 rounded-full object-cover sm:h-14 sm:w-14 lg:h-16 lg:w-16 shadow-[0_0_0_1px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-120 cursor-pointer"
              />
            </button>
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className="text-base font-semibold tracking-[-0.03em] text-[#111] sm:text-xl lg:text-2xl whitespace-nowrap"
            >
              Shahab Dad
            </a>
          </div>

          <nav className="hidden items-center gap-4 text-base font-semibold text-[#111] lg:flex lg:gap-6 lg:text-lg xl:gap-7 xl:text-xl">
            {links.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={[
                    'nav-link-underline rounded-full px-3 py-2 transition-colors duration-200 lg:px-4 lg:py-2.5',
                    isActive ? 'text-[#111] nav-link-underline-active' : 'text-slate-500 hover:text-[#111]'
                  ].join(' ')}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="/resume"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[#111] px-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-black sm:h-12 sm:px-5 sm:text-base lg:h-14 lg:px-6 max-[390px]:h-10 max-[390px]:w-10 max-[390px]:p-0 max-[390px]:justify-center"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-none stroke-white stroke-[1.8] sm:h-5 sm:w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v10m0 0 4-4m-4 4-4-4M5 17.5V19a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1.5" />
              </svg>
              <span className="hidden sm:inline whitespace-nowrap text-sm text-white font-semibold sm:text-base">Download Resume</span>
              <span className="inline sm:hidden max-[390px]:hidden whitespace-nowrap text-sm text-white font-semibold">Resume</span>
            </a>

            {/* Hamburger Menu Toggle Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm transition-all duration-200 hover:bg-slate-50 active:scale-95 lg:hidden sm:h-12 sm:w-12 focus:outline-none cursor-pointer"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              <div className="relative flex h-5 w-5 flex-col items-center justify-center">
                <span className={`absolute h-0.5 w-5 rounded-full bg-slate-800 transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`} />
                <span className={`absolute h-0.5 w-5 rounded-full bg-slate-800 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'}`} />
                <span className={`absolute h-0.5 w-5 rounded-full bg-slate-800 transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-0 z-40 bg-white/98 backdrop-blur-xl lg:hidden flex flex-col pt-20 sm:pt-24 px-6 pb-8 overflow-y-auto transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-2 mt-8">
          {links.map((link, idx) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  handleNavClick(e, link.id);
                  setIsMenuOpen(false);
                }}
                className={`text-xl font-bold py-3.5 px-4 rounded-2xl transition-all duration-300 flex items-center justify-between ${
                  isActive
                    ? 'bg-neutral-900 text-white shadow-md'
                    : 'text-slate-600 hover:text-neutral-950 hover:bg-slate-50'
                }`}
                style={{
                  transitionDelay: `${idx * 40}ms`,
                  transform: isMenuOpen ? 'translateY(0)' : 'translateY(10px)',
                  opacity: isMenuOpen ? 1 : 0,
                }}
              >
                <span>{link.label}</span>
                <svg
                  className={`h-4 w-4 transition-transform duration-300 ${
                    isActive ? 'text-white translate-x-0' : 'text-slate-400 -translate-x-1'
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            );
          })}
        </div>

        {/* Dynamic availability and contact info at the bottom */}
        <div
          className="mt-auto pt-8 border-t border-slate-100 flex flex-col gap-6 transition-all duration-500"
          style={{
            transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
            opacity: isMenuOpen ? 1 : 0,
            transitionDelay: `${links.length * 40}ms`,
          }}
        >
          {/* Glowing Availability Badge */}
          <div className="flex items-center gap-2.5 text-xs font-semibold bg-emerald-50/50 border border-emerald-100 text-emerald-800 rounded-full px-4 py-2 w-fit shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for new projects</span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">Get in Touch</span>
            <a href="mailto:shahabdad50@gmail.com" className="text-base font-medium text-slate-700 hover:text-black transition-colors flex items-center gap-2 py-1">
              <span className="p-2 bg-slate-100 rounded-full text-slate-500">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              shahabdad50@gmail.com
            </a>
            <a href="tel:+923191796621" className="text-base font-medium text-slate-700 hover:text-black transition-colors flex items-center gap-2 py-1">
              <span className="p-2 bg-slate-100 rounded-full text-slate-500">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              +92 319 1796621
            </a>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-start justify-center bg-white/80 p-4 pt-20 sm:pt-28 backdrop-blur-md overflow-y-auto"
          onClick={() => setIsModalOpen(false)}
        >
          <style>{`
            .logo-modal-content {
              animation: logoModalZoom 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
            }
            @keyframes logoModalZoom {
              from { transform: scale(0.9); opacity: 0; }
              to { transform: scale(1); opacity: 1; }
            }
          `}</style>
          <div className="relative max-w-md w-full flex flex-col items-center justify-center logo-modal-content">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-14 right-2 text-slate-800 hover:text-slate-950 transition-colors p-2 bg-slate-950/10 rounded-full hover:bg-slate-950/20 focus:outline-none"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            <img
              src={logoImage}
              alt="Shahab Dad Logo"
              className="max-w-full max-h-[75vh] rounded-3xl object-contain bg-slate-950 p-6 shadow-2xl border border-slate-950/10"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;