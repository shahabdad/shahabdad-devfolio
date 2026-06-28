import { useState, useEffect } from 'react';
import { ExternalLink, ArrowRight, ChevronLeft, ChevronRight, Key, Code, Shield, CloudLightning, Zap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import tataRideImg from '../assets/ta-ta-ride.vercel.app_.png';
import analyticsDashboardImg from '../assets/analytics_dashboard.png';
import fitTrackImg from '../assets/fittrack_mobile_app.png';
import weatherPageImg from '../assets/Wheatherpage.png';
import qrCodeImg1 from '../assets/QR-CODE01.png';
import qrCodeImg2 from '../assets/QR-CODE02.png';
import qrCodeImg3 from '../assets/QR_CODE03.png';

import quizAppImg from '../assets/quiz-ecru-nu.vercel.app_.png';
import quizAppImg1 from '../assets/quiz-ecru-nu.vercel.app_ (1).png';
import quizAppImg2 from '../assets/quiz-ecru-nu.vercel.app_ (2).png';
import quizAppImg3 from '../assets/quiz-ecru-nu.vercel.app_ (3).png';

import blogingImg from '../assets/Bloging.png';
import blogingImg1 from '../assets/Bloging01.png';
import blogingImg2 from '../assets/Bloging02.png';
import blogingImg3 from '../assets/Bloging03.png';
import blogingImg4 from '../assets/Bloging04.png';
import blogingImg5 from '../assets/Bloging05.png';

// E-Commerce project assets
import ecommAppImg from '../assets/ecommerceapp.PNG';
import ecommAppImg1 from '../assets/ecommerceapp01.PNG';
import ecommAppImg2 from '../assets/ecommerceapp02.PNG';
import ecommAppImg5 from '../assets/ecommerceapp05.PNG';
import ecommAppImg6 from '../assets/ecommerceapp06.PNG';
import ecommAppImg8 from '../assets/ecommerceapp08.PNG';

import ecommDashImg3 from '../assets/ecommerceapp03.PNG';
import ecommDashImg4 from '../assets/ecommerceapp04.PNG';
import ecommDashImg7 from '../assets/ecommerceapp07.PNG';
import ecommDashImg9 from '../assets/ecommerceapp09.PNG';
import ecommDashImg11 from '../assets/ecommerceapp11.PNG';
import ecommDashImg12 from '../assets/ecommerceapp12.PNG';
import ecommDashImg13 from '../assets/ecommerceapp13.PNG';
import ecommDashImg14 from '../assets/ecommerceapp14.PNG';
import ecommDashImg20 from '../assets/ecommerceapp20.PNG';
import agent from '../assets/agent.png';

const getIcon = (name: string) => {
  switch (name) {
    case 'Key': return <Key size={14} />;
    case 'Code': return <Code size={14} />;
    case 'Shield': return <Shield size={14} />;
    case 'CloudLightning': return <CloudLightning size={14} />;
    case 'Zap': return <Zap size={14} />;
    default: return <ExternalLink size={14} />;
  }
};

function ProjectCard({ p }: { p: any }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const images = p.images || (p.image ? [p.image] : []);
  const hasCarousel = images.length > 1;

  useEffect(() => {
    if (!hasCarousel) return;
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 2500); // 2.5 seconds auto-slide
    return () => clearInterval(timer);
  }, [hasCarousel, images.length]);

  const nextSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const currentImgObj = images[currentIdx];
  const imgSrc = typeof currentImgObj === 'object' && currentImgObj !== null ? currentImgObj.src : currentImgObj;
  const imgType = typeof currentImgObj === 'object' && currentImgObj !== null ? currentImgObj.type : 'dashboard';
  const isMobileSlide = imgType === 'mobile';
  const useMobileLayout = p.isMobile || p.hasMobileImages;

  return (
    <div className="group bg-white rounded-3xl border border-slate-200/60 overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-md hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between h-full">
      {/* Card Image / Carousel */}
      <div className={`w-full overflow-hidden relative group/carousel ${useMobileLayout ? 'h-64 bg-slate-950' : 'h-48 bg-slate-50'}`}>
        {images.length > 0 && (
          <img
            src={imgSrc}
            alt={`${p.title} - Slide ${currentIdx + 1}`}
            className={`w-full h-full ${
              p.isLongImage
                ? 'hover-scroll-image'
                : p.isMobile || isMobileSlide
                ? 'object-contain p-3'
                : 'object-cover'
            } transition-all duration-300 group-hover:scale-[1.02]`}
          />
        )}

        {/* Navigation Buttons for Carousel */}
        {hasCarousel && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-all opacity-0 group-hover/carousel:opacity-100 focus:outline-none cursor-pointer z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-all opacity-0 group-hover/carousel:opacity-100 focus:outline-none cursor-pointer z-10"
              aria-label="Next slide"
            >
              <ChevronRight size={16} />
            </button>

            {/* Dots indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 bg-black/40 px-2 py-1 rounded-full z-10">
              {images.map((_: string, idx: number) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentIdx(idx);
                  }}
                  className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${idx === currentIdx ? 'bg-white w-3' : 'bg-white/50'
                    }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-3">
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2">
            {p.tech.map((t: string) => (
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
          <div>
            <p className="text-base text-slate-500 leading-relaxed font-light transition-all duration-350">
              {p.description.length > 120 && !isExpanded
                ? `${p.description.slice(0, 120)}...`
                : p.description}
            </p>
            {p.description.length > 120 && (
              <div className="text-right mt-1">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsExpanded(!isExpanded);
                  }}
                  className="text-red-500 hover:text-red-650 text-xs font-black uppercase tracking-wider cursor-pointer focus:outline-none transition-all duration-200 hover:underline"
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2 pt-2">
          {p.customLinks ? (
            <>
              {/* Primary Links Grid */}
              <div className="grid grid-cols-2 gap-2">
                {p.customLinks.filter((l: any) => l.primary).map((link: any, lIdx: number) => (
                  <a
                    key={lIdx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 px-2.5 py-2 text-xs font-bold rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white !text-white transition-all shadow-sm"
                    style={{ color: '#ffffff' }}
                  >
                    {getIcon(link.iconName)}
                    {link.label}
                  </a>
                ))}
              </div>
              {/* Secondary Links Grid */}
              {p.customLinks.filter((l: any) => !l.primary).length > 0 && (
                <div className="grid grid-cols-3 gap-1.5">
                  {p.customLinks.filter((l: any) => !l.primary).map((link: any, lIdx: number) => (
                    <a
                      key={lIdx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1 px-1.5 py-2 text-[10px] font-bold rounded-lg bg-slate-50 border border-slate-200/60 hover:bg-slate-100 text-slate-600 transition-all text-center"
                    >
                      {getIcon(link.iconName)}
                      <span className="truncate">{link.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              {p.githubLink && p.githubLink !== "#" ? (
                <a
                  href={p.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#111] hover:bg-black text-white !text-white text-base font-semibold rounded-xl transition-all"
                  style={{ color: '#ffffff' }}
                >
                  <svg className="h-4 w-4 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  GitHub
                </a>
              ) : (
                <div className="flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-100 text-slate-400 text-base font-semibold rounded-xl select-none cursor-not-allowed">
                  No GitHub
                </div>
              )}
              {p.demoLink && p.demoLink !== "#" ? (
                <a
                  href={p.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-base font-semibold rounded-xl transition-all"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              ) : (
                <div className="flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-50 border border-slate-200 text-slate-400 text-base font-semibold rounded-xl select-none cursor-not-allowed">
                  No Demo
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Project() {
  const projects = [
    {
      title: "🛍️ E-Commerce Ecosystem",
      description: "A complete full-stack e-commerce solution comprising a React Native & Expo Mobile Application and a Node.js + Express Admin Dashboard & REST API. Features secure Clerk authentication (Google/Apple sign-in), cart/favorites and checkout order flow, Stripe payments, address handling, product inventory CRUD, live analytics dashboard, background job scheduling with Inngest, Sentry error monitoring, and automated Sevalla deployments.",
      workDays: "35 Days",
      tech: ['React Native', 'Node.js', 'Express', 'React', 'Clerk', 'Stripe', 'Inngest', 'Sentry', 'Sevalla'],
      hasMobileImages: true,
      images: [
        { src: ecommDashImg20, type: 'dashboard' },
        { src: ecommAppImg, type: 'mobile' },
        { src: ecommAppImg1, type: 'mobile' },
        { src: ecommDashImg3, type: 'dashboard' },
        { src: ecommAppImg2, type: 'mobile' },
        { src: ecommDashImg4, type: 'dashboard' },
        { src: ecommAppImg5, type: 'mobile' },
        { src: ecommDashImg7, type: 'dashboard' },
        { src: ecommAppImg6, type: 'mobile' },
        { src: ecommDashImg9, type: 'dashboard' },
        { src: ecommAppImg8, type: 'mobile' },
        { src: ecommDashImg11, type: 'dashboard' },
        { src: ecommDashImg12, type: 'dashboard' },
        { src: ecommDashImg13, type: 'dashboard' },
        { src: ecommDashImg14, type: 'dashboard' }
      ],
      customLinks: [
        { label: "Try Clerk", url: "https://go.clerk.com/QYO8WuF", primary: true, iconName: "Key" },
        { label: "Try Sevalla", url: "https://dub.sh/sevalla50", primary: true, iconName: "CloudLightning" },
        { label: "CodeRabbit PR", url: "https://dub.sh/cr-ecomm", primary: false, iconName: "Code" },
        { label: "Try Sentry", url: "https://dub.sh/sentry-c2", primary: false, iconName: "Shield" },
        { label: "Try Inngest", url: "https://dub.sh/inngest3", primary: false, iconName: "Zap" }
      ]
    },
    {
      title: "Tata Ride Website",
      description: "Tata Ride is a professional taxi booking frontend website built with React, CSS, and Bootstrap, fully responsive and user-friendly.",
      workDays: "2 Days",
      tech: ['React', 'CSS', 'Bootstrap'],
      demoLink: "https://ta-ta-ride.vercel.app/",
      githubLink: "https://github.com/shahabdad/TaTaRide.git",
      image: tataRideImg
    },
    {
      title: "CRM Analytics Dashboard",
      description: "A collaborative CRM tool for sales and marketing with real-time charts, user tracking, and data visualization.",
      workDays: "30 Days",
      tech: ['React', 'Vite', 'Recharts', 'APIs'],
      demoLink: "https://currency-converter-3.vercel.app/",
      githubLink: "https://github.com/shahabdad/currency-converter.git",
      image: analyticsDashboardImg
    },
    {
      title: "Quiz App",
      description: "A C++ language quiz application where users can test their knowledge and potentially earn rewards by participating.",
      workDays: "12 Days",
      tech: ['React', 'TypeScript', 'Tailwind'],
      demoLink: "https://quiz-ecru-nu.vercel.app/",
      githubLink: "#",
      images: [quizAppImg, quizAppImg1, quizAppImg2, quizAppImg3]
    },
    {
      title: "AI AGENT",
      description: `SignalsAPI — AI Sales Agent Landing Page. A high-converting, modern B2B SaaS landing page built from a Figma design for a client project. This application serves as the marketing face for SignalsAPI, an AI sales agent designed to help recruitment agencies automate lead generation and meeting bookings.

Project Summary:
Type: Client Freelance Project (Figma to Web UI)
Timeline: Completed in 3 hours over a 2-day period
Budget Context: $15 micro-budget milestone

🛠️ Tech Stack & Architecture:
Frontend Library: React (v19) & Vite (for fast HMR and optimized builds)
Styling & Layout: Tailwind CSS v4 & Bootstrap 5 (Hybrid approach combining utility classes with responsive grid structures)
Typography & Icons: Google Fonts (Space Grotesk & Satoshi) and React Icons / FontAwesome

✨ Key Features & Sections Implemented:
- Interactive Hero Section: Sleek navigation bar and a bold introductory fold highlighting the value proposition with micro-animations.
- A/B Split-Comparison Grid: A custom card-based comparison component highlighting the advantages of the AI Agent vs. Traditional BDR recruitment models.
- Step-by-Step Interactive Walkthrough:
  - Step 1: Opportunity monitoring dashboard representation.
  - Step 2: Simulated LinkedIn chat thread UI illustrating the AI's direct-to-decision-maker outreach.
  - Step 3: Dynamic calendar booking preview demonstrating automatic scheduling.
- Client Testimonial Section: Sleek layouts displaying G2 ratings and multiple user reviews with custom background radial gradients.
- No-Risk Guarantee Section: Clear pricing transparency checklist, mascot placement, and call-to-action buttons designed for maximum conversion rate optimization (CRO).
- Responsive Design: Optimized for seamless display across mobile, tablet, and desktop viewports.`,
      workDays: "2 Days",
      tech: ['React', 'TypeScript', 'Tailwind', 'Bootstrap'],
      demoLink: "https://agent-tau-three.vercel.app/",
      githubLink: "https://github.com/shahabdad/Agent",
      image: agent,
      isLongImage: true
    },
{
  title: "QR Code Generator",
    description: "An advanced, responsive web application for generating and scanning custom QR codes. Supports multiple inputs (URLs, Wi-Fi details, SMS, Emails, vCards), custom foreground/background colors, logo overlays, PNG/SVG vector downloads, live scanner functionality, and history logs.",
      workDays: "3 Days",
        tech: ['React', 'CSS3', 'Vite', 'HTML5'],
          demoLink: "https://qr-code-delta-lemon.vercel.app/",
            githubLink: "#",
              images: [qrCodeImg1, qrCodeImg2, qrCodeImg3]
},
{
  title: "Weather App",
    description: "A real-time weather web application that detects the user's location automatically and shows live weather updates with city-based search.",
      workDays: "2 Days",
        tech: ['React', 'Tailwind CSS', 'API'],
          demoLink: "https://weather-orpin-seven.vercel.app/",
            githubLink: "#",
              image: weatherPageImg
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
    description: "Developed a full-stack MERN blogging platform that enables users to create, manage, and share blog posts. Implemented authentication, category filtering, likes, comments, profile management, and Cloudinary-based image uploads. Built with React, Node.js, Express, and MongoDB, ensuring a responsive and scalable user experience.",
      workDays: "18 Days",
        tech: ['React', 'Node.js', 'Express', 'MongoDB'],
          demoLink: "https://github.com/shahabdad/BlogApp",
            githubLink: "https://github.com/shahabdad/BlogApp",
              images: [
                blogingImg,
                blogingImg1,
                blogingImg2,
                blogingImg3,
                blogingImg4,
                blogingImg5
              ]
},
{
  title: "FitTrack Mobile App",
    description: "A cross-platform React Native fitness tracking application with workout plans, real-time activity metrics, and offline support.",
      workDays: "20 Days",
        tech: ['React Native', 'TypeScript', 'Redux', 'SQLite'],
          demoLink: "#",
            githubLink: "#",
              image: fitTrackImg
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
            <ProjectCard p={p} />
          </ScrollReveal>
        ))}
      </div>

    </div>
  </section>
);
}
