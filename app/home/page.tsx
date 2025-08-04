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
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
const Home = () => {
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
        <section className='w-full flex items-center justify-center h-[95vh] bg-gradient-to-b from-gray-50 to-[#78CAD2]'>
            <div className="w-[60rem] h-[50rem] mx-auto flex items-center justify-center gap-20">
                <div>
                    <Image src="/image.jpg" alt="Logo" height={300} width={300} className="rounded-xl" />
                </div>
                <div className="flex flex-col justify-center gap-6">
                    <h1 className="text-5xl font-bold text-gray-600">Hi, I'm Norvin Kyle</h1>
                    <div className="flex items-center gap-2">
                        <span className="text-xl">
                            Im a
                        </span>
                        <div className="text-[#78CAD2]">
                            <TypeAnimation
                                sequence={[
                                    'Web Developer...',
                                    1000,
                                    'Computer Programmer...',
                                    1000,
                                    'Software Developer...',
                                    1000,
                                    'Frontend Developer...',
                                    1000,
                                    'Backend Developer...',
                                    1000
                                ]}
                                wrapper="span"
                                speed={40}
                                style={{ fontSize: '2em', display: 'inline-block' }}
                                repeat={Infinity}
                                className="text-2xl text-[#78CAD2] font-bold"
                            />
                        </div>
                    </div>
                    <p className="text-xl text-gray-500">
                        Passionate about coding and solving real-world <br />
                        problems through full-stack web development. <br />
                        I enjoy building clean, functional, and <br />
                        visually engaging web applications.
                    </p>
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
                </div>
            </div>
        </section>
    )
}
export default Home;

