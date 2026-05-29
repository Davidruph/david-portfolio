"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Download, Mail, Code2, Server, Wrench } from "lucide-react";

function CounterCard({
  end,
  suffix,
  label
}: {
  end: number;
  suffix: string;
  label: string;
}) {
  const [count, setCount] = useState(0);
  const ref  = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const duration = 1600;

    const frame = (now: number) => {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(frame);
    };

    requestAnimationFrame(frame);
  }, [inView, end]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, borderColor: "rgba(245,158,11,0.5)" }}
      transition={{ duration: 0.5 }}
      className="p-7 rounded-2xl bg-warm-800 border border-warm-600 hover:border-amber-500/40 transition-all text-center"
    >
      <div className="text-5xl font-bold text-amber-400 mb-1">
        {count}{suffix}
      </div>
      <p className="text-warm-400 text-sm uppercase tracking-wider">{label}</p>
    </motion.div>
  );
}

const CAPABILITIES = [
  {
    Icon: Code2,
    title: "Frontend",
    desc:  "Pixel-perfect React / Next.js UIs with Tailwind, complex animations, and conversion-optimised design systems."
  },
  {
    Icon: Server,
    title: "Backend",
    desc:  "Scalable REST APIs, database design, auth, caching, and real-time features with Laravel, Node.js & CodeIgniter."
  },
  {
    Icon: Wrench,
    title: "Architecture",
    desc:  "Multi-tenant SaaS, subscription billing, CI/CD pipelines, AWS deployment, and mentoring junior devs."
  }
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-4 bg-warm-950 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ opacity: [0.08, 0.18, 0.08] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute top-20 right-0 w-[400px] h-[400px] bg-amber-600 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-amber-500 font-semibold uppercase tracking-widest text-sm">
            About Me
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-warm-100 mt-4 leading-tight">
            Crafting Digital
            <span className="block text-amber-400">Excellence</span>
          </h2>
        </motion.div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left — story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <p className="text-warm-300 text-lg leading-relaxed">
              I&apos;m a seasoned Software Developer with 5+ years of deep expertise
              in JavaScript and PHP, specialising in startup applications that need
              to scale fast without breaking.
            </p>
            <p className="text-warm-400 leading-relaxed">
              From MERN stack to Laravel and CodeIgniter, I&apos;ve built everything
              from multi-tenant school management systems to AI-powered analytics
              platforms. I care deeply about clean code, database design, and
              converting great designs into performant interfaces.
            </p>
            <p className="text-warm-400 leading-relaxed">
              Beyond shipping code, I mentor junior developers, drive product
              strategy, and collaborate closely with stakeholders to turn vision
              into reality.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href="/david-agbugba-cv.pdf"
                download
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-warm-950 rounded-xl font-semibold transition-colors shadow-lg shadow-amber-500/20"
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 px-6 py-3 border border-warm-600 hover:border-amber-500/60 text-warm-200 hover:text-amber-400 rounded-xl font-semibold transition-all"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </motion.a>
            </div>
          </motion.div>

          {/* Right — animated counters */}
          <div className="grid grid-cols-2 gap-5">
            <CounterCard end={5}  suffix="+" label="Years Experience"  />
            <CounterCard end={23} suffix="+" label="Projects Completed" />
            <CounterCard end={15} suffix="+" label="Technologies"      />
            <CounterCard end={5}  suffix="+" label="Interns Trained"   />
          </div>
        </div>

        {/* Capability cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {CAPABILITIES.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              whileHover={{ y: -6 }}
              className="p-7 rounded-2xl bg-warm-800 border border-warm-600 hover:border-amber-500/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5 group-hover:bg-amber-500/20 transition-colors">
                <Icon className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="text-warm-100 font-bold text-lg mb-2">{title}</h3>
              <p className="text-warm-400 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
