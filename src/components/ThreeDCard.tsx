"use client";

import Image from "next/image";
import React from "react";
import { CardContainer, CardItem } from "./ui/3d-card";
import ProfileImage from "../../public/profile.jpg";

export function ThreeDCard() {
  return (
    <CardContainer className="inter-var">
      <CardItem translateZ="100" className="w-full mt-4">
        <Image
          src={ProfileImage}
          height="1000"
          width="1000"
          className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          alt="thumbnail"
        />
      </CardItem>
    </CardContainer>
  );
}
