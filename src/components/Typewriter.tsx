"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function Typewriter() {
  const words = [
    {
      text: "Hi,",
    },
    {
      text: "this",
    },
    {
      text: "is ",
    },
    {
      text: "me",
    },
    {
      text: "Navin",
    },
    {
      text: "Mishra",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <TypewriterEffectSmooth words={words} />
      <div className="mt-4 font-medium text-3xl text-neutral-300">
        I am a full-stack developer
      </div>
    </div>
  );
}
