import { Code, Smartphone, Layers, GitBranch } from 'lucide-react';
import ThreeDTilt from './ThreeDTilt';
import ScrollReveal from './ScrollReveal';

export default function About() {
  const cards = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Responsive, accessible websites and web apps built with modern frontend practices.',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile experiences using React Native with polished interactions.',
    },
    {
      icon: Layers,
      title: 'Full Stack Solutions',
      description: 'End-to-end product development from UI to backend systems and deployment.',
    },
    {
      icon: GitBranch,
      title: 'API Development',
      description: 'Secure REST APIs designed for performance, maintainability, and integration.',
    },
  ];

  const educationList = [
    {
      degree: 'BS in Software Engineering',
      duration: '2024 - Present',
      institution: 'Abdul Wali Khan University Mardan (AWKUM)',
      description: 'Diving deep into data structures, software construction, and database design. I spend my time outside the classroom experimenting with React, building full-stack web applications, and refining my development skills.',
    },
    {
      degree: 'FSc Computer Science',
      duration: '2022 - 2024',
      institution: "The Scholar's College Katlang, Mardan",
      description: 'This is where my programming journey truly began. Focused on basic programming logic, physics, and advanced mathematics, completing my intermediate education with an 89% score under BISE Mardan.',
    },
    {
      degree: 'Diploma In Information Technology (DIT)',
      duration: '2022 - 2023',
      institution: "The Scholar's College Katlang, Mardan",
      description: 'An intensive, hands-on program where I learned database management, computer networks, and the fundamentals of web design. Graduated with a 75% score from the Board of Technical & Commerce Education Peshawar.',
    },
    {
      degree: 'Matric In Science',
      duration: '2020 - 2022',
      institution: 'Government High School Katlang, Mardan',
      description: 'Developed a strong curiosity for computing systems and scientific logic. Completed my secondary school certificate with a 91% score under the Board of Intermediate & Secondary Education Mardan.',
    },
  ];

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-[90px] bg-[#fafafa] text-slate-800 font-space overflow-hidden">
      <div className="w-full">
        <div className="grid gap-12 lg:grid-cols-12 items-start">

          {/* Left Column (Bio & Education) */}
          <div className="lg:col-span-7 space-y-8">
            <ScrollReveal animationClass="animate-fade-in" delay={50}>
              <div className="space-y-3">
                <span className="text-[14px] font-semibold uppercase tracking-[0.2em] text-[#737373]">
                  ABOUT ME
                </span>
                <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-slate-900">
                  Who I Am
                </h1>
              </div>
            </ScrollReveal>

            <ScrollReveal animationClass="animate-fade-in" delay={150}>
              <p className="text-lg sm:text-xl leading-relaxed text-[#525252] font-light">
                Shahab Dad is a passionate Full Stack Developer specializing in the MERN stack and React Native, focused on building elegant, scalable, and user-centered digital products that deliver strong performance and seamless experiences across web and mobile platforms.
              </p>
            </ScrollReveal>

            {/* Education Card wrapped in ThreeDTilt and ScrollReveal */}
            <ScrollReveal animationClass="animate-fade-in" delay={250}>
              <ThreeDTilt className="group p-8 rounded-3xl border border-slate-200/60 bg-white hover:border-slate-300 hover:shadow-lg transition-all duration-300 space-y-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)] cursor-default">
                <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-red-600">
                  EDUCATION
                </span>

                <div className="relative border-l-2 border-slate-100 pl-6 ml-2 space-y-8">
                  {educationList.map((edu, idx) => (
                    <div key={idx} className="relative group/item text-left">
                      {/* Bullet Indicator */}
                      <div className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-red-600 bg-white transition-all duration-300 group-hover:bg-red-600 group-hover:scale-125" />

                      <div className="space-y-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                          <h4 className="text-xl font-bold text-slate-900 group-hover/item:text-red-600 transition-colors">
                            {edu.degree}
                          </h4>
                          <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600 w-fit">
                            {edu.duration}
                          </span>
                        </div>

                        <p className="text-base text-slate-500 font-medium">
                          {edu.institution}
                        </p>

                        <p className="text-sm leading-relaxed text-slate-600 pt-1 font-light">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ThreeDTilt>
            </ScrollReveal>

            <ScrollReveal animationClass="animate-fade-in" delay={350}>
              <p className="text-lg sm:text-xl leading-relaxed text-[#525252] font-light">
                My career objective is to contribute to innovative teams where I can craft robust applications, solve complex product challenges, and continuously grow as a developer while delivering measurable value through clean architecture and thoughtful execution.
              </p>
            </ScrollReveal>
          </div>

          {/* Right Column (Cards with Staggered ScrollReveal) */}
          <div className="lg:col-span-5 space-y-6">
            {cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <ScrollReveal
                  key={idx}
                  animationClass="animate-fade-in"
                  delay={idx * 100}
                >
                  <ThreeDTilt
                    className="group p-6 rounded-3xl border border-slate-200/60 bg-white hover:border-slate-300 hover:shadow-lg transition-all duration-300 space-y-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] cursor-default"
                  >
                    <div className="p-3.5 rounded-xl bg-[#f4f4f5] w-fit text-[#18181b] transition-all duration-300 group-hover:bg-[#18181b] group-hover:text-white">
                      <Icon className="h-6 w-6 transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-[360deg]" strokeWidth={1.8} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-slate-900">
                        {card.title}
                      </h3>
                      <p className="text-base text-slate-500 leading-relaxed font-light">
                        {card.description}
                      </p>
                    </div>
                  </ThreeDTilt>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
