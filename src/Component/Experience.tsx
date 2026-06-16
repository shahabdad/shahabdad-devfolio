import { Code2, Smartphone, Briefcase } from 'lucide-react';
import ThreeDTilt from './ThreeDTilt';

export default function Experience() {
  const experiences = [

    {
      role: 'React Native Developer',
      company: 'TenGrains  company ',
      period: 'Dec 2025  --Present',
      icon: Smartphone,
      bullets: [
        'Developed cross-platform iOS and Android apps using React Native.',
        'Integrated Firebase for real-time data sync and push notifications.',
        'Collaborated with UI/UX designers to implement pixel-perfect interfaces.',
        'Published 4 apps to App Store and Google Play with 10k+ downloads.',
      ],
      tech: ['React Native', 'Firebase', 'iOS & Android', 'UI/UX Design'],
    },
    {
      role: 'Full Stack Developer',
      company: 'Encoder Technolgies ',
      period: 'JUl 2024 ',
      icon: Code2,
      bullets: [
        'Built scalable REST APIs and microservices using Node.js and Express.',
        'Developed dynamic React.js frontends with Redux state management.',
        'Managed MongoDB databases and optimized queries for performance.',
        'Deployed applications on AWS using Docker and CI/CD pipelines.',
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AWS', 'Docker'],
    },
    {
      role: 'Freelance Developer',
      company: 'Self-Employed',
      period: 'Mar 2024 - May 2026',
      icon: Briefcase,
      bullets: [
        'Delivered 20+ custom web solutions for clients across various industries.',
        'Built e-commerce platforms with payment gateway integrations.',
        'Maintained long-term client relationships with ongoing support contracts.',
        'Utilized MERN stack to build full-featured SaaS applications.',
      ],
      tech: ['MERN Stack', 'E-Commerce', 'SaaS', 'Client Relations'],
    },
  ];

  return (
    <section className="min-h-screen py-20 px-[90px] bg-[#fafafa] text-slate-800 font-space animate-fade-in-up">
      <div className="w-full space-y-16">

        {/* Header */}
        <div className="space-y-3 text-center max-w-xl mx-auto animate-fade-in-up delay-75">
          <span className="text-[14px] font-semibold uppercase tracking-[0.2em] text-[#737373]">
            MY JOURNEY
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-slate-900">
            Work Experience
          </h1>
        </div>

        {/* Timeline Stack Container */}
        <div className="relative mt-20">

          {/* Vertical Timeline Axis Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2" />

          <div className="space-y-16 lg:space-y-8">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <div
                  key={index}
                  className="relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Timeline Indicator Dot */}
                  <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 top-8 w-3 h-3 rounded-full bg-slate-950 z-10 border border-slate-950" />

                  {/* Staggered Row Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                    {/* Left Column Card Container */}
                    <div className={`${index % 2 === 0 ? 'block' : 'hidden lg:block lg:invisible pointer-events-none'} pl-12 lg:pl-0 lg:pr-12`}>
                      {index % 2 === 0 && (
                        <ThreeDTilt className="group p-8 rounded-3xl border border-slate-200/60 bg-white hover:border-slate-300 hover:shadow-lg transition-all duration-300 space-y-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] cursor-default">

                          {/* Card Header (Icon, Company, Period) */}
                          <div className="flex items-start gap-4">
                            <div className="p-3.5 rounded-2xl bg-[#f4f4f5] text-[#18181b] transition-all duration-300 group-hover:bg-[#18181b] group-hover:text-white">
                              <Icon className="h-7 w-7 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" strokeWidth={1.8} />
                            </div>
                            <div className="space-y-1 text-left">
                              <h4 className="text-xl font-bold text-slate-800">
                                {exp.company}
                              </h4>
                              <span className="inline-block text-sm font-semibold text-slate-500 bg-[#f4f4f5] px-2.5 py-1 rounded-full">
                                {exp.period}
                              </span>
                            </div>
                          </div>

                          {/* Role */}
                          <div className="text-left">
                            <h3 className="text-3xl font-bold text-slate-900 pt-2">
                              {exp.role}
                            </h3>
                          </div>

                          {/* Bullet Points */}
                          <ul className="space-y-2.5 pt-2 text-left">
                            {exp.bullets.map((bullet, idx) => (
                              <li key={idx} className="flex items-start text-lg sm:text-xl text-[#525252] leading-relaxed font-light">
                                <span className="text-[#a3a3a3] select-none mr-2 font-mono font-bold">&gt;</span>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Tech badges */}
                          <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 text-left">
                            {exp.tech.map((t) => (
                              <span
                                key={t}
                                className="px-2.5 py-1 rounded-lg text-sm bg-slate-50 text-slate-500 border border-slate-100 font-medium"
                              >
                                {t}
                              </span>
                            ))}
                          </div>

                        </ThreeDTilt>
                      )}
                    </div>

                    {/* Right Column Card Container */}
                    <div className={`${index % 2 !== 0 ? 'block' : 'hidden lg:block lg:invisible pointer-events-none'} pl-12 lg:pl-12`}>
                      {index % 2 !== 0 && (
                        <ThreeDTilt className="group p-8 rounded-3xl border border-slate-200/60 bg-white hover:border-slate-300 hover:shadow-lg transition-all duration-300 space-y-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] cursor-default">

                          {/* Card Header (Icon, Company, Period) */}
                          <div className="flex items-start gap-4">
                            <div className="p-3.5 rounded-2xl bg-[#f4f4f5] text-[#18181b] transition-all duration-300 group-hover:bg-[#18181b] group-hover:text-white">
                              <Icon className="h-7 w-7 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" strokeWidth={1.8} />
                            </div>
                            <div className="space-y-1 text-left">
                              <h4 className="text-xl font-bold text-slate-800">
                                {exp.company}
                              </h4>
                              <span className="inline-block text-sm font-semibold text-slate-500 bg-[#f4f4f5] px-2.5 py-1 rounded-full">
                                {exp.period}
                              </span>
                            </div>
                          </div>

                          {/* Role */}
                          <div className="text-left">
                            <h3 className="text-3xl font-bold text-slate-900 pt-2">
                              {exp.role}
                            </h3>
                          </div>

                          {/* Bullet Points */}
                          <ul className="space-y-2.5 pt-2 text-left">
                            {exp.bullets.map((bullet, idx) => (
                              <li key={idx} className="flex items-start text-lg sm:text-xl text-[#525252] leading-relaxed font-light">
                                <span className="text-[#a3a3a3] select-none mr-2 font-mono font-bold">&gt;</span>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Tech badges */}
                          <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 text-left">
                            {exp.tech.map((t) => (
                              <span
                                key={t}
                                className="px-2.5 py-1 rounded-lg text-sm bg-slate-50 text-slate-500 border border-slate-100 font-medium"
                              >
                                {t}
                              </span>
                            ))}
                          </div>

                        </ThreeDTilt>
                      )}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
