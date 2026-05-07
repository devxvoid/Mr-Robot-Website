import { motion } from "framer-motion";
import { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function GlassCard({ children, className = "", delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.55, ease: "easeOut" }}
      className={`glass rounded-[1.75rem] ${className}`}
    >
      {children}
    </motion.div>
  );
}
