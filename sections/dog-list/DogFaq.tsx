
import { nanoid } from 'nanoid';
import React from 'react'
import Fade from '../../components/animated/Fade';
import FaqCollapse from '../../components/FaqCollapse';
import { Section } from '../../components/Section'
import { SectionHeader } from '../../components/SectionHeader'

function DogFaq() {
    const title = "Common Questions";
    const desc = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, corrupti quisquam debitis nemo quaerat explicabo? Quam deleniti laboriosam alias, excepturi sequi sed earum sint, fugit numquam est maiores eveniet. Nostrum?"
    const faqs = [
        {
            question: "Where can I find more information?",
            answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, corrupti quisquam debitis nemo quaerat explicabo? Quam deleniti laboriosam alias, excepturi sequi sed earum sint"
        },
        {
            question: "Where can I find more information?",
            answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, corrupti quisquam debitis nemo quaerat explicabo? Quam deleniti laboriosam alias, excepturi sequi sed earum sint"
        },
        {
            question: "Where can I find more information?",
            answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, corrupti quisquam debitis nemo quaerat explicabo? Quam deleniti laboriosam alias, excepturi sequi sed earum sint"
        },
        {
            question: "Where can I find more information?",
            answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, corrupti quisquam debitis nemo quaerat explicabo? Quam deleniti laboriosam alias, excepturi sequi sed earum sint"
        },
        {
            question: "Where can I find more information?",
            answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, corrupti quisquam debitis nemo quaerat explicabo? Quam deleniti laboriosam alias, excepturi sequi sed earum sint"
        },
        {
            question: "Where can I find more information?",
            answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, corrupti quisquam debitis nemo quaerat explicabo? Quam deleniti laboriosam alias, excepturi sequi sed earum sint"
        },
        {
            question: "Where can I find more information?",
            answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, corrupti quisquam debitis nemo quaerat explicabo? Quam deleniti laboriosam alias, excepturi sequi sed earum sint"
        },
    ]
    return (
    <Section className="pb-28">
        <SectionHeader title={title} desc={desc} ></SectionHeader>
        <div className="mt-10 flex flex-col items-center">
            {
                faqs.map((faq, index) => {
                    return <Fade className="overflow-hidden" left key={`${nanoid()}_${index}`}>
                        <div  className="max-w-2xl w-full mb-4">
                        <FaqCollapse {...faq}></FaqCollapse>
                    </div>
                    </Fade>
                })
            }
        </div>
    </Section>
  )
}

export default DogFaq