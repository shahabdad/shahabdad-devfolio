import { useState, useEffect } from 'react';
import { Mail, Download, Compass, Code2, Clock, X } from 'lucide-react';
import logoImage from '../assets/logo02.png';

const quickLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
];

const serviceLinks = [
  { label: 'Web Development', href: '#' },
  { label: 'Full Stack Development', href: '#' },
  { label: 'Mobile App Development', href: '#' },
  { label: 'REST API Development', href: '#' },
  { label: 'Firebase Solutions', href: '#' },
];

function Footer() {
  const [mardanTime, setMardanTime] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Footer is permanently styled in dark mode
  const theme = 'dark';

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  useEffect(() => {
    // Dynamic Time Clock for Mardan, Pakistan (GMT+5 / Asia/Karachi)
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setMardanTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('dark');
    root.style.colorScheme = 'light';
    localStorage.setItem('theme', 'light');
  }, []);

  return (
    <>
      <footer className={`py-16 pl-[20px] pr-[10px] font-space transition-colors duration-300 ${theme === 'dark'
        ? 'bg-[#0a0a0a] text-neutral-400'
        : 'bg-slate-50 text-slate-600'
        }`}>
      <div className="w-full">
        <div className="grid gap-12 lg:grid-cols-5 pb-16">
          {/* Logo & Info Column */}
          <div className="lg:col-span-2 pl-[27px] space-y-6">
            <div className={`flex items-center gap-3 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center focus:outline-none"
                title="View Logo"
              >
                <img
                  src={logoImage}
                  alt="Shahab Dad Logo"
                  className="h-12 w-12 bg-slate-950 p-1.5 rounded-full object-cover transition-all duration-300 hover:scale-120 hover:rotate-12 cursor-pointer shadow-[0_0_0_1px_rgba(255,255,255,0.1)]"
                />
              </button>
              <span className="font-semibold text-xl tracking-tight">Shahab Dad</span>
            </div>
            <p className={`text-[20px] font-semibold leading-relaxed max-w-sm font-light transition-colors duration-300 ${theme === 'dark' ? 'text-[#a3a3a3]' : 'text-slate-600'}`}>
              Designing thoughtful digital experiences with a focus on clarity, performance, and lasting impact.
            </p>
            <div className="flex gap-4 pt-2 ml-[12px]">
              <a
                href="mailto:shahabdad50@gmail.com"
                className={`transition-all duration-300 hover:scale-115 hover:-translate-y-0.5 ${theme === 'dark' ? 'text-[#a3a3a3] hover:text-white' : 'text-slate-500 hover:text-slate-900'
                  }`}
                aria-label="Email"
              >
                <Mail className="h-5 w-5" strokeWidth={1.8} />
              </a>
              <a
                href="/resume"
                className={`transition-all duration-300 hover:scale-115 hover:-translate-y-0.5 ${theme === 'dark' ? 'text-[#a3a3a3] hover:text-white' : 'text-slate-500 hover:text-slate-900'
                  }`}
                aria-label="Download Resume"
              >
                <Download className="h-5 w-5" strokeWidth={1.8} />
              </a>
            </div>

            {/* Glowing Availability Badge */}
            <div className={`flex items-center gap-2.5 text-xs font-medium border rounded-full px-4 py-2 w-fit ml-[12px] shadow-lg transition-all duration-300 ${theme === 'dark'
              ? 'bg-[#111] border-[#222] text-[#a3a3a3] hover:border-emerald-500/30'
              : 'bg-white border-slate-200 text-slate-600 hover:border-emerald-500/30'
              }`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for new projects</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className={`text-[18px] font-medium tracking-[0.18em] uppercase flex items-center gap-2 group cursor-default transition-colors duration-300 ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'
              }`}>
              <Compass className={`h-4.5 w-4.5 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 ${theme === 'dark' ? 'text-indigo-400 group-hover:text-white' : 'text-indigo-600 group-hover:text-slate-900'
                }`} />
              <span>Quick Links</span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleLinkClick(e, link.id)}
                    className={`transition-all duration-300 hover:translate-x-1.5 text-lg font-semibold inline-block ${theme === 'dark' ? 'text-[#a3a3a3] hover:text-white' : 'text-slate-500 hover:text-slate-900'
                      }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links Column */}
          <div className="space-y-4">
            <h3 className={`text-[18px] font-medium tracking-[0.18em] uppercase flex items-center gap-2 group cursor-default transition-colors duration-300 ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'
              }`}>
              <Code2 className={`h-4.5 w-4.5 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 ${theme === 'dark' ? 'text-indigo-400 group-hover:text-white' : 'text-indigo-600 group-hover:text-slate-900'
                }`} />
              <span>Services Links</span>
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`transition-all duration-300 hover:translate-x-1.5 text-lg font-semibold inline-block ${theme === 'dark' ? 'text-[#a3a3a3] hover:text-white' : 'text-slate-500 hover:text-slate-900'
                      }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className={`text-[18px] font-medium tracking-[0.18em] uppercase flex items-center gap-2 group cursor-default transition-colors duration-300 ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'
              }`}>
              <Mail className={`h-4.5 w-4.5 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 ${theme === 'dark' ? 'text-indigo-400 group-hover:text-white' : 'text-indigo-600 group-hover:text-slate-900'
                }`} />
              <span>Contact</span>
            </h3>
            <ul className={`space-y-3 text-lg font-semibold transition-colors duration-300 ${theme === 'dark' ? 'text-[#a3a3a3]' : 'text-slate-500'
              }`}>
              <li>
                <a href="mailto:shahabdad50@gmail.com" className={`transition-all duration-300 hover:translate-x-1 inline-block ${theme === 'dark' ? 'hover:text-white' : 'hover:text-slate-900'
                  }`}>
                  shahabdad50@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+923191796621" className={`transition-all duration-300 hover:translate-x-1 inline-block ${theme === 'dark' ? 'hover:text-white' : 'hover:text-slate-900'
                  }`}>
                  +92 319 1796621
                </a>
              </li>
              <li>
                <a
                  href="https://google.com/maps/search/?api=1&query=Mardan+District,+Khyber+Pakhtunkhwa,+Pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-all duration-300 hover:translate-x-1 inline-block ${theme === 'dark' ? 'hover:text-white' : 'hover:text-slate-900'
                    }`}
                >
                  Mardan District, Khyber Pakhtunkhwa, Pakistan
                </a>

                {/* Dynamic Clock Section */}
                {mardanTime && (
                  <div className={`flex items-center gap-2 mt-2 text-xs font-normal font-mono transition-colors duration-300 ${theme === 'dark' ? 'text-[#525252]' : 'text-slate-400'
                    }`}>
                    <Clock size={12} className="animate-spin-slow" />
                    <span>Local time: {mardanTime}</span>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t pt-8 flex items-center justify-between text-lg border-neutral-800/80 text-neutral-500">
          <p>© 2025 Shahab Dad. All rights reserved.</p>
        </div>
      </div>
      </footer>
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

export default Footer;