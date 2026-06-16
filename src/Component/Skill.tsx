import { Braces, Server, Settings, BadgeCheck } from 'lucide-react';

export default function Skill() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Braces,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/5',
      borderColor: 'hover:border-orange-500/20',
      skills: [
        { name: 'HTML5 & CSS3', level: '95%' },
        { name: 'JavaScript (ES6+)', level: '90%' },
        { name: 'React.js', level: '92%' },
        { name: 'React Native', level: '85%' },
        { name: 'Tailwind CSS v4', level: '94%' },
        { name: 'Bootstrap', level: '88%' },
      ],
    },
    {
      title: 'Backend & Database',
      icon: Server,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/5',
      borderColor: 'hover:border-emerald-500/20',
      skills: [
        { name: 'Node.js', level: '86%' },
        { name: 'Express.js', level: '88%' },
        { name: 'MongoDB', level: '80%' },
        { name: 'RESTful APIs', level: '90%' },
      ],
    },
    {
      title: 'Tools & Platforms',
      icon: Settings,
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-500/5',
      borderColor: 'hover:border-cyan-500/20',
      skills: [
        { name: 'Git & GitHub', level: '90%' },
        { name: 'Firebase Solutions', level: '85%' },
        { name: 'Postman Integration', level: '88%' },
        { name: 'Vite & TSC Packages', level: '85%' },
      ],
    },
  ];

  return (
    <section className="min-h-screen py-20 px-6 sm:px-10 lg:px-16 bg-white dark:bg-[#0a0a0a] text-slate-800 dark:text-neutral-300 font-space transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <BadgeCheck size={12} className="animate-pulse" />
            <span>Tech Stack</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Skills & Core Capabilities
          </h1>
          <p className="text-lg text-slate-500 dark:text-neutral-400 font-light">
            An overview of the development frameworks, databases, and tooling utilities I work with.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className={`p-8 rounded-3xl border border-slate-200/60 dark:border-[#1f1f1f] bg-slate-50/50 dark:bg-[#111]/40 transition-all duration-300 ${category.borderColor}`}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className={`p-3 rounded-2xl ${category.bgColor}`}>
                    <Icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">{category.title}</h2>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-semibold text-slate-700 dark:text-neutral-300">{skill.name}</span>
                        <span className="font-mono text-slate-400 dark:text-neutral-500">{skill.level}</span>
                      </div>

                      {/* Custom progress bar */}
                      <div className="h-1.5 w-full bg-slate-200/70 dark:bg-[#1f1f1f] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-indigo-600 dark:bg-indigo-500 rounded-full transition-all duration-500"
                          style={{ width: skill.level }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
