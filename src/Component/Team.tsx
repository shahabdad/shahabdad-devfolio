import { useState, useEffect } from 'react';
import profileImage from '../assets/Profile.png';
import { 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  CheckCircle2, 
  Award, 
  Code2, 
  Atom 
} from 'lucide-react';

const AnimatedCounter = ({ value, duration = 2000, suffix = '' }: { value: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * value));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [value, duration]);

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return <span>{formatNumber(count)}{suffix}</span>;
};

export default function Team() {
  const members = [
    {
      name: 'Shahab Dad',
      role: 'App Developer',
      avatar: profileImage,
    },
    {
      name: 'Boris Klein',
      role: 'Full Stack Developer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
    },
    {
      name: 'Dana Reyes',
      role: 'Backend Developer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150',
    },
    {
      name: 'Sophie Lane',
      role: 'Frontend Developer',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
    },
    {
      name: 'Amina Yusuf',
      role: 'Frontend Developer',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150',
    },
  ];

  const reviews = [
    {
      name: 'Ayesha Khan',
      role: 'Founder, Nova Studio',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150',
      text: 'Shahab delivered a clean, modern interface with excellent attention to detail. Communication was smooth and the final result exceeded expectations.',
    },
    {
      name: 'Michael Torres',
      role: 'Product Lead, Bright Labs',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150',
      text: 'The portfolio redesign felt premium and highly usable. Every section was thoughtfully structured and the responsiveness was flawless.',
    },
    {
      name: 'Sara Ahmed',
      role: 'Marketing Director, Orbit',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150',
      text: 'A reliable collaborator who understands both design and development. The outcome was polished, fast, and aligned with our brand.',
    },
  ];

  const certifications = [
    {
      title: 'MERN Stack Development',
      issuer: 'Tech Academy',
      year: '2024',
      icon: CheckCircle2,
    },
    {
      title: 'Information Technology Diploma',
      issuer: 'National Institute',
      year: '2023',
      icon: Award,
    },
    {
      title: 'JavaScript Development',
      issuer: 'Open Web School',
      year: '2023',
      icon: Code2,
    },
    {
      title: 'React Development',
      issuer: 'Frontend Guild',
      year: '2024',
      icon: Atom,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1200);
  const [animateWidth, setAnimateWidth] = useState(false);

  useEffect(() => {
    setAnimateWidth(true);
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const isMobile = windowWidth < 768;
  const maxIndex = isMobile ? reviews.length - 1 : reviews.length - 3;

  const nextReview = () => {
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-[90px] bg-white text-slate-800 font-space transition-colors duration-300">
      <div className="w-full space-y-24">
        
        {/* Meet The Team Section */}
        <div className="space-y-8">
          <div className="space-y-2 text-left">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#737373]">
              COLLABORATORS
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Meet The Team
            </h1>
            <p className="text-xl text-slate-500 font-light max-w-3xl">
              A collaborative group focused on building thoughtful digital experiences, strong systems, and polished execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {members.map((m) => (
              <div 
                key={m.name} 
                className="bg-white rounded-3xl border border-slate-200/60 p-6 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-md hover:scale-[1.01] transition-all duration-300 flex flex-col items-center text-center"
              >
                <img 
                  src={m.avatar} 
                  alt={m.name} 
                  className="w-20 h-20 rounded-full object-cover shadow-sm border border-slate-100 mb-4" 
                />
                <h3 className="text-xl font-bold text-slate-900">{m.name}</h3>
                <p className="text-base text-slate-500 mt-0.5">{m.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Client Reviews Section */}
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
            <div className="space-y-2 text-left">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#737373]">
                CLIENT REVIEWS
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                What Clients Say
              </h2>
              <p className="text-xl text-slate-500 font-light max-w-2xl">
                A few words from clients and collaborators who appreciated the process, communication, and final results.
              </p>
            </div>
            <div className="flex gap-2 self-start md:self-end">
              <button 
                onClick={prevReview}
                className="p-3 rounded-full border border-slate-200 hover:border-slate-400 hover:bg-slate-50 transition-all text-slate-600 cursor-pointer"
                aria-label="Previous review"
              >
                <ChevronLeft size={18} />
              </button>
              <button 
                onClick={nextReview}
                className="p-3 rounded-full border border-slate-200 hover:border-slate-400 hover:bg-slate-50 transition-all text-slate-600 cursor-pointer"
                aria-label="Next review"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="overflow-hidden w-full">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{
                transform: `translateX(calc(-${activeIndex * (isMobile ? 100 : 33.333)}% - ${activeIndex * (isMobile ? 0 : 1.5)}rem))`
              }}
            >
              {reviews.map((rev, idx) => (
                <div 
                  key={idx} 
                  className="w-full md:w-[calc(33.333%-1rem)] shrink-0 bg-white rounded-3xl border border-slate-200/60 p-8 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-md hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-4">
                    <div className="flex gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-slate-600 text-base leading-relaxed font-light">
                      "{rev.text}"
                    </p>
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    <img 
                      src={rev.avatar} 
                      alt={rev.name} 
                      className="w-10 h-10 rounded-full object-cover" 
                    />
                    <div className="text-left">
                      <h4 className="text-base font-bold text-slate-900">{rev.name}</h4>
                      <p className="text-sm text-slate-400 font-semibold">{rev.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? 'bg-slate-900 w-4' : 'bg-slate-200'
                }`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Achievements / Certifications Section */}
        <div className="space-y-8">
          <div className="space-y-2 text-left">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#737373]">
              ACHIEVEMENTS
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Certifications
            </h2>
            <p className="text-xl text-slate-500 font-light max-w-3xl">
              Professional milestones and verified learning achievements across development, technology, and modern web tooling.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => {
              const Icon = cert.icon;
              return (
                <div 
                  key={cert.title}
                  className="bg-white rounded-3xl border border-slate-200/60 p-8 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-md hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between min-h-[220px]"
                >
                  <div className="p-3.5 rounded-2xl bg-[#f4f4f5] text-[#18181b] w-fit mb-4">
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </div>
                  <div className="space-y-1 mt-auto">
                    <h3 className="text-lg font-bold text-slate-900 leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-base text-slate-500 font-medium">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-slate-400 font-semibold pt-1">
                      {cert.year}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* GitHub Activity Section */}
        <div className="space-y-8">
          <div className="space-y-2 text-left">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#737373]">
              OPEN SOURCE
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              GitHub Activity
            </h2>
            <p className="text-xl text-slate-500 font-light max-w-3xl">
              A snapshot of repository activity, contribution consistency, and the languages used most often across recent work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* GitHub Stats Card */}
            <div className="md:col-span-5 bg-white rounded-3xl border border-slate-200/60 p-8 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-md hover:scale-[1.01] transition-all duration-300 flex flex-col justify-center min-h-[240px]">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="space-y-1">
                  <h4 className="text-4xl font-extrabold text-slate-900">
                    <AnimatedCounter value={32} />
                  </h4>
                  <p className="text-sm text-slate-400 font-bold uppercase tracking-wider">
                    Repositories
                  </p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-4xl font-extrabold text-slate-900">
                    <AnimatedCounter value={1246} />
                  </h4>
                  <p className="text-sm text-slate-400 font-bold uppercase tracking-wider">
                    Contributions
                  </p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-4xl font-extrabold text-slate-900">
                    <AnimatedCounter value={96} suffix="%" />
                  </h4>
                  <p className="text-sm text-slate-400 font-bold uppercase tracking-wider">
                    Commit Streak
                  </p>
                </div>
              </div>
            </div>

            {/* Languages Card */}
            <div className="md:col-span-7 bg-white rounded-3xl border border-slate-200/60 p-8 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-md hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between space-y-6">
              <div className="flex justify-between items-center text-sm font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 pb-2">
                <span>Most Used Languages</span>
                <span>Percent</span>
              </div>
              <div className="space-y-4">
                {/* React progress bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-base font-bold text-slate-800">
                    <span>React</span>
                    <span>95%</span>
                  </div>
                  <div className="h-[7px] w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-500 rounded-full transition-all duration-500" style={{ width: animateWidth ? '95%' : '0%' }} />
                  </div>
                </div>

                {/* React Native progress bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-base font-bold text-slate-800">
                    <span>React Native</span>
                    <span>85%</span>
                  </div>
                  <div className="h-[7px] w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-sky-600 rounded-full transition-all duration-500" style={{ width: animateWidth ? '85%' : '0%' }} />
                  </div>
                </div>

                {/* JavaScript progress bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-base font-bold text-slate-800">
                    <span>JavaScript</span>
                    <span>80%</span>
                  </div>
                  <div className="h-[7px] w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full transition-all duration-500" style={{ width: animateWidth ? '80%' : '0%' }} />
                  </div>
                </div>

                {/* TypeScript progress bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-base font-bold text-slate-800">
                    <span>TypeScript</span>
                    <span>75%</span>
                  </div>
                  <div className="h-[7px] w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full transition-all duration-500" style={{ width: animateWidth ? '75%' : '0%' }} />
                  </div>
                </div>

                {/* CSS progress bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-base font-bold text-slate-800">
                    <span>CSS</span>
                    <span>98%</span>
                  </div>
                  <div className="h-[7px] w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-500 rounded-full transition-all duration-500" style={{ width: animateWidth ? '98%' : '0%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
