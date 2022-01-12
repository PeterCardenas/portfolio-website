import type { NextPage } from "next";
import Head from "next/head";
import About from "components/sections/About";
import ProgressBar from "components/ProgressBar";
import Experiences from "components/sections/Experiences";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Peter&apos;s Portfolio</title>
        <meta name="description" content="View some of my work!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About />
      <Experiences />
      <ProgressBar />
    </div>
  );
};

export default Home;
