import Image from "next/image";
import Link from "next/link";
import {FaWhatsapp} from 'react-icons/fa';
import WhatsappBtn from "../../components/WhatsappBtn";


const Zoom = require('react-reveal/Zoom');

const Hero = () => {

    const heroImagesList = {
        // image1: '/assets/images/pet-owner-1.jpg',
        // image2: '/assets/images/pet-owner-2.jpg',
        // image3: '/assets/images/pet-owner-3.jpg',
        image1: '/assets/images/hero/h1.jpg',
        image2: '/assets/images/hero/h2.jpg',
        image3: '/assets/images/hero/h3.jpg',
    }
    const blobIcon = '/assets/images/hero-blob.png';

    return (
        <>
            <section className="hero-section relative pt-20 pb-2 flex items-center px-5">
                <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-5 border border-black py-5 h-full rounded-2xl bg-primary">
                    <div className="flex items-center justify-center ">
                        <div className="w-full max-w-md">
                            <h1 className="text-4xl text-center lg:text-left uppercase  lg:text-6xl text-white">For the love and passion towards your pets.</h1>
                            <p className="mt-5 text-center lg:text-left text-base md:text-lg">If you are looking for the best options for bringing a puppy of your preferred breed home, your search ends here! Along with our dog breeding services, we provide dog lovers with some of the healthiest and most adorable puppies.</p>


                            <div className="flex gap-5 mt-7 items-center justify-center lg:justify-start">
                                <Link href="/for-adoption"><a className="btn">See Puppies</a></Link>
                               <WhatsappBtn/>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 justify-center relative mt-5 lg:mt-0">
                        <div className="flex flex-col gap-5 flex-grow max-w-[290px]">
                            <Zoom>
                            <div className="aspect-square  relative border border-black shadow-custom rounded-xl overflow-hidden">
                                <Image src={heroImagesList.image1} alt="" layout="fill" objectFit="cover"></Image>
                            </div>
                            </Zoom>

                            <Zoom delay={600}>
                            <div className="aspect-square relative border border-black shadow-custom rounded-xl overflow-hidden">
                                <Image src={heroImagesList.image2} alt="" layout="fill" objectFit="cover"></Image>
                            </div>
                            </Zoom>
                        </div>
                        <div className="flex items-center flex-grow  max-w-[290px]">
                            <Zoom delay={300}>
                            <div className="aspect-square relative w-full border border-black shadow-custom rounded-xl overflow-hidden " >
                                <Image src={heroImagesList.image3} alt="" layout="fill" objectFit="cover"></Image>
                            </div>
                            </Zoom>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}


export default Hero;
