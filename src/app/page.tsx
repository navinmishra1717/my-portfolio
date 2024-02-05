import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Todos</h1>
        <Link href="/new">New</Link>
      </header>
      <ul className="pl-4"></ul>
    </>
  );
}
