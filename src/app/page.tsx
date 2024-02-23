import { Lamp } from "@/components/Lamp";
import { ThreeDCard } from "@/components/ThreeDCard";
import { Typewriter } from "@/components/Typewriter";

export default function Home() {
  return (
    <main className="min-h-screen antialiased bg-grid-white/[0.02]">
      <Lamp>
        <Typewriter />
      </Lamp>
    </main>
  );
}
