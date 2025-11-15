"use client";

import { motion } from "framer-motion";

export function RotatingOrb() {
  return (
    <div className="w-full h-96 flex items-center justify-center">
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Outer rotating ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-64 h-64 border-2 border-purple-500/50 rounded-full"
        />

        {/* Middle rotating ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          className="absolute w-48 h-48 border-2 border-pink-500/50 rounded-full"
        />

        {/* Inner rotating ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute w-32 h-32 border-2 border-blue-500/50 rounded-full"
        />

        {/* Central glowing orb */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            boxShadow: [
              "0 0 20px rgba(168, 85, 247, 0.5)",
              "0 0 40px rgba(168, 85, 247, 0.8)",
              "0 0 20px rgba(168, 85, 247, 0.5)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"
        />
      </div>

      {/* Floating stars/particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: Math.cos((i / 12) * Math.PI * 2) * 200,
            y: Math.sin((i / 12) * Math.PI * 2) * 200,
            rotate: 360
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-1 h-1 bg-purple-400 rounded-full"
          style={{
            left: "50%",
            top: "50%",
            marginLeft: "-2px",
            marginTop: "-2px"
          }}
        />
      ))}
    </div>
  );
}
