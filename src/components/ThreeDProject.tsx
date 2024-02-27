"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

export interface IProjectParams {
  title: string;
  description: string;
  image?: any;
  links: {
    github?: string;
    live?: string;
  };
}

export function ThreeDProject(props: IProjectParams) {
  const { title, description, image, links } = props;
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] rounded-xl p-6 border h-auto">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 min-h-10"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          {image ? (
            <Image
              src={image}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          ) : null}
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem translateZ={20} as="button">
            {links.live && (
              <Link href={links.live}>
                <div className="px-6 py-2 hover:bg-[rgba(0,118,255,0.9)] bg-[#0070f3] text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                  Live
                </div>
              </Link>
            )}
          </CardItem>
          <CardItem translateZ={20} as="button">
            <Link href={links.github || ""}>
              <div className="px-6 py-2 bg-white hover:bg-gray-100 text-neutral-700 rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                Code
              </div>
            </Link>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
