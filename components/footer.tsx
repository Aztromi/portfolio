"use client";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import { SiGmail } from "react-icons/si";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const Footer = () => {
    const socials = [
        {
            title: "LinkedIn",
            url: "https://www.linkedin.com/in/norvin-kyle-perez-b4ba22245",
            icon: CiLinkedin,
            hover: "hover:bg-[#0a66c2] hover:text-white",
        },
        {
            title: "Github",
            url: "https://github.com/Aztromi",
            icon: PiGithubLogoFill,
            hover: "hover:bg-[#2b3137] hover:text-white",
        },
        {
            title: "Gmail",
            url: "mailto:pereznorvinkyle@gmail.com",
            icon: SiGmail,
            hover: "hover:bg-[conic-gradient(#c71610_0%_25%,#f2a60c_25%_50%,#08851b_50%_75%,#3b60c4_75%_100%)] hover:text-white",
        },
        {
            title: "Facebook",
            url: "https://www.facebook.com/nobrriiiinnnn",
            icon: FaFacebookF,
            hover: "hover:bg-[#3b5998] hover:text-white",
        },
    ];
    return (
        <footer className='bg-[#78CAD2] px-10 py-3'>
            <div className="flex items-start justify-between">
                <div>
                    <img src="/black.png" alt="Logo" height={100} width={100} />
                    <div className="flex flex-col ml-10 text-2xl font-light">
                        {["home", "about", "works", "contact"].map((item) => (
                            <a key={item} href={`/${item}`} className="transition-transform duration-300 hover:scale-110">
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col items-end gap-6 pt-4">
                    <div className="flex gap-4 text-3xl">
                        {socials.map((item) => {
                            return (
                                <Tooltip key={item.title}>
                                    <TooltipTrigger>
                                        <div
                                            className={`bg-gray-200 p-2 rounded-2xl transition-transform duration-300 hover:scale-110 ${item.hover}`}
                                        >
                                            <a href={item.url}>
                                                <item.icon />
                                            </a>
                                        </div></TooltipTrigger>
                                    <TooltipContent>
                                        <p>{item.title}</p>
                                    </TooltipContent>
                                </Tooltip>
                            );
                        })}
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 text-md text-end">
                        <span>
                            Location:
                        </span>
                        <span>
                            Manila City, Philippines
                        </span>
                        <span>
                            Contact:
                        </span>
                        <span>
                            +63 967 289 5949
                        </span>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col gap-2 items-center">
                <span className="text-sm">© 2025 by Norvin Kyle Perez. Built on Next.JS</span>
                <span className="text-sm">All Rights Reserved</span>
            </div>
        </footer>
    )
}
export default Footer;

