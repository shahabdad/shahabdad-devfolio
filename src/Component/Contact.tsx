import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ChevronDown } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    projectType: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE";

    if (accessKey === "YOUR_ACCESS_KEY_HERE" || !accessKey) {
      // Fallback: Open user's email client if no API key is specified
      const subject = encodeURIComponent(`Project Inquiry from ${formState.name}`);
      const body = encodeURIComponent(
        `Name: ${formState.name}\n` +
        `Email: ${formState.email}\n` +
        `Phone: ${formState.phone}\n` +
        `Budget: ${formState.budget}\n` +
        `Project Type: ${formState.projectType}\n\n` +
        `Message:\n${formState.message}`
      );
      window.location.href = `mailto:shahabdad50@gmail.com?subject=${subject}&body=${body}`;

      setStatus('success');
      setFormState({
        name: '',
        email: '',
        phone: '',
        budget: '',
        projectType: '',
        message: ''
      });
      setTimeout(() => setStatus('idle'), 4500);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          budget: formState.budget,
          project_type: formState.projectType,
          message: formState.message,
          subject: `New Portfolio Message from ${formState.name}`,
          from_name: "Portfolio Contact Form",
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormState({
          name: '',
          email: '',
          phone: '',
          budget: '',
          projectType: '',
          message: ''
        });
        setTimeout(() => setStatus('idle'), 4500);
      } else {
        console.error("Form submission failed:", result);
        setStatus('idle');
        alert("Oops! Something went wrong while sending the form. Falling back to email direct...");
        // Secondary fallback
        window.location.href = `mailto:shahabdad@gmail.com?subject=Inquiry&body=${encodeURIComponent(formState.message)}`;
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus('idle');
      alert("Connection error. Triggering direct email client...");
      window.location.href = `mailto:shahabdad@gmail.com?subject=Inquiry&body=${encodeURIComponent(formState.message)}`;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="bg-white text-slate-800 font-jakarta px-4 sm:px-6 lg:px-[90px] py-9 transition-colors duration-300 w-full overflow-hidden">
      <div className="w-full">
        {/* Header */}
        <ScrollReveal animationClass="animate-fade-in-up" delay={50}>
          <div className="mb-12">
            <p className="text-sm font-semibold tracking-[0.2em] text-red-600 uppercase">
              Get in touch
            </p>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-slate-950 mt-2">
              Contact Me
            </h1>
          </div>
        </ScrollReveal>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">

          {/* Left Column: Info, Socials, Availability */}
          <div className="space-y-6">

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Email Card */}
              <ScrollReveal animationClass="animate-fade-in-up" delay={100}>
                <a
                  href="mailto:shahabdad@gmail.com"
                  className="flex items-center gap-4 p-5 rounded-2xl border border-slate-100/70 bg-[#fafafa] hover:border-slate-200/80 hover:shadow-xs transition-all duration-200 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-600 group-hover:text-indigo-600 transition-colors shadow-xs ripple-indigo">
                    <Mail size={20} />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email</span>
                    <p className="text-base sm:text-lg font-semibold text-slate-800 group-hover:text-slate-955 transition-colors">
                      shahabdad@gmail.com
                    </p>
                  </div>
                </a>
              </ScrollReveal>

              {/* Phone Card */}
              <ScrollReveal animationClass="animate-fade-in-up" delay={200}>
                <a
                  href="tel:+923191796621"
                  className="flex items-center gap-4 p-5 rounded-2xl border border-slate-100/70 bg-[#fafafa] hover:border-slate-200/80 hover:shadow-xs transition-all duration-200 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-600 group-hover:text-indigo-600 transition-colors shadow-xs ripple-indigo">
                    <Phone size={20} />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phone</span>
                    <p className="text-base sm:text-lg font-semibold text-slate-800 group-hover:text-slate-955 transition-colors">
                      +92 3191796621
                    </p>
                  </div>
                </a>
              </ScrollReveal>

              {/* Location Card */}
              <ScrollReveal animationClass="animate-fade-in-up" delay={300}>
                <div
                  className="flex items-center gap-4 p-5 rounded-2xl border border-slate-100/70 bg-[#fafafa] hover:border-slate-200/80 hover:shadow-xs transition-all duration-200 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-600 group-hover:text-indigo-600 transition-colors shadow-xs ripple-indigo">
                    <MapPin size={20} />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Location</span>
                    <p className="text-base sm:text-lg font-semibold text-slate-800 transition-colors">
                      Mardan District, Khyber Pakhtunkhwa, Pakistan
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Socials Row */}
            <ScrollReveal animationClass="animate-fade-in-up" delay={400}>
              <div className="flex gap-4 items-center pl-1">
                {/* GitHub */}
                <a
                  href="https://github.com/shahabdad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-slate-200/60 flex items-center justify-center text-slate-600 hover:text-slate-955 hover:border-slate-400 hover:bg-slate-50 transition-all shadow-xs cursor-pointer ripple-slate"
                  aria-label="GitHub Profile"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/shahabdad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-slate-200/60 flex items-center justify-center text-slate-600 hover:text-slate-955 hover:border-slate-400 hover:bg-slate-50 transition-all shadow-xs cursor-pointer ripple-slate"
                  aria-label="LinkedIn Profile"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                </a>
                {/* Globe (Website) */}
                <a
                  href="https://shahabdad.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-slate-200/60 flex items-center justify-center text-slate-600 hover:text-slate-955 hover:border-slate-400 hover:bg-slate-50 transition-all shadow-xs cursor-pointer ripple-slate"
                  aria-label="Website Portfolio"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
                </a>
              </div>
            </ScrollReveal>

            {/* Availability Box */}
            <ScrollReveal animationClass="animate-fade-in-up" delay={500}>
              <div className="p-6 rounded-3xl border border-slate-100/70 bg-[#fafafa] space-y-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Availability
                </span>
                <p className="text-base leading-relaxed text-slate-600 font-light">
                  I'm currently available for freelance projects, full-time opportunities, and strategic collaborations. Let's build something meaningful together.
                </p>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Contact Form */}
          <ScrollReveal animationClass="animate-fade-in-up" delay={200} className="relative">
            {status === 'success' ? (
              <div className="p-8 rounded-3xl border border-slate-100/70 bg-[#fafafa] shadow-xl flex flex-col items-center justify-center py-16 text-center space-y-4 animate-fade-in-up">
                <div className="p-4 rounded-full bg-emerald-500/10 text-emerald-500">
                  <CheckCircle2 size={48} className="animate-bounce" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">Message Sent!</h3>
                <p className="text-base text-slate-500 max-w-xs font-light">
                  Thank you for reaching out. Shahab Dad will get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Full Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-base font-semibold text-slate-800">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white text-base text-slate-900 placeholder-slate-400/80 focus:border-slate-800 focus:bg-white outline-none transition-all duration-200 shadow-2xs"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-base font-semibold text-slate-800">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white text-base text-slate-900 placeholder-slate-400/80 focus:border-slate-800 focus:bg-white outline-none transition-all duration-200 shadow-2xs"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-base font-semibold text-slate-800">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white text-base text-slate-900 placeholder-slate-400/80 focus:border-slate-800 focus:bg-white outline-none transition-all duration-200 shadow-2xs"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                {/* Budget & Project Type side-by-side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                  {/* Project Budget */}
                  <div className="space-y-2 relative">
                    <label htmlFor="budget" className="text-base font-semibold text-slate-800">
                      Project Budget
                    </label>
                    <div className="relative">
                      <select
                        id="budget"
                        name="budget"
                        required
                        value={formState.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white text-base text-slate-600 focus:border-slate-800 focus:bg-white outline-none transition-all duration-200 appearance-none pr-10 cursor-pointer shadow-2xs"
                      >
                        <option value="" disabled>Select budget</option>
                        <option value="under-1k">Under $1,000</option>
                        <option value="1k-3k">$1,000 - $3,000</option>
                        <option value="3k-5k">$3,000 - $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="above-10k">$10,000+</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-3.5 top-[18px] pointer-events-none text-slate-400" />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div className="space-y-2 relative">
                    <label htmlFor="projectType" className="text-base font-semibold text-slate-800">
                      Project Type
                    </label>
                    <div className="relative">
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formState.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white text-base text-slate-600 focus:border-slate-800 focus:bg-white outline-none transition-all duration-200 appearance-none pr-10 cursor-pointer shadow-2xs"
                      >
                        <option value="" disabled>Select type</option>
                        <option value="web-dev">Web Development</option>
                        <option value="mobile-app">Mobile App Development</option>
                        <option value="ui-ux">UI/UX Design</option>
                        <option value="full-stack">Full Stack Development</option>
                        <option value="consulting">Technical Consulting</option>
                        <option value="other">Other</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-3.5 top-[18px] pointer-events-none text-slate-400" />
                    </div>
                  </div>

                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-base font-semibold text-slate-800">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white text-base text-slate-900 placeholder-slate-400/80 focus:border-slate-800 focus:bg-white outline-none transition-all duration-200 resize-none shadow-2xs"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-slate-950 text-white font-semibold text-lg transition-all duration-300 active:scale-[0.99] disabled:bg-slate-800 shadow-md shadow-slate-950/10 hover:bg-slate-900 cursor-pointer"
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
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
