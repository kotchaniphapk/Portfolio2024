import React from "react";
import { Card, Chip } from "@nextui-org/react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import Image from "next/image";

function ProjectPlay() {
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
      <Card className="px-4 mx-auto sm:px-6 lg:px-20 lg:py-20 max-w-6xl py-5 sm:py-5">
        <div className="text-center">
          {/* <p className="text-md font-semibold text-primary">2023 Feb-Present</p> */}
          <h1
            className="mt-3 text-4xl font-bold text-gray-900"
            id="chartbrew-project"
          >
            My Playground
          </h1>
        </div>

        <div className="mt-20 grid items-center grid-cols-1 gap-y-8 sm:gap-y-12 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-32">
          <div className="lg:order-2">
            <Image
              className="w-full filter drop-shadow-2xl rounded-xl border-2 border-gray"
              src="/younstar.png"
              width={1288}
              height={1288}
              alt=""
            />
          </div>

          <div className="flex flex-col justify-between lg:order-1">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-4xl">
                {"My Playground"}
              </h2>
              <p className="mt-6 text-lg font-normal leading-7 text-gray-600">
                {"I'm learning more to improve my coding."}
              </p>
              <div className="mt-6">
                <h3>Stack:</h3>
                <div className="mt-2 flex flex-row gap-x-6">
                  <div>
                    <ui className="list-disc">
                      <li>
                        <Link
                          href="https://youngstarexpress.vercel.app/"
                          className="group"
                        >
                          <div>
                            <h3 className="text-lg font-md text-gray-900 group-hover:text-primary">
                              Company Website
                            </h3>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.figma.com/proto/VV51DcmWxR1Q5ENuht5xjD/Young-start-web-site?page-id=153%3A223&node-id=249-246&viewport=231%2C257%2C0.14&t=JNneNEmUJaa5XqjP-1&scaling=scale-down-width&starting-point-node-id=249%3A246"
                          className="group"
                        >
                          <div>
                            <h3 className="text-lg font-md text-gray-900 group-hover:text-primary">
                              HRM UXUI design
                            </h3>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://github.com/kotchaniphapk/agent-easy"
                          className="group"
                        >
                          <div>
                            <h3 className="text-lg font-md text-gray-900 group-hover:text-primary">
                              Agent-Easy
                            </h3>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://cheevareemassage.webflow.io/"
                          className="group"
                        >
                          <div>
                            <h3 className="text-lg font-md text-gray-900 group-hover:text-primary">
                              Webflow
                            </h3>
                          </div>
                        </Link>
                      </li>
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
            </div>
          </div>
        </div>
        <div className="mt-20">
          <div className=" h-px bg-gray-200"></div>
        </div>
        
      </Card>
    </div>
  );
}

export default ProjectPlay;
