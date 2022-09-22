import { FaWhatsapp, FaPhone } from "react-icons/fa";

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
                <button className="btn btn-primary flex-grow">Email Us</button>
                <button className="btn flex-grow bg-green-600 hover:bg-green-700 border-none text-white"><span><FaWhatsapp className="text-3xl mr-2" /></span>{`Let's Chat`}</button>
            </div>
            <button className="btn btn-primary mt-5 btn-block text-white"><span><FaPhone className="text-xl mr-2" /></span>{`Call Now`}</button>
        </div>
    )
}

export default DogDetailesCard;