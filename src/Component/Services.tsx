import { Code, Layers, Smartphone, GitBranch, Database, Cloud, Server, Wrench } from 'lucide-react';
import ThreeDTilt from './ThreeDTilt';

export default function Services() {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive websites with clean architecture, fast performance, and accessible interfaces.',
    },
    {
      icon: Layers,
      title: 'Full Stack Development',
      description: 'Complete product engineering across frontend, backend, databases, and deployment workflows.',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile apps with intuitive UX and reliable native-like performance.',
    },
    {
      icon: GitBranch,
      title: 'REST API Development',
      description: 'Well-structured APIs with secure endpoints, validation, and scalable architecture.',
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Efficient data modeling and schema design for reliable, maintainable applications.',
    },
    {
      icon: Cloud,
      title: 'Firebase Solutions',
      description: 'Authentication, realtime data, and cloud-powered features for rapid product delivery.',
    },
    {
      icon: Server,
      title: 'Deployment & Hosting',
      description: 'Reliable deployment pipelines and hosting setups for smooth production releases.',
    },
    {
      icon: Wrench,
      title: 'Maintenance & Support',
      description: 'Ongoing improvements, bug fixes, and technical support to keep products healthy.',
    },
  ];

  return (
    <section className="min-h-screen py-20 px-[90px] bg-[#fafafa] text-slate-800 font-space animate-fade-in-up">
      <div className="w-full space-y-12">
        {/* Header */}
        <div className="space-y-3 animate-fade-in-up delay-75">
          <span className="text-[14px] font-semibold uppercase tracking-[0.2em] text-[#737373]">
            WHAT I DO
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-slate-900">
            Services I Offer
          </h1>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <ThreeDTilt
                key={idx}
                className="group p-8 rounded-3xl border border-slate-200/60 bg-white hover:border-slate-300 hover:shadow-lg transition-all duration-300 space-y-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] cursor-default animate-fade-in-up"
                style={{ animationDelay: `${idx * 75}ms` }}
              >
                <div className="p-3.5 rounded-2xl bg-[#f4f4f5] text-[#18181b] w-fit transition-all duration-300 group-hover:bg-[#18181b] group-hover:text-white">
                  <Icon className="h-7 w-7 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" strokeWidth={1.8} />
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
