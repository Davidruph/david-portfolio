"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { label: "Home", href: "#" },
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "GitHub", href: "https://github.com/Davidruph" },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/david-agbugba-119b2b120"
        }
        // { label: "Resume", href: "#" },
        // { label: "Blog", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Davidruph", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/david-agbugba-119b2b120",
      label: "LinkedIn"
    },
    { icon: Twitter, href: "https://x.com/Davidruph", label: "Twitter" },
    { icon: Mail, href: "mailto:dagbugba@yahoo.com", label: "Email" }
  ];

  return (
    <footer className="relative bg-gradient-to-t from-slate-950 to-slate-900 border-t border-purple-500/20 py-16 px-4">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-md:col-span-2 lg:col-span-1"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                David
              </span>
            </motion.div>
            <p className="text-gray-400 text-sm mb-4">
              Crafting beautiful, fast, and intuitive digital experiences.
            </p>
            <p className="text-gray-500 text-xs">
              © {currentYear} David Agbugba. All rights reserved.
            </p>
          </motion.div>

          {/* Links sections */}
          {footerLinks.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <motion.li key={link.label} whileHover={{ x: 5 }}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Newsletter or CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Get in touch</h4>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold text-sm hover:shadow-lg transition-all mb-4"
            >
              <a
                href="mailto:dagbugba@yahoo.com"
                className="w-full flex items-center justify-center"
              >
                Contact Me
              </a>
            </motion.button>
            <p className="text-gray-400 text-xs">
              Have a project? Let's collaborate and create something amazing.
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-8"
        />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-gray-400 text-sm"
          >
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
            </motion.span>
            <span>and Next.js</span>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                title={social.label}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300 hover:text-white hover:border-purple-400/60 transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Right text */}
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="#"
            className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
          >
            Scroll to top ↑
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
