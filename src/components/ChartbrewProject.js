/* eslint-disable @next/next/no-img-element */
import React from "react";

import { Card, Chip } from "@nextui-org/react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";

import Image from "next/image";

function ChartbrewProject() {
  return (
    <div className="mt-10">
      <div className="py-20 text-center">
        <p
          className="text-3xl font-bold tracking-widest text-gray-900 uppercase"
          id="myportfolio"
        >
          My Portfolio
        </p>
      </div>
      <Card className="px-4 mx-auto sm:px-6 lg:px-20 lg:py-20 max-w-6xl">
        <div className="text-center">
          <p className="text-md font-semibold text-primary">2023 Feb-Present</p>
          <h1
            className="mt-3 text-4xl font-bold text-gray-900"
            id="chartbrew-project"
          >
            Chartbrew Project
          </h1>
          <div className="max-w-xl mx-auto">
            <h2 className="mt-3 text-xl font-medium text-gray-600">
              {`Chartbrew is a platform for creating dashboards with multiple
            visualization types and KPIs.`}
            </h2>
          </div>
        </div>

        <div className="mt-20 grid items-center grid-cols-1 gap-y-8 sm:gap-y-12 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-32">
          <div className="lg:order-2">
            <Image
              className="w-full filter drop-shadow-2xl rounded-xl border-2 border-gray"
              src="/chartbrew-landing.png"
              width={1288}
              height={1288}
              alt=""
            />
          </div>

          <div className="flex flex-col justify-between lg:order-1">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-4xl">
                {"Build Chartbrew's Landing Page"}
              </h2>
              <p className="mt-6 text-lg font-normal leading-7 text-gray-600">
                {
                  "I worked on creating a Figma prototype for the new Chartbrew v3 landing page. After a few revisions, I implemented most of the UI code using React with NextJS."
                }
              </p>
              <div className="mt-6">
                <h3>Stack:</h3>
                <div className="mt-2 flex flex-row gap-x-6">
                  <div>
                    <ui className="list-disc">
                      <li>NextJS</li>
                      <li>React</li>
                      <li>Tailwindcss</li>
                      <li>NextUI</li>
                    </ui>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid max-w-xl grid-cols-1 mt-6 gap-y-3 sm:max-w-none sm:grid-cols-2 sm:gap-x-8 xl:mt-10 md:gap-x-16 lg:gap-x-8 xl:gap-x-16">
              <div>
                <div className="w-24 h-px bg-gray-200"></div>
                <Link
                  href="https://github.com/kotchaniphapk?tab=overview&from=2024-02-01&to=2024-02-29"
                  className="group"
                >
                  <div className="flex gap-2 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mt-5 group-hover:text-primary">
                        Code
                      </h3>
                    </div>
                    <div className="mt-5 group-hover:text-primary">
                      <FaGithub size={20} />
                    </div>
                    <Chip isDisabled color="primary" className="mt-5">
                      Private
                    </Chip>
                  </div>
                </Link>
              </div>
              <div className="">
                <div className="w-24 h-px bg-gray-200"></div>
                <Link href="https://www.chartbrew.com" className="group">
                  <div className="flex gap-2 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mt-5 group-hover:text-primary">
                        Live Demo
                      </h3>
                    </div>
                    <div className="mt-5 group-hover:text-primary">
                      <LuExternalLink size={20} />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <div className=" h-px bg-gray-200"></div>
        </div>
        <div className="mt-10 grid items-center grid-cols-1 gap-y-8 sm:gap-y-12 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-32">
          <div className="lg:order-1">
            <Image
              className="w-full filter drop-shadow-2xl "
              src="/dashboard.png"
              width={1288}
              height={1288}
              alt=""
            />
          </div>

          <div className="flex flex-col justify-between lg:order-1">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-4xl">
                {"Chartbrew Dashboard"}
              </h2>
              <p className="mt-6 text-lg font-normal leading-7 text-gray-600">
                I worked on designing new themes for public dashboards in
                Chartbrew. This includes new colors and layouts with custom
                headers and footers.
              </p>
              <div className="mt-6">
                <h3>Stack:</h3>
                <div className="mt-2 flex flex-row gap-x-6">
                  <div>
                    <ui className="list-disc">
                      <li>ViteJs</li>
                      <li>React</li>
                      <li>Tailwindcss</li>
                      <li>NextUI</li>
                    </ui>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid max-w-xl grid-cols-1 mt-6 gap-y-3 sm:max-w-none sm:grid-cols-2 sm:gap-x-8 xl:mt-10 md:gap-x-16 lg:gap-x-8 xl:gap-x-16">
              <div>
                <div className="w-24 h-px bg-gray-200"></div>
                <Link
                  href="https://github.com/kotchaniphapk/chartbrew/commits/New-Theme-Report?author=kotchaniphapk"
                  className="hover:bg-primary-50 group"
                >
                  <div className="flex gap-2 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mt-5">
                        Code
                      </h3>
                    </div>
                    <div className="mt-5">
                      <FaGithub size={20} className="" />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="">
                <div className="w-24 h-px bg-gray-200"></div>
                <Link href="https://www.chartbrew.com group">
                  <div className="flex gap-2 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mt-5 group-hover:text-primary">
                        Live Demo
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
        <div className="mt-20 py-12 bg-gray-50 sm:py-16 lg:py-20">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl xl:text-4xl">
                {"UI/UX Design"}
              </h2>
              <p className="mt-5 text-lg font-normal text-gray-600 font-pj">
                User journeys to improve the UI/UX of the site
              </p>
            </div>

            <div className="grid grid-cols-1 px-12 mx-auto mt-12 lg:max-w-4xl xl:max-w-5xl sm:px-0 sm:grid-cols-3 gap-y-12 sm:gap-x-8 xl:gap-x-36">
              <div>
                <img
                  className="object-fill w-full h-60  rounded-xl"
                  src="/ex-dashboard-2.png"
                  alt=""
                />
                <div className="flex justify-center">
                  <Link href="https://www.figma.com/proto/hsrx20JMYtPmDuaeciYexv/New_UXUI_Chartbrew?page-id=0%3A1&type=design&node-id=721-10625&viewport=-4117%2C-1242%2C0.43&t=dYb6se0YZWilHcZd-1&scaling=min-zoom&mode=design">
                    <div className="flex gap-2 items-center">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mt-5">
                          Demo
                        </h3>
                      </div>
                      <div className="mt-5">
                        <LuExternalLink size={20} />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div>
                <img
                  className="object-cover w-full h-60 lg:h-80 rounded-xl"
                  src="/ex-dashboard-1.png"
                  alt=""
                />
                <div className="flex justify-center">
                  <Link
                    href="https://www.figma.com/proto/hsrx20JMYtPmDuaeciYexv/New_UXUI_Chartbrew?page-id=0%3A1&type=design&node-id=462-17627&viewport=-183%2C231%2C0.1&t=a6r7I7znZYATxbgl-1&scaling=min-zoom&mode=design"
                    target="_blank"
                    rel="noopener"
                  >
                    <div className="flex gap-2 items-center">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mt-5">
                          Demo
                        </h3>
                      </div>
                      <div className="mt-5">
                        <LuExternalLink size={20} />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              <div>
                <img
                  className="object-fill w-full h-60  rounded-xl"
                  src="/ex-landing.png"
                  alt=""
                />
                <div className="flex justify-center">
                  <Link href="https://www.figma.com/proto/hsrx20JMYtPmDuaeciYexv/New_UXUI_Chartbrew?page-id=0%3A1&type=design&node-id=134-32718&viewport=551%2C-862%2C0.11&t=chMDiEZdUxyU7e4V-1&scaling=min-zoom&mode=design">
                    <div className="flex gap-2">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mt-5">
                          Demo
                        </h3>
                      </div>
                      <div className="mt-5">
                        <LuExternalLink size={20} />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ChartbrewProject;
