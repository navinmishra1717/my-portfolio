"use client";

import { useTasks } from "@/hooks/use-tasks";
import { TaskStatus } from "@/utils/types";
import { AnimatePresence } from "framer-motion";
import { AddTodo } from "./AddTask";
import { Task } from "./Task";

export function TasksList() {
  const { tasks } = useTasks();
  return (
    <main className="flex flex-col items-center justify-between p-8 md:p-24">
      <div className="flex flex-col gap-4 min-w-full md:min-w-[660px]">
        <h1 className="text-2xl font-bold">✍️ My Todos</h1>
        <AddTodo />

        <AnimatePresence>
          {tasks
            .sort((a, b) => {
              if (a.status === b.status) {
                return a.id - b.id;
              }
              return a.status === TaskStatus.todo ? -1 : 1;
            })
            .map((task) => (
              <Task key={task.id} task={task} />
            ))}
        </AnimatePresence>
      </div>
    </main>
  );
}
