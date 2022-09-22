import { nanoid } from "nanoid";
import Image from "next/image";


const Fade = require('react-reveal/Fade');

export default function WhyChooseUsCard() {

    const wcuList = [
        {
            title: 'Preserving Specific Traits',
        },
        {
            title: 'Procuring Healthy Dogs',
        },
        {
            title: 'A Wide Variety Of Dog Breeds',
        },
        {
            title: 'Your Trusted Guides',
        },
        {
            title: 'Pure Blood Line',
        },
    ];

    const icon = '/assets/images/paw-icon.png'

    return (

        <div className="max-w-lg w-full p-5 rounded-xl bg-base-100">
            <div className="overflow-hidden">
                <Fade up>
                    <h1 className="text-center lg:text-left text-4xl uppercase font-bold mb-3">Why Choose Us?</h1>
                </Fade>
            </div>
            <div className="overflow-hidden">
                <Fade up>
                    <p className="text-center lg:text-left mb-5">This also meant we needed to provide a learning environment run by experienced and successful coaches. However, our most important goal was to create a welcoming.</p>

                </Fade>
            </div>

            <ul className="flex flex-col justify-center items-start mt-10 overflow-hidden">
                <Fade left>
                    {
                        wcuList.map((wcu, index) => {
                            return (
                                <li key={`${nanoid()}_${index}`} className="flex items-center mb-2">
                                    <span className="inline-block mr-5">
                                        <Image src={icon} alt="paw icon" width={30} height={30}></Image>
                                    </span>

                                    <h2 className="text-xl md:text-2xl">{wcu.title}</h2>
                                </li>
                            )
                        })
                    }
                </Fade>
            </ul>
        </div>
    );
}