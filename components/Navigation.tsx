import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";

export type NavigationProps = {

}

export type MenuListItem = {
    lable: string;
    link: string;
    icon?: any;
}


const Navigation = () => {

    const desktopLogo = '/assets/logoS/logo-long.png';
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

    return (
        <nav className="navigation bg-primary/5 w-full">
            <div className="w-full">
                <div className="container mx-auto py-2 flex items-center px-5">
                    <div className="logo-container flex-grow-0">
                        <Image src={desktopLogo} alt="poochies kennel logo" width={200} height={28}></Image>
                    </div>

                    <div className="flex-grow-1 w-full ">
                        <ul className=" items-center justify-center hidden md:flex">
                            {
                                menuList.map((link, index) => {
                                    return (
                                        <li className="desktop-nav-link " key={`${nanoid(5)}_${index}`}>
                                            <Link href={link.link} className="">
                                                <a>{link.lable}</a>
                                            </Link>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>

                    <div className="btn-container ml-2">
                        <button className="btn btn-primary">ENQUIRY</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}


export default Navigation;