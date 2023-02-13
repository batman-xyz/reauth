import { RenderHero } from "@/components/hero/client";
import { Inter } from "@next/font/google";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Modal from "@/components/modal";

const inter = Inter({ subsets: ["latin"] });

// const Hero = dynamic(())

export default function Home() {
  return (
    <div className="-z-10 hidden h-[800px] w-[620px] bg-gradient-radial tablet:absolute tablet:top-20 tablet:flex desktop:relative desktop:z-auto">
      <div className="h-full w-full bg-gradient-radial-secondary">
        <div className="h-[800px] w-[620px] animate-scale-in animation-delay-600 z-10">
          <RenderHero />
        </div>
      </div>
    </div>
  );
}
