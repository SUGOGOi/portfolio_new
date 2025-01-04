import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h2>
      {subtitle && <p className="text-gray-400 text-lg md:text-xl">{subtitle}</p>}
    </motion.div>
  );
};