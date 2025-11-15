"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = window.scrollY;
      const progress = windowHeight > 0 ? (scrolled / windowHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 z-50"
        style={{ width: `${scrollProgress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ type: "spring", stiffness: 50, damping: 15 }}
      />

      {/* Right scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-4"
      >
        {/* Animated indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-1 h-8 rounded-full bg-gradient-to-b from-purple-500 to-pink-500"
        />

        {/* Progress dots */}
        <div className="flex flex-col gap-4 mt-4">
          {[0, 20, 40, 60, 80, 100].map((section) => (
            <motion.button
              key={section}
              onClick={() => {
                const scrollHeight = document.documentElement.scrollHeight;
                const targetScroll = (scrollHeight * section) / 100;
                window.scrollTo({ top: targetScroll, behavior: "smooth" });
              }}
              animate={{
                scale: Math.abs(scrollProgress - section) < 10 ? 1.2 : 1,
                backgroundColor:
                  Math.abs(scrollProgress - section) < 10
                    ? "rgba(168, 85, 247, 1)"
                    : "rgba(168, 85, 247, 0.3)"
              }}
              className="w-2 h-2 rounded-full transition-all cursor-pointer"
            />
          ))}
        </div>
      </motion.div>
    </>
  );
}
