import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

interface TimelineItemProps {
  title: string;
  organization: string;
  date: string;
  description: string;
  index: number;
}

export const TimelineItem = ({
  title,
  organization,
  date,
  description,
  index,
}: TimelineItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-blue-500 to-transparent" />
      <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-blue-500 animate-glow" />

      <div
        className="bg-dark-card backdrop-blur-sm rounded-lg p-6 border border-blue-600 
             hover:border-blue-700 hover:shadow-[0_0_8px_rgba(59,130,246,0.6)] transition-all group"
      >
        <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
        <h4 className="text-secondary font-medium mb-2">{organization}</h4>
        <div className="flex items-center gap-2 text-blue-400 text-sm mb-4">
          <Calendar className="w-4 h-4" />
          <span>{date}</span>
        </div>
        <p className="text-gray-300 group-hover:text-white transition-colors">
          {description}
        </p>
      </div>
    </motion.div>
  );
};
