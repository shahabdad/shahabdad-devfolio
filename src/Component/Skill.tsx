import { useState, useEffect } from 'react';
import {
  Code,
  Braces,
  Database,
  GitBranch,
  Smartphone,
  Search,
  PenTool,
  Monitor,
  Server,
  ShieldCheck,
  Rocket,
  Terminal,
  Globe,
  Layers,
  Sparkles,
  Cpu,
  BadgeCheck,
  Zap,
  Lock,
  GitMerge,
  BookOpen
} from 'lucide-react';
import ThreeDTilt from './ThreeDTilt';
import ScrollReveal from './ScrollReveal';

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    const totalDuration = 1500;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const rate = Math.min(progress / totalDuration, 1);

      const easeOutQuad = (t: number) => t * (2 - t);

      setCount(Math.floor(easeOutQuad(rate) * end));

      if (rate < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  );
}

export default function Skill() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { value: 50, suffix: '+', label: 'Projects Completed' },
    { value: 12, suffix: '+', label: 'Technologies Used' },
    { value: 2000, suffix: '+', label: 'Development Hours' },
    { value: 100, suffix: '%', label: 'Project Dedication' },
  ];

  const skillCategories = [
    {
      title: 'Frontend Engineering',
      overall: '95%',
      icon: Code,
      accent: 'from-sky-500 to-blue-600',
      description: 'Translating mockups into production-ready client applications with fluid interactions.',
      skills: [
        { name: 'HTML5 & CSS3', level: '98%', details: 'Semantic markup, Flexbox, CSS Grid, animations', color: 'from-orange-500 to-amber-500' },
        { name: 'JavaScript (ES6+)', level: '94%', details: 'Asynchronous flows, OOP, DOM scripting, ES Modules', color: 'from-yellow-400 to-amber-500' },
        { name: 'React.js & Next.js', level: '92%', details: 'Custom hooks, Context API, Redux Toolkit, SSR, reconciliation', color: 'from-cyan-400 to-blue-500' },
        { name: 'React Native', level: '88%', details: 'Mobile routing, Native Bridges, animations, offline cache', color: 'from-sky-400 to-indigo-600' },
        { name: 'Tailwind CSS', level: '95%', details: 'Modern responsive systems, component-driven abstractions', color: 'from-cyan-400 to-sky-500' },
      ],
    },
    {
      title: 'Backend & System Design',
      overall: '85%',
      icon: Server,
      accent: 'from-indigo-500 to-purple-600',
      description: 'Designing modular logic layers, database models, and secure application controllers.',
      skills: [
        { name: 'Node.js & Express', level: '92%', details: 'Custom middleware, event loops, stream APIs, routing', color: 'from-emerald-400 to-green-600' },
        { name: 'RESTful APIs', level: '94%', details: 'Endpoint controller logic, error-handlers, validations', color: 'from-purple-500 to-indigo-600' },
        { name: 'MongoDB & Mongoose', level: '91%', details: 'Schema modelling, indexes, aggregations, data safety', color: 'from-green-500 to-emerald-700' },
        { name: 'Firebase Systems', level: '87%', details: 'Real-time database, OAuth, Cloud Messaging, Firestore', color: 'from-amber-500 to-orange-600' },
        { name: 'System Architecture', level: '82%', details: 'SOLID design pattern, MVC setup, security layers', color: 'from-indigo-400 to-purple-500' },
      ],
    },
    {
      title: 'Infrastructure & Workflow',
      overall: '90%',
      icon: GitBranch,
      accent: 'from-rose-500 to-pink-600',
      description: 'Collaborating through structured version controls, tests, and cloud hostings.',
      skills: [
        { name: 'Git & GitHub Versioning', level: '95%', details: 'Branch strategies (Git-flow), rebasing, conflict resolution', color: 'from-slate-700 to-slate-900' },
        { name: 'CLI & Scripting', level: '80%', details: 'Automation tasks, package packaging, shell scripts', color: 'from-zinc-600 to-zinc-800' },
        { name: 'API Testing (Postman)', level: '92%', details: 'Payload validation, response audits, collection runners', color: 'from-orange-400 to-red-500' },
        { name: 'CI/CD & Deployments', level: '88%', details: 'GitHub Actions, automated host runs, domain connections', color: 'from-indigo-500 to-indigo-700' },
        { name: 'Performance Audits', level: '85%', details: 'Core Web Vitals tuning, caching strategies, asset bundle sizing', color: 'from-rose-400 to-pink-500' },
      ],
    },
  ];

  const coreCompetencies = [
    {
      title: 'Algorithms & Data Structures',
      description: 'Applying appropriate data structures (hash maps, trees, lists) and search algorithms to write code with optimal time and space complexity.',
      icon: Cpu,
      color: 'text-blue-600 bg-blue-50 border-blue-100',
    },
    {
      title: 'Secure System Architectures',
      description: 'Securing apps with JWT authorization cookies, CSRF prevention, CORS headers, password hashing (bcrypt), and SQL/NoSQL injection mitigations.',
      icon: Lock,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    },
    {
      title: 'Clean Code & SOLID Principles',
      description: 'Applying SOLID design rules, DRY guidelines, and separation of concerns to guarantee codebase readability, reviewability, and long-term scaling.',
      icon: Braces,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
    },
    {
      title: 'Component Optimization',
      description: 'Reducing unnecessary React re-renders using useMemo, useCallback, virtual list scroll layers, dynamic lazy routing, and localized states.',
      icon: Zap,
      color: 'text-amber-600 bg-amber-50 border-amber-100',
    },
    {
      title: 'Agile & Collaborative Sprints',
      description: 'Working under agile product cycles, defining milestones, logging tickets, and collaborating on reviews to ensure zero-delay releases.',
      icon: GitMerge,
      color: 'text-rose-600 bg-rose-50 border-rose-100',
    },
    {
      title: 'Technical Documentation',
      description: 'Writing comprehensive Readme files, Postman collections, database entity relation schemas, and self-documenting code blocks.',
      icon: BookOpen,
      color: 'text-purple-600 bg-purple-50 border-purple-100',
    },
  ];

  const tools = [
    { name: 'Git & GitHub', icon: GitBranch, color: 'group-hover:text-black' },
    { name: 'VS Code Editor', icon: Terminal, color: 'group-hover:text-blue-500' },
    { name: 'Postman Client', icon: Globe, color: 'group-hover:text-orange-500' },
    { name: 'Figma Designer', icon: PenTool, color: 'group-hover:text-pink-500' },
    { name: 'MongoDB Compass', icon: Database, color: 'group-hover:text-green-600' },
    { name: 'Vercel Platform', icon: Rocket, color: 'group-hover:text-cyan-500' },
  ];

  const processes = [
    {
      number: '01',
      title: 'Requirement Analysis',
      description: 'Analyzing target audience goals, technical scope, and project constraints to build a blueprint.',
      icon: Search,
      border: 'hover:border-blue-500/40',
      numColor: 'text-blue-500/10',
      iconBg: 'bg-blue-50 text-blue-600',
    },
    {
      number: '02',
      title: 'Architecture & UI Flow',
      description: 'Structuring user journey flows, database structures, wireframes, and design components.',
      icon: PenTool,
      border: 'hover:border-purple-500/40',
      numColor: 'text-purple-500/10',
      iconBg: 'bg-purple-50 text-purple-600',
    },
    {
      number: '03',
      title: 'Premium Frontend Dev',
      description: 'Converting mockups into accessible, pixel-perfect layouts with polished micro-interactions.',
      icon: Monitor,
      border: 'hover:border-cyan-500/40',
      numColor: 'text-cyan-500/10',
      iconBg: 'bg-cyan-50 text-cyan-600',
    },
    {
      number: '04',
      title: 'Robust Backend System',
      description: 'Coding secure database schemas, routing controllers, third-party libraries, and user auth.',
      icon: Server,
      border: 'hover:border-emerald-500/40',
      numColor: 'text-emerald-500/10',
      iconBg: 'bg-emerald-50 text-emerald-600',
    },
    {
      number: '05',
      title: 'Testing & Optimization',
      description: 'Conducting load tests, styling refinements across viewport ranges, and security validations.',
      icon: ShieldCheck,
      border: 'hover:border-amber-500/40',
      numColor: 'text-amber-500/10',
      iconBg: 'bg-amber-50 text-amber-600',
    },
    {
      number: '06',
      title: 'Production Deploy',
      description: 'Publishing to performance-optimized servers, setting up domains, and final audit checks.',
      icon: Rocket,
      border: 'hover:border-rose-500/40',
      numColor: 'text-rose-500/10',
      iconBg: 'bg-rose-50 text-rose-600',
    },
  ];

  const floatingIcons = [
    { icon: Code, color: 'text-orange-500 bg-orange-50' },
    { icon: Braces, color: 'text-yellow-500 bg-yellow-50' },
    { icon: Database, color: 'text-green-500 bg-green-50' },
    { icon: Cpu, color: 'text-cyan-500 bg-cyan-50' },
    { icon: Smartphone, color: 'text-sky-500 bg-sky-50' },
    { icon: Layers, color: 'text-indigo-500 bg-indigo-50' },
  ];

  return (
    <section className="min-h-screen py-20 px-5 sm:px-10 lg:px-[90px] bg-[#f8fafc] text-slate-800 font-space transition-colors duration-300 overflow-hidden">
      <div className="w-full space-y-20">

        {/* Stats Banner */}
        <ScrollReveal animationClass="animate-fade-in-up" delay={50}>
          <div className="bg-slate-900 rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.1),transparent_40%)]" />
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-1 group">
                  <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight transition-transform duration-300 group-hover:scale-105">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-400 group-hover:text-indigo-400 transition-colors uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Header */}
        <ScrollReveal animationClass="animate-fade-in-up" delay={150}>
          <div className="space-y-2 text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-50 text-indigo-600">
              <Sparkles size={12} />
              My Expertise
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Technical Skills
            </h1>
            <p className="text-lg sm:text-xl text-slate-500 font-light max-w-3xl leading-relaxed">
              A comprehensive overview of my tech stack, proficiency levels, and the engineering principles I apply to every codebase.
            </p>
          </div>
        </ScrollReveal>

        {/* Skill Cards Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <ScrollReveal
                key={category.title}
                animationClass="animate-slide-up-fade"
                delay={idx * 150}
                className="flex flex-col"
              >
                <ThreeDTilt
                  className="bg-white rounded-3xl border border-slate-200/60 p-8 shadow-[0_4px_20px_rgba(15,23,42,0.02)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full"
                >
                  <div className="space-y-6">
                    {/* Category Header */}
                    <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-2xl bg-gradient-to-tr ${category.accent} text-white`}>
                          <Icon size={20} />
                        </div>
                        <h2 className="text-xl font-bold text-slate-900 leading-tight">
                          {category.title}
                        </h2>
                      </div>
                      <span className="text-sm font-bold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-lg">
                        {category.overall}
                      </span>
                    </div>

                    <p className="text-sm text-slate-500 leading-relaxed font-light">
                      {category.description}
                    </p>

                    {/* Progress Bars */}
                    <div className="space-y-6 pt-2">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="space-y-1.5 group text-left">
                          <div className="flex justify-between items-center text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                            <span>{skill.name}</span>
                            <span className="text-xs text-slate-600 font-medium">{skill.level}</span>
                          </div>
                          {/* Styled progress bar */}
                          <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden relative">
                            <div
                              className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                              style={{ width: animate ? skill.level : '0%' }}
                            />
                          </div>
                          <p className="text-base text-slate-600 font-normal mt-1.5 leading-relaxed">
                            {skill.details}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </ThreeDTilt>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Core Software Engineering Competencies Section */}
        <div className="space-y-8 pt-4">
          <ScrollReveal animationClass="animate-fade-in-up" delay={50}>
            <div className="space-y-2 text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-600">
                <BadgeCheck size={12} />
                Computer Science Fundamentals
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                Core Engineering Competencies
              </h2>
              <p className="text-lg text-slate-500 font-light max-w-3xl leading-relaxed">
                Key development guidelines and architectural patterns I enforce to build secure, readable, and highly scalable products.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreCompetencies.map((comp, idx) => {
              const CompIcon = comp.icon;
              return (
                <ScrollReveal
                  key={idx}
                  animationClass="animate-slide-up-fade"
                  delay={(idx % 3) * 150}
                  className="flex flex-col"
                >
                  <div
                    className="bg-white rounded-3xl border border-slate-200/60 p-8 shadow-[0_2px_10px_rgba(15,23,42,0.01)] hover:shadow-md hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between h-full min-h-[220px]"
                  >
                    <div className="space-y-4">
                      <div className={`p-3 rounded-2xl w-fit border ${comp.color}`}>
                        <CompIcon size={20} />
                      </div>
                      <div className="space-y-2 text-left">
                        <h3 className="text-xl font-bold text-slate-900 leading-tight">
                          {comp.title}
                        </h3>
                        <p className="text-base text-slate-500 leading-relaxed font-light">
                          {comp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Development Tools Section */}
        <ScrollReveal animationClass="animate-fade-in-up" delay={50}>
          <div className="bg-white rounded-3xl border border-slate-200/60 p-8 sm:p-10 shadow-[0_4px_20px_rgba(15,23,42,0.02)] space-y-6">
            <div className="space-y-1 text-left">
              <h2 className="text-2xl font-bold text-slate-900">
                Development Tools & Environments
              </h2>
              <p className="text-base text-slate-500 font-light">
                Platforms, editors, and testing suites I utilize daily to optimize output quality.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              {tools.map((tool, idx) => {
                const ToolIcon = tool.icon;
                return (
                  <ScrollReveal
                    key={tool.name}
                    animationClass="animate-slide-up-fade"
                    delay={idx * 50}
                  >
                    <div
                      className="group flex items-center gap-2.5 px-5 py-3 bg-slate-50 text-slate-700 text-base font-semibold rounded-2xl border border-slate-200/50 shadow-sm hover:bg-white hover:border-slate-300 hover:shadow-md transition-all duration-300 cursor-default"
                    >
                      <ToolIcon size={18} className={`text-slate-400 transition-colors duration-300 ${tool.color}`} />
                      <span>{tool.name}</span>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Process Section */}
        <div className="space-y-8">
          <ScrollReveal animationClass="animate-fade-in-up" delay={50}>
            <div className="space-y-2 text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-50 text-indigo-600">
                <BadgeCheck size={12} />
                How I Build
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                My Development Process
              </h2>
              <p className="text-lg sm:text-xl text-slate-500 font-light max-w-3xl leading-relaxed">
                An agile, structured methodology focusing on high fidelity, performance audits, and rapid delivery cycles.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processes.map((proc, idx) => {
              const ProcIcon = proc.icon;
              return (
                <ScrollReveal
                  key={proc.number}
                  animationClass="animate-slide-up-fade"
                  delay={(idx % 3) * 150}
                  className="flex flex-col"
                >
                  <div
                    className="group bg-white rounded-3xl border border-slate-200/60 p-8 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-lg hover:scale-[1.01] hover:bg-slate-50/20 border-t-2 ${proc.border} transition-all duration-300 flex flex-col justify-between min-h-[260px] relative overflow-hidden h-full"
                  >
                    <span className={`absolute -right-2 -bottom-2 text-8xl font-black ${proc.numColor} select-none transition-transform duration-500 group-hover:scale-110 font-mono`}>
                      {proc.number}
                    </span>

                    <div className="space-y-6 relative z-10">
                      <div className="flex justify-between items-center">
                        <div className={`p-3 rounded-2xl ${proc.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                          <ProcIcon size={20} />
                        </div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">
                          Step {proc.number}
                        </span>
                      </div>

                      <div className="space-y-2 text-left">
                        <h3 className="text-xl font-bold text-slate-900 transition-colors duration-300">
                          {proc.title}
                        </h3>
                        <p className="text-base text-slate-500 leading-relaxed font-light">
                          {proc.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Bottom Floating Brands/Tech Cloud */}
        <ScrollReveal animationClass="animate-fade-in-up" delay={50}>
          <div className="bg-white rounded-3xl border border-slate-200/60 p-8 sm:p-10 shadow-[0_4px_25px_rgba(15,23,42,0.02)]">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {floatingIcons.map((box, idx) => {
                const FloatIcon = box.icon;
                return (
                  <div
                    key={idx}
                    className={`w-16 h-16 sm:w-20 sm:h-20 ${box.color} rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.01)] flex items-center justify-center border border-slate-100 transition-all duration-500 hover:scale-110 hover:-translate-y-1 hover:shadow-md cursor-default`}
                  >
                    <FloatIcon className="h-6 w-6 sm:h-8 sm:w-8" strokeWidth={1.5} />
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
