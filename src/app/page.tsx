import Link from "next/link";

export default function HomePage() {
  return (
    // Give me colors for a gradient that would be a blue to a light blue
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#000046] text-[#1CB5E0]">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Snow or No
        </h1>
        <p className="text-center text-xl text-white">No.</p>
      </div>
    </main>
  );
}
