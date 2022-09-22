import Image from "next/image";
import Link from "next/link";

const Fade = require('react-reveal/Fade');

export type SeeMoreDogsCardProps = {
    link: '';
}

export default function SeeMoreDogsCard() {

    const image = '/assets/images/paw-circle.png'
    return (
           
        
            <Link href={'#'}>
            <a className="flex items-center justify-center hover:brightness-95 w-full h-full group">
                <div className="max-w-sm w-full shadow-custom border border-black flex flex-col rounded-xl overflow-hidden h-full bg-primary group-hover:bg-white text-primary-content group-hover:text-primary transition duration-200">
                    <div className="flex flex-col items-center justify-center h-full py-14">
                        <div className="mb-10"><Image src={image} alt="paw icon" width={100} height={100}></Image></div>
                        <p className="text-center text-2xl uppercase">See More</p>
                    </div>
                </div>
            </a>
        </Link>
           
    );
}