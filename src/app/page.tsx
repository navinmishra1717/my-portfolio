"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AboutButton } from "@/components/AboutButton";
import { Lamp } from "@/components/Lamp";
import { Typewriter } from "@/components/Typewriter";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, []);
  return (
    <main className="min-h-screen antialiased bg-grid-white/[0.02]">
      <Lamp>
        <Typewriter />
        <Link href="/about">
          <AboutButton />
        </Link>
      </Lamp>
    </main>
  );
}
