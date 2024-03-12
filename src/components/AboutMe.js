"use client";
import React, { useState } from "react";

function AboutMe() {
  return (
    <div>
      <section className="py-12 sm:py-16 lg:py-10">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-1 lg:gap-x-16 xl:gap-x-32 gap-y-12">
            <div>
              <h2 className="tracking-tighter text-gray-800">
                <span className="text-3xl md:text-4xl font-semibold">
                  {" "}
                  About me,{" "}
                </span>
                {/* <span className="font-serif text-2xl italic md:block md:text-7xl">
                  {" "}
                  non tincidunt consectetur{" "}
                </span> */}
              </h2>
              <p className="mt-8 text-lg font-normal leading-8 text-opacity-50 text-gray-800">
                Lorem convallis ligula mi tristique vel iaculis ultrices proin.
                Habitant dignissim volutpat accumsan egestas arcu vulputate.
                Nulla diam nisl, mi non luctus ut neque. Sit ac elementum,
                vivamus imperdiet.
              </p>
            </div>

            <div>
              <div className="grid grid-cols-2 gap-5 sm:grid-cols-2">
                <div className="space-y-5">
                  <div className="overflow-hidden transition-all duration-200 border rounded-lg border-neutral hover:bg-dark-gray">
                    <div className="px-4 py-5 sm:p-6 lg:p-8">
                      <svg
                        className="text-gray-800 h-11 w-11"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                      <h3 className="mt-3 font-sans text-2xl font-normal text-gray-800">
                        Education
                      </h3>
                      <p className="mt-4 text-base font-normal text-opacity-50 text-gray-800">
                        Non pretium mi, sagittis placerat. Elit risus malesuada
                        ornare orci in. Tellus, tempor eget vitae aliquet
                        suspendisse sed purus velit elit.
                      </p>
                    </div>
                  </div>

                  <div className="overflow-hidden transition-all duration-200 border rounded-lg border-neutral hover:bg-dark-gray">
                    <div className="px-4 py-5 sm:p-6 lg:p-8">
                      <svg
                        className="text-gray-800 h-11 w-11"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                      <h3 className="mt-3 font-sans text-2xl font-normal text-gray-800">
                        Mian stack
                      </h3>
                      <p className="mt-4 text-base font-normal text-opacity-50 text-gray-800">
                        Non pretium mi, sagittis placerat. Elit risus malesuada
                        ornare orci in. Tellus, tempor eget vitae aliquet
                        suspendisse sed purus velit elit.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-5 sm:mt-20">
                  <div className="overflow-hidden transition-all duration-200 border rounded-lg border-neutral hover:bg-dark-gray">
                    <div className="px-4 py-5 sm:p-6 lg:p-8">
                      <svg
                        className="text-gray-800 h-11 w-11"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                      <h3 className="mt-3 font-sans text-2xl font-normal text-gray-800">
                        Languages
                      </h3>
                      <p className="mt-4 text-base font-normal text-opacity-50 text-gray-800">
                        Non pretium mi, sagittis placerat. Elit risus malesuada
                        ornare orci in. Tellus, tempor eget vitae aliquet
                        suspendisse sed purus velit elit.
                      </p>
                    </div>
                  </div>

                  <div className="overflow-hidden transition-all duration-200 border rounded-lg border-neutral hover:bg-dark-gray">
                    <div className="px-4 py-5 sm:p-6 lg:p-8">
                      <svg
                        className="text-gray-800 h-11 w-11"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                      <h3 className="mt-3 font-sans text-2xl font-normal text-gray-800">
                      Work Experience
                      </h3>
                      <p className="mt-4 text-base font-normal text-opacity-50 text-gray-800">
                        Non pretium mi, sagittis placerat. Elit risus malesuada
                        ornare orci in. Tellus, tempor eget vitae aliquet
                        suspendisse sed purus velit elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
