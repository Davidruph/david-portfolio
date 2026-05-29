"use client";

import { motion } from "framer-motion";

export function RotatingOrb() {
  return (
    <div className="w-full h-96 flex items-center justify-center">
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Outer ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute w-64 h-64 border border-amber-500/30 rounded-full"
          style={{ borderStyle: "dashed" }}
        />

        {/* Middle ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          className="absolute w-48 h-48 border border-amber-400/40 rounded-full"
        />

        {/* Inner ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
          className="absolute w-32 h-32 border border-orange-500/50 rounded-full"
        />

        {/* Central orb */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            boxShadow: [
              "0 0 24px rgba(245,158,11,0.4)",
              "0 0 50px rgba(245,158,11,0.7)",
              "0 0 24px rgba(245,158,11,0.4)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-600"
        />
      </div>

      {/* Orbiting particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: Math.cos((i / 12) * Math.PI * 2) * 200,
            y: Math.sin((i / 12) * Math.PI * 2) * 200,
            rotate: 360
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-1.5 h-1.5 bg-amber-400/60 rounded-full"
          style={{ left: "50%", top: "50%", marginLeft: "-3px", marginTop: "-3px" }}
        />
      ))}
    </div>
  );
}
