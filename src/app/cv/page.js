import { Divider, Button } from "@nextui-org/react";
import React from "react";
import { LuArrowUpRight, LuExternalLink } from "react-icons/lu";
import Link from "next/link";
import MainNavbar from "@/components/MainNavbar";
import Footer from "@/components/Footer";

function page() {
  return (
    <>
      <MainNavbar />

      <div className="mt-10 flex justify-evenly sm:justify-end max-w-5xl mx-auto print:hidden">
        <Button
          variant="flat"
          color="primary"
          as="a"
          href="https://drive.google.com/drive/folders/14UhizSDYWNCeKRlJ5aWVkOOgkAVhTW0J?usp=sharing"
          title=""
          size="lg"
          className="inline-flex items-center mt-4 text-lg font-semibold"
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
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            ></path>
          </svg>
          Download CV
        </Button>
      </div>
      <div className="mt-10 mx-auto max-w-5xl bg-white rounded-2xl border-4 border-primary sm:px-0 lg:px-10 lg:py-10 print:border-0 page print:max-w-letter print:max-h-letter print:mb-0 print:mt-0 lg:h-letter md:max-w-letter print:py-0 print:text-sm">
        <section className="py-5 sm:py-5 lg:py-5">
          <div className="px-4 mx-auto max-w-7xl lg:px-8">
            <div className="block">
              <h1 className="mb-0 text-5xl font-bold text-gray-700 print:text-lg">
                Kotchanipha Ilin
              </h1>
              <h2 className=" text-2xl font-semibold text-gray-700 leading-snug print:text-lg">
                Fontend Web Development
              </h2>
              <h3 className="py-2 text-xl font-semibold text-gray-500 leading-snug print:text-md">
                Bangkok, Thailand
              </h3>
            </div>
            <Divider className="mt-2 py-0.5 bg-primary" />
            <div className="mt-3 max-w-5xl grid grid-cols-1 mx-auto md:gap-x-16 gap-y-4">
              <div className="">
                <ul className="pr-7 list-inside">
                  <li className="mt-1 leading-normal text-gray-500 transition duration-100 ease-in hover:text-primary text-md">
                    <a
                      href="https://portfolio2024-zeta-nine.vercel.app/"
                      className="group"
                    >
                      <span className="mr-2 text-lg font-semibold text-gray-700 leading-snugish">
                        Portfolio:
                      </span>
                      https://portfolio2024-zeta-nine.vercel.app
                      <span className="inline-block font-normal text-black transition duration-100 ease-in group-hover:text-primary print:text-black ">
                        <LuArrowUpRight />
                      </span>
                    </a>
                  </li>
                  <li className="leading-normal text-gray-500 transition duration-100 ease-in hover:text-primary text-md">
                    <a
                      href="https://github.com/Kotchaniphapk"
                      className="group"
                    >
                      <span className="mr-5 text-lg font-semibold text-gray-700 leading-snugish">
                        Github:
                      </span>
                      kotchaniphapk
                      <span className="inline-block font-normal text-black transition duration-100 ease-in group-hover:text-primary print:text-black ">
                        <LuArrowUpRight />
                      </span>
                    </a>
                  </li>

                  <li className="leading-normal text-gray-500 transition duration-100 ease-in hover:text-primary text-md">
                    <a
                      href="mailto:kotchaniphailin@gmail.com?subject=Contact from CV"
                      target="_blank"
                      rel="noopener"
                      className="group"
                    >
                      <span className="mr-8 text-lg font-semibold text-gray-700 leading-snugish">
                        Email:
                      </span>
                      {"Kotchaniphailin@gmail.com"}
                      <span className="inline-block font-normal text-gray-500 transition duration-100 ease-in group-hover:text-primary print:text-black">
                        <LuArrowUpRight />
                      </span>
                    </a>
                  </li>
                  <li className="leading-normal text-gray-500 transition duration-100 ease-in hover:text-primary text-md">
                    <a href="tel:+15109070654">
                      <span className="mr-5 text-lg font-semibold text-gray-700 leading-snugish">
                        Phone:
                      </span>
                      +66-620638996
                    </a>
                  </li>
                </ul>
                <Divider className="mt-2" />
              </div>
              <div>
                <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                  Profile
                </p>
                <p className="mt-2 text-base font-normal sm:mt-4 sm:text-lg leading-relaxed print:text-sm">
                  {`I have a degree in Instrumentation and Automation Engineering,
                  which helped me develop strong problem-solving skills. In
                  2022, I discovered my love for creating and designing
                  websites, leading me to learn the basics of web development.
                  Soon after, I started working on several projects as a web
                  developer, focusing on the front-end and designing
                  user-friendly interfaces. My engineering background helps me
                  understand complex problems, and now I'm excited to use my new
                  web development skills to work on more projects. I'm looking
                  forward to joining a team where I can keep learning and
                  growing.`}
                </p>
              </div>
              <Divider className="mt-2" />
              <div>
                <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                  Main Tech Skills
                </p>
                <div className="mt-2 flex flex-row gap-x-6">
                  <div>
                    <ui className="list-disc">
                      <li>NextJS</li>
                      <li>ViteJS</li>
                      <li>React</li>
                    </ui>
                  </div>
                  <div>
                    <ui className="list-disc">
                      <li>Tailwinnd CSS</li>
                      <li>NextUI</li>
                      <li>CSS</li>
                    </ui>
                  </div>
                  <div>
                    <ui className="list-disc">
                      <li>Html</li>
                      <li>Js</li>
                      <li>{"C# (Basic)"}</li>
                    </ui>
                  </div>
                  <div>
                    <ui className="list-disc">
                      <li>Strapi</li>
                      <li>MySQL</li>
                    </ui>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                  Languages
                </p>
                <p className="mt-2 text-md">
                  Good level of written and spoken English, and Thai native
                  speaker.
                </p>
              </div>
              <div>
                <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                  Interests
                </p>
                <p className="mt-2 text-md">
                  Technology, travel, coffee, and music.
                </p>
              </div>
              <Divider className="mt-2" />
              <div>
                <div className="mt-2 mb-2 break-inside-avoid">
                  <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                    EDUCATION
                  </h2>
                  <div className="mt-2 break-inside-avoid">
                    <header>
                      <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                        {`King Mongkut’s University of Technology North Bangkok
                        Thailand`}
                      </h3>
                      <p className="leading-normal text-gray-500 text-md">
                        2017 &ndash; 2022 | Instrumentation and Automation
                        Engineering
                      </p>
                    </header>
                    <ul className="mt-2 list-disc list-inside text-gray-800 text-md">
                      <li>
                        <span className="font-semibold text-md">Major: </span>
                        Instrumentation Engineering
                      </li>
                      <li>
                        <span className="font-semibold text-md">Minor: </span>
                        Certificate in Electrical Power
                      </li>
                      <li>
                        <span className="font-semibold text-md">GPA: </span>
                        2.55
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Divider className="mt-2" />
                    <div>
                      <h3 className="mt-5 flex-grow text-lg font-semibold text-gray-700 leading-snugish">
                        Road to UX/UI Designer Workshop
                      </h3>
                      <p className="leading-normal text-gray-500 text-md">
                        2023|Certificate
                      </p>
                    </div>
                    <div className="mt-2 flex flex-col justify-between gap-x-6">
                      <p className="font-semibold text-md">{"Figma"}: </p>
                      <ul className="mt-2 list-disc list-inside text-gray-800 text-md">
                        <li>Figma tool</li>
                        <li>Grid system</li>
                        <li>Auto layout</li>
                        <li>Component prototypes</li>
                        <li>Variant, Variables</li>
                        <li>Interactive Components</li>
                      </ul>
                      <p className="font-semibold text-md">UI/UX: </p>
                      <ul className="mt-2 list-disc list-inside text-gray-800 text-md">
                        <li>User journey</li>
                        <li>Information Architecture</li>
                        <li>User flow</li>
                        <li>Wireframe</li>
                        <li>Organization</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <Divider className="mt-2" />
                    <div>
                      <h3 className="mt-5 flex-grow text-lg font-semibold text-gray-700 leading-snugish">
                        Vocational Certificate, Pattaya Technical Collage
                        Thailand
                      </h3>
                      <p className="leading-normal text-gray-500 text-md">
                        2015-2017 | Electrical Power
                      </p>
                    </div>
                    <ul className="mt-2 list-disc list-inside text-gray-800 text-md">
                      <li>
                        <span className="font-semibold text-md">GPA: </span>
                        3.70
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <Divider className="mt-2 bg-primary py-0.5" />
              <div>
                <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                  Work Experience
                </p>
                <div>
                  <div className="mt-2">
                    <p className="font-semibold text-lg">
                      2023 Feb-Present
                      <span className="px-10 text-lg">
                        Junior software developer Contract:{" "}
                        <span>
                          <Link
                            className="underline"
                            href="https://depomo.com/"
                          >
                            Depomo Ltd. UK
                          </Link>
                        </span>
                      </span>
                    </p>
                  </div>
                  <div className="lg:px-52 sm:px-0">
                    <div className="flex flex-col justify-between lg:order-1">
                      <div className="flex-1">
                        <p className="mt-2 text-lg font-semibold leading-7 text-gray-600">
                          {"Working:"}
                        </p>
                        <div className="mt-2 flex flex-row gap-x-6">
                          <div>
                            <p>
                              I worked on creating a Figma prototype for the new
                              Chartbrew v3 and Notoact landing page. After a few
                              revisions,I implemented most of the UI code using
                              React with NextJS.And worked on designing new
                              themes for public dashboards in Chartbrew. This
                              includes new colors and layouts with custom
                              headers and footers.
                            </p>
                          </div>
                        </div>
                        <div className="">
                          <p className="mt-4 text-lg font-semibold leading-7 text-gray-600">
                            Stack:
                          </p>
                          <div className="mt-2 flex flex-row gap-x-6">
                            <div>
                              <ui className="list-disc">
                                <li>NextJS</li>
                                <li>ViteJS</li>
                                <li>React</li>
                              </ui>
                            </div>
                            <div>
                              <ui className="list-disc">
                                <li>Tailwinnd Css</li>
                                <li>NextUI</li>
                                <li>Figma</li>
                              </ui>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="grid max-w-xl grid-cols-1 mt-4 gap-y-3 sm:max-w-none sm:grid-cols-2 sm:gap-x-8 xl:mt-10 md:gap-x-16 lg:gap-x-8 xl:gap-x-16">
                        <div className="">
                          <div className="w-24 h-px bg-gray-200"></div>
                          <Link href="/#chartbrew-project" className="group">
                            <div className="flex gap-2">
                              <div>
                                <h3 className="text-lg font-bold text-gray-900 mt-5 group-hover:text-primary">
                                  Demo
                                </h3>
                              </div>
                              <div className="mt-5">
                                <LuExternalLink
                                  size={20}
                                  className="group-hover:text-primary"
                                />
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mt-2">
                    <p className="font-semibold text-lg">
                      2022 Aug-2023 Jan
                      <span className="px-5 text-lg">
                        Junior software developer: transtron (thailand) co. ltd
                      </span>
                    </p>
                  </div>
                  <div className="lg:px-52 sm:px-0">
                    <div className="flex flex-col justify-between lg:order-1">
                      <div className="flex-1">
                        <p className="mt-2 text-lg font-semibold leading-7 text-gray-600">
                          {"Traning:"}
                        </p>
                        <div className="mt-2 flex flex-row gap-x-6">
                          <div>
                            <ui className="list-disc">
                              <li>C# Programming</li>
                              <li>Source Code Review</li>
                              <li>Training Mini project</li>
                              <li>IT specification Document</li>
                              <li>IT execution Document</li>
                            </ui>
                          </div>
                        </div>
                        <p className="mt-2 text-lg font-semibold leading-7 text-gray-600">
                          {"Working:"}
                        </p>
                        <div className="mt-2 flex flex-row gap-x-6">
                          <div>
                            <ui className="list-disc">
                              <li>
                                User Interface Design and Software Specification
                                Design documents
                              </li>
                              <li>Project proposal effectively documents</li>
                              <li>Mock up, automated testing</li>
                            </ui>
                          </div>
                        </div>
                        <div className="">
                          <p className="mt-4 text-lg font-semibold leading-7 text-gray-600">
                            Stack:
                          </p>
                          <div className="mt-2 flex flex-row gap-x-6">
                            <div>
                              <ui className="list-disc">
                                <li>C#</li>
                                <li>Java Springboot</li>
                                <li>Css</li>
                              </ui>
                            </div>
                            <div>
                              <ui className="list-disc">
                                <li>Html</li>
                                <li>Mvc</li>
                                <li>Docker</li>
                              </ui>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="grid max-w-xl grid-cols-1 mt-4 gap-y-3 sm:max-w-none sm:grid-cols-2 sm:gap-x-8 xl:mt-10 md:gap-x-16 lg:gap-x-8 xl:gap-x-16">
                        <div className="">
                          <div className="w-24 h-px bg-gray-200"></div>
                          <Link
                            href="https://www.transtron.com/en/products/dts-d1d.html"
                            className="group"
                          >
                            <div className="flex gap-2">
                              <div>
                                <h3 className="text-lg font-bold text-gray-900 mt-5 group-hover:text-primary">
                                  Demo
                                </h3>
                              </div>
                              <div className="mt-5">
                                <LuExternalLink
                                  size={20}
                                  className="group-hover:text-primary"
                                />
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mt-2">
                    <p className="font-semibold text-lg">
                      2021 Jun–2021 Nov
                      <span className="px-5 text-lg">
                        Automation engineer part feeder at Sinfonia Technology
                        Co., Ltd.
                      </span>
                    </p>
                  </div>
                  <div className="lg:px-52 sm:px-0">
                    <div className="flex flex-col justify-between lg:order-1">
                      <div className="flex-1">
                        <p className="mt-2 text-lg font-semibold leading-7 text-gray-600">
                          {"Trainee:"}
                        </p>
                        <div className="mt-2 flex flex-row gap-x-6">
                          <div>
                            <ui className="list-disc">
                              <li>{`I created automation scripts to control feeder machines
                      and designed graphical interfaces to interact with the
                      scripts. On top of this, I also wrote the documentation on
                      how to use the scripts and interfaces.`}</li>
                            </ui>
                          </div>
                        </div>
                        <div className="">
                          <p className="mt-4 text-lg font-semibold leading-7 text-gray-600">
                            Stack:
                          </p>
                          <div className="mt-2 flex flex-row gap-x-6">
                            <div>
                              <ui className="list-disc">
                                <li>Plc-ladder</li>
                                <li>HMI-design with GT-designer3</li>
                                <li>PLC CC-link with Electric Actuator</li>
                              </ui>
                            </div>
                            <div>
                              <ui className="list-disc">
                                <li>PLC CC-link with load-cell</li>
                                <li>Spection vision</li>
                                <li>Sensor industries</li>
                              </ui>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="grid max-w-xl grid-cols-1 mt-4 gap-y-3 sm:max-w-none sm:grid-cols-2 sm:gap-x-8 xl:mt-10 md:gap-x-16 lg:gap-x-8 xl:gap-x-16">
                        <div className="">
                          <div className="w-24 h-px bg-gray-200"></div>
                          <Link
                            href="https://www.linkedin.com/posts/activity-6897343683897671680-fQAE?utm_source=share&utm_medium=member_desktop"
                            className="group"
                          >
                            <div className="flex gap-2">
                              <div>
                                <h3 className="text-lg font-bold text-gray-900 mt-5 group-hover:text-primary">
                                  Demo
                                </h3>
                              </div>
                              <div className="mt-5">
                                <LuExternalLink
                                  size={20}
                                  className="group-hover:text-primary"
                                />
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </>
  );
}

export default page;
