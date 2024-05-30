import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="center-logo">
          <img className="center-logo-fg" src="https://i.imgur.com/WTJ88Hx.png"/>
          <img className="center-logo-bg" src="https://i.imgur.com/ZA7drrf.png"/>
        </div>
      </div>
    </main>
  );
}
