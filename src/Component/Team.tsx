import { Users, Mail, ArrowUpRight } from 'lucide-react';

const GithubIcon = () => (
  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Team() {
  const members = [
    {
      name: 'Shahab Dad',
      role: 'Lead Full Stack Engineer',
      bio: 'Directs systems architectural planning, database designs, and front-end integration. Focus on React and Node.js solutions.',
      email: 'shahabdad50@gmail.com',
      github: '#',
      linkedin: '#',
    },
    {
      name: 'Alice Smith',
      role: 'UI/UX Design Architect',
      bio: 'Shapes interactive visual concepts, layout guidelines, and wireframes. Specializes in typography and user flows.',
      email: 'alice@example.com',
      github: '#',
      linkedin: '#',
    },
    {
      name: 'John Doe',
      role: 'DevOps & Backend Engineer',
      bio: 'Manages cloud routing systems, database hosting deployment, and pipeline deployment optimizations.',
      email: 'john@example.com',
      github: '#',
      linkedin: '#',
    },
  ];

  return (
    <section className="min-h-screen py-20 px-6 sm:px-10 lg:px-16 bg-slate-50 dark:bg-[#0c0c0c] text-slate-800 dark:text-neutral-300 font-space transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Users size={12} className="animate-pulse" />
            <span>Collaborations</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Team & Creative Partners
          </h1>
          <p className="text-lg text-slate-500 dark:text-neutral-400 font-light">
            Meet the engineers and designers I work alongside to build large-scale applications.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((m) => (
            <div 
              key={m.name} 
              className="group relative rounded-3xl border border-slate-200/60 dark:border-[#1f1f1f] bg-white dark:bg-[#111] p-8 hover:border-slate-300 dark:hover:border-[#333] hover:shadow-xl dark:hover:shadow-black/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-5">
                {/* Profile Placeholder Image */}
                <div className="h-16 w-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-2xl group-hover:scale-105 transition-transform duration-300">
                  {m.name.charAt(0)}
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 flex items-center gap-1.5">
                    <span>{m.name}</span>
                    <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-indigo-500 dark:text-indigo-400">
                    {m.role}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-neutral-400 leading-relaxed pt-2 font-light">
                    {m.bio}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-[#1c1c1c] flex items-center justify-between">
                <a 
                  href={`mailto:${m.email}`} 
                  className="flex items-center gap-1.5 text-xs text-[#737373] hover:text-slate-950 dark:hover:text-white transition-colors"
                >
                  <Mail size={14} />
                  <span>Contact</span>
                </a>
                <div className="flex items-center gap-3">
                  <a 
                    href={m.github} 
                    className="text-[#737373] hover:text-slate-950 dark:hover:text-white transition-all duration-200 hover:scale-110"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon />
                  </a>
                  <a 
                    href={m.linkedin} 
                    className="text-[#737373] hover:text-slate-950 dark:hover:text-white transition-all duration-200 hover:scale-110"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
