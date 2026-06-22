import { Code2, Smartphone, Briefcase } from 'lucide-react';
import ThreeDTilt from './ThreeDTilt';
import ScrollReveal from './ScrollReveal';

export default function Experience() {
  const experiences = [
    {
      role: 'React Native Developer',
      company: 'TenGrains Company',
      period: 'Dec 2025 - Present',
      icon: Smartphone,
      bullets: [
        'Engineered high-performance, cross-platform mobile apps for iOS and Android, focusing on fluid animations and responsive layouts.',
        'Integrated Firebase services for real-time synchronizations, custom cloud messaging, and push notifications to boost user retention.',
        'Partnered closely with designers to translate high-fidelity Figma mockups into structured, reusable React Native components.',
        'Launched and maintained 4 production apps on the App Store and Google Play Store, successfully reaching over 10,000 active installations.',
      ],
      tech: ['React Native', 'Firebase', 'iOS & Android', 'UI/UX Design'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600&h=400',
    },
    {
      role: 'Full Stack Developer',
      company: 'Encoder Technologies',
      period: 'Jul 2024 - Nov 2025',
      icon: Code2,
      bullets: [
        'Designed and developed secure RESTful API architectures and backend microservices using Node.js, Express, and JSON Web Tokens.',
        'Built highly dynamic, accessible web dashboards using React.js, optimizing global application state with Redux Toolkit.',
        'Handled database modeling and indexing in MongoDB, significantly reducing query response times for heavy data requests.',
        'Streamlined application deployment workflows using AWS EC2, Docker containers, and automated GitHub Actions pipelines.',
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AWS', 'Docker'],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600&h=400',
    },
    {
      role: 'Freelance Developer',
      company: 'Self-Employed',
      period: 'Mar 2024 - Jun 2024',
      icon: Briefcase,
      bullets: [
        'Built and shipped over 20 tailor-made web projects for international clients, ensuring responsive, client-approved deliverables.',
        'Developed robust e-commerce architectures integrating Stripe, PayPal, and custom automated email confirmation systems.',
        'Managed end-to-end client relationships, from gathering initial system specifications to providing long-term support and maintenance.',
        'Leveraged the MERN stack to build secure, scalable Software-as-a-Service (SaaS) web platforms.',
      ],
      tech: ['MERN Stack', 'E-Commerce', 'SaaS', 'Client Relations'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600&h=400',
    },
  ];

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-[90px] bg-[#fafafa] text-slate-800 font-space overflow-hidden">
      <div className="w-full max-w-none space-y-12 px-2 md:px-8 lg:px-12">

        {/* Header */}
        <ScrollReveal animationClass="animate-fade-in-up" delay={50}>
          <div className="space-y-4 text-center max-w-xl mx-auto">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              MY JOURNEY
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Work Experience
            </h1>
          </div>
        </ScrollReveal>

        {/* Timeline Stack Container */}
        <div className="relative mt-12">

          {/* Vertical Timeline Axis Line (Dashed) */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0 border-l-2 border-dashed border-slate-200/80 -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-6">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <ScrollReveal
                  key={index}
                  animationClass={index % 2 === 0 ? "animate-fade-in-left" : "animate-fade-in-right"}
                  delay={index * 150}
                  className="relative group"
                >
                  {/* Timeline Indicator Node with Number */}
                  <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 top-8 w-8 h-8 rounded-full bg-slate-950 text-white text-xs font-bold flex items-center justify-center shadow-sm z-10 group-hover:bg-red-600 transition-colors duration-300">
                    {experiences.length - index}
                  </div>

                  {/* Staggered Row Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

                    {/* Left Column Card Container */}
                    <div className="pl-10 lg:pl-0 lg:pr-12">
                      {index % 2 === 0 ? (
                        <ThreeDTilt className="group p-5 sm:p-8 rounded-3xl border-y border-r border-l-4 lg:border-l border-slate-200/60 lg:border-r-4 lg:border-r-red-600 border-l-red-600 bg-white hover:shadow-xl hover:shadow-slate-100/40 transition-all duration-300 space-y-4 shadow-[0_2px_8px_rgba(0,0,0,0.01)] cursor-default h-full">

                          {/* Card Header (Icon, Company, Period) */}
                          <div className="flex items-start gap-4 pb-4 border-b border-slate-100">
                            <div className="p-3 rounded-2xl bg-[#f4f4f5] text-[#18181b] transition-all duration-300 group-hover:bg-slate-950 group-hover:text-white ripple-slate">
                              <Icon className="h-6 w-6 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]" strokeWidth={1.8} />
                            </div>
                            <div className="space-y-1.5 text-left">
                              <h4 className="text-lg font-bold text-slate-800">
                                {exp.company}
                              </h4>
                              <span className="inline-block text-xs font-semibold text-slate-500 bg-[#f4f4f5] px-2.5 py-0.5 rounded-full shadow-3xs">
                                {exp.period}
                              </span>
                            </div>
                          </div>

                          {/* Role */}
                          <div className="text-left">
                            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                              {exp.role}
                            </h3>
                          </div>

                          {/* Bullet Points */}
                          <ul className="space-y-3 text-left">
                            {exp.bullets.map((bullet, idx) => (
                              <li key={idx} className="flex items-start text-base text-slate-600 leading-relaxed font-light">
                                <span className="h-1.5 w-1.5 rounded-full bg-red-600 mt-2.5 mr-3 shrink-0" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Tech badges */}
                          <div className="flex flex-wrap gap-2 pt-2 text-left">
                            {exp.tech.map((t) => (
                              <span
                                key={t}
                                className="px-3.5 py-1 rounded-xl text-xs sm:text-sm font-semibold bg-slate-50 text-slate-500 border border-slate-200/60 transition-all duration-300 hover:bg-slate-950 hover:text-white hover:border-slate-950 cursor-default"
                              >
                                {t}
                              </span>
                            ))}
                          </div>

                        </ThreeDTilt>
                      ) : (
                        /* Side image on the left for odd rows (only on desktop) */
                        <div className="hidden lg:block h-full">
                          <ThreeDTilt className="rounded-3xl border border-slate-200/60 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                            <img
                              src={exp.image}
                              alt={`${exp.company} Work Scene`}
                              className="w-full h-full object-cover min-h-[300px]"
                            />
                          </ThreeDTilt>
                        </div>
                      )}
                    </div>

                    {/* Right Column Card Container */}
                    <div className="pl-10 lg:pl-12">
                      {index % 2 !== 0 ? (
                        <ThreeDTilt className="group p-5 sm:p-8 rounded-3xl border-y border-r border-l-4 border-slate-200/60 border-l-red-600 bg-white hover:shadow-xl hover:shadow-slate-100/40 transition-all duration-300 space-y-4 shadow-[0_2px_8px_rgba(0,0,0,0.01)] cursor-default h-full">

                          {/* Card Header (Icon, Company, Period) */}
                          <div className="flex items-start gap-4 pb-4 border-b border-slate-100">
                            <div className="p-3 rounded-2xl bg-[#f4f4f5] text-[#18181b] transition-all duration-300 group-hover:bg-slate-950 group-hover:text-white ripple-slate">
                              <Icon className="h-6 w-6 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]" strokeWidth={1.8} />
                            </div>
                            <div className="space-y-1.5 text-left">
                              <h4 className="text-lg font-bold text-slate-800">
                                {exp.company}
                              </h4>
                              <span className="inline-block text-xs font-semibold text-slate-500 bg-[#f4f4f5] px-2.5 py-0.5 rounded-full shadow-3xs">
                                {exp.period}
                              </span>
                            </div>
                          </div>

                          {/* Role */}
                          <div className="text-left">
                            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                              {exp.role}
                            </h3>
                          </div>

                          {/* Bullet Points */}
                          <ul className="space-y-3 text-left">
                            {exp.bullets.map((bullet, idx) => (
                              <li key={idx} className="flex items-start text-base text-slate-600 leading-relaxed font-light">
                                <span className="h-1.5 w-1.5 rounded-full bg-red-600 mt-2.5 mr-3 shrink-0" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Tech badges */}
                          <div className="flex flex-wrap gap-2 pt-2 text-left">
                            {exp.tech.map((t) => (
                              <span
                                key={t}
                                className="px-3.5 py-1 rounded-xl text-xs sm:text-sm font-semibold bg-slate-50 text-slate-500 border border-slate-200/60 transition-all duration-300 hover:bg-slate-950 hover:text-white hover:border-slate-950 cursor-default"
                              >
                                {t}
                              </span>
                            ))}
                          </div>

                        </ThreeDTilt>
                      ) : (
                        /* Side image on the right for even rows (only on desktop) */
                        <div className="hidden lg:block h-full">
                          <ThreeDTilt className="rounded-3xl border border-slate-200/60 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                            <img
                              src={exp.image}
                              alt={`${exp.company} Work Scene`}
                              className="w-full h-full object-cover min-h-[300px]"
                            />
                          </ThreeDTilt>
                        </div>
                      )}
                    </div>

                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
