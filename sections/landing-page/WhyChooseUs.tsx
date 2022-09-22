import WhyChooseUsCard from "../../components/WhyChooseUsCard";
import Image from "next/image";

const Fade = require("react-reveal/Fade");

export default function WhyChooseUs() {

    const image = '/assets/images/why-choose-us.jpg'
    return (

        <section className="py-14 px-5">
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-5 mx-auto">
                <div className=" flex items-center justify-center bg-base-100 rounded-xl">
                    <WhyChooseUsCard></WhyChooseUsCard>
                </div>

                <div className="flex items-center justify-center">
                    <div className="max-w-lg w-full overflow-hidden">
                        <Fade left>
                        <div className="aspect-square relative border w-full border-black shadow-custom rounded-xl overflow-hidden">
                            <Image src={image} alt="" layout="fill" objectFit="cover"></Image>
                        </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
}