import Image from "next/image";
import { Button } from "@nextui-org/react";
import MainNavbar from "@/components/MainNavbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Project from "@/components/Project";

export default function Home() {
  return (
    <div>
      <MainNavbar />
      <Hero />
      <AboutMe />
      <Project />
    
    </div>
  );
}
