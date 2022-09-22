

import { NextPage } from "next";
import Head from "next/head";
import ContactUsCard from "../sections/contact-us/ContactUsCard";



const ContactUs: NextPage = () => {

    return(
        <>
        <Head>
            <title>Contact Us</title>
        </Head>
        <ContactUsCard></ContactUsCard>
        </>
    )
}


export default ContactUs;