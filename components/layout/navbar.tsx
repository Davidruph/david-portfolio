"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home",       href: "#home"       },
  { label: "About",      href: "#about"      },
  { label: "Skills",     href: "#skills"     },
  { label: "Projects",   href: "#projects"   },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact"    }
];

const SOCIALS = [
  { Icon: Github,   href: "https://github.com/Davidruph",                            label: "GitHub"   },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/david-agbugba-119b2b120",     label: "LinkedIn" },
  { Icon: Mail,     href: "mailto:dagbugba@yahoo.com",                               label: "Email"    }
];

export default function Navbar() {
  const [isOpen,     setIsOpen]     = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-warm-900/95 backdrop-blur-lg border-b border-warm-600/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center">
              <span className="text-warm-950 font-bold text-sm">DA</span>
            </div>
            <span className="text-warm-100 font-bold text-lg hidden sm:inline">
              David<span className="text-amber-400">.</span>
            </span>
          </Link>
        </motion.div>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              whileHover={{ y: -1 }}
              className="text-warm-400 hover:text-amber-400 transition-colors font-medium text-sm"
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Social icons */}
          <div className="hidden md:flex items-center gap-2">
            {SOCIALS.map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                title={label}
                whileHover={{ scale: 1.1, y: -1 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-lg bg-warm-800 border border-warm-600 hover:border-amber-500/60 flex items-center justify-center text-warm-400 hover:text-amber-400 transition-all"
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>

          {/* Hire Me button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="hidden md:inline-flex px-4 py-2 bg-amber-500 hover:bg-amber-400 text-warm-950 rounded-lg font-bold text-sm transition-colors"
          >
            Hire Me
          </motion.a>

          {/* Mobile toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-warm-800 transition-colors"
          >
            {isOpen
              ? <X    className="w-5 h-5 text-warm-100" />
              : <Menu className="w-5 h-5 text-warm-100" />
            }
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28 }}
            className="lg:hidden bg-warm-900/98 backdrop-blur-lg border-t border-warm-600/60"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-1">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setIsOpen(false)}
                  className="block py-2.5 px-3 rounded-lg text-warm-300 hover:text-amber-400 hover:bg-warm-800 font-medium text-sm transition-all"
                >
                  {item.label}
                </motion.a>
              ))}

              <div className="pt-4 mt-2 border-t border-warm-700 flex gap-3 items-center">
                {SOCIALS.map(({ Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-9 h-9 rounded-lg bg-warm-800 border border-warm-600 flex items-center justify-center text-warm-400 hover:text-amber-400 transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="ml-auto px-4 py-2 bg-amber-500 hover:bg-amber-400 text-warm-950 rounded-lg font-bold text-sm transition-colors"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
