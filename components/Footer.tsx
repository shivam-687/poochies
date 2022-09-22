import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedin, FaYoutube, FaLocationArrow, FaPhone, } from 'react-icons/fa'
import { MdEmail, MdMail } from 'react-icons/md';


export default function Footer() {

    const logoSquare = '/assets/logos/logo-square.png';

    const quickLinks: { lable: string, linkStr: string }[] = [
        {
            lable: 'Home',
            linkStr: '#'
        },
        {
            lable: 'Dog List',
            linkStr: '#'
        },
        {
            lable: 'About Us',
            linkStr: '#'
        },
        {
            lable: 'For Adoption',
            linkStr: '#'
        },
    ];

    const socialLink: { icon: React.ReactNode, linkStr: string }[] = [
        {
            icon: <FaFacebookF />,
            linkStr: '#'
        },
        {
            icon: <FaTwitter />,
            linkStr: '#'
        },
        {
            icon: <FaLinkedin />,
            linkStr: '#'
        },
        {
            icon: <FaYoutube />,
            linkStr: '#'
        },
    ]

    return (
        <footer className="px-5">
            <div className="py-14 border-y border-gray-400 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex item-center flex-col gap-2">
                    <div className="px-5"><Image src={logoSquare} alt="poochies square logo" width={100} height={100}></Image></div>
                    <div className="flex items-center gap-2 text-lg"><span className="inline-block text-xl text-primary"><FaLocationArrow /></span>Jl. Menteng Raya, Jakarta 76812</div>
                    <div className="flex items-center gap-2 text-lg"><span className="inline-block text-xl text-primary"><MdMail /></span>help@carine.com</div>
                    <div className="flex items-center gap-2 text-lg"><span className="inline-block text-xl text-primary"><FaPhone /></span>+62 876-543-210</div>
                </div>
                <div>
                    <h2 className="text-lg font-bold capitalize mb-5">Quick Links</h2>
                    <div className="flex items-start justify-center flex-col gap-2">
                        {
                            quickLinks.map((ql, index) => {
                                return <Link href={ql.linkStr} key={index} >
                                    <a className="link link-hover link-primary">{ql.lable}</a>
                                </Link>
                            })
                        }
                    </div>
                </div>
                <div className="flex">
                    <div className="w-full">
                        <h2 className="text-lg font-bold capitalize mb-5">Sign up to our newsletter</h2>
                        <div className="flex gap-2">
                            <input type="text" placeholder="Your Email" className="input input-bordered w-full max-w-md flex-grow" />
                            <button className="btn btn-primary">Subscribe</button>
                        </div>

                        <div className="flex items-center gap-2 mt-5">
                            {
                                socialLink.map((sl, index) => {
                                    return <div key={index} className="">
                                        <a className="btn btn-circle btn-primary text-lg" href={sl.linkStr} rel="no-follow">
                                           {sl.icon}
                                        </a>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
