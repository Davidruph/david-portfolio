"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Loader, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const CONTACT_METHODS = [
  {
    Icon:   Mail,
    title:  "Email",
    value:  "dagbugba@yahoo.com",
    action: "Send Email",
    link:   "mailto:dagbugba@yahoo.com"
  },
  {
    Icon:   Phone,
    title:  "Phone",
    value:  "+234 808 123 3897",
    action: "Call Me",
    link:   "tel:+2348081233897"
  },
  {
    Icon:   MapPin,
    title:  "Location",
    value:  "FCT Abuja, Nigeria",
    action: "View on Map",
    link:   "https://maps.google.com/?q=Abuja,Nigeria"
  }
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!res.ok) throw new Error("Send failed");

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-warm-700 border border-warm-600 text-warm-100 placeholder-warm-500 focus:outline-none focus:border-amber-500/60 focus:bg-warm-700/80 transition-all text-sm";

  return (
    <section
      id="contact"
      className="relative py-28 px-4 bg-warm-950 overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ opacity: [0.1, 0.22, 0.1] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute -top-40 left-1/4 w-[420px] h-[420px] bg-amber-600 rounded-full blur-[130px]"
        />
        <motion.div
          animate={{ opacity: [0.07, 0.14, 0.07] }}
          transition={{ duration: 9, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-40 right-1/4 w-[420px] h-[420px] bg-orange-800 rounded-full blur-[130px]"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warm-800 border border-warm-600 text-warm-300 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Currently accepting new projects
          </div>

          <span className="block text-amber-500 font-semibold uppercase tracking-widest text-sm mb-4">
            Get In Touch
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-warm-100 leading-tight">
            Let&apos;s Build Something
            <span className="block text-amber-400">Exceptional</span>
          </h2>
          <p className="text-warm-400 mt-5 max-w-xl mx-auto text-sm leading-relaxed">
            Have a project in mind or want to explore working together? I respond
            within 24 hours.
          </p>
        </motion.div>

        {/* Upwork CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex justify-center mb-14"
        >
          <motion.a
            href="https://www.upwork.com/freelancers/davidjunior?mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-amber-500 hover:bg-amber-400 text-warm-950 rounded-xl font-bold text-sm transition-colors shadow-lg shadow-amber-500/25"
          >
            <ExternalLink className="w-4 h-4" />
            Hire Me on Upwork
          </motion.a>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — contact methods */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-warm-100 mb-6">
              Contact Information
            </h3>

            {CONTACT_METHODS.map(({ Icon, title, value, action, link }, i) => (
              <motion.a
                key={title}
                href={link}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 6 }}
                className="group flex items-start gap-4 p-5 rounded-2xl bg-warm-800 border border-warm-600 hover:border-amber-500/50 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                  <Icon className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <p className="text-warm-400 text-xs uppercase tracking-wider mb-0.5">{title}</p>
                  <p className="text-warm-100 font-medium text-sm mb-1">{value}</p>
                  <span className="text-amber-500 text-xs font-semibold group-hover:text-amber-400 transition-colors">
                    {action} →
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="p-8 rounded-2xl bg-warm-800 border border-warm-600"
          >
            <h3 className="text-xl font-bold text-warm-100 mb-6">
              Send a Message
            </h3>

            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="block text-warm-300 text-sm font-medium mb-1.5">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Your name"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-warm-300 text-sm font-medium mb-1.5">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="your.email@example.com"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-warm-300 text-sm font-medium mb-1.5">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-warm-950 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors disabled:opacity-60 shadow-lg shadow-amber-500/20"
              >
                {isSubmitting ? (
                  <><Loader className="w-4 h-4 animate-spin" /> Sending…</>
                ) : (
                  <><Send className="w-4 h-4" /> Send Message</>
                )}
              </motion.button>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-green-500/10 border border-green-500/40 text-green-400 text-sm text-center font-medium"
                >
                  ✓ Message sent! I&apos;ll be in touch soon.
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-red-500/10 border border-red-500/40 text-red-400 text-sm text-center font-medium"
                >
                  Something went wrong. Please email me directly at dagbugba@yahoo.com
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
