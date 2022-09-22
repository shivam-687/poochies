import { NextPage, GetServerSideProps } from 'next'
import { useRouter } from 'next/router';
import React from 'react'
import DogDetailesCard, { DogDetailesCardProps } from '../../components/DogDetailesCard';
import { Section } from '../../components/Section';
import { SectionHeader } from '../../components/SectionHeader';
import { Dog, DogApi } from '../../mock-data/dogs';
import Image from 'next/image';
import DogGallery from '../../components/DogGallery';
import Head from 'next/head';

const DogDetail: NextPage<Dog> = (dog: Dog) => {
    const dogDetails: DogDetailesCardProps = {
        age: dog.age,
        breed: dog.breed,
        gender: dog.gender,
        weight: dog.weight!,
        forAdoption: dog.isForAdoption
    }
    return (
        <>
        <Head>
            <title>Profile: {dog.name}</title>
        </Head>
            <Section>
                <SectionHeader title={`Hi, i'm ${dog.name}`} />
                <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-10 mt-10'>
                    <div className=" lg:col-span-2 p-5 ">
                        <div className="dog-image aspect-[4/3] md:aspect-video relative w-full rounded-3xl overflow-hidden border border-black shadow-custom">
                            <Image src={dog.image} alt="" layout="fill" objectFit="cover"></Image>
                        </div>
                        <div className="py-10 dog-content" dangerouslySetInnerHTML={{ __html: dog.details || '' }}>
                        </div>
                    </div>
                    <div className=" lg:col-start-3 lg:col-span-3 p-5 flex justify-center w-full ">
                        <div className='w-full sticky top-5  h-min'><DogDetailesCard {...dogDetails}></DogDetailesCard></div>
                    </div>
                </div>
                <div className="mt-5">
                    <DogGallery gallery={dog.gallery || []}></DogGallery>
                </div>
            </Section>
        </>
    )
}

export async function getServerSideProps(context: any) {
    const { params } = context;
    const { id } = params;
    console.log("ID: ", id)
    const dog = DogApi.findById(id);
    if (!dog) return { notFound: true }
    return {
        props: dog
    };
}


export default DogDetail;