import { RenderHero } from "@/components/hero/client";
import { Inter } from "@next/font/google";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Modal from "@/components/modal";

const inter = Inter({ subsets: ["latin"] });

// const Hero = dynamic(())

export default function Home() {
  return (
    <div className="bg-gradient-radial hidden h-[800px] w-[620px] tablet:absolute tablet:top-20 tablet:-z-10 tablet:flex desktop:relative">
      <RenderHero />
    </div>
  );
}
