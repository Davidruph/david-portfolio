"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Download, ArrowRight, Github, Linkedin, ExternalLink } from "lucide-react";

const ROLES = [
  "Full-Stack Developer",
  "React Specialist",
  "Laravel Expert",
  "Frontend Architect"
];

const SOCIALS = [
  { label: "GitHub",   href: "https://github.com/Davidruph",                                        Icon: Github      },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/david-agbugba-119b2b120",                 Icon: Linkedin    },
  { label: "Upwork",   href: "https://www.upwork.com/freelancers/davidjunior?mp_source=share",       Icon: ExternalLink }
];

function MagneticButton({
  children,
  href,
  primary,
  download
}: {
  children: React.ReactNode;
  href: string;
  primary?: boolean;
  download?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });

  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - (rect.left + rect.width  / 2)) * 0.22);
    y.set((e.clientY - (rect.top  + rect.height / 2)) * 0.22);
  };

  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.a
      ref={ref}
      href={href}
      download={download || undefined}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileTap={{ scale: 0.95 }}
      className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base transition-colors cursor-pointer ${
        primary
          ? "bg-amber-500 hover:bg-amber-400 text-warm-950 shadow-lg shadow-amber-500/20"
          : "border border-warm-600 hover:border-amber-500/60 text-warm-200 hover:text-amber-400"
      }`}
    >
      {children}
    </motion.a>
  );
}

export default function Hero() {
  const [roleIdx, setRoleIdx]       = useState(0);
  const [display, setDisplay]       = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIdx];
    const delay   = isDeleting ? 38 : 88;

    const id = setTimeout(() => {
      if (!isDeleting) {
        const next = current.slice(0, display.length + 1);
        setDisplay(next);
        if (next === current) setTimeout(() => setIsDeleting(true), 2200);
      } else {
        const next = current.slice(0, display.length - 1);
        setDisplay(next);
        if (next === "") {
          setIsDeleting(false);
          setRoleIdx((p) => (p + 1) % ROLES.length);
        }
      }
    }, delay);

    return () => clearTimeout(id);
  }, [display, isDeleting, roleIdx]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-warm-900 pt-20"
    >
      {/* Subtle amber grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,158,11,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }}
      />

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ opacity: [0.12, 0.24, 0.12] }}
          transition={{ duration: 9, repeat: Infinity }}
          className="absolute -top-48 -right-48 w-[520px] h-[520px] bg-amber-500 rounded-full blur-[130px]"
        />
        <motion.div
          animate={{ opacity: [0.07, 0.15, 0.07] }}
          transition={{ duration: 11, repeat: Infinity, delay: 3 }}
          className="absolute -bottom-48 -left-48 w-[520px] h-[520px] bg-orange-800 rounded-full blur-[130px]"
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        {/* ── Left ── */}
        <div className="space-y-8">
          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-warm-800 border border-warm-600 text-warm-300 text-sm font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Available for new projects
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="text-warm-100">David</span>
              <br />
              <span className="text-amber-400">Agbugba</span>
            </h1>
          </motion.div>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="h-8"
          >
            <p className="text-xl md:text-2xl text-warm-300 font-light">
              {display}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.85, repeat: Infinity }}
                className="inline-block w-[2px] h-6 bg-amber-400 ml-1 align-middle"
              />
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-warm-400 text-base leading-relaxed max-w-md"
          >
            5+ years building scalable apps for startups. From pixel-perfect
            React UIs to robust Laravel backends — I ship products that perform.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-10"
          >
            {[
              { value: "5+",  label: "Years Exp."    },
              { value: "23+", label: "Projects Built" },
              { value: "15+", label: "Technologies"  }
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold text-amber-400">{s.value}</div>
                <div className="text-warm-500 text-xs mt-0.5 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <MagneticButton href="#projects" primary>
              View My Work <ArrowRight className="w-4 h-4" />
            </MagneticButton>
            <MagneticButton href="/david-agbugba-cv.pdf" download>
              <Download className="w-4 h-4" /> Download CV
            </MagneticButton>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
            className="flex items-center gap-3 pt-2"
          >
            {SOCIALS.map(({ label, href, Icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-lg bg-warm-800 border border-warm-600 hover:border-amber-500/60 hover:text-amber-400 flex items-center justify-center text-warm-400 transition-all"
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* ── Right — Warm Orb ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden lg:flex items-center justify-center"
        >
          <WarmOrb />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-warm-500 uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDown className="w-5 h-5 text-amber-500" />
      </motion.div>
    </section>
  );
}

function WarmOrb() {
  const techLabels = ["React", "Next.js", "Laravel", "Node", "TS", "MySQL", "Docker", "AWS"];

  return (
    <div className="relative w-80 h-80 flex items-center justify-center">
      {/* Outer dashed ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute w-80 h-80 rounded-full border border-amber-500/20"
        style={{ borderStyle: "dashed" }}
      />

      {/* Middle ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-56 h-56 rounded-full border border-amber-400/30"
      />

      {/* Inner ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        className="absolute w-36 h-36 rounded-full border border-orange-500/40"
      />

      {/* Central orb */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          boxShadow: [
            "0 0 30px rgba(245,158,11,0.4)",
            "0 0 65px rgba(245,158,11,0.7)",
            "0 0 30px rgba(245,158,11,0.4)"
          ]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-24 h-24 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center z-10"
      >
        <span className="text-warm-950 font-bold text-2xl select-none">DA</span>
      </motion.div>

      {/* Orbiting tech labels */}
      {techLabels.map((label, i) => {
        const angle  = (i / techLabels.length) * Math.PI * 2;
        const radius = 155;
        const lx     = Math.cos(angle) * radius;
        const ly     = Math.sin(angle) * radius;
        return (
          <motion.div
            key={label}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
            className="absolute text-xs font-medium text-amber-300/70 select-none pointer-events-none"
            style={{ transform: `translate(${lx}px, ${ly}px) translate(-50%, -50%)` }}
          >
            {label}
          </motion.div>
        );
      })}
    </div>
  );
}
