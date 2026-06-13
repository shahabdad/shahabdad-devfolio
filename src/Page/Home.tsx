import {
  Award,
  BadgeCheck,
  Braces,
  Briefcase,
  ChevronsRight,
  Code2,
  Database,
  Download,
  FolderKanban,
  Layers3,
  Link2,
  MessageSquare,
  MonitorSmartphone,
  Palette,
  Server,
  Sparkles,
  Workflow,
} from 'lucide-react';
import profileImage from '../assets/Profile.png';

const technologies = [
  { name: 'HTML5', icon: Braces, tone: 'text-orange-500' },
  { name: 'CSS3', icon: Palette, tone: 'text-sky-500' },
  { name: 'JavaScript', icon: Code2, tone: 'text-amber-500' },
  { name: 'React.js', icon: Sparkles, tone: 'text-cyan-500' },
  { name: 'React Native', icon: MonitorSmartphone, tone: 'text-cyan-600' },
  { name: 'Node.js', icon: Server, tone: 'text-emerald-600' },
  { name: 'Express.js', icon: Workflow, tone: 'text-slate-700' },
  { name: 'MongoDB', icon: Database, tone: 'text-green-600' },
  { name: 'Firebase', icon: BadgeCheck, tone: 'text-orange-500' },
  { name: 'Bootstrap', icon: Layers3, tone: 'text-violet-600' },
  { name: 'Tailwind CSS', icon: Palette, tone: 'text-sky-400' },
  { name: 'GitHub', icon: Code2, tone: 'text-slate-900' },
];

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-5rem)] w-full bg-white p-3 text-slate-800 sm:p-4 lg:p-6">
      <div className="flex min-h-[calc(100vh-4rem)] w-full items-stretch">
        <div className="w-full overflow-hidden bg-white shadow-[0_24px_90px_rgba(15,23,42,0.10)] ">
          <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative flex items-start overflow-hidden px-5 py-8 sm:px-8 sm:py-10 lg:px-14 lg:py-14">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.12),transparent_32%),radial-gradient(circle_at_bottom,rgba(15,23,42,0.06),transparent_28%)]" />
              <div className="relative z-10 mx-auto mt-2  max-w-2xl space-y-8 text-center lg:mx-0 lg:mt-8 lg:text-left">
                <div className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-900/10 bg-slate-950 px-4 py-2 text-xs font-semibold tracking-[0.14em] text-white shadow-lg shadow-slate-950/10 sm:text-[15px] sm:tracking-[0.18em]">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Now Accepting Projects
                </div>

                <div className="space-y-3">
                  <h1 className="max-w-xl text-4xl font-bold tracking-[-0.07em] text-slate-950 sm:text-5xl lg:text-7xl">
                    Shahab Dad
                  </h1>

                  <div className="flex items-center justify-center gap-2 text-lg font-bold tracking-wide text-zinc-500 sm:text-2xl lg:justify-start">
                    <ChevronsRight size={18} className="text-zinc-500 animate-pulse" />
                    <p className="max-w-xl leading-7">
                      Full Stack Developer
                    </p>
                  </div>
                </div>

                {/* <p className="mx-auto max-w-2xl text-base leading-7 text-slate-600 sm:text-lg lg:mx-0 lg:text-xl lg:leading-9">
                  I craft elegant, user-focused digital experiences with modern web and mobile technologies.
                  From scalable interfaces to polished product delivery, I build solutions that feel fast,
                  intuitive, and reliable.
                </p> */}
                <p className="mx-auto max-w-2xl font-sans text-base font-semibold leading-relaxed tracking-wide text-slate-800 sm:text-lg lg:mx-0 lg:text-xl lg:leading-loose">
                  I craft elegant, user-focused digital experiences with modern web and mobile technologies.
                  From scalable interfaces to polished product delivery, I build solutions that feel fast,
                  intuitive, and reliable.
                </p>

                <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:justify-start">
                  <button className="inline-flex h-12 items-center gap-2 rounded-full bg-slate-950 px-6 text-base font-medium text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-slate-900">
                    <Briefcase size={20} />
                    Hire Me
                  </button>

                  <button className="inline-flex h-12 items-center gap-2 rounded-full border border-slate-200 bg-white px-6 text-base font-medium text-slate-800 transition-colors duration-200 hover:border-slate-300 hover:bg-slate-50">
                    <FolderKanban size={18} />
                    View Projects
                  </button>

                  <button className="inline-flex h-12 items-center gap-2 rounded-full px-4 text-base font-medium text-slate-600 transition-colors duration-200 hover:text-slate-950">
                    <Download size={18} />
                    Download Resume
                  </button>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5">
                    <div className="text-3xl font-semibold tracking-[-0.04em] text-slate-950">3+</div>
                    <div className="mt-1 text-sm text-slate-500">Years of practice</div>
                  </div>
                  <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5">
                    <div className="text-3xl font-semibold tracking-[-0.04em] text-slate-950">15+</div>
                    <div className="mt-1 text-sm text-slate-500">UI sections shipped</div>
                  </div>
                  <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5">
                    <div className="text-3xl font-semibold tracking-[-0.04em] text-slate-950">100%</div>
                    <div className="mt-1 text-sm text-slate-500">Responsive focus</div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2 lg:justify-start">
                  <span className="text-sm font-medium text-slate-500">Connect:</span>
                  <a
                    href="mailto:shahabdad@example.com"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950"
                    aria-label="Send email"
                  >
                    <MessageSquare size={18} />
                  </a>
                  <a
                    href="#projects"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950"
                    aria-label="View projects"
                  >
                    <FolderKanban size={18} />
                  </a>
                  <a
                    href="#contact"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950"
                    aria-label="Open contact section"
                  >
                    <Link2 size={18} />
                  </a>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center px-5 py-8 sm:px-8 sm:py-10 lg:px-8 lg:py-12">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.18),transparent_40%)]" />
              <div className="relative z-10 w-full max-w-lg sm:max-w-xl lg:max-w-2xl">
                <div className="overflow-hidden rounded-4xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm">
                  <img
                    src={profileImage}
                    alt="Shahab Dad"
                    className="h-88 w-full object-cover sm:h-112 lg:h-144"
                  />

                  <div className="absolute bottom-3 left-3 right-3 rounded-2xl border border-white/20 bg-white/90 p-3 shadow-lg backdrop-blur-md sm:bottom-4 sm:left-4 sm:right-4 lg:right-auto lg:max-w-md">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-white sm:h-14 sm:w-14">
                        <Award size={28} />
                      </div>
                      <div className="flex flex-col ">
                        <h4 className="text-lg font-bold text-slate-950 sm:text-xl">Top Rated Developer</h4>
                        <p className="text-sm text-slate-600 sm:text-base">Awards Winner </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_32%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.18),transparent_40%)] px-5 py-10 sm:px-8 sm:py-12 lg:px-16 lg:py-16">
            <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 sm:text-sm">
                  Technologies I use
                </p>
                <h2 className="mt-3 text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.15]">
                  Clean stack, professional presentation
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-6">
              {technologies.map((tech) => {
                const Icon = tech.icon;

                return (
                  <div
                    key={tech.name}
                    className="group rounded-3xl border border-slate-200 bg-slate-50 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:shadow-md sm:p-6"
                  >
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-white ring-1 ring-slate-200 ${tech.tone} sm:h-14 sm:w-14`}>
                      <Icon size={24} />
                    </div>
                    <div className="mt-4 text-base font-semibold text-slate-800 sm:text-lg">{tech.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}