import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Timeline } from "./components/Timeline/Timeline";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="bg-dark-darker min-h-screen bg-gradient-radial from-dark-darker via-dark to-transparent overflow-x-hidden ">
      <div className="relative">
        <Hero />
        <Projects />
        <Skills />
        <Timeline />
        <Contact />
      </div>
    </div>
  );
}

export default App;
