export type SectionType = {
    children?: React.ReactNode,
    className?: string
}


export function Section({children, className}: SectionType){
    return <section className={`pt-28 pb-10 px-5 ${className}`}>
        <div className="container mx-auto">{children}</div>
    </section>
}