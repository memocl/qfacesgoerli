import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { text } from 'stream/consumers'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>NFT Drop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="">Welcome to the NFT DROP Clone</h1>
    </div>
  )
}

export default Home
