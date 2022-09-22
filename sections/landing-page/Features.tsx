import { nanoid } from "nanoid";
import FeatureCard from "../../components/FeatureCard";

const Fade = require('react-reveal/Fade');

export default function Features(){


    const featuresList = [
        {
            image: '/assets/images/fi-1.png',
            title: 'Well-bred And Healthy Dogs'
        },
        {
            image: '/assets/images/fi-3.png',
            title: 'Cost Effective Deals'
        },
        {
            image: '/assets/images/fi-2.png',
            title: 'Medical Assitance'
        },
    ];


    return (
        <section className="pt-5 pb-14 px-5 ">
            <Fade bottom>
            <div className="container mx-auto px-5 rounded-3xl p-8 grid grid-cols-1 md:grid-cols-3 border border-black bg-base-100">
                {
                    featuresList.map( (feature, index) => {
                        return (
                            <div key={`${nanoid()}_${index}`} className="border-b border-r-0 border-gray-300 lg:border-b-0 lg:border-r last:border-0">
                                <FeatureCard title={feature.title} image={feature.image}></FeatureCard>
                            </div>
                        )
                    })
                }
            </div>
            </Fade>
        </section>
    );
}