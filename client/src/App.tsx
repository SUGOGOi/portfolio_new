import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Timeline } from "./components/Timeline/Timeline";
import { Contact } from "./components/Contact";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import { Toaster } from "react-hot-toast";

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
      <div className="bg-dark-darker min-h-screen bg-gradient-radial from-dark-darker via-dark to-transparent overflow-x-hidden ">
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>
        <div className="relative">
          <Hero />
          <Projects />
          <Skills />
          <Timeline />
          <Contact />
        </div>
      </div>
      <Toaster position="top-center" />
    </>
  );
}

export default App;
