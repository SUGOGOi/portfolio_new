import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "./ui/Container";
import { SectionTitle } from "./ui/SectionTitle";
import "./ui/footer.scss";
import emailjs from "@emailjs/browser";
import { useState, FormEvent } from "react";
import toast from "react-hot-toast";

export const Contact = () => {
  const [from_name, setFrom_name] = useState("");
  const [from_email, setFrom_email] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmailHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const templateParams = {
      from_name: from_name,
      message: message,
      from_email: from_email,
    };
    try {
      setIsLoading(true);
      const response = await emailjs.send(
        "service_hcnwiyf", // Your EmailJS service ID
        "template_dck3hhi", // Your EmailJS template ID
        templateParams,
        {
          publicKey: "DeRfrytxY5_-X3XvH",
        }
      );
      console.log("SUCCESS!", response.status, response.text);
      toast.success("Message sent!");
      setFrom_email("");
      setFrom_name("");
      setMessage("");
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setFrom_email("");
      setFrom_name("");
      setMessage("");
      setIsLoading(false);
      toast.error("Fail to send message!");
    }
  };

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
            onSubmit={sendEmailHandler}
          >
            <div key={`name`}>
              <label
                htmlFor={"Name"}
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                {"Name"}
              </label>
              <input
                type={"text"}
                id={"text"}
                className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white transition-all"
                value={from_name}
                onChange={(e) => {
                  setFrom_name(e.target.value);
                }}
                required
              />
            </div>
            <div key={"email"}>
              <label
                htmlFor={"Email"}
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                {"Email"}
              </label>
              <input
                type={"email"}
                id={"email"}
                className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white transition-all"
                value={from_email}
                onChange={(e) => {
                  setFrom_email(e.target.value);
                }}
                required
              />
            </div>

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
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                required
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: isLoading ? 1 : 1.02 }} // Disable hover effect when loading
              whileTap={{ scale: isLoading ? 1 : 0.98 }} // Disable tap effect when loading
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg font-medium transition-all focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 flex items-center justify-center"
              type="submit"
              disabled={isLoading} // Disable button when loading
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 animate-spin text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 100 8v4a8 8 0 01-8-8z"
                    ></path>
                  </svg>
                  <span>Sending..</span>
                </div>
              ) : (
                "Send Message"
              )}
            </motion.button>
          </motion.form>
        </div>
      </Container>
    </section>
  );
};
