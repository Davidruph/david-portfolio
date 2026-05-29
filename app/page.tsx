"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import Hero       from "@/components/sections/hero";
import About      from "@/components/sections/about";
import Skills     from "@/components/sections/skills";
import Projects   from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import Contact    from "@/components/sections/contact";
import ScrollIndicator from "@/components/ui/scroll-indicator";

function CursorFollower() {
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const sx = useSpring(mx, { stiffness: 80, damping: 22 });
  const sy = useSpring(my, { stiffness: 80, damping: 22 });

  useEffect(() => {
    const move = (e: MouseEvent) => { mx.set(e.clientX - 16); my.set(e.clientY - 16); };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mx, my]);

  return (
    <motion.div
      style={{ x: sx, y: sy }}
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-amber-400/35 pointer-events-none z-[9999] hidden lg:block"
    />
  );
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(id);
  }, []);

  return (
    <AnimatePresence>
      <div className="relative overflow-hidden">
        <CursorFollower />
        <ScrollIndicator />
        {isLoading && <LoadingScreen />}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </AnimatePresence>
  );
}

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 bg-warm-950 z-[9998] flex items-center justify-center"
    >
      <div className="flex flex-col items-center gap-4">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-10 h-10 rounded-full border-2 border-amber-500 border-t-transparent"
        />
        <span className="text-amber-500 text-sm font-medium tracking-widest uppercase">Loading</span>
      </div>
    </motion.div>
  );
}
