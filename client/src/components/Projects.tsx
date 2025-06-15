import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Container } from "./ui/Container";
import { SectionTitle } from "./ui/SectionTitle";

const projects = [
  {
    title: "E-Learning Platform",
    description: "A full-stack e-learning platform using MERN and cloudinary",
    image:
      "https://res.cloudinary.com/dikx4aj2f/image/upload/v1735988965/eLeaning_kjqxcv.png",
    github: "https://github.com/SUGOGOi/frontend_ccsa",
    live: "https://frontend-ccsa.vercel.app/",
    tags: ["React", "Express", "MongoDB", "Redux", "Cloudinary"],
  },
  {
    title: "FLEET | Epicwave",
    description: "An admin dashboard to manage clients and their documents",
    image:
      "https://res.cloudinary.com/dikx4aj2f/image/upload/v1735988962/dashboard_a8lt1j.png",
    github: "https://github.com/SUGOGOi/FLEET_vehicle_management",
    live: "https://vehicle-management-client-one.vercel.app/",
    tags: ["React", "Express", "MongoDB", "Zustand", "Cloudinary"],
  },
  {
    title: "E-Voting System Blockchain",
    description: "Online voting system using solidity(smart contract)",
    image:
      "https://res.cloudinary.com/dikx4aj2f/image/upload/v1735990116/evote_p1jkwt.jpg",
    github: "https://github.com/SUGOGOi/E_Voting_System_blockchain",
    tags: [
      "MERN",
      "Rust",
      "Solana",
      "Phantom Wallet",
      "Flask",
      "Face Recognition",
    ],
  },
];

export const Projects = () => {
  return (
    <section className="py-32 bg-transparent" id="projects">
      <div className="absolute inset-0 bg-gradient-radial from-dark-darker via-dark to-transparent opacity-90 z-[-1]" />
      <Container>
        <SectionTitle
          title="Featured Projects"
          subtitle="Explore some of my recent work and technical achievements"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-black-900/50 backdrop-blur-sm rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90 z-10" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="relative z-20 p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
                  >
                    <Github className="w-5 h-5 group-hover:text-blue-400" />
                    <span>Code</span>
                  </a>
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
                    >
                      <ExternalLink className="w-5 h-5 group-hover:text-blue-400" />
                      <span>Live Demo</span>
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
