import { NextPage } from "next";
import Head from "next/head";
import DogCardGrid from "../components/DogCardGrid";
import DogGallery from "../components/DogGallery";
import DogInfoCard from "../components/DogInfoCard";
import { Section } from "../components/Section";
import { SectionHeader } from "../components/SectionHeader";
import Dogs, { Dog, DogApi } from "../mock-data/dogs";
import { KannelGallery } from "../mock-data/kennel-gallery";


const ForAdoption: NextPage<{dogs: Dog[]}> = (data: {dogs: Dog[]}) => {

    return(
        <>
        <Head>
            <title>Poochies For Adoption</title>
        </Head>

        <Section>
            <SectionHeader title="Poochies For Adoption"></SectionHeader>

            <div className="mt-16">
                <DogCardGrid dogs={data.dogs}/>
            </div>
        </Section>
        </>
    )
}

export function getServerSideProps(){
    const dogs = DogApi.filter(dog => {
        return dog.isForAdoption;
    });
    return {
        props: {
            dogs
        }
    }
}

export default ForAdoption;