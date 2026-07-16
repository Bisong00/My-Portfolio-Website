import { Helmet } from "react-helmet-async";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import background from "./assets/projects/full.png";

function App() {
  return (
    <>
      <Helmet>
        <title>
          Bisong Enow Njang-Ebob Rene | Software Engineer
        </title>

        <meta
          name="description"
          content="Software Engineer, Business Intelligence Analyst, Data Scientist, Machine Learning Engineer, Financial Engineer."
        />

        <meta
          name="keywords"
          content="Bisong Enow, Software Engineer, React, Spring Boot, Java, Python, Machine Learning, Data Science, Business Intelligence, Financial Engineering"
        />

        <meta
          name="author"
          content="Bisong Enow Njang-Ebob Rene"
        />
      </Helmet>

      <div
        className="min-h-screen bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="min-h-screen bg-slate-950/85">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Certifications />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;