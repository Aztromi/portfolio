"use client";

import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <section className="w-full flex items-center justify-center h-[95vh] bg-gray-50">
      <div className="w-[60rem] h-[50rem] mx-auto flex flex-col items-center justify-start gap-20">
        <h2 className="border-b pb-2 text-5xl font-bold text-gray-700 tracking-tight first:mt-0">
          About Me
        </h2>
        <div className="w-full flex justify-between gap-20">
          <div className="max-w-[50%] text-wrap text-gray-500">
            <h4 className="text-2xl font-semibold mb-4">GET TO KNOW ME!</h4>
            <p className="text-md">
              Norvin Kyle B. Perez <br />
              Full-Stack Web Developer | IT Graduate | UI/UX Enthusiast <br />
              I am a passionate full-stack developer with a Bachelor's degree in
              Information Technology from Adamson University. Proficient in
              modern web development tools and frameworks including PHP
              (Laravel, CodeIgniter), JavaScript (React.js), HTML/CSS
              (Tailwind), and database systems (MySQL, SQL Server). I have
              experience in both front-end and back-end development and have led
              projects such as the Parañaque Animal Response Team appointment
              system with SMS and email integration.
              <br />
              <br />
              Certified in Microsoft Database Administration Fundamentals and
              Fortinet’s NSE 1 & 2, I also bring skills in media editing using
              Adobe Creative Suite, Figma, and Canva. I aim to contribute to
              innovative IT solutions that drive real-world impact, improve user
              experience, and deliver efficiency across organizations.
            </p>
          </div>
          <div className="max-w-[50%] text-gray-500">
            <h4 className="text-2xl font-semibold mb-4">MY SKILLS</h4>
            <div className="space-y-4">
              <div className="mt-2 space-y-2">
                <h5 className="text-xl font-semibold">Programming Languages</h5>
                <div className="grid grid-cols-3 gap-2 ml-8">
                  <Badge className="text-md">HTML</Badge>
                  <Badge className="text-md">CSS</Badge>
                  <Badge className="text-md">Javascript</Badge>
                  <Badge className="text-md">Typescript</Badge>
                  <Badge className="text-md">PHP</Badge>
                  <Badge className="text-md">SQL</Badge>
                </div>
              </div>
              <div className="mt-2 space-y-2">
                <h5 className="text-xl font-semibold">Frameworks</h5>
                <div className="ml-4 space-y-2">
                  <h6 className="text-lg">Frontend</h6>
                  <div className="grid grid-cols-3 gap-2 ml-8">
                    <Badge className="text-md">React JS</Badge>
                    <Badge className="text-md">Tailwind</Badge>
                    <Badge className="text-md">Next.JS</Badge>
                    <Badge className="text-md">Material UI</Badge>
                    <Badge className="text-md">Shadcn</Badge>
                    <Badge className="text-md">Flowbite</Badge>
                  </div>
                  <h6 className="text-lg">Backend</h6>
                  <div className="grid grid-cols-3 gap-2 ml-8">
                    <Badge className="text-md">Laravel</Badge>
                    <Badge className="text-md">Codeigniter</Badge>
                    <Badge className="text-md">Vite</Badge>
                    <Badge className="text-md">Next.JS</Badge>
                    <Badge className="text-md">Node JS</Badge>
                  </div>
                </div>
              </div>
              <div className="mt-2 space-y-2">
                <h5 className="text-xl font-semibold">Other Skills</h5>
                <div className="grid grid-cols-3 gap-2 ml-8">
                  <Badge className="text-md">UI/UX</Badge>
                  <Badge className="text-md">Wordpress</Badge>
                  <Badge className="text-md">Git</Badge>
                  <Badge className="text-md">Github</Badge>
                  <Badge className="text-md">APIs</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
