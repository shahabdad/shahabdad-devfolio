import { useState } from 'react';
import { FolderKanban, ExternalLink, Code2 } from 'lucide-react';

const GithubIcon = () => (
  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Project() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'E-Commerce Hub',
      category: 'web',
      description: 'A full-featured corporate online store. Integrates payment systems, admin inventories, and user cart databases.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind'],
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Task Management Portal',
      category: 'web',
      description: 'Interactive dashboard for team collaboration and task organization, featuring dynamic drag-and-drop actions.',
      tech: ['React.js', 'JWT Auth', 'Tailwind CSS', 'Vite'],
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Mobile Chat App',
      category: 'mobile',
      description: 'A cross-platform native messaging application featuring real-time subscriptions, secure auth, and push messages.',
      tech: ['React Native', 'Expo', 'Firebase Firestore', 'Auth'],
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'DevConnect Platform',
      category: 'web',
      description: 'A portal connecting developers with open job listings, custom portfolio builders, and technical forums.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Fitness Tracker App',
      category: 'mobile',
      description: 'Mobile workout tracker tracking daily routine stats, hydration progress, and custom routines.',
      tech: ['React Native', 'AsyncStorage', 'Lucide Icons'],
      demoLink: '#',
      githubLink: '#',
    },
  ];

  const filteredProjects = projects.filter(
    (p) => filter === 'all' || p.category === filter
  );

  return (
    <section className="min-h-screen py-20 px-6 sm:px-10 lg:px-16 bg-slate-50 dark:bg-[#0c0c0c] text-slate-800 dark:text-neutral-300 font-space transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
              <FolderKanban size={12} className="animate-pulse" />
              <span>My Projects</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
              Selected Works
            </h1>
            <p className="text-sm text-slate-500 dark:text-neutral-400 font-light leading-relaxed">
              A gallery of software products I have built. Use filters to check by development platforms.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-full border border-slate-200/60 dark:border-[#222] bg-white dark:bg-[#111] w-fit shadow-sm">
            {['all', 'web', 'mobile'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${filter === type
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'text-[#737373] hover:text-slate-900 dark:hover:text-white'
                  }`}
              >
                {type === 'all' ? 'All' : type === 'web' ? 'Web' : 'Mobile'}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((p) => (
            <div
              key={p.title}
              className="group relative rounded-3xl border border-slate-200/60 dark:border-[#1f1f1f] bg-white dark:bg-[#111] p-6 hover:border-slate-300 dark:hover:border-[#333] hover:shadow-xl dark:hover:shadow-black/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#181818] w-fit text-[#737373] group-hover:scale-105 transition-transform duration-300">
                    <Code2 className="h-5 w-5 text-indigo-500" />
                  </div>
                  {/* Action Icons */}
                  <div className="flex items-center gap-3">
                    <a
                      href={p.githubLink}
                      className="text-[#737373] hover:text-slate-900 dark:hover:text-white transition-all duration-200 hover:scale-110"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon />
                    </a>
                    <a
                      href={p.demoLink}
                      className="text-[#737373] hover:text-slate-900 dark:hover:text-white transition-all duration-200 hover:scale-110"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-neutral-400 leading-relaxed font-light">
                    {p.description}
                  </p>
                </div>
              </div>

              {/* Tech Badges */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-[#1c1c1c] flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-[11px] bg-slate-100 dark:bg-[#1b1b1b] text-slate-600 dark:text-neutral-400 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
