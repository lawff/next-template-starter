import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>nextjs template starter</title>
        <meta name="description" content="nextjs template starter" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className="py-20 px-12 text-center flex flex-col items-center gap-20px">
        <span text="blue 5xl hover:red" cursor="default">Nextjs</span>
        <div className="i-carbon-car inline-block" text="27px" />
        <button className="w-10rem">Button</button>
      </main>

    </div>
  )
}

export default Home
