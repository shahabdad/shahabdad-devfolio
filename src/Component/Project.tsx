import { ExternalLink, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Project() {
  const projects = [
    {
      title: "Tata Ride Website",
      description: "Tata Ride is a professional taxi booking frontend website built with React, CSS, and Bootstrap, fully responsive and user-friendly.",
      workDays: "2 Days",
      tech: ['React', 'CSS', 'Bootstrap'],
      demoLink: "https://ta-ta-ride.vercel.app/",
      githubLink: "#",
      image: "https://images.unsplash.com/photo-1593950315186-76a92f6ae64e?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      title: "Currency Converter",
      description: "A collaborative CRM tool for sales and marketing.",
      workDays: "30 Days",
      tech: ['React', 'Vite', 'APIs'],
      demoLink: "https://currency-converter-3.vercel.app/",
      githubLink: "#",
      image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      title: "Quiz App",
      description: "A C++ language quiz application where users can test their knowledge and potentially earn rewards by participating.",
      workDays: "12 Days",
      tech: ['React', 'TypeScript', 'Tailwind'],
      demoLink: "https://quiz-ecru-nu.vercel.app/",
      githubLink: "#",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      title: "QR Code Generator",
      description: "A responsive web application that allows users to generate QR codes instantly from text or URLs. Features clean designs and easy downloads.",
      workDays: "2 Hours",
      tech: ['React', 'HTML5', 'CSS3'],
      demoLink: "https://qr-code-delta-lemon.vercel.app/",
      githubLink: "#",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      title: "Weather App",
      description: "A real-time weather web application that detects the user's location automatically and shows live weather updates with city-based search.",
      workDays: "2 Days",
      tech: ['React', 'Tailwind CSS', 'API'],
      demoLink: "https://weather-orpin-seven.vercel.app/",
      githubLink: "#",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      title: "Portfolio Website",
      description: "A professional portfolio showcasing skills and projects.",
      workDays: "15 Days",
      tech: ['HTML', 'CSS', 'JavaScript'],
      demoLink: "https://metro.up.railway.app/",
      githubLink: "#",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      title: "Blog Platform",
      description: "A dynamic platform for creating and managing blogs.",
      workDays: "18 Days",
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      demoLink: "https://github.com/shahabdad/BlogApp",
      githubLink: "https://github.com/shahabdad/BlogApp",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      title: "Tic-Tac-Toe Deluxe",
      description: "A sleek and modern Tic-Tac-Toe game with dark mode, interactive animations, and a fully responsive design for all devices.",
      workDays: "3-5 Days",
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      demoLink: "https://game-dad.vercel.app/",
      githubLink: "#",
      image: "https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      title: "Urlshortner Platform",
      description: "URL Platform is a simple and efficient web application for event planning and coordination, helping users manage events and schedules with ease.",
      workDays: "1 Day",
      tech: ['Node.js', 'Express', 'MongoDB'],
      demoLink: "https://url-shortner-v7hh.vercel.app/",
      githubLink: "#",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      title: "Tic Tac Toe Game",
      description: "Tic Tac Toe is a classic two-player game built using React. This interactive web app allows players to take turns marking X and O on a 3x3 grid.",
      workDays: "1 Day",
      tech: ['React', 'CSS', 'JavaScript'],
      demoLink: "https://game-dad.vercel.app/",
      githubLink: "#",
      image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      title: "Scientific Calculator",
      description: "Scientific Calculator is a responsive and interactive web tool that allows users to perform basic and advanced mathematical calculations.",
      workDays: "1 Day",
      tech: ['React', 'CSS', 'JavaScript'],
      demoLink: "https://scientific-calculator-beta-beige.vercel.app/",
      githubLink: "#",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=600&h=400"
    }
  ];

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-[90px] bg-white text-slate-800 font-space overflow-hidden">
      <div className="w-full space-y-12">

        {/* Header */}
        <ScrollReveal animationClass="animate-fade-in-up" delay={50}>
          <div className="flex justify-between items-end pb-4 border-b border-slate-100">
            <div className="space-y-2 text-left">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#737373]">
                PORTFOLIO
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                Featured Projects
              </h1>
            </div>
            <a href="#projects" className="flex items-center gap-1.5 text-base font-bold text-slate-900 hover:text-slate-600 transition-colors">
              <span>All Work ({projects.length})</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </ScrollReveal>

        {/* Project Grid */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <ScrollReveal
              key={idx}
              animationClass="animate-slide-up-fade"
              delay={(idx % 3) * 150}
              className="flex flex-col"
            >
              <div
                className="group bg-white rounded-3xl border border-slate-200/60 overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-md hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between h-full"
              >
                {/* Card Image */}
                <div className="w-full h-48 overflow-hidden bg-slate-50">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div className="space-y-3">
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-full text-sm font-semibold bg-slate-100 text-slate-600"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Title & Duration */}
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="text-xl font-extrabold text-slate-900 leading-tight">
                        {p.title}
                      </h3>
                      <span className="text-xs font-semibold bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-full shrink-0">
                        {p.workDays}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-base text-slate-500 leading-relaxed font-light">
                      {p.description}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <a
                      href={p.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#111] hover:bg-black text-white text-base font-semibold rounded-xl transition-all"
                    >
                      GitHub
                    </a>
                    <a
                      href={p.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-base font-semibold rounded-xl transition-all"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
