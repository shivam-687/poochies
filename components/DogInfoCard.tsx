import Image from "next/image";
import Link from "next/link";
import { Dog } from "../mock-data/dogs";
import { FaCheckCircle } from 'react-icons/fa';

export type DogInfoCardProps = {
    name: string;
    breed: string;
    gender: string,
    age: string,
    detailsLink: string;
    image: string;
    isForAdoption?: boolean
}

export default function DogInfoCard({ name, breed, gender, age, detailsLink, image, isForAdoption }: DogInfoCardProps) {


    return (
        <div className="max-w-sm w-full shadow-custom border border-black flex flex-col rounded-xl overflow-hidden group hover:shadow-none transition duration-300 bg-white p-2">
            <div className="dog-image aspect-video relative w-full rounded-xl overflow-hidden">
                <Image src={image} alt="" layout="fill" objectFit="cover"></Image>
            </div>
            <div className="p-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-primary">{name}</h3>
                    <p className="text-md text-gray-500">{breed}</p>
                </div>

                <div className="flex items-center justify-between mb-4">
                    <p className="text-gray-500 ">{`${gender} | ${age}`}</p>
                    {
                        isForAdoption && <p className="flex items-center gap-2 text-base text-green-700">
                            <span className="text-lg text-green-700"><FaCheckCircle /></span>
                            Available
                        </p>
                    }
                </div>

                <Link href={detailsLink}>
                    <a className="btn btn-primary border border-black">Deatails</a>
                </Link>
            </div>
        </div>
    )
}