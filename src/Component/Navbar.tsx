

import { NavLink } from 'react-router-dom';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Experience', to: '/experience' },
  { label: 'Projects', to: '/projects' },
  { label: 'Skills', to: '/skills' },
  { label: 'Team', to: '/team' },
  { label: 'Contact', to: '/contact' },
];

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/90 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-md">
      <div className="flex h-16 w-full items-center justify-between gap-3 px-4 sm:h-20 sm:px-6 lg:h-24 lg:px-10">
        <NavLink to="/" className="flex items-center gap-2 sm:gap-3 text-lg font-semibold tracking-[-0.03em] text-[#111] sm:text-xl lg:text-2xl">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111] shadow-[0_0_0_1px_rgba(0,0,0,0.08)] sm:h-11 sm:w-11 lg:h-12 lg:w-12">
            <span className="h-1.5 w-1.5 rounded-full bg-white sm:h-2 sm:w-2" />
          </span>
          <span className="whitespace-nowrap">Shahab Dad</span>
        </NavLink>

        <nav className="hidden items-center gap-4 text-base font-semibold text-[#111] lg:flex lg:gap-6 lg:text-lg xl:gap-7 xl:text-xl">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                [
                  'nav-link-underline rounded-full px-3 py-2 transition-colors duration-200 lg:px-4 lg:py-2.5',
                  isActive ? ' text-white  hover:text-white' : '',
                  isActive ? 'nav-link-underline-active' : '',
                ].join(' ')
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <a
          href="/resume.pdf"
          className="inline-flex h-10 items-center gap-2 rounded-full bg-[#111] px-4 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-px hover:bg-black sm:h-12 sm:px-5 sm:text-base lg:h-14 lg:px-6"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[1.8] sm:h-5 sm:w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v10m0 0 4-4m-4 4-4-4M5 17.5V19a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1.5" />
          </svg>
          <span className="whitespace-nowrap text-sm text-white font-semibold sm:text-base">Download Resume</span>
        </a>
      </div>
    </header>
  );
}

export default Navbar;