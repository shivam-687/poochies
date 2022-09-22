import Fade from "./animated/Fade";

export type HowItWorksCardProps = {
    title: string;
    index: number;
    desc: string;
}


export default function HowItWorksCard({title, index, desc }: HowItWorksCardProps){
    return (
        <div className="p-2 max-w-xs ">
            <div className="relative border-t border-black p-3">
                <Fade className="overflow-hidden" down>
                <h3 className="text-xl">{title}</h3>
                <p className="">{desc}</p>
                </Fade>

                <div className="inline-block border border-black text-primary font-semibold text-lg rounded-full rounded-tr-none py-1 px-3 bg-primary/30 absolute top-0 right-full">{index}</div>
            </div>
        </div>
    )
}