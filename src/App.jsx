import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Publication from "./components/Publication";



const App = () => {
  return (
    <div className="flex justify-center items-center overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection-text:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="max-w-[1400px] mx-auto px-[20px]">
        <Navbar />
        <Hero />
        <About />
        {/* <Technologies /> */}
        <Education />
        <Experience />
        <Publication />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
