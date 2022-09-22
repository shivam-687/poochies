import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Features from '../sections/landing-page/Features'
import Hero from '../sections/landing-page/Hero'
import HowItWorks from '../sections/landing-page/HowItWorks'
import OurDogs from '../sections/landing-page/OurDogs'
import Reviews from '../sections/landing-page/Review'
import WhyChooseUs from '../sections/landing-page/WhyChooseUs'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>Poochie|Best place to find your furry friend</title>
    </Head>
      <Hero></Hero>
      <Features></Features>
      <WhyChooseUs></WhyChooseUs>
      <OurDogs></OurDogs>
      <HowItWorks></HowItWorks>
      <Reviews></Reviews>
    </>
  )
}

export default Home
