import { Code, Smartphone, Layers, GitBranch } from 'lucide-react';
import ThreeDTilt from './ThreeDTilt';


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

  return (
    <section className="min-h-screen py-20 px-[90px] bg-[#fafafa] text-slate-800 font-space animate-fade-in-up">
      <div className="w-full">
        <div className="grid gap-12 lg:grid-cols-12 items-start">

          {/* Left Column (Bio & Education) */}
          <div className="lg:col-span-7 space-y-8 animate-fade-in-up delay-75">
            <div className="space-y-3">
              <span className="text-[14px] font-semibold uppercase tracking-[0.2em] text-[#737373]">
                ABOUT ME
              </span>
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-slate-900">
                Who I Am
              </h1>
            </div>

            <p className="text-lg sm:text-xl leading-relaxed text-[#525252] font-light">
              Shahab Dad is a passionate Full Stack Developer specializing in the MERN stack and React Native, focused on building elegant, scalable, and user-centered digital products that deliver strong performance and seamless experiences across web and mobile platforms.
            </p>

            {/* Education Card wrapped in ThreeDTilt */}
            <ThreeDTilt className="group p-8 rounded-3xl border border-slate-200/60 bg-white hover:border-slate-300 hover:shadow-lg transition-all duration-300 space-y-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] cursor-default">
              <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#737373]">
                EDUCATION
              </span>
              <div className="space-y-1.5">
                <h3 className="text-2xl font-bold text-slate-900">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-base text-slate-500">
                  University of Engineering and Technology
                </p>
                <p className="text-sm text-[#a3a3a3]">
                  Graduated 2023
                </p>
              </div>
            </ThreeDTilt>

            <p className="text-lg sm:text-xl leading-relaxed text-[#525252] font-light">
              My career objective is to contribute to innovative teams where I can craft robust applications, solve complex product challenges, and continuously grow as a developer while delivering measurable value through clean architecture and thoughtful execution.
            </p>
          </div>

          {/* Right Column (Cards) wrapped in ThreeDTilt */}
          <div className="lg:col-span-5 space-y-6">
            {cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <ThreeDTilt 
                  key={idx}
                  className="group p-6 rounded-3xl border border-slate-200/60 bg-white hover:border-slate-300 hover:shadow-lg transition-all duration-300 space-y-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] cursor-default animate-fade-in-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="p-3.5 rounded-xl bg-[#f4f4f5] w-fit text-[#18181b] transition-all duration-300 group-hover:bg-[#18181b] group-hover:text-white">
                    <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" strokeWidth={1.8} />
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
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
