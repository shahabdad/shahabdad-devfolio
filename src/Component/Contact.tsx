import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="min-h-screen py-20 px-6 sm:px-10 lg:px-16 bg-white dark:bg-[#0a0a0a] text-slate-800 dark:text-neutral-300 font-space transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Mail size={12} className="animate-pulse" />
            <span>Get in Touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Let's start a conversation.
          </h1>
          <p className="text-lg text-slate-500 dark:text-neutral-400 font-light">
            I am currently open to freelance opportunities, development contracts, and engineering roles.
          </p>
        </div>

        {/* Form and Details Grid */}
        <div className="grid gap-12 lg:grid-cols-5">
          
          {/* Details Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Contact Information</h2>
              <p className="text-sm text-slate-500 dark:text-neutral-400 font-light">
                Feel free to reach out via email, phone call, or the contact form.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-[#111] text-indigo-500">
                  <Mail size={20} />
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-[#737373] uppercase tracking-wider font-semibold">Email</span>
                  <p className="text-base font-semibold text-slate-900 dark:text-white">
                    <a href="mailto:shahabdad50@gmail.com" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      shahabdad50@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-[#111] text-indigo-500">
                  <Phone size={20} />
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-[#737373] uppercase tracking-wider font-semibold">Phone</span>
                  <p className="text-base font-semibold text-slate-900 dark:text-white">
                    <a href="tel:+923191796621" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      +92 319 1796621
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-[#111] text-indigo-500">
                  <MapPin size={20} />
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-[#737373] uppercase tracking-wider font-semibold">Location</span>
                  <p className="text-base font-semibold text-slate-900 dark:text-white">
                    <a 
                      href="https://google.com/maps/search/?api=1&query=Mardan,+KPK,+Pakistan"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      Mardan, KPK, Pakistan
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-3">
            <div className="p-8 rounded-3xl border border-slate-100 dark:border-[#1f1f1f] bg-slate-50/50 dark:bg-[#111]/40 shadow-xl dark:shadow-black/25">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 animate-fade-in">
                  <div className="p-4 rounded-full bg-emerald-500/10 text-emerald-500">
                    <CheckCircle2 size={48} className="animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Message Shipped!</h3>
                  <p className="text-sm text-slate-500 dark:text-neutral-400 max-w-sm font-light">
                    Thank you for reaching out, Shahab Dad will get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-[#737373]">
                        Your Name
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200/80 dark:border-[#222] bg-white dark:bg-[#111] text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-neutral-600 focus:border-indigo-500 dark:focus:border-indigo-500 outline-none transition-colors"
                        placeholder="e.g. John Doe"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-[#737373]">
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200/80 dark:border-[#222] bg-white dark:bg-[#111] text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-neutral-600 focus:border-indigo-500 dark:focus:border-indigo-500 outline-none transition-colors"
                        placeholder="e.g. john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-[#737373]">
                      Message
                    </label>
                    <textarea 
                      id="message" 
                      name="message" 
                      required 
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200/80 dark:border-[#222] bg-white dark:bg-[#111] text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-neutral-600 focus:border-indigo-500 dark:focus:border-indigo-500 outline-none transition-colors resize-none"
                      placeholder="Describe your project, timeline, or job role details..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === 'sending'}
                    className="w-full inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all duration-300 active:scale-95 disabled:bg-indigo-800"
                  >
                    {status === 'sending' ? (
                      <>
                        <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
