import type { NextPage } from "next";
import Head from "next/head";
import About from "components/sections/About";
import ProgressBar from "components/ProgressBar";
import Experiences from "components/sections/Experiences";
import { UIEventHandler, useCallback, useRef, useState } from "react";

const Home: NextPage = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const experiencesRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<string>("about");

  const scrollHandler: UIEventHandler<HTMLDivElement> = useCallback((evt) => {
    const { scrollTop, clientHeight } = evt.currentTarget;
    const scrollPosition = scrollTop + clientHeight / 2;
    const aboutCheckpoint = aboutRef.current?.clientHeight ?? 0;
    const experiencesCheckpoint =
      (experiencesRef.current?.clientHeight ?? 0) + aboutCheckpoint;
    if (scrollPosition < aboutCheckpoint) {
      setActiveSection("about");
    } else if (scrollPosition < experiencesCheckpoint) {
      setActiveSection("experiences");
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
      <ProgressBar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
    </div>
  );
};

export default Home;
