import { FaWhatsapp, FaPhone } from "react-icons/fa";
import CONSTANT from "../lib/constant";
import WhatsappBtn from "./WhatsappBtn";

export type DogDetailesCardProps = {
    gender: string,
    age: string,
    breed: string,
    weight: string,
    forAdoption: boolean,
}


const DogDetailesCard = (dogInfo: DogDetailesCardProps) => {
    return (
        <div className="max-w-xl w-full h-min rounded-3xl p-5 md:p-10 border border-black shadow-custom bg-white">
            <h1 className="text-3xl">General information</h1>
            <div className=" divider "></div>
            <div className="content text-xl font-light flex flex-col gap-4 ">
                <div className="flex">
                    <p className="uppercase w-full">Gender:</p>
                    <p className="capitalize w-full">{dogInfo.gender}</p>
                </div>
                <div className="flex">
                    <p className="uppercase w-full">Age:</p>
                    <p className="capitalize w-full">{dogInfo.age}</p>
                </div>
                <div className="flex">
                    <p className="uppercase w-full">Breed:</p>
                    <p className="capitalize w-full">{dogInfo.breed}</p>
                </div>
                <div className="flex">
                    <p className="uppercase w-full">Size:</p>
                    <p className="capitalize w-full">{dogInfo.weight}</p>
                </div>
                <div className="flex">
                    <p className="uppercase w-full">For Adoption:</p>
                    <p className={`capitalize w-full ${dogInfo.forAdoption ? 'text-success' : 'text-red-500'}`}>{dogInfo.forAdoption ? 'Available' : 'Not Available'}</p>
                </div>
            </div>
            <div className="divider"></div>
            <div className="flex items-center gap-5">
                <a href={`mailto:${CONSTANT.email}`} className="btn btn-primary flex-grow">Email Us</a>
                <WhatsappBtn/>
            </div>
            <a href={`tel:${CONSTANT.phone}`} className="btn btn-primary mt-5 btn-block text-white"><span><FaPhone className="text-xl mr-2" /></span>{`Call Now`}</a>
        </div>
    )
}

export default DogDetailesCard;