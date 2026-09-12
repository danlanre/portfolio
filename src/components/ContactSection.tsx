import { useState } from 'react';
import { 
  Mail,
  Send, 
  MapPin, 
  Github, 
  Copy, 
  Check, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { DEVELOPER_INFO } from '../data/skills';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Project Collaboration / Hire',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DEVELOPER_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    window.open(`mailto:${DEVELOPER_INFO.email}?subject=${encodeURIComponent(formData.subject + ' from ' + formData.name)}&body=${encodeURIComponent(formData.message + '\n\nSender: ' + formData.name + ' (' + formData.email + ')')}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
        
        {/* Glow ambient background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-mono font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>GET IN TOUCH</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Let's Build Something Exceptional Together
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Whether you need an autonomous AI system, a high-converting full-stack platform, an offline-resilient PWA, or a dedicated software engineer for your team, I'd love to connect.
            </p>

            <div className="space-y-3 pt-2">
              
              {/* Email Card with Copy button */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Direct Email</div>
                    <a href={`mailto:${DEVELOPER_INFO.email}`} className="text-sm font-semibold text-white font-mono hover:text-cyan-400 transition-colors">
                      {DEVELOPER_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* GitHub Card */}
              <a
                href={DEVELOPER_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between gap-3 hover:border-slate-700 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">GitHub Profile</div>
                    <div className="text-sm font-semibold text-white font-mono group-hover:text-cyan-400 transition-colors">
                      github.com/danlanre
                    </div>
                  </div>
                </div>
                <span className="text-xs text-slate-400 font-mono">View ↗</span>
              </a>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400">Location</div>
                  <div className="text-sm font-semibold text-white">{DEVELOPER_INFO.location}</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-slate-950/70 border border-slate-800 rounded-2xl p-6 sm:p-8">
            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Message Sent Successfully!</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, <strong className="text-white">{formData.name}</strong>. I will review your message and reply to <code className="text-cyan-400">{formData.email}</code> within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', email: '', subject: 'Project Collaboration / Hire', message: '' });
                  }}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 focus:border-cyan-400 focus:outline-none text-sm text-slate-100 placeholder-slate-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 focus:border-cyan-400 focus:outline-none text-sm text-slate-100 placeholder-slate-500"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Subject / Inquiry Type</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 focus:border-cyan-400 focus:outline-none text-sm text-slate-100"
                  >
                    <option value="Project Collaboration / Hire">Full-time Role / Engineering Hire</option>
                    <option value="Contract / Freelance Build">Contract Software Build / MVP</option>
                    <option value="Technical Consulting">AI & System Architecture Consulting</option>
                    <option value="Other">General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Your Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, timeline, or engineering opportunity..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 focus:border-cyan-400 focus:outline-none text-sm text-slate-100 placeholder-slate-500 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all duration-200"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Direct Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
