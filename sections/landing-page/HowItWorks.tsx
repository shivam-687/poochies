import { nanoid } from "nanoid"
import Fade from "../../components/animated/Fade"
import HowItWorksCard, { HowItWorksCardProps } from "../../components/HowItWorksCard"


export default function HowItWorks() {

    const howItWorksList: HowItWorksCardProps[] = [
        {
            title: 'Browse Pet Profile',
            desc: 'Lorem ipsum dolor sit amet, consect adipiscing elit.A dog is one of the few aspects ',
            index: 1
        },
        {
            title: 'Raise The Enquiry or Chat With Us.',
            desc: 'Lorem ipsum dolor sit amet, consect adipiscing elit.A dog is one of the few aspects ',
            index: 2
        },
        {
            title: 'Make A Meet Up',
            desc: 'Lorem ipsum dolor sit amet, consect adipiscing elit.A dog is one of the few aspects ',
            index: 3
        },
        {
            title: 'Make A legal Pet Adoption',
            desc: 'Lorem ipsum dolor sit amet, consect adipiscing elit.A dog is one of the few aspects ',
            index: 4
        },
    ]


    return (
        <section className="pt-28 pb-28 bg-white px-5">
            <div className="container mx-auto">
                <div className="flex items-center justify-center">
                    <div className="max-w-xl text-center">
                        <Fade up className="overflow-hidden">
                            <h1 className="text-4xl uppercase mb-2 font-bold">HOW IT WORKS</h1>
                        </Fade>
                        <Fade up className="overflow-hidden">
                            <p className="">A dog is one of the few aspects in life that are exactly how they seem adorable, loyal, protective, and playful!</p>
                        </Fade>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-5 ">
                    {
                        howItWorksList.map((hiw, index) => {
                            return (
                                
                                    <div className="flex items-start justify-center" key={index}>
                                        <HowItWorksCard {...hiw}></HowItWorksCard>
                                    </div>
                                
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}