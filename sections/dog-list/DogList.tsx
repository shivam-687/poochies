

import { nanoid } from 'nanoid';
import React from 'react'
import DogCardGrid from '../../components/DogCardGrid';
import DogInfoCard, { DogInfoCardProps } from '../../components/DogInfoCard';
import { Section } from '../../components/Section'
import { SectionHeader } from '../../components/SectionHeader'
import Dogs, { Dog } from '../../mock-data/dogs';

const DogList = () => {
    const desc = "Different dog lovers have different preferences when it comes to bringing new guests home. While some prefer breeds that are high on energy and extremely playful, some prefer guard dogs, and others prefer bringing home puppies that look like fur toys.";
    const dogsList: Dog[] = Dogs.filter(d => !d.isForAdoption);
  return (
    <Section className="">
        <SectionHeader title='Our Dogs' desc = {desc}></SectionHeader>
        <DogCardGrid dogs={dogsList} />
    </Section>
  )
}

export default DogList