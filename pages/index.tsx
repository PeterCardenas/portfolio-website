import { UIEventHandler, useCallback, useRef, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import About from "components/sections/About";
import ProgressBar from "components/ProgressBar";
import Experiences from "components/sections/Experiences";
import Projects from "components/sections/Projects";
import Contact from "components/sections/Contact";

const Home: NextPage = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const experiencesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<string>("about");

  const scrollHandler: UIEventHandler<HTMLDivElement> = useCallback((evt) => {
    const { scrollTop, clientHeight } = evt.currentTarget;
    const scrollPosition = scrollTop + clientHeight / 2;
    const aboutCheckpoint = aboutRef.current?.clientHeight ?? 0;
    const experiencesCheckpoint =
      (experiencesRef.current?.clientHeight ?? 0) + aboutCheckpoint;
    const projectsCheckpoint =
      (projectsRef.current?.clientHeight ?? 0) + experiencesCheckpoint;
    if (scrollPosition < aboutCheckpoint) {
      setActiveSection("about");
    } else if (scrollPosition < experiencesCheckpoint) {
      setActiveSection("experiences");
    } else if (scrollPosition < projectsCheckpoint) {
      setActiveSection("work");
    } else {
      setActiveSection("contact");
    }
  }, []);

  const scrollToSection = useCallback((section: string) => {
    switch (section) {
      case "about":
        aboutRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "experiences":
        experiencesRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "work":
        projectsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  }, []);

  return (
    <div className="w-screen h-screen overflow-scroll" onScroll={scrollHandler}>
      <Head>
        <title>Peter&apos;s Portfolio</title>
        <meta name="description" content="View some of my work!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={experiencesRef}>
        <Experiences />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <ProgressBar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
    </div>
  );
};

export default Home;
