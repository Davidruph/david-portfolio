"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-amber-500 to-orange-400 z-[60]"
        style={{ width: `${progress}%` }}
        transition={{ type: "spring", stiffness: 50, damping: 15 }}
      />

      {/* Right scroll dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-0.5 h-7 rounded-full bg-gradient-to-b from-amber-500 to-orange-400 mb-1"
        />

        {[0, 20, 40, 60, 80, 100].map((section) => (
          <motion.button
            key={section}
            onClick={() => {
              const h = document.documentElement.scrollHeight;
              window.scrollTo({ top: (h * section) / 100, behavior: "smooth" });
            }}
            animate={{
              scale: Math.abs(progress - section) < 10 ? 1.3 : 1,
              backgroundColor:
                Math.abs(progress - section) < 10
                  ? "rgba(245, 158, 11, 1)"
                  : "rgba(245, 158, 11, 0.25)"
            }}
            className="w-1.5 h-1.5 rounded-full transition-all cursor-pointer"
          />
        ))}
      </motion.div>
    </>
  );
}
