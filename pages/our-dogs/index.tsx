import { NextPage } from "next";
import Head from "next/head";
import { DogInfoCardProps } from "../../components/DogInfoCard";
import DogFaq from "../../sections/dog-list/DogFaq";
import DogList from "../../sections/dog-list/DogList";
import HowItWorks from "../../sections/landing-page/HowItWorks";


const OurDogs: NextPage = () => {
    return (
        <>
            <Head>
                <title>Our Dogs</title>
            </Head>
            <DogList></DogList>
            <HowItWorks></HowItWorks>
            <DogFaq></DogFaq>
        </>
    )
}

export default OurDogs;