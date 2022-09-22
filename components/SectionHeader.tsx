const Fade = require('react-reveal/Fade');
export type SectionHeaderProps = {
    title: string,
    desc?: string,
    align?: string,
    textPosition?: string
}

export const SectionHeader = (
    {
        title,
        desc,
        align='justify-center',
        textPosition='text-center'
    }: SectionHeaderProps
) => {

    return <div className={`${align} ${textPosition} flex items-center`}>
        <div className="max-w-xl">
            <div className="overflow-hidden">
                <Fade bottom>
                <h1 className="text-4xl md:text-5xl uppercase font-bold">{title}</h1>
                </Fade>
            </div>
            {
                desc && <div className="overflow-hidden"><Fade bottom><p className="mt-4">{desc}</p></Fade></div>
            }
        </div>
    </div>
}