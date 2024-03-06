"use client";

import React from "react";
import { cn } from "@/utils/cn";
import { SparklesCore } from "@/components/ui/sparkles";

import { HoverEffect } from "../../components/ui/card-hover-effect";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div
      className={cn(
        "relative flex flex-col pt-40 min-h-screen w-full bg-slate-950 items-center overflow-hidden rounded-md z-0",
      )}
    >
      <div className="w-full absolute inset-0">
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

      <h2 className=" text-black hover:opacity-[0.9] dark:text-white text-4xl font-bold border-b-[5px] w-[140px] border-indigo-600 pb-2">
        Projects
      </h2>
      <div className="max-w-7xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}
