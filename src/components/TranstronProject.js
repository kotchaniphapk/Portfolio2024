import React from "react";

import { Card } from "@nextui-org/react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";

import Image from "next/image";

function TranstronProject() {
  return (
    <div>
      <div>
        <Card className="px-4 mx-auto sm:px-6 lg:px-20 lg:py-20 max-w-6xl">
          <div className="text-center">
            <p className="text-md font-semibold text-primary">
              2022 Aug-2023 Jan
            </p>
            <h1 className="mt-3 text-4xl font-bold text-gray-900 ">
              Transtron Project
            </h1>
            <div className="max-w-xl mx-auto">
              <h2 className="mt-3 text-xl font-medium text-gray-600">
                {`Development platform for monitor an operator's activity and track a vehicle's location for shipping and transpolation`}
              </h2>
            </div>
          </div>

          <div className="mt-20 grid items-center grid-cols-1 gap-y-8 sm:gap-y-12 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-32">
            <div className="lg:order-2">
              <Image
                className="w-full filter drop-shadow-2xl rounded-xl border-2 border-gray"
                src="/transtronProject.png"
                width={1288}
                height={1288}
                alt=""
              />
            </div>

            <div className="flex flex-col justify-between lg:order-1">
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-900 sm:text-4xl leading-relaxed">
                  {`WebService V2`}
                </h2>
                <p className="mt-6 text-lg font-normal leading-7 text-gray-600">
                  {"Training:"}
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
                <p className="mt-6 text-lg font-normal leading-7 text-gray-600">
                  {"Worked on:"}
                </p>
                <div className="mt-2 flex flex-row gap-x-6">
                  <div>
                    <ui className="list-disc">
                      <li>
                        User Interface Design and Software Specification Design
                        documents
                      </li>
                      <li>Project proposal effectively documents</li>
                      <li>Mock up, automated testing</li>
                    </ui>
                  </div>
                </div>
                <div className="mt-6">
                  <h3>Stack & Knowledge:</h3>
                  <div className="mt-2 flex flex-row gap-x-6">
                    <div>
                      <ui className="list-disc">
                        <li>C#</li>
                        <li>Java Springboot</li>
                        <li>CSS</li>
                      </ui>
                    </div>
                    <div>
                      <ui className="list-disc">
                        <li>HTML</li>
                        <li>MVC</li>
                        <li>Docker</li>
                      </ui>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid max-w-xl grid-cols-1 mt-6 gap-y-3 sm:max-w-none sm:grid-cols-2 sm:gap-x-8 xl:mt-10 md:gap-x-16 lg:gap-x-8 xl:gap-x-16">
                {/* <div>
                <div className="w-24 h-px bg-gray-200"></div>
                <Link href="#">
                  <div className="flex gap-2 align-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mt-5">
                        Code
                      </h3>
                    </div>
                    <div className="mt-5">
                      <FaGithub size={20} />
                    </div>

                  </div>
                </Link>
              </div> */}
                <div className="">
                  <div className="w-24 h-px bg-gray-200"></div>
                  <Link
                    href="https://www.transtron.com/en/products/dts-d1d.html"
                    id="transtron-project"
                  >
                    <div className="flex gap-2 items-center">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mt-5">
                          Live Demo
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
        </Card>
      </div>
    </div>
  );
}

export default TranstronProject;
