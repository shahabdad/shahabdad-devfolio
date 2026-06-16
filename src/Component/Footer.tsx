import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { CircleUser, Mail, Download, Moon, Sun, Compass, Code2, Clock } from 'lucide-react';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Experience', to: '/experience' },
  { label: 'Projects', to: '/projects' },
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
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

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
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <footer className={`py-16 pl-[20px] mt-13 pr-[10px] border-t font-space transition-colors duration-300 ${theme === 'dark'
        ? 'bg-[#0a0a0a] text-neutral-400 border-[#1f1f1f]'
        : 'bg-slate-50 text-slate-600 border-slate-200'
      }`}>
      <div className="w-full">
        <div className="grid gap-12 lg:grid-cols-5 pb-16">
          {/* Logo & Info Column */}
          <div className="lg:col-span-2 pl-[27px] space-y-6">
            <div className={`flex items-center gap-3 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              <CircleUser className="h-8 w-8 transition-all duration-300 hover:scale-110 hover:rotate-12 cursor-pointer" strokeWidth={2} />
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
                href="/resume.pdf"
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
                  <NavLink
                    to={link.to}
                    className={`transition-all duration-300 hover:translate-x-1.5 text-lg font-semibold inline-block ${theme === 'dark' ? 'text-[#a3a3a3] hover:text-white' : 'text-slate-500 hover:text-slate-900'
                      }`}
                  >
                    {link.label}
                  </NavLink>
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
                  href="https://google.com/maps/search/?api=1&query=Mardan,+KPK,+Pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-all duration-300 hover:translate-x-1 inline-block ${theme === 'dark' ? 'hover:text-white' : 'hover:text-slate-900'
                    }`}
                >
                  Mardan, KPK, Pakistan
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
        <div className={`border-t pt-8 flex items-center justify-between text-lg transition-colors duration-300 ${theme === 'dark' ? 'border-[#1f1f1f] text-[#525252]' : 'border-slate-200 text-slate-400'
          }`}>
          <p>© 2025 Shahab Dad. All rights reserved.</p>
          <button onClick={toggleTheme} className={`transition-all duration-300 hover:scale-120 hover:rotate-12 ${theme === 'dark' ? 'text-[#525252] hover:text-neutral-300' : 'text-slate-400 hover:text-slate-900'
            }`} aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun className="h-5 w-5" strokeWidth={1.8} /> : <Moon className="h-5 w-5" strokeWidth={1.8} />}
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;