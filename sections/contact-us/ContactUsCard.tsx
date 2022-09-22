

import React from 'react'
import { Section } from '../../components/Section'
import { SectionHeader } from '../../components/SectionHeader';
import {FaPhone, FaCalendar, } from 'react-icons/fa';
import {HiLocationMarker} from 'react-icons/hi';
import ContactForm from '../../components/ContactForm';

function ContactUsCard() {
  return (
    <Section>
        <SectionHeader title="Let's Contact Us"/>
        <div className='p-5 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 max-w-6xl mx-auto border-black border rounded-3xl shadow-custom bg-base-100'>
            <div>
                <h2 className='text-3xl font-medium'>Get In Touch</h2>
                <p className='my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.</p>

                <div className='flex items-center mt-10'>
                    <span className='rounded-full w-12 h-12 text-primary-content bg-primary p-5 flex items-center justify-center mark'>
                        <i className='inline-block'><HiLocationMarker className='text-2xl'/></i>
                    </span>
                    <div className='ml-5'>
                        <h3 className='text-lg font-medium'>Address</h3>
                        <p>Jl. Menteng Raya Jakarta, Indonesia</p>
                    </div>
                </div>
                <div className='flex items-center mt-10'>
                    <span className='rounded-full w-12 h-12 text-primary-content bg-primary p-5 flex items-center justify-center mark'>
                        <i className='inline-block'><FaPhone className='text-xl'/></i>
                    </span>
                    <div className='ml-5'>
                        <h3 className='text-lg font-medium'>Phone</h3>
                        <p>+62 876-543-210</p>
                    </div>
                </div>
                <div className='flex items-center mt-10'>
                    <span className='rounded-full w-12 h-12 text-primary-content bg-primary p-5 flex items-center justify-center mark'>
                        <i className='inline-block'><FaCalendar className='text-xl'/></i>
                    </span>
                    <div className='ml-5'>
                        <h3 className='text-lg font-medium'>Shelter hours</h3>
                        <p>Mon-Sat 09.00 - 21.00</p>
                        <p>Sun 10.00 - 17.00</p>
                    </div>
                </div>
            </div>
            <div className="">
                <ContactForm></ContactForm>
            </div>
        </div>
    </Section>
  )
}

export default ContactUsCard