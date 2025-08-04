"use client";
import { useState, useEffect, useRef, RefObject } from "react";
import Autoplay from "embla-carousel-autoplay";
import { GoDot } from "react-icons/go";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Works = () => {
  const [modal, setModal] = useState("standby");
  const [focusWork, setFocusWork] = useState("");
  const [focus, setFocus] = useState<RefObject<any> | null>(null);
  const [focusImages, setFocusImages] = useState<string[]>([]);
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!api) {
      return
    }
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])
  const portfolio = useRef(
    Autoplay({ delay: 2000 })
  );
  const natcorp = useRef(
    Autoplay({ delay: 2000 })
  );
  const pms = useRef(
    Autoplay({ delay: 2000 })
  );
  const bpbs = useRef(
    Autoplay({ delay: 2000 })
  );
  const dorsu = useRef(
    Autoplay({ delay: 2000 })
  );
  const inspire = useRef(
    Autoplay({ delay: 2000 })
  );
  const unmg = useRef(
    Autoplay({ delay: 2000 })
  );
  const recruitment = useRef(
    Autoplay({ delay: 2000 })
  );
  const portfolioImages = Array.from({ length: 10 }, (_, i) => `/portfolio/portfolio ${i + 1}.png`);
  const natcorpImages = Array.from({ length: 10 }, (_, i) => `/natcorp/natcorp ${i + 1}.png`);
  const pmsImages = Array.from({ length: 10 }, (_, i) => `/pms/PMS ${i + 1}.png`);
  const bpbsImages = Array.from({ length: 10 }, (_, i) => `/bpbs/bpbs ${i + 1}.png`);
  const dorsuImages = Array.from({ length: 10 }, (_, i) => `/dorsu/dorsu ${i + 1}.png`);
  const inspireImages = Array.from({ length: 10 }, (_, i) => `/inspire/inspire ${i + 1}.png`);
  const unmgImages = Array.from({ length: 7 }, (_, i) => `/unmg/unmg ${i + 1}.png`);
  const recruitmentImages = Array.from({ length: 7 }, (_, i) => `/recruitment/recruitment ${i + 1}.png`);
  const capitalizeFirst = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);
  return (
    <section className="w-full h-[125rem] bg-gray-50">
      <div className="w-[80rem] mx-auto flex flex-col items-center justify-start gap-20 pt-8">
        <h2 className="border-b pb-2 text-5xl font-bold text-gray-700 tracking-tight first:mt-0">
          Works/Projects
        </h2>
        <div className="w-full grid grid-cols-3 gap-10">
          {/* Portfolio */}
          <div className="h-[35rem] flex flex-col space-y-3 items-center shadow rounded-md transition-transform duration-300 hover:scale-110"
            onClick={() => {
              setModal("portfolio");
              setFocusWork("portfolio");
              setFocus(portfolio);
              setFocusImages(portfolioImages);
              setCount(10);
            }}>
            <Carousel
              plugins={[portfolio.current]}
              className="h-[21rem] w-full border border-gray-800 rounded-t-md overflow-hidden"
              onMouseEnter={portfolio.current.stop}
              onMouseLeave={portfolio.current.reset}
            >
              <CarouselContent>
                {portfolioImages.map((src, index) => (
                  <CarouselItem key={index}>
                    <Image src={src} alt={`portfolio ${index + 1}`} height={270} width={400} className="rounded-t-md" loading="lazy" />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="px-2 pb-2 flex flex-col justify-between h-full">
              <h3 className="text-2xl font-semibold text-gray-800 self-start ml-2">
                My Portfolio
              </h3>
              <p className="text-gray-500">
                Showcasing both technical proficiency and personal growth, this
                portfolio reflects my journey from unstructured coding habits to
                adopting best practices in front-end development. Developed
                using React and modern UI libraries, it demonstrates my focus on
                scalable design and code quality.
              </p>
              <div className="flex flex-wrap gap-2 p-2">
                <Badge className="text-[.7rem]">HTML</Badge>
                <Badge className="text-[.7rem]">CSS</Badge>
                <Badge className="text-[.7rem]">Typescript</Badge>
                <Badge className="text-[.7rem]">Next JS</Badge>
                <Badge className="text-[.7rem]">Tailwind</Badge>
                <Badge className="text-[.7rem]">Shadcn</Badge>
                <Badge className="text-[.7rem]">APIs</Badge>
              </div>
            </div>
          </div>
          {/* Natcorp */}
          <div className="h-[35rem] flex flex-col space-y-3 items-center shadow rounded-md transition-transform duration-300 hover:scale-110">
            <Carousel
              plugins={[natcorp.current]}
              className="h-[21rem] w-full border border-gray-800 rounded-t-md overflow-hidden"
              onMouseEnter={natcorp.current.stop}
              onMouseLeave={natcorp.current.reset}
              onClick={() => {
                setModal("natcorp");
                setFocusWork("natcorp");
                setFocus(natcorp);
                setFocusImages(natcorpImages);
                setCount(10);
              }}
            >
              <CarouselContent>
                {natcorpImages.map((src, index) => (
                  <CarouselItem key={index}>
                    <Image src={src} alt={`natcorp ${index + 1}`} height={270} width={400} className="rounded-t-md" loading="lazy" />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="px-2 pb-2 flex flex-col justify-between h-full">
              <h3 className="text-2xl font-semibold text-gray-800 self-start ml-2">
                Natcorp
              </h3>
              <p className="text-gray-500">
                Natcorp is my first full-stack recruitment platform built with
                native PHP. It connects job seekers with employers and features
                a user-friendly interface, recruiter analytics, talent pooling,
                and automated email notifications— demonstrating my ability to
                integrate front-end and back- end technologies effectively.
              </p>
              <div className="flex flex-wrap gap-2 p-2">
                <Badge className="text-[.7rem]">HTML</Badge>
                <Badge className="text-[.7rem]">CSS</Badge>
                <Badge className="text-[.7rem]">Javascript</Badge>
                <Badge className="text-[.7rem]">PHP</Badge>
                <Badge className="text-[.7rem]">SQL</Badge>
                <Badge className="text-[.7rem]">Flowbite</Badge>
                <Badge className="text-[.7rem]">Tailwind</Badge>
                <Badge className="text-[.7rem]">APIs</Badge>
              </div>
            </div>
          </div>
          {/* PMS */}
          <div className="h-[35rem] flex flex-col space-y-3 items-center shadow rounded-md transition-transform duration-300 hover:scale-110">
            <Carousel
              plugins={[pms.current]}
              className="h-[21rem] w-full border border-gray-800 rounded-t-md overflow-hidden"
              onMouseEnter={pms.current.stop}
              onMouseLeave={pms.current.reset}
              onClick={() => {
                setModal("pms");
                setFocusWork("pms");
                setFocus(pms);
                setFocusImages(pmsImages);
                setCount(10);
              }}>
              <CarouselContent>
                {pmsImages.map((src, index) => (
                  <CarouselItem key={index}>
                    <Image src={src} alt={`pms ${index + 1}`} height={270} width={400} className="rounded-t-md" loading="lazy" />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="px-2 pb-2 flex flex-col justify-between h-full">
              <h3 className="text-2xl font-semibold text-gray-800 self-start ml-2">
                Performance Management System
              </h3>
              <p className="text-gray-500">
                PMS (Performance Management System) is a web-based application
                for tracking employee KPIs, providing analytics, and automating
                performance review workflows. Actively in use, it features
                automated email notifications and real-time data insights to
                support performance monitoring and management.
              </p>
              <div className="flex flex-wrap gap-2 p-2">
                <Badge className="text-[.7rem]">HTML</Badge>
                <Badge className="text-[.7rem]">CSS</Badge>
                <Badge className="text-[.7rem]">Javascript</Badge>
                <Badge className="text-[.7rem]">PHP</Badge>
                <Badge className="text-[.7rem]">SQL</Badge>
                <Badge className="text-[.7rem]">React JS</Badge>
                <Badge className="text-[.7rem]">Tailwind</Badge>
                <Badge className="text-[.7rem]">Flowbite</Badge>
                <Badge className="text-[.7rem]">Chart JS</Badge>
                <Badge className="text-[.7rem]">APIs</Badge>
              </div>
            </div>
          </div>
          {/* BPBS */}
          <div className="h-[35rem] flex flex-col space-y-3 items-center shadow rounded-md transition-transform duration-300 hover:scale-110">
            <Carousel
              plugins={[bpbs.current]}
              className="h-[21rem] w-full border border-gray-800 rounded-t-md overflow-hidden"
              onMouseEnter={bpbs.current.stop}
              onMouseLeave={bpbs.current.reset}
              onClick={() => {
                setModal("bpbs");
                setFocusWork("bpbs");
                setFocus(bpbs);
                setFocusImages(bpbsImages);
                setCount(10);
              }}>
              <CarouselContent>
                {bpbsImages.map((src, index) => (
                  <CarouselItem key={index}>
                    <Image src={src} alt={`bpbs ${index + 1}`} height={270} width={400} className="rounded-t-md" loading="lazy" />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="px-2 pb-2 flex flex-col justify-between h-full">
              <h3 className="text-2xl font-semibold text-gray-800 self-start ml-2">
                BalikPinasBalikSaya
              </h3>
              <p className="text-gray-500">
                BalikPinas BalikSaya is a tourism booking platform where users
                can purchase vacation packages with curated destinations. It
                features an automated payment system, appointment booking,
                real-time PHP to USD conversion, and automated email
                notifications—streamlining the entire booking process for
                travelers.
              </p>
              <div className="flex flex-wrap gap-2 p-2">
                <Badge className="text-[.7rem]">HTML</Badge>
                <Badge className="text-[.7rem]">CSS</Badge>
                <Badge className="text-[.7rem]">Javascript</Badge>
                <Badge className="text-[.7rem]">PHP</Badge>
                <Badge className="text-[.7rem]">SQL</Badge>
                <Badge className="text-[.7rem]">Codeigniter</Badge>
                <Badge className="text-[.7rem]">Paypal</Badge>
                <Badge className="text-[.7rem]">Bootstrap</Badge>
                <Badge className="text-[.7rem]">Flowbite</Badge>
                <Badge className="text-[.7rem]">APIs</Badge>
              </div>
            </div>
          </div>
          {/* Dorsu */}
          <div className="h-[35rem] flex flex-col space-y-3 items-center shadow rounded-md transition-transform duration-300 hover:scale-110">
            <Carousel
              plugins={[dorsu.current]}
              className="h-[21rem] w-full border border-gray-800 rounded-t-md overflow-hidden"
              onMouseEnter={dorsu.current.stop}
              onMouseLeave={dorsu.current.reset}
              onClick={() => {
                setModal("dorsu");
                setFocusWork("dorsu");
                setFocus(dorsu);
                setFocusImages(dorsuImages);
                setCount(10);
              }}>
              <CarouselContent>
                {dorsuImages.map((src, index) => (
                  <CarouselItem key={index}>
                    <Image src={src} alt={`dorsu ${index + 1}`} height={270} width={400} className="rounded-t-md" loading="lazy" />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="px-2 pb-2 flex flex-col justify-between h-full">
              <h3 className="text-2xl font-semibold text-gray-800 self-start ml-2">
                Dorsu
              </h3>
              <p className="text-gray-500">
                Dorsu is a thesis management platform designed for students,
                teachers, and panelists. It enables students to upload and present
                their thesis, while faculty members can schedule defenses, assign panels
                based on expertise, grade submissions, and provide structured feedback.
                The system streamlines the thesis process and promotes efficient academic
                collaboration.
              </p>
              <div className="flex flex-wrap gap-2 p-2">
                <Badge className="text-[.7rem]">HTML</Badge>
                <Badge className="text-[.7rem]">CSS</Badge>
                <Badge className="text-[.7rem]">Javascript</Badge>
                <Badge className="text-[.7rem]">PHP</Badge>
                <Badge className="text-[.7rem]">SQL</Badge>
                <Badge className="text-[.7rem]">React JS</Badge>
                <Badge className="text-[.7rem]">Vite</Badge>
                <Badge className="text-[.7rem]">Node JS</Badge>
                <Badge className="text-[.7rem]">Tailwind</Badge>
                <Badge className="text-[.7rem]">Flowbite</Badge>
                <Badge className="text-[.7rem]">APIs</Badge>
              </div>
            </div>
          </div>
          {/* Inspire */}
          <div className="h-[35rem] flex flex-col space-y-3 items-center shadow rounded-md transition-transform duration-300 hover:scale-110">
            <Carousel
              plugins={[inspire.current]}
              className="h-[21rem] w-full border border-gray-800 rounded-t-md overflow-hidden"
              onMouseEnter={inspire.current.stop}
              onMouseLeave={inspire.current.reset}
              onClick={() => {
                setModal("inspire");
                setFocusWork("inspire");
                setFocus(inspire);
                setFocusImages(inspireImages);
                setCount(10);
              }}>
              <CarouselContent>
                {inspireImages.map((src, index) => (
                  <CarouselItem key={index}>
                    <Image src={src} alt={`inspire ${index + 1}`} height={270} width={400} className="rounded-t-md" loading="lazy" />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="px-2 pb-2 flex flex-col justify-between h-full">
              <h3 className="text-2xl font-semibold text-gray-800 self-start ml-2">
                Inspire Leaders
              </h3>
              <p className="text-gray-500">
                I contributed to the development of the official website for
                Inspire Leadership Consultancy Inc., a premier provider of
                leadership training and development in the Philippines. The
                site showcases the company’s learning interventions—including
                conferences, workshops, executive coaching, and consultancy services
              </p>
              <div className="flex flex-wrap gap-2 p-2">
                <Badge className="text-[.7rem]">HTML</Badge>
                <Badge className="text-[.7rem]">CSS</Badge>
                <Badge className="text-[.7rem]">Javascript</Badge>
                <Badge className="text-[.7rem]">PHP</Badge>
                <Badge className="text-[.7rem]">SQL</Badge>
                <Badge className="text-[.7rem]">React JS</Badge>
                <Badge className="text-[.7rem]">Tailwind</Badge>
                <Badge className="text-[.7rem]">Flowbite</Badge>
                <Badge className="text-[.7rem]">APIs</Badge>
              </div>
            </div>
          </div>
          {/* UNMG */}
          <div className="h-[35rem] flex flex-col space-y-3 items-center shadow rounded-md transition-transform duration-300 hover:scale-110">
            <Carousel
              plugins={[unmg.current]}
              className="h-[21rem] w-full border border-gray-800 rounded-t-md overflow-hidden"
              onMouseEnter={unmg.current.stop}
              onMouseLeave={unmg.current.reset}
              onClick={() => {
                setModal("unmg");
                setFocusWork("unmg");
                setFocus(unmg);
                setFocusImages(unmgImages);
                setCount(7);
              }}>
              <CarouselContent>
                {unmgImages.map((src, index) => (
                  <CarouselItem key={index}>
                    <Image src={src} alt={`unmg ${index + 1}`} height={270} width={400} className="rounded-t-md" loading="lazy" />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="px-2 pb-2 flex flex-col justify-between h-full">
              <h3 className="text-2xl font-semibold text-gray-800 self-start ml-2">
                UNMG
              </h3>
              <p className="text-gray-500">
                I worked on the website for United Neon Media Group (UNMG),
                one of the Philippines’ pioneering out-of-home advertising
                companies since 1937. The site highlights UNMG’s expertise
                in billboards, ambient, transit, and digital LED advertising,
                as well as their integrated media solutions. The project
                emphasizes UNMG’s commitment to creating impactful brand
                experiences and meaningful consumer connections.
              </p>
              <div className="flex flex-wrap gap-2 p-2">
                <Badge className="text-[.7rem]">HTML</Badge>
                <Badge className="text-[.7rem]">CSS</Badge>
                <Badge className="text-[.7rem]">Javascript</Badge>
                <Badge className="text-[.7rem]">Wordpress</Badge>
                <Badge className="text-[.7rem]">PHP</Badge>
                <Badge className="text-[.7rem]">SQL</Badge>
                <Badge className="text-[.7rem]">Extensions</Badge>
              </div>
            </div>
          </div>
          {/* Recruitment */}
          <div className="h-[35rem] flex flex-col space-y-3 items-center shadow rounded-md transition-transform duration-300 hover:scale-110">
            <Carousel
              plugins={[recruitment.current]}
              className="h-[21rem] w-full border border-gray-800 rounded-t-md overflow-hidden"
              onMouseEnter={recruitment.current.stop}
              onMouseLeave={recruitment.current.reset}
              onClick={() => {
                setModal("recruitment");
                setFocusWork("recruitment");
                setFocus(recruitment);
                setFocusImages(recruitmentImages);
                setCount(7);
              }}>
              <CarouselContent>
                {recruitmentImages.map((src, index) => (
                  <CarouselItem key={index}>
                    <Image src={src} alt={`recruitment ${index + 1}`} height={270} width={400} className="rounded-t-md" loading="lazy" />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="px-2 pb-2 flex flex-col justify-between h-full">
              <h3 className="text-2xl font-semibold text-gray-800 self-start ml-2">
                Recruitment
              </h3>
              <p className="text-gray-500">
                Developed a dynamic recruitment form and admin dashboard for the
                United Neon Media Group website using TypeScript. The form includes
                full validation and a user-friendly interface, while the dashboard
                supports expandable, modular features. Built with a focus on
                scalability and maintainability, the system seamlessly integrates
                with both the front-end and back-end to streamline applicant
                tracking and hiring workflows.
              </p>
              <div className="flex flex-wrap gap-2 p-2">
                <Badge className="text-[.7rem]">HTML</Badge>
                <Badge className="text-[.7rem]">CSS</Badge>
                <Badge className="text-[.7rem]">Javascript</Badge>
                <Badge className="text-[.7rem]">PHP</Badge>
                <Badge className="text-[.7rem]">SQL</Badge>
                <Badge className="text-[.7rem]">React JS</Badge>
                <Badge className="text-[.7rem]">Tailwind</Badge>
                <Badge className="text-[.7rem]">Flowbite</Badge>
                <Badge className="text-[.7rem]">APIs</Badge>
              </div>
            </div>
          </div>
        </div>
        <Dialog
          open={modal === focusWork}
          onOpenChange={(open) => {
            setModal(open ? focusWork : "standby");
            if (!open) {
              setFocusWork("");
              setFocus(null);
              setFocusImages([]);
              setCount(0);
            }
          }}
        >
          <DialogContent className="w-[80rem] h-[50rem]">
            <DialogHeader>
              <DialogTitle>{capitalizeFirst(focusWork)}</DialogTitle>
              <div className="h-full flex items-center justify-center">
                <Carousel
                  setApi={setApi}
                  plugins={focus?.current ? [focus.current] : []}
                  className="w-full max-w-[70rem]"
                  onMouseEnter={focus?.current.stop}
                  onMouseLeave={focus?.current.reset}
                >
                  <CarouselContent>
                    {focusImages.map((src, index) => (
                      <CarouselItem key={index}>
                        <Image src={src} alt={`${focusWork} ${index + 1}`} height={700} width={2000} className="rounded-t-md" loading="lazy" />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <div className="text-muted-foreground py-2 text-center text-sm">
                    {Array.from({ length: count }).map((_, index) => (
                      <button type="button" key={index} onClick={() => { setCurrent(index + 1); api?.scrollTo(index); }}>
                        <GoDot className={`text-2xl ${index + 1 === current ? "text-gray-600" : "text-gray-400"}`} />
                      </button>
                    ))}
                  </div>
                  <CarouselNext />
                </Carousel>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
export default Works;
