import { NextPage } from "next";
import Head from "next/head";
import DogGallery from "../components/DogGallery";
import Dogs, { DogApi } from "../mock-data/dogs";
import { KannelGallery } from "../mock-data/kennel-gallery";


const OurDogs: NextPage<{gallery: string[]}> = (data: {gallery: string[]}) => {

    return(
        <>
        <Head>
            <title>Poochies Gallery</title>
        </Head>
        <DogGallery gallery={data.gallery}></DogGallery>
        </>
    )
}

export function getServerSideProps(){
    let gallery = [...KannelGallery, ...DogApi.getAllDogPhotos()];
    gallery = gallery.sort(() => .5 - Math.random());
    return {
        props: {
            gallery: gallery
        }
    }
}

export default OurDogs;