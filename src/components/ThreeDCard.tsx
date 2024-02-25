"use client";

import Image from "next/image";
import React from "react";
import { CardContainer, CardItem } from "./ui/3d-card";
import ProfileImage from "../../public/profile.jpg";

export function ThreeDCard() {
  return (
    <CardContainer className="inter-var">
      <CardItem translateZ="100" className="w-full">
        <Image
          src={ProfileImage}
          height="500"
          width="500"
          className="h-1/4 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          alt="thumbnail"
        />
      </CardItem>
    </CardContainer>
  );
}
