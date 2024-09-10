"use client";

import React from "react";
import { cn } from "@/utils/cn";
import { TasksProvider } from "@/hooks/use-tasks";
import { TasksList } from "./TaskList";

export default function Tasks() {
  return (
    <div
      className={cn(
        "relative flex flex-row min-h-screen w-full bg-slate-300 items-center justify-center overflow-hidden rounded-md z-0",
      )}
    >
      <TasksProvider>
        <TasksList />
      </TasksProvider>
    </div>
  );
}
