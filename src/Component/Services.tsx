import { Code, Layers, Smartphone, GitBranch, Database, Cloud, Server, Wrench, Palette, Zap, Cpu, Shield } from 'lucide-react';
import ThreeDTilt from './ThreeDTilt';
import ScrollReveal from './ScrollReveal';

export default function Services() {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building high-performance, responsive websites with clean layouts, search engine optimization (SEO), and accessible interfaces.',
    },
    {
      icon: Layers,
      title: 'Full Stack Development',
      description: 'Engineering complete products from secure database design and server setups to fast, modern dashboard frontends.',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Crafting cross-platform native iOS & Android applications using React Native with fluid animations and offline capabilities.',
    },
    {
      icon: GitBranch,
      title: 'REST API Development',
      description: 'Designing well-structured, authenticated RESTful and GraphQL APIs with validation, logging, and robust security integrations.',
    },
    {
      icon: Database,
      title: 'Database Architecture',
      description: 'Designing high-performance MongoDB schemas and SQL databases with query optimization, indexing, and absolute data safety.',
    },
    {
      icon: Palette,
      title: 'UI/UX Engineering',
      description: 'Translating design mockups into pixel-perfect responsive layouts with smooth micro-interactions and cohesive typography.',
    },
    {
      icon: Zap,
      title: 'Performance & Speed',
      description: 'Optimizing web and mobile applications for ultra-fast load times, caching, and a perfect Core Web Vitals score.',
    },
    {
      icon: Cloud,
      title: 'Cloud & Serverless',
      description: 'Configuring Firebase, Vercel, and AWS deployments with scalable serverless cloud functions and edge middleware.',
    },
    {
      icon: Server,
      title: 'DevOps & Hosting',
      description: 'Setting up automated CI/CD deployment pipelines, Docker environments, and secure cloud server configurations.',
    },
    {
      icon: Cpu,
      title: 'System Integrations',
      description: 'Connecting platforms with Stripe/PayPal payment portals, automated email queues, and real-time socket channels.',
    },
    {
      icon: Shield,
      title: 'Security & Auth',
      description: 'Implementing multi-factor auth, JWT secure tokens, role-based access control, and strict middleware protections.',
    },
    {
      icon: Wrench,
      title: 'Maintenance & Scaling',
      description: 'Providing proactive maintenance, software audits, library upgrades, bug resolution, and code scaling strategies.',
    },
  ];

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-[90px] bg-[#fafafa] text-slate-800 font-space overflow-hidden">
      <div className="w-full space-y-12">
        {/* Header */}
        <ScrollReveal animationClass="animate-fade-in-up" delay={50}>
          <div className="space-y-3">
            <span className="text-[14px] font-semibold uppercase tracking-[0.2em] text-[#737373]">
              WHAT I DO
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-slate-900">
              Services I Offer
            </h1>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <ScrollReveal
                key={idx}
                animationClass="animate-slide-up-fade"
                delay={(idx % 4) * 75}
                className="flex flex-col"
              >
                <ThreeDTilt
                  className="group p-8 rounded-3xl border border-slate-200/60 bg-white hover:border-slate-300 hover:shadow-lg transition-all duration-300 space-y-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] cursor-default h-full"
                >
                  <div className="p-3.5 rounded-2xl bg-[#f4f4f5] text-[#18181b] w-fit transition-all duration-300 group-hover:bg-[#18181b] group-hover:text-white ripple-slate">
                    <Icon className="h-7 w-7 transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-[360deg]" strokeWidth={1.8} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="text-base text-slate-500 leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>
                </ThreeDTilt>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
