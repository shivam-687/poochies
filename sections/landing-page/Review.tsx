import { nanoid } from "nanoid";
import ReviewCard, { ReviewCardProps } from "../../components/ReviewCard";

export default function Reviews(){
    const reviewsList: ReviewCardProps[] = [
        {
            author: 'Avinash Singh',
            review: '“The first day we brought Miso home, he didn’t cry at all on the car ride home. He was incredibly curious, and wanted to explore absolutely everything.”',
            add: 'New Delhi',
            image: '/assets/images/reviewer-1.jpg'
        }
    ];


    return(
        <section className="py-28  px-5">
            <div className="container mx-auto">
                {
                    reviewsList.map((rv, index)=> {
                        return(

                            <div className="flex items-center justify-center " key={`${nanoid()}_${index}`}>
                                <ReviewCard {...rv}></ReviewCard>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}