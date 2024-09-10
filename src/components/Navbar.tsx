"use client";

import React, { useState } from "react";
import { HoveredLink, Menu } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <motion.p
          transition={{ duration: 0.3 }}
          className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
        >
          <HoveredLink href="/">Home</HoveredLink>
        </motion.p>
        <motion.p
          transition={{ duration: 0.3 }}
          className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
        >
          <HoveredLink href="/about">About</HoveredLink>
        </motion.p>
        <motion.p
          transition={{ duration: 0.3 }}
          className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
        >
          <HoveredLink href="/projects">Projects</HoveredLink>
        </motion.p>
        <motion.p
          transition={{ duration: 0.3 }}
          className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
        >
          <HoveredLink href="/chat">Chat</HoveredLink>
        </motion.p>
        <motion.p
          transition={{ duration: 0.3 }}
          className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
        >
          <HoveredLink href="/task">Task</HoveredLink>
        </motion.p>
      </Menu>
    </div>
  );
}

export default Navbar;
