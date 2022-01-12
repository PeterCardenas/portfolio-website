import type { NextPage } from 'next'
import Head from 'next/head'
import About from 'components/sections/About'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Peter's Portfolio</title>
        <meta name="description" content="View some of my work!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About />
    </div>
  )
}

export default Home
