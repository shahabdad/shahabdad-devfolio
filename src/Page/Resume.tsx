import { Mail, Phone, MapPin, Globe, ArrowLeft, Printer } from 'lucide-react';
import profileImage from '../assets/Profile.png';

export default function Resume() {
  const handlePrint = () => {
    window.print();
  };

  const skills = [
    { category: 'Frontend', items: ['React.js', 'React Native', 'TypeScript', 'JavaScript', 'HTML5 & CSS3', 'Tailwind CSS', 'Bootstrap'] },
    { category: 'Backend & DB', items: ['Node.js', 'Express.js', 'RESTful APIs', 'MongoDB', 'Mongoose', 'Firebase'] },
    { category: 'Tools & DevOps', items: ['Git & GitHub', 'Postman', 'AWS EC2', 'Docker', 'CI/CD Pipelines', 'Figma'] }
  ];

  const experience = [
    {
      role: 'React Native Developer',
      company: 'TenGrains Company',
      period: 'Dec 2025 - Present',
      bullets: [
        'Engineled high-performance, cross-platform mobile apps for iOS and Android, focusing on fluid animations and responsive layouts.',
        'Integrated Firebase services for real-time synchronizations, custom cloud messaging, and push notifications to boost user retention.',
        'Partnered closely with designers to translate high-fidelity Figma mockups into structured, reusable React Native components.',
        'Launched and maintained 4 production apps on the App Store and Google Play Store, successfully reaching over 10,000 active installations.'
      ]
    },
    {
      role: 'Full Stack Developer',
      company: 'Encoder Technologies',
      period: 'Jul 2024 - Nov 2025',
      bullets: [
        'Designed and developed secure RESTful API architectures and backend microservices using Node.js, Express, and JSON Web Tokens.',
        'Built highly dynamic, accessible web dashboards using React.js, optimizing global application state with Redux Toolkit.',
        'Handled database modeling and indexing in MongoDB, significantly reducing query response times for heavy data requests.',
        'Streamlined application deployment workflows using AWS EC2, Docker containers, and automated GitHub Actions pipelines.'
      ]
    },
    {
      role: 'Freelance Developer',
      company: 'Self-Employed',
      period: 'Mar 2024 - Jun 2024',
      bullets: [
        'Built and shipped over 20 tailor-made web projects for international clients, ensuring responsive, client-approved deliverables.',
        'Developed robust e-commerce architectures integrating Stripe, PayPal, and custom automated email confirmation systems.',
        'Managed end-to-end client relationships, from gathering initial system specifications to providing long-term support and maintenance.'
      ]
    }
  ];

  const education = [
    {
      degree: 'BS in Software Engineering',
      institution: 'Abdul Wali Khan University Mardan (AWKUM)',
      period: '2024 - Present'
    },
    {
      degree: 'FSc Computer Science',
      institution: "The Scholar's College Katlang, Mardan",
      period: '2022 - 2024'
    },
    {
      degree: 'Diploma In Information Technology (DIT)',
      institution: "The Scholar's College Katlang, Mardan",
      period: '2022 - 2023'
    }
  ];

  const projects = [
    {
      title: 'Full-Stack E-Commerce Ecosystem',
      tech: 'React Native, Node.js, Express, Clerk, Stripe, Sevalla',
      description: 'A complete e-commerce suite consisting of a React Native & Expo mobile application, an Express REST API, and an admin dashboard featuring product management, analytics, Inngest jobs, and Sentry tracking.'
    },
    {
      title: 'AI AGENT (SignalsAPI)',
      tech: 'React, TypeScript, Tailwind, Bootstrap',
      description: 'A high-converting B2B SaaS landing page built from Figma, showcasing an AI sales agent that automates lead generation, LinkedIn outreach, and calendar bookings.'
    },
    {
      title: 'Blog Platform',
      tech: 'React, Node.js, Express, MongoDB',
      description: 'MERN blogging platform enabling users to create, manage, and share blog posts, with secure authentication, category filtering, likes, comments, and Cloudinary uploads.'
    },
    {
      title: 'CRM Analytics Dashboard',
      tech: 'React, Vite, Recharts, APIs',
      description: 'A collaborative CRM tool for sales and marketing featuring real-time charts, user tracking, and interactive data visualization.'
    },
    {
      title: 'QR Code Generator',
      tech: 'React, CSS3, Vite, HTML5',
      description: 'An advanced web application for generating and scanning custom QR codes with color customization, logo overlays, and historical logs.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 font-space print:bg-white print:py-0 print:px-0">

      {/* Print Action Header (Hidden during Print) */}
      <div className="max-w-4xl mx-auto mb-6 flex justify-between items-center print:hidden">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </a>

        <button
          onClick={handlePrint}
          className="inline-flex h-10 items-center gap-2 rounded-full bg-slate-950 px-5 text-sm font-semibold text-white transition-all hover:bg-slate-900 cursor-pointer shadow-sm"
        >
          <Printer size={16} />
          Print / Save as PDF
        </button>
      </div>

      {/* Main Resume Sheet */}
      <div className="max-w-4xl mx-auto bg-white shadow-xl border border-slate-200/50 rounded-3xl p-8 sm:p-12 print:shadow-none print:border-none print:p-0 print:m-0 print:max-w-full">

        {/* Header: Name, Title, Photo & Contacts */}
        <div className="border-b border-slate-200 pb-8 flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
            <img
              src={profileImage}
              alt="Shahab Dad"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover shadow-md border-2 border-slate-100"
            />
            <div className="space-y-2 mt-2">
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
                Shahab Dad
              </h1>
              <p className="text-lg font-bold text-indigo-650 tracking-wider uppercase">
                Full Stack & React Native Developer
              </p>
            </div>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2.5 text-sm font-medium text-slate-600 self-stretch md:self-auto md:text-right">
            <a href="mailto:shahabdad50@gmail.com" className="flex items-center md:justify-end gap-2 hover:text-slate-900">
              <Mail size={14} className="text-slate-400" />
              shahabdad50@gmail.com
            </a>
            <a href="tel:+923191796621" className="flex items-center md:justify-end gap-2 hover:text-slate-900">
              <Phone size={14} className="text-slate-400" />
              +92 319 1796621
            </a>
            <span className="flex items-center md:justify-end gap-2">
              <MapPin size={14} className="text-slate-400" />
              Mardan, KPK, Pakistan
            </span>
            <a href="https://github.com/shahabdad" target="_blank" rel="noopener noreferrer" className="flex items-center md:justify-end gap-2 hover:text-slate-900">
              <svg className="h-3.5 w-3.5 text-slate-400 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              github.com/shahabdad
            </a>
            <a href="https://linkedin.com/in/shahabdad" target="_blank" rel="noopener noreferrer" className="flex items-center md:justify-end gap-2 hover:text-slate-900">
              <svg className="h-3.5 w-3.5 text-slate-400 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              linkedin.com/in/shahabdad
            </a>
            <a href="https://shahabdad.dev" target="_blank" rel="noopener noreferrer" className="flex items-center md:justify-end gap-2 hover:text-slate-900">
              <Globe size={14} className="text-slate-400" />
              shahabdad.dev
            </a>
          </div>
        </div>

        {/* Profile Summary */}
        <div className="py-6 border-b border-slate-200 text-left">
          <h2 className="text-lg font-bold text-slate-950 uppercase tracking-wider mb-2">
            Professional Summary
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-light">
            Detail-oriented and results-driven Full Stack and React Native Developer with over 3 years of hands-on experience designing, developing, and deploying robust applications. Highly skilled in frontend framework scaling, secure API integration, and cross-platform native mobile solutions. Dedicated to clean code practices and intuitive design implementations.
          </p>
        </div>

        {/* Grid for two columns (Main & Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1.2fr] gap-8 pt-6">

          {/* Main Column (Experience & Projects) */}
          <div className="space-y-8 text-left">
            {/* Experience */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-slate-950 uppercase tracking-wider border-b border-slate-100 pb-1">
                Work Experience
              </h2>
              <div className="space-y-6">
                {experience.map((exp, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-baseline gap-2">
                      <h3 className="text-base font-bold text-slate-900">
                        {exp.role} <span className="font-medium text-slate-500">at {exp.company}</span>
                      </h3>
                      <span className="text-xs font-semibold text-slate-500 shrink-0">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="list-disc pl-4 space-y-1 text-sm text-slate-650 leading-relaxed font-light">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Projects */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-slate-950 uppercase tracking-wider border-b border-slate-100 pb-1">
                Selected Projects
              </h2>
              <div className="space-y-4">
                {projects.map((proj, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-sm font-bold text-slate-900">{proj.title}</h3>
                      <span className="text-xs font-semibold text-indigo-650 bg-indigo-50 px-2 py-0.5 rounded-full">
                        {proj.tech}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 font-light">
                      {proj.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Column (Skills & Education) */}
          <div className="space-y-8 text-left border-t lg:border-t-0 lg:border-l lg:pl-8 border-slate-200 pt-6 lg:pt-0">
            {/* Skills */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-slate-950 uppercase tracking-wider border-b border-slate-100 pb-1">
                Technical Skills
              </h2>
              <div className="space-y-4">
                {skills.map((skillGroup, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      {skillGroup.category}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {skillGroup.items.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 bg-slate-50 text-slate-700 text-xs font-semibold rounded-lg border border-slate-200/50 print:bg-white"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>


            {/* Education */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-slate-950 uppercase tracking-wider border-b border-slate-100 pb-1">
                Education
              </h2>
              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="text-sm font-bold text-slate-900 leading-tight">
                        {edu.degree}
                      </h3>
                      <span className="text-[10px] font-semibold text-slate-500 shrink-0">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                      {edu.institution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Footer info (Print only) */}
        <div className="hidden print:block border-t border-slate-200 mt-8 pt-4 text-center text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Shahab Dad • Generated dynamically from portfolio site at shahabdad.dev</p>
        </div>
      </div>
    </div>
  );
}
