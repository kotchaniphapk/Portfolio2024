import React from "react";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <footer className="py-12 bg-primary sm:pt-16 lg:pt-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col items-center space-y-10 lg:justify-between lg:space-y-0 lg:flex-row">
            <div className="shrink-0">
              <Link href="#" title="" className="flex">
                <p className="font-bold text-3xl text-white">Portfolio</p>
              </Link>
            </div>

            <nav className="flex items-center justify-center space-x-6 sm:space-x-16 xl:space-x-20">
              <a
                href="/"
                title=""
                className="text-base font-medium text-gray-100 transition-all duration-200 hover:-translate-y-1 hover:text-white"
              >
                Home
              </a>

              <a
                href="/cv"
                title=""
                className="text-base font-medium text-gray-100 transition-all duration-200 hover:-translate-y-1 hover:text-white"
              >
                CV
              </a>

              <a
                href="/#myportfolio"
                title=""
                className="text-base font-medium text-gray-100 transition-all duration-200 hover:-translate-y-1 hover:text-white"
              >
                Project
              </a>
            </nav>

            <ul className="flex items-center justify-end space-x-3">
              <li>
                <a
                  href="https://www.linkedin.com/in/kotchanipha-ilin-176292200/"
                  title=""
                  className="inline-flex items-center justify-center w-8 h-8 text-white transition-all duration-200 rounded-full hover:bg-blue-600"
                  target="_blank"
                  rel="noopener"
                >
                  <FaLinkedin size={24} />
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/kotchaniphapk"
                  title=""
                  className="inline-flex items-center justify-center w-8 h-8 text-white transition-all duration-200 rounded-full hover:bg-blue-600"
                  target="_blank"
                  rel="noopener"
                >
                  <FaGithub size={24} />
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/going_on_workation?igsh=MTF0ZXY4cHE3b2wzYQ%3D%3D&utm_source=qr"
                  title=""
                  className="inline-flex items-center justify-center w-8 h-8 text-white transition-all duration-200 rounded-full hover:bg-blue-600"
                  target="_blank"
                  rel="noopener"
                >
                  <FaInstagram size={24} />
                </a>
              </li>
            </ul>
          </div>

          <div className="pt-12 mt-12 text-center border-t sm:mt-16 lg:mt-20">
            <p className="text-sm font-normal text-gray-300">
              © Copyright 2024, Kotchanipha Portfolio
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
