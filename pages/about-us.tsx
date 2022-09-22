import React from 'react'
import { Section } from '../components/Section'
import { SectionHeader } from '../components/SectionHeader'
import Image from 'next/image';

function AboutUs() {
  return (
    <Section>
      <SectionHeader title='About Us' />

      <div className="mt-10">
        <div  className=" p-5 mark aspect-video relative w-full rounded-3xl overflow-hidden border border-black shadow-custom">
          <Image src={'/assets/images/reviewer-1.jpg'} alt="Poochies Owner" layout="fill" objectFit="cover"></Image>
        </div>
      </div>
    </Section>
  )
}

export default AboutUs