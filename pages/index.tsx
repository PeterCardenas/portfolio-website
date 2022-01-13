import { useCallback, useEffect, useRef, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import About from "components/sections/About";
import ProgressBar from "components/ProgressBar";
import Experiences from "components/sections/Experiences";
import Projects from "components/sections/Projects";
import Contact from "components/sections/Contact";

const Home: NextPage = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experiencesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [sectionProgress, setSectionProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollTop, clientHeight } = scrollRef.current;
        const aboutCheckpoint = aboutRef.current?.clientHeight ?? 0;
        const experiencesCheckpoint =
          (experiencesRef.current?.clientHeight ?? 0) + aboutCheckpoint;
        const projectsCheckpoint =
          (projectsRef.current?.clientHeight ?? 0) + experiencesCheckpoint;
        if (scrollTop < aboutCheckpoint) {
          setSectionProgress(scrollTop / aboutCheckpoint);
          setActiveSection("about");
        } else if (scrollTop < experiencesCheckpoint) {
          setSectionProgress(
            (scrollTop - aboutCheckpoint) /
              (experiencesCheckpoint - aboutCheckpoint)
          );
          setActiveSection("experiences");
        } else if (scrollTop < projectsCheckpoint) {
          setSectionProgress(
            (scrollTop - experiencesCheckpoint) /
              (projectsCheckpoint - experiencesCheckpoint)
          );
          setActiveSection("work");
        } else {
          setSectionProgress(0);
          setActiveSection("contact");
        }
      }
    }, 50);

    return () => clearInterval(interval);
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
    <div
      className="w-screen h-screen overflow-y-scroll overflow-x-hidden"
      ref={scrollRef}
    >
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
        sectionProgress={sectionProgress}
      />
    </div>
  );
};

export default Home;
