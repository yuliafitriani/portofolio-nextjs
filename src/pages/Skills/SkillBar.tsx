import { motion } from "motion/react";

interface SkillBarProps {
  name: string;
  percentage: number; // 0 - 100
}

export default function SkillBar({ name, percentage }: SkillBarProps) {
  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-black text-white w-full rounded-xl p-6 flex flex-col gap-2"
      >
        {/* Header */}
        <div className="flex justify-between">
          <span className="text-sm font-bold">{name}</span>
          <span className="text-sm font-bold">{percentage}%</span>
        </div>

        {/* Progress Bar */}
        <div className="h-5 w-full bg-neutral-800 rounded-sm overflow-hidden">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: percentage / 100 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ originX: 0 }}
            className="h-full bg-gradient-to-r from-[#8746EB] to-[#DC49A6]"
          />
        </div>
      </motion.div>
    </div>
  );
}
