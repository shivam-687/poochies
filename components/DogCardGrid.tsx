import React from 'react'
import Dogs, { Dog } from '../mock-data/dogs'
import Fade from './animated/Fade';
import DogInfoCard from './DogInfoCard'

export type DogCardGridProps = {
    dogs: Dog[],
    detailesLink?: string;
}

function DogCardGrid(props: DogCardGridProps) {
    return (
        <div className='dog-card-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14'>
            {
                props.dogs.map((d, index) => {
                    return <Fade left className="overflow-hidden p-3" key={index}>
                        <div className='flex justify-center' >
                            <DogInfoCard detailsLink={`${props.detailesLink || '/our-dogs/'}${d.id}`} {...d} />
                        </div>
                    </Fade>
                })
            }
        </div>
    )
}

export default DogCardGrid