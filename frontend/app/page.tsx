"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch("/api/authors")
      .then((res) => res.json())
      .then(console.log);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <button className="btn">Button</button>
      </div>
    </main>
  );
}
