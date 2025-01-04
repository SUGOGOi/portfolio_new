import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { SectionTitle } from "./ui/SectionTitle";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "SCSS", "Zustand"],
  },
  {
    title: "Backend",
    skills: ["Python", "Express", "Django", "REST APIs"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "DevOps & Cloud",
    skills: ["Docker", "CI/CD", "Linux", "Git"],
  },
];

export const Skills = () => {
  return (
    <section className="py-32 relative bg-transparent" id="skills">
      <Container>
        <SectionTitle
          title="Skills & Expertise"
          subtitle="Technologies and tools I work with"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-gradient-to-b from-transparent to-gray-950/90 backdrop-blur-sm rounded-xl p-6 border border-blue-800 
                         hover:border-blue-300   transition-colors shadow-lg"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm hover:bg-blue text-blue-400 
                             rounded-md text-sm font-medium transition-all cursor-default
                             border border-blue-200 hover:border-blue-400"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
