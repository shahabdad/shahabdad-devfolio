import { useState, useEffect, useRef } from 'react';
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
import { TypeAnimation } from 'react-type-animation';
import About from '../Component/About';
import Services from '../Component/Services';
import Experience from '../Component/Experience';
import Projects from '../Component/Project';
import Skills from '../Component/Skill';
import Contact from '../Component/Contact';
import ScrollReveal from '../Component/ScrollReveal';

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

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ end, suffix = '', duration = 1500 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easeOutProgress = progress * (2 - progress);
            setCount(Math.floor(easeOutProgress * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [end, duration]);

  return <span ref={elementRef}>{count}{suffix}</span>;
}

export default function Home() {
  return (
    <div className="w-full bg-white overflow-hidden">
      {/* Home Section */}
      <section id="home" className="scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-24 min-h-[calc(100vh-5rem)] w-full p-3 text-slate-800 sm:p-4 lg:p-6">
        <div className="flex min-h-[calc(100vh-4rem)] w-full items-stretch">
          <div className="w-full overflow-hidden bg-white shadow-[0_24px_90px_rgba(15,23,42,0.10)] ">
            <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative flex items-start overflow-hidden px-5 py-8 sm:px-8 sm:py-10 lg:px-14 lg:py-14">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.12),transparent_32%),radial-gradient(circle_at_bottom,rgba(15,23,42,0.06),transparent_28%)]" />
                <div className="relative z-10 mx-auto mt-2 max-w-2xl space-y-8 text-center lg:mx-0 lg:mt-8 lg:text-left">
                  
                  <ScrollReveal animationClass="animate-fade-in-up" delay={50}>
                    <div className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-900/10 bg-slate-950 px-4 py-2 text-xs font-semibold tracking-[0.14em] text-white shadow-lg shadow-slate-950/10 sm:text-[15px] sm:tracking-[0.18em] w-fit">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      Now Accepting Projects
                    </div>
                  </ScrollReveal>

                  <ScrollReveal animationClass="animate-fade-in-up" delay={150}>
                    <div className="space-y-3">
                      <h1 className="max-w-xl text-4xl font-bold tracking-[-0.07em] text-slate-955 sm:text-5xl lg:text-7xl">
                        Shahab Dad
                      </h1>

                      <div className="flex items-center justify-center gap-2 text-lg font-bold tracking-wide text-zinc-500 sm:text-2xl lg:justify-start">
                        <ChevronsRight size={18} className="text-zinc-500 animate-pulse" />
                        <TypeAnimation
                          sequence={[
                            'Full Stack Developer',
                            2000,
                            'Web Developer',
                            2000,
                            'MERN Stack Developer',
                            2000,
                            'Software Engineer',
                            2000,
                            'Mobile App Developer',
                            2000,
                            'React Native Developer',
                            2000,
                          ]}
                          wrapper="span"
                          speed={50}
                          repeat={Infinity}
                          className="text-xl font-bold sm:text-2xl text-zinc-650"
                        />
                      </div>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal animationClass="animate-fade-in" delay={250}>
                    <p className="mx-auto max-w-2xl font-sans text-base font-semibold leading-relaxed tracking-wide text-slate-800 sm:text-lg lg:mx-0 lg:text-xl lg:leading-loose">
                      I craft elegant, user-focused digital experiences with modern web and mobile technologies.
                      From scalable interfaces to polished product delivery, I build solutions that feel fast,
                      intuitive, and reliable.
                    </p>
                  </ScrollReveal>

                  <ScrollReveal animationClass="animate-fade-in-up" delay={350}>
                    <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:justify-start">
                      <a href="#contact" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 text-base font-medium text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-slate-900">
                        <Briefcase size={20} />
                        Hire Me
                      </a>

                      <a href="#projects" className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 text-base font-medium text-slate-800 transition-colors duration-200 hover:border-slate-300 hover:bg-slate-50">
                        <FolderKanban size={18} />
                        View Projects
                      </a>

                      <a href="/resume" className="inline-flex h-12 items-center justify-center gap-2 rounded-full px-4 text-base font-medium text-slate-600 transition-colors duration-200 hover:text-slate-955">
                        <Download size={18} />
                        Download Resume
                      </a>
                    </div>
                  </ScrollReveal>

                  <div className="grid gap-3 sm:grid-cols-3">
                    <ScrollReveal animationClass="animate-slide-up-fade" delay={450}>
                      <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5">
                        <div className="text-3xl font-semibold tracking-[-0.04em] text-slate-950">
                          <AnimatedCounter end={3} suffix="+" />
                        </div>
                        <div className="mt-1 text-sm text-slate-500">Years of practice</div>
                      </div>
                    </ScrollReveal>
                    <ScrollReveal animationClass="animate-slide-up-fade" delay={550}>
                      <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5">
                        <div className="text-3xl font-semibold tracking-[-0.04em] text-slate-950">
                          <AnimatedCounter end={15} suffix="+" />
                        </div>
                        <div className="mt-1 text-sm text-slate-500">UI sections shipped</div>
                      </div>
                    </ScrollReveal>
                    <ScrollReveal animationClass="animate-slide-up-fade" delay={650}>
                      <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5">
                        <div className="text-3xl font-semibold tracking-[-0.04em] text-slate-950">
                          <AnimatedCounter end={100} suffix="%" />
                        </div>
                        <div className="mt-1 text-sm text-slate-500">Responsive focus</div>
                      </div>
                    </ScrollReveal>
                  </div>

                  <ScrollReveal animationClass="animate-fade-in" delay={750}>
                    <div className="flex flex-wrap items-center justify-center gap-3 pt-2 lg:justify-start">
                      <span className="text-sm font-medium text-slate-500">Connect:</span>
                      <a
                        href="mailto:shahabdad50@gmail.com"
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950 ripple-slate"
                        aria-label="Send email"
                      >
                        <MessageSquare size={18} />
                      </a>
                      <a
                        href="#projects"
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950 ripple-slate"
                        aria-label="View projects"
                      >
                        <FolderKanban size={18} />
                      </a>
                      <a
                        href="#contact"
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950 ripple-slate"
                        aria-label="Open contact section"
                      >
                        <Link2 size={18} />
                      </a>
                    </div>
                  </ScrollReveal>
                </div>
              </div>

              <div className="relative flex items-center justify-center px-5 py-8 sm:px-8 sm:py-10 lg:px-8 lg:py-12">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.18),transparent_40%)]" />
                <div className="relative z-10 w-full max-w-lg sm:max-w-xl lg:max-w-2xl">
                  <ScrollReveal animationClass="animate-slide-up-fade" delay={250}>
                    <div className="overflow-hidden rounded-4xl border border-slate-200/60 dark:border-white/10 bg-gradient-to-tr from-slate-100 to-indigo-50/50 dark:from-[#13141a] dark:to-[#1e202d] shadow-2xl backdrop-blur-sm relative">
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
                            <p className="text-sm text-slate-650 sm:text-base">Awards Winner </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>

            {/* Technologies Block */}
            <div className="bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_32%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.18),transparent_40%)] px-5 py-10 sm:px-8 sm:py-12 lg:px-16 lg:py-16">
              <ScrollReveal animationClass="animate-fade-in-up" delay={100}>
                <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-650 sm:text-sm">
                      Technologies I use
                    </p>
                    <h2 className="mt-3 text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.15]">
                      Clean stack, professional presentation
                    </h2>
                  </div>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-6">
                {technologies.map((tech, idx) => {
                  const Icon = tech.icon;

                  return (
                    <ScrollReveal
                      key={tech.name}
                      animationClass="animate-slide-up-fade"
                      delay={(idx % 6) * 100}
                    >
                      <div
                        className="group rounded-3xl border border-slate-200 bg-slate-50 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:shadow-md sm:p-6"
                      >
                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-white ring-1 ring-slate-200 ${tech.tone} sm:h-14 sm:w-14`}>
                          <Icon size={24} />
                        </div>
                        <div className="mt-4 text-base font-semibold text-slate-800 sm:text-lg">{tech.name}</div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-24">
        <About />
      </section>

      {/* Services Section */}
      <section id="services" className="scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-24">
        <Services />
      </section>

      {/* Experience Section */}
      <section id="experience" className="scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-24">
        <Experience />
      </section>

      {/* Projects Section */}
      <section id="projects" className="scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-24">
        <Projects />
      </section>

      {/* Skills Section */}
      <section id="skills" className="scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-24">
        <Skills />
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-24">
        <Contact />
      </section>
    </div>
  );
}