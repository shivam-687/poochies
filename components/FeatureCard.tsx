import Image from "next/image";

export type FeatureCardProps = {
    image: string,
    title: string,
    desc?: string
}


export default function FeatureCard({image, title}: FeatureCardProps){

    return (
        <>
            <div className="max-w-md p-2 flex flex-col items-center justify-center mb-5 lg:mt-0 ">
                <div className="w-24 h-24">
                    <Image src={image} alt={`icon image for ${title}`} width="150" height={150}></Image>
                </div>
                <h2 className="text-xl md:text-2xl font-regular mt-5">{title}</h2>
            </div>
        </>
    );
}