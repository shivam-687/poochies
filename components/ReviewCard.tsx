import Image from "next/image";

export type ReviewCardProps = {
    author: string,
    add: string,
    image: string,
    review: string
}


export default function ReviewCard({author, add, image, review}: ReviewCardProps){
    const pawIcon = '/assets/images/paw-icon.png'
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 max-w-4xl">
            <div className='flex items-center justify-end'>
                <div className="p-5 lg:p-10 relative rounded-xl border border-black">
                    <p className="text-center text-lg">{review}</p>
                    <p className="text-center mt-5 ">{`${author} - ${add}`}</p>
                    {/* <div className="inline-block py-2 px-4 bg-black">Success Stories</div> */}
                    <div className="absolute left-0 top-0 -translate-y-1/2">
                        <Image src={pawIcon} alt="paw icon" width={50} height={50}></Image>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-start'>
                <div className="relative w-full aspect-square border border-black shadow-custom rounded-2xl overflow-hidden">
                <Image src={image} alt="" layout="fill" objectFit="cover"></Image>
                </div>
            </div>
        </div>
    );
}