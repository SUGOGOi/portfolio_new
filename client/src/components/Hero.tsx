import { motion } from "framer-motion";
import { Github, Linkedin, ChevronDown, ArrowDownToLine } from "lucide-react";
import { Container } from "./ui/Container";
import myPhoto from "../assets/me.jpeg";

export const Hero = () => {
  return (
    <section className="min-h-screen relative bg-gradient-to-b from-black-900 to-black-800">
      <Container className="relative pt-32 pb-16 min-h-screen flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-blue-500/20"
          >
            <img
              src={myPhoto}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Sumsum Gogoi
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl text-blue-400 font-semibold mb-8">
              Full Stack Developer
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12">
              Crafting exceptional digital experiences with modern technologies
              and creative solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex gap-6 justify-center mb-16"
          >
            {[
              {
                icon: Github,
                href: "https://github.com/SUGOGOi",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/sumsum-gogoi-451714232/",
                label: "LinkedIn",
              },
              {
                icon: ArrowDownToLine,
                // href: "https://res.cloudinary.com/dikx4aj2f/image/upload/v1736177171/SumsumGogoi_yzvmum.pdf",
                // href: "https://res.cloudinary.com/dikx4aj2f/image/upload/v1749624190/SUMSUM_RESUME_reormh.pdf",
                href: "https://res.cloudinary.com/dikx4aj2f/image/upload/v1750439240/SUMSUM_RESUME_1_ax7ywa.pdf",
                label: "Resume",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gray-700/50 transition-colors group"
              >
                <social.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-blue-400" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
