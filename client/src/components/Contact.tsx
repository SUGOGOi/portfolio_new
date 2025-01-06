import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "./ui/Container";
import { SectionTitle } from "./ui/SectionTitle";
import "./ui/footer.scss";

export const Contact = () => {
  return (
    <section className="py-32 bg-transparent" id="contact">
      <Container className="max-w-4xl">
        <SectionTitle
          title="Get in Touch"
          subtitle="Let's discuss your next project"
        />

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-8">
              Contact Information
            </h3>
            {[
              { icon: Mail, text: "sumsumgogoi51@gmail.com" },
              { icon: Phone, text: "+91 7002022342" },
              { icon: MapPin, text: "Assam, India" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 group"
              >
                <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <item.icon className="w-6 h-6 text-blue-400" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            {[
              { id: "name", label: "Name", type: "text" },
              { id: "email", label: "Email", type: "email" },
            ].map((field) => (
              <div key={field.id}>
                <label
                  htmlFor={field.id}
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.id}
                  className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white transition-all"
                />
              </div>
            ))}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white transition-all resize-none"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg font-medium transition-all focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </Container>
    </section>
  );
};
