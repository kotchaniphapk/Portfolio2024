import React from "react";
import MainNavbar from "@/components/MainNavbar";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <MainNavbar />
      <Hero />
      <Project />
      <Footer />
    </div>
  );
}
