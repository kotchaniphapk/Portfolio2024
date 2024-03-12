import React from "react";

import { Card } from "@nextui-org/react";
import Link from "next/link";
import { LuExternalLink} from "react-icons/lu";

import Image from "next/image";

function NotocatProject() {
  return (
    <div>
      <Card className="px-4 mx-auto sm:px-6 lg:px-20 lg:py-20 max-w-6xl">
        <div className="text-center">
          <p className="text-md font-semibold text-primary">2023</p>
          <h1 className="mt-3 text-4xl font-bold text-gray-900 ">
            Notocat Project
          </h1>
          <div className="max-w-xl mx-auto">
            <h2 className="mt-3 text-xl font-medium text-gray-600">
              {`Notocat is a fully-featured newsletter platform built on Notion`}
            </h2>
          </div>
        </div>

        <div className="mt-20 grid items-center grid-cols-1 gap-y-8 sm:gap-y-12 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-32">
          <div className="lg:order-2">
            <Image
              className="w-full drop-shadow-2xl rounded-xl border-2 border-gray"
              src="/notocat-landing.webp"
              width={1288}
              height={1288}
              alt=""
            />
          </div>

          <div className="flex flex-col justify-between lg:order-1">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-4xl">
                {"Notocat Landing Page"}
              </h2>
              <p className="mt-6 text-lg font-normal leading-7 text-gray-600">
                {"I worked on designing and implementing Notocat's landing page. I also came up with the idea of the cat mascot that I drew and is now part of the product."}
              </p>
              <div className="mt-6">
                <h3>Stack:</h3>
                <div className="mt-2 flex flex-row gap-x-6">
                  <div>
                    <ui className="list-disc">
                      <li>ViteJS</li>
                      <li>React</li>
                      <li>CSS</li>
                      <li>NextUI</li>
                    </ui>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid max-w-xl grid-cols-1 mt-6 gap-y-3 sm:max-w-none sm:grid-cols-2 sm:gap-x-8 xl:mt-10 md:gap-x-16 lg:gap-x-8 xl:gap-x-16">
              <div className="">
                <div className="w-24 h-px bg-gray-200"></div>
                <Link href="https://notocat.com/" target="_blank" rel="noopener" className="group">
                  <div className="flex gap-2 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mt-5 group-hover:text-primary">
                        Demo
                      </h3>
                    </div>
                    <div className="mt-5">
                      <LuExternalLink size={20} className="group-hover:text-primary" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default NotocatProject;
