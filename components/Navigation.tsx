import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Drawer from 'react-modern-drawer';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import 'react-modern-drawer/dist/index.css'
import { NavLink } from "./Navlink";
import {useInView} from 'react-intersection-observer';

export type NavigationProps = {

}

export type MenuListItem = {
    lable: string;
    link: string;
    icon?: any;
}


const Navigation = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { ref, inView, entry } = useInView({

    });
    const desktopLogo = '/assets/logos/logo-long.png';
    const mobileLogo = '/assets/logos/logo-square.png';
    const menuList: MenuListItem[] = [
        {
            lable: 'Home',
            link: '/',
        },
        {
            lable: 'Our Dogs',
            link: '/our-dogs'
        },
        {
            lable: 'For Adoption',
            link: '/for-adoption'
        },
        {
            lable: 'Gallery',
            link: '/gallery'
        },
        {
            lable: 'Contact Us',
            link: '/contact-us'
        },
        {
            lable: 'About Us',
            link: '/about-us'
        }
    ];

    const toggleDrawer = () => {
        setIsOpen(prev => !prev);
    }

    return (
        <nav className={`relative`} >
            <div className={`navigation w-full z-40 ${inView ? 'relative bg-primary/5' : 'fixed top-0 left-0 w-full bg-white shadow-md shadow-primary/20'}`}>
            <div className="w-full">
                <div className="container mx-auto py-2 flex items-center px-5">
                    <div className="logo-container  flex-grow-0">
                        <Image src={desktopLogo} alt="poochies kennel logo" width={180} height={28}></Image>
                    </div>
                    {/* <div className="logo-container flex-grow-0 w-16 lg:hidden inline-block">
                        <div className=" aspect-square mark p-1 relative w-full overflow-hidden">
                            <Image src={mobileLogo} alt="" layout="fill" objectFit="cover"></Image>
                        </div>
                    </div> */}

                    <div className="flex-grow-1 w-full ">
                        <ul className=" items-center justify-center hidden md:flex">
                            {
                                menuList.map((link, index) => {
                                    return (
                                        <li className="desktop-nav-link " key={`${nanoid(5)}_${index}`}>
                                            <NavLink href={link.link} activeClassName="text-primary">
                                                <a>{link.lable}</a>
                                            </NavLink>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>

                    <div className="btn-container ml-2">
                        <button className="btn btn-primary hidden md:inline-block">ENQUIRY</button>
                        <button className="btn btn-circle btn-primary md:hidden inline-block ">
                            <span className="inline-flex items-center justify-center text-xl" onClick={toggleDrawer}><HiOutlineMenuAlt1 /></span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="block md:hidden">
                <Drawer
                    open={isOpen}
                    onClose={toggleDrawer}
                    direction='left'
                    className=''
                    
                >
                    <div className="py-3 flex items-center justify-center border-b-2 border-primary/50 mb-2">
                    <div className="logo-container">
                        <Image src={desktopLogo} alt="poochies kennel logo" width={180} height={28}></Image>
                    </div>
                    </div>
                    <div className="flex gap-2 flex-col p-3">
                        {
                            menuList.map((menu, index) => {
                                return (
                                    <NavLink href={menu.link} activeClassName="bg-primary text-primary-content" key={index}>
                                        <a className="block p-2 text capitalize rounded hover:bg-primary/20" onClick={toggleDrawer}>{menu.lable}</a>
                                    </NavLink>
                                )
                            })
                        }
                    </div>
                </Drawer>
            </div>
            </div>

            <div className="w-full absolute bottom-0 left-0" ref={ref}></div>
        </nav>
    );
}


export default Navigation;