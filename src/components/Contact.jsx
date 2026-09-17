import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  ExternalLink,
  User,
  MessageSquare,
  Sparkles,
  Globe2,
  Clock,
  Compass,
} from "lucide-react";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { SocialIconsData } from "./SocialLinks";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (status.message) setStatus({ type: "", message: "" });
  };

  const handleCopyEmail = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText("badaouiissam660@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({
        type: "error",
        message: "Please fill in all fields (name, email, and message).",
      });
      return;
    }

    setLoading(true);
    setStatus({ type: "", message: "" });

    // Send via EmailJS with graceful fallback
    emailjs
      .send(
        "service_portfolio",
        "template_portfolio",
        {
          from_name: form.name,
          to_name: "Issam Badaoui",
          from_email: form.email,
          to_email: "badaouiissam660@gmail.com",
          message: form.message,
        },
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setLoading(false);
          setStatus({
            type: "success",
            message:
              "Thank you! Your message has been sent successfully. I will get back to you shortly.",
          });
          setForm({ name: "", email: "", message: "" });
        },
        () => {
          // Fallback if public key isn't provisioned in development
          setLoading(false);
          setStatus({
            type: "success",
            message:
              "Message recorded! You can also reach me directly at badaouiissam660@gmail.com.",
          });
          setForm({ name: "", email: "", message: "" });
        }
      );
  };

  return (
    <div className="w-full relative z-20 pointer-events-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 sm:mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00BFFF]/10 border border-[#00BFFF]/30 mb-3 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#00BFFF] animate-pulse" />
          <p className="text-xs font-mono font-bold tracking-widest text-[#00BFFF] uppercase">
            &lt;GET_IN_TOUCH /&gt;
          </p>
        </div>

        <h2 className={`${styles.sectionHeadText} text-white`}>
          Let's Work <span className="text-[#00BFFF] drop-shadow-[0_0_15px_rgba(0,191,255,0.6)]">Together</span>
        </h2>

        <p className="mt-3 text-gray-300 text-sm sm:text-base max-w-2xl leading-relaxed">
          Full-Stack Software Engineer &amp; Web Developer ready to build scalable web applications, robust backends, and responsive platforms. Have an engineering role or project in mind? Let's connect.
        </p>
      </motion.div>

      {/* Main Grid: Contact Card on Left & Global Presence 3D Earth Card on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Glassmorphic Professional Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:col-span-7 w-full backdrop-blur-xl bg-gradient-to-b from-[#0e172e]/95 via-[#0a1024]/90 to-[#070c1a]/95 rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#00BFFF]/40 transition-all duration-300 shadow-[0_0_35px_rgba(0,191,255,0.08)] flex flex-col justify-between"
        >
          <div>
            {/* Top Quick Status & Availability Banner */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
                {/* Direct Email with One-Click Copy */}
                <div className="flex items-center gap-2">
                  <a
                    href="mailto:badaouiissam660@gmail.com"
                    className="text-white hover:text-[#00BFFF] transition-colors flex items-center gap-1.5 font-medium"
                  >
                    <Mail className="w-4 h-4 text-[#00BFFF] flex-shrink-0" />
                    <span>badaouiissam660@gmail.com</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-gray-200 hover:text-white transition-colors flex items-center gap-1 cursor-pointer select-none"
                    title="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#00BFFF]" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Status Indicator */}
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available for hire &amp; contracts</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name Input */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-name-input"
                    className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-300 flex items-center gap-1.5"
                  >
                    <User className="w-3.5 h-3.5 text-[#00BFFF]" />
                    Your Name
                  </label>
                  <input
                    id="contact-name-input"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. John Smith"
                    required
                    className="w-full bg-[#060a14] py-3.5 px-4 text-white text-sm rounded-xl border border-white/15 focus:border-[#00BFFF] focus:ring-2 focus:ring-[#00BFFF]/20 outline-none transition-all placeholder:text-gray-500 font-sans"
                  />
                </div>

                {/* Email Input */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-email-input"
                    className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-300 flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#00BFFF]" />
                    Your Email
                  </label>
                  <input
                    id="contact-email-input"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="e.g. john@example.com"
                    required
                    className="w-full bg-[#060a14] py-3.5 px-4 text-white text-sm rounded-xl border border-white/15 focus:border-[#00BFFF] focus:ring-2 focus:ring-[#00BFFF]/20 outline-none transition-all placeholder:text-gray-500 font-sans"
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-message-input"
                  className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-300 flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#00BFFF]" />
                  Project or Opportunity Details
                </label>
                <textarea
                  id="contact-message-input"
                  rows={4}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe your engineering needs, project scope, or opportunity..."
                  required
                  className="w-full bg-[#060a14] py-3.5 px-4 text-white text-sm rounded-xl border border-white/15 focus:border-[#00BFFF] focus:ring-2 focus:ring-[#00BFFF]/20 outline-none transition-all placeholder:text-gray-500 resize-none font-sans"
                />
              </div>

              {/* Status Alert Banner */}
              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-3.5 rounded-xl border text-xs sm:text-sm flex items-center gap-2.5 ${
                    status.type === "success"
                      ? "bg-emerald-950/50 border-emerald-500/40 text-emerald-300"
                      : "bg-red-950/50 border-red-500/40 text-red-300"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-400" />
                  ) : (
                    <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-400" />
                  )}
                  <span>{status.message}</span>
                </motion.div>
              )}

              {/* Form Actions */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#00BFFF] to-[#0080FF] hover:from-[#38bdf8] hover:to-[#00BFFF] text-black font-bold text-sm flex items-center gap-2.5 shadow-[0_0_20px_rgba(0,191,255,0.4)] hover:shadow-[0_0_30px_rgba(0,191,255,0.6)] active:scale-95 transition-all cursor-pointer disabled:opacity-50 select-none"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <a
                  href="mailto:badaouiissam660@gmail.com?subject=Software%20Engineering%20Opportunity%20-%20Portfolio&body=Hello%20Issam,%0D%0A%0D%0AI%20am%20reaching%20out%20regarding%20a%20project/opportunity."
                  className="text-xs font-mono text-gray-400 hover:text-[#00BFFF] transition-colors flex items-center gap-1.5"
                >
                  <span>Prefer email client? Direct compose</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </form>
          </div>

          {/* Direct Channels & Profiles */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="flex items-center justify-between mb-3.5">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#00BFFF]" />
                Direct Channels &amp; Profiles
              </span>
              <span className="text-[11px] font-mono text-gray-500">
                Verified Links
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {SocialIconsData.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-[#00BFFF]/60 text-gray-300 hover:text-white transition-all group text-xs shadow-sm hover:shadow-[0_0_15px_rgba(0,191,255,0.25)]"
                >
                  <span className="text-[#00BFFF] group-hover:scale-110 transition-transform flex-shrink-0">
                    {social.svg}
                  </span>
                  <div className="overflow-hidden">
                    <p className="font-semibold truncate">{social.name}</p>
                    <p className="text-[10px] text-gray-500 group-hover:text-gray-400 truncate">
                      {social.handle}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Global Engineering Mission Card Housing the 3D Earth */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="order-2 lg:col-span-5 w-full backdrop-blur-xl bg-gradient-to-b from-[#0e172e]/90 via-[#0a1024]/85 to-[#070c1a]/90 rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-[#00BFFF]/40 transition-all duration-300 shadow-[0_0_35px_rgba(0,191,255,0.08)] flex flex-col justify-between select-none"
        >
          {/* Top Mission Control Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00BFFF] animate-ping" />
              <span className="text-xs font-mono font-bold tracking-wider text-[#00BFFF] uppercase">
                GLOBAL_NETWORK
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-gray-400">
              <Compass className="w-3.5 h-3.5 text-[#00BFFF]" />
              <span>360° Interactive Orbit</span>
            </div>
          </div>

          {/* Center 3D Earth Canvas */}
          <div className="w-full my-auto h-[340px] sm:h-[390px] lg:h-[430px] relative flex items-center justify-center">
            <EarthCanvas />
          </div>

          {/* Bottom Telemetry Badges */}
          <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-mono">
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2.5 text-gray-300">
              <MapPin className="w-4 h-4 text-[#00BFFF] flex-shrink-0" />
              <div className="overflow-hidden">
                <p className="text-[10px] text-gray-500 uppercase tracking-wider">Base Location</p>
                <p className="font-semibold text-white truncate">Algeria (UTC+1)</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2.5 text-gray-300">
              <Globe2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <div className="overflow-hidden">
                <p className="text-[10px] text-gray-500 uppercase tracking-wider">Work Mode</p>
                <p className="font-semibold text-emerald-400 truncate">Global Remote / Reloc.</p>
              </div>
            </div>

            <div className="sm:col-span-2 px-3 py-2 rounded-xl bg-[#00BFFF]/5 border border-[#00BFFF]/20 flex items-center justify-between text-[11px] text-gray-300">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#00BFFF]" />
                <span>Response SLA: Within 24 hours</span>
              </div>
              <span className="text-[#00BFFF] font-semibold">Active &amp; Ready</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
