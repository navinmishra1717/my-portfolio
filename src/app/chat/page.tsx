"use client";

import React, { useState } from "react";
import { cn } from "@/utils/cn";
import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI("AIzaSyDg0AkmPLFam8gv17w7yB_5GoDyLIZWiiE");
const genAI = new GoogleGenerativeAI("AIzaSyAOZxCM_0D19gXxdwlGog8evjeTYM6abL4");

export default function Chat() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChangePrompt = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt) return;
    setLoading(true);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });
    const promptMsg = `My name is Navin Mishra. I live in kathmandu. My hometown is Lamjung. I am currently working at EBPearls. I am in the software development role. 
    I am 26 years old. Please think yourself as me and answer the question. Answer must be within 100 words. Question is:- "${prompt}"`;
    const result = await model.generateContent(promptMsg);
    const response = await result.response;
    const text = response.text();
    setResponse(text);
    setLoading(false);
  };

  return (
    <div
      className={cn(
        "relative flex flex-row min-h-screen w-full bg-slate-950 items-center justify-center overflow-hidden rounded-md z-0",
      )}
    >
      <div className="relative w-1/3 px-4 py-2 my-4 flex flex-col items-end text-gray-800 bg-gray-200 rounded-md border-2 border-gray-200">
        <textarea
          className="mt-4 w-full p-2"
          placeholder={`Ask me anything... \neg. Where do you work?`}
          rows={3}
          autoComplete="off"
          value={prompt}
          onChange={handleChangePrompt}
        />
        <button
          onClick={(e) => handleSubmit(e)}
          className="mt-1 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white text-sm py-1 px-2 rounded-md hover:bg-gray-400 dark:hover:bg-gray-600"
        >
          {loading ? "Loading..." : "Send"}
        </button>

        {response && (
          <div className="mt-2">
            <strong>Navin: </strong>
            {response}
          </div>
        )}
      </div>
    </div>
  );
}
