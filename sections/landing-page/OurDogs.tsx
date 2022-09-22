import { nanoid } from "nanoid";
import Fade from "../../components/animated/Fade";
import DogInfoCard, { DogInfoCardProps } from "../../components/DogInfoCard";
import SeeMoreDogsCard from "../../components/SeeMoreDogsCard";
import { DogApi } from "../../mock-data/dogs";



export default function OurDogs() {

    const dogsList: DogInfoCardProps[] = DogApi.getDogs(5).map(dog => {
        return {
            name: dog.name,
            breed: dog.breed,
            age: dog.age,
            detailsLink: `/our-dogs/${dog.id}`,
            gender: dog.gender,
            image: dog.image,
            isForAdoption: dog.isForAdoption
        }
    })


    return (
        <section className="px-5 py-14">
            <div className="container mx-auto">
                <div className="flex items-center justify-center">
                    <div className="max-w-xl text-center">
                        <Fade className="overflow-hidden" up ><h1 className="text-4xl uppercase mb-2 font-bold">Meet Our Dogs</h1></Fade>
                        <Fade className="overflow-hidden" up><p className="">Different dog lovers have different preferences when it comes to bringing new guests home. While some prefer breeds that are high on energy and extremely playful, some  prefer guard dogs, and others prefer bringing home puppies that look like fur toys.</p></Fade>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
                        
                        {
                            dogsList.map((dog, index)=> {
                                return (
                                        <Fade left className="overflow-hidden p-2" key={`${nanoid()}_${index}`}>
                                    <div className="flex items-center justify-center " >
                                        <DogInfoCard {...dog}></DogInfoCard>
                                    </div>
                                        </Fade>
                                )
                            })
                        }
                        <Fade className="h-full flex overflow-hidden" left>
                        <div className="flex items-center justify-center w-full">
                            {/* <Fade left className="overflow-hidden flex items-center justify-center mark"> */}
                            <SeeMoreDogsCard></SeeMoreDogsCard>
                            {/* </Fade> */}
                        </div>
                        </Fade>
                     
                    </div>
            </div>
        </section>
    );
}