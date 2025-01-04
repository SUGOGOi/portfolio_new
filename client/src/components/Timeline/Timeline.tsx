import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { TimelineItem } from "./TimelineItem";
import { educationData } from "./TimelineData";

export const Timeline = () => {
  return (
    <section className="py-32 bg-transparent" id="timeline">
      <Container className="max-w-4xl">
        <SectionTitle title="Education" subtitle="My academic journey" />

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-8">
              Education
            </h3>
            <div className="relative">
              {educationData.slice(0, 2).map((item, index) => (
                <TimelineItem key={index} {...item} index={index} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* <h3 className="text-2xl font-semibold text-white mb-8"></h3> */}
            <div className="relative  mt-[64px]">
              {/* {experienceData.map((item, index) => (
                <TimelineItem key={index} {...item} index={index} />
              ))} */}
              {educationData.slice(-2).map((item, index) => (
                <TimelineItem key={index} {...item} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
