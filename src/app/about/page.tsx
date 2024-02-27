"use client";

import React from "react";
import { cn } from "@/utils/cn";
import { ThreeDProfile } from "@/components/ThreeDProfile";
import { SparklesCore } from "@/components/ui/sparkles";

export default function About() {
  return (
    <div
      className={cn(
        "relative flex flex-row min-h-screen w-full bg-slate-950 items-center justify-center overflow-hidden rounded-md z-0",
      )}
    >
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.8}
            maxSize={1.8}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <div>
          <h2 className=" text-black hover:opacity-[0.9] dark:text-white text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>
          <div className="text-black hover:opacity-[0.9] dark:text-white mt-4 text-3xl">
            Hi, My Name Is Navin Mishra. I am a Fullstack Developer. I am
            proficient in Frontend skills like React.js, Nextjs, Redux, HTML,
            Css3 etc. In backend, I am proficient in Node.js, Nestjs,
            Express.js, Graphql, MongoDB, Postgresql. In my spare time, I write
            blogs and build various projects. I am currently working at EBPearls
            in Software developer role.
          </div>
        </div>
        <ThreeDProfile />
      </div>
    </div>
  );
}
