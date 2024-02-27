"use client";

import React from "react";
import { cn } from "@/utils/cn";
import { SparklesCore } from "@/components/ui/sparkles";
import { IProjectParams, ThreeDProject } from "@/components/ThreeDProject";
import testImage from "../../../public/test.jpeg";

const projects: IProjectParams[] = [
  {
    title: "Beer Garden",
    description:
      "The responsive web application that lists the beers and allows users to add their own",
    image: testImage,
    links: {
      github: "https://github.com/navinmishra1717/beer-garden",
      live: "https://navinmishra1717.github.io/beer-garden/",
    },
  },
  {
    title: "Beer Garden",
    description: "The responsive youtube clone that has the youtube like ui",
    image: testImage,
    links: {
      github: "https://github.com/navinmishra1717/MyTube",
      live: "https://navinmishra1717.github.io/MyTube/",
    },
  },
  {
    title: "Beer Garden",
    description: "The responsive youtube clone that has the youtube like ui",
    image: "",
    links: {
      github: "https://github.com/navinmishra1717/MyTube",
      live: "https://navinmishra1717.github.io/MyTube/",
    },
  },
  {
    title: "Beer Garden",
    description: "The responsive youtube clone that has the youtube like ui",
    image: "",
    links: {
      github: "https://github.com/navinmishra1717/MyTube",
      live: "https://navinmishra1717.github.io/MyTube/",
    },
  },
  {
    title: "Beer Garden",
    description: "The responsive youtube clone that has the youtube like ui",
    image: "",
    links: {
      github: "https://github.com/navinmishra1717/MyTube",
      live: "https://navinmishra1717.github.io/MyTube/",
    },
  },
  {
    title: "Beer Garden",
    description: "The responsive youtube clone that has the youtube like ui",
    image: "",
    links: {
      github: "https://github.com/navinmishra1717/MyTube",
      live: "https://navinmishra1717.github.io/MyTube/",
    },
  },
  {
    title: "Beer Garden",
    description: "The responsive youtube clone that has the youtube like ui",
    image: "",
    links: {
      github: "https://github.com/navinmishra1717/MyTube",
      live: "https://navinmishra1717.github.io/MyTube/",
    },
  },
  {
    title: "Beer Garden",
    description: "The responsive youtube clone that has the youtube like ui",
    image: "",
    links: {
      github: "https://github.com/navinmishra1717/MyTube",
      live: "https://navinmishra1717.github.io/MyTube/",
    },
  },
  {
    title: "Beer Garden",
    description: "The responsive youtube clone that has the youtube like ui",
    image: "",
    links: {
      github: "https://github.com/navinmishra1717/MyTube",
      live: "https://navinmishra1717.github.io/MyTube/",
    },
  },
];

export default function Projects() {
  return (
    <div
      className={cn(
        "relative flex flex-col min-h-screen w-full bg-slate-950 items-center justify-items-center overflow-hidden rounded-md z-0",
      )}
    >
      <div className="w-full absolute inset-0 h-screen">
        {/* <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.8}
            maxSize={1.8}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          /> */}
      </div>

      {/* <div className="flex flex-col"> */}
      <h2 className=" text-black hover:opacity-[0.9] dark:text-white text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
        Projects
      </h2>
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 md:gap-8">
        {projects.map((project) => (
          <ThreeDProject
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            links={project.links}
          />
        ))}
      </div>
      {/* </div> */}
    </div>
  );
}
