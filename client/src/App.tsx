import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Timeline } from "./components/Timeline/Timeline";
import { Contact } from "./components/Contact";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";
import SEO from "./components/SEO";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2300);
    })();
  }, []);

  return (
    <>
      <HelmetProvider>
        <div className="bg-dark-darker min-h-screen bg-gradient-radial from-dark-darker via-dark to-transparent overflow-x-hidden ">
          <AnimatePresence mode="wait">
            {isLoading && <Preloader />}
          </AnimatePresence>
          <div className="relative">
            <SEO
              title={"Sumsum Gogoi | Full Stack Developer (MERN Stack)"}
              description={[
                "Custom portfolio site for Sumsum Gogoi showcasing MERN stack projects and full stack development skills.", // description[0],
                "Sumsum Gogoi",
                "MERN, React, Node, MongoDB, Express, JavaScript, Full Stack Developer Portfolio", // description[2]
              ]}
            />
            <Hero />
            <Projects />
            <Skills />
            <Timeline />
            <Contact />
          </div>
        </div>
        <Toaster position="top-center" />
      </HelmetProvider>
    </>
  );
}

export default App;
