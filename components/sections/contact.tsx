"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, Loader } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    // Open email immediately (browser-safe)
    window.open(
      `mailto:dagbugba@yahoo.com?subject=${subject}&body=${body}`,
      "_self"
    );

    // Keep the UI flow
    setTimeout(() => {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);

      setTimeout(() => setSubmitStatus("idle"), 3000);
    }, 1000);
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "dagbugba@yahoo.com",
      action: "Send Email",
      link: "mailto:dagbugba@yahoo.com"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+234 808 123 3897",
      action: "Call Me",
      link: "tel:+2348081233897"
    },
    {
      icon: "📍",
      title: "Location",
      value: "FCT Abuja, Nigeria",
      action: "View Map",
      link: "https://maps.google.com/?q=Abuja,Nigeria"
    }
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen py-24 px-4 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Animated background */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -top-40 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"
          />
          <motion.div
            animate={{ opacity: [0.1, 0.25, 0.1] }}
            transition={{ duration: 7, repeat: Infinity, delay: 2 }}
            className="absolute -bottom-40 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl"
          />
        </div>

        <div className="relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-purple-400 font-semibold uppercase tracking-widest">
              Get In Touch
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-white mt-4">
              Let's Create Something
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Amazing Together
              </span>
            </h2>
            <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
              Whether you have a project in mind or just want to say hello, feel
              free to reach out!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact methods */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-8">
                Contact Information
              </h3>

              {contactMethods.map((method, idx) => (
                <motion.a
                  key={idx}
                  href={method.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  className="group p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-purple-500/20 hover:border-purple-500/50 transition-all cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl group-hover:scale-110 transition-transform">
                      {method.icon}
                    </span>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-lg mb-1">
                        {method.title}
                      </h4>
                      <p className="text-gray-400 mb-3">{method.value}</p>
                      <motion.span
                        whileHover={{ gap: 8 }}
                        className="inline-flex items-center gap-2 text-purple-400 font-semibold text-sm group-hover:text-pink-400 transition-colors"
                      >
                        {method.action}
                        <motion.span
                          whileHover={{ x: 3 }}
                          transition={{ type: "spring" }}
                        >
                          →
                        </motion.span>
                      </motion.span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-purple-500/20 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Send me a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Name
                  </label>
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/60 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Email
                  </label>
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/60 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Message
                  </label>
                  <motion.textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    required
                    rows={5}
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/60 transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-300 text-center font-semibold"
                  >
                    ✓ Message sent successfully!
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
