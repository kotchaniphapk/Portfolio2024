import React from "react";
import { Button } from "@nextui-org/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

import Image from "next/image";

function Hero() {
  const list = [
    {
      img: "/js.svg",
    },
    {
      img: "/reactjs.svg",
    },
    {
      img: "/css3.svg",
    },
    {
      img: "/html5.svg",
    },
    {
      img: "/tailwindcss.svg",
    },
    {
      img: "/nextjs.svg",
    },
    {
      img: "/vitejs.svg",
    },
    {
      img: "/vscode.svg",
    },
    {
      img: "/figma.svg",
    },
  ];

  return (
    <div className="flex justify-center">
      <section className="relative py-12 sm:py-16 lg:pt-20 lg:pb-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 gap-y-8 lg:items-center lg:grid-cols-2 sm:gap-y-20 xl:grid-cols-5">
            <div className="text-center xl:col-span-2 lg:text-left md:px-16 lg:px-0">
              <div className="mx-auto sm:max-w-md md:max-w-full">
                <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight">
                  Kotchanipha Ilin
                </h1>
                <p className="text-lg">
                  {`I am a Front-End Web Developer with over one year experience. My expertise is in creating & designing websites and
                    now I'm excited to use my new web development skills to work on more projects. I'm looking forward to joining a team where I can keep learning and growing.`}
                </p>
              </div>
              <div className="mt-4 flex items-center justify-center sm:justify-start">
                <div className="flex gap-2">
                  <div>
                    <Link href="https://github.com/kotchaniphapk">
                      <FaGithub size={24} />
                    </Link>
                  </div>
                  <div>
                    <Link href="https://www.linkedin.com/in/kotchanipha-ilin-176292200/">
                      <FaLinkedin size={24} />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:flex sm:items-center sm:justify-center lg:justify-start sm:space-x-5 lg:mt-12">
                <Button
                  href="mailto:kotchaniphailin@gmail.com?subject=Contact from Portfolio"
                  target="_blank"
                  rel="noopener"
                  as="a"
                  title=""
                  size="md"
                  className="inline-flex items-center text-lg font-semibold text-white transition-all duration-200 bg-primary border border-transparent rounded-xl justif-center"
                  role="button"
                >
                  Contact
                </Button>

                <Button
                  variant="light"
                  as="a"
                  href="https://drive.google.com/drive/folders/14UhizSDYWNCeKRlJ5aWVkOOgkAVhTW0J?usp=sharing"
                  title=""
                  size="lg"
                  className="inline-flex items-center mt-4 text-lg font-semibold transition-all duration-200 bg-transparent border border-transparent sm:mt-0  justif-center rounded-xl"
                  role="button"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    ></path>
                  </svg>
                  Download CV
                </Button>
              </div>
              <div className="mt-5 flex gap-4">
                <h2 className="font-semibold text-lg">Stack:</h2>
                {list.map((item, index) => (
                  <div key={index} className="">
                    <Image
                      alt=""
                      src={item.img}
                      width={40}
                      height={40}
                      className="inline-flex"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="xl:col-span-3 lg:ml-60 sm:flex sm:items-center sm:justify-center">
              <Image
                className="align-center"
                src="/profilePicture.svg"
                alt=""
                width={400}
                height={469}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
