import "./globals.css";
import Footer from "./footer";
import Header from "./header";
import { onKeyPress } from "@/components/util";
import Modal from "@/components/modal";
import Matrix from "@/components/matrix-animation";

type Props = {
  children?: React.ReactNode | React.ReactNode[];
};
const NestedLayout = ({ children }: Props) => {
  return (
    <main className="tablet:mt-base mt-16 flex w-full items-center tablet:justify-center desktop:justify-start">
      <div className="flex w-fit flex-col text-slate-200">
        <span className="animate-slide-up-fade animation-delay-200 mb-3 w-fit rounded-2xl border-solid bg-green-900 px-3 py-1 text-xs font-bold text-green-300">
          Currently in private poc
        </span>
        <h1 className="animate-slide-up-fade animation-delay-200 mb-6 w-full text-4xl font-bold leading-[2.75rem] tablet:w-[20ch] tablet:text-5xl tablet:leading-[4.25rem] desktop:text-6xl">
          The only data protocol API for a new age.
        </h1>
        {/* <h2 className="mb-1 text-2xl font-medium">
          Develop, deploy, and scale your data protocol layer.
        </h2> */}
        <h2 className="animate-slide-up-fade animation-delay-200 mb-1 text-2xl font-semibold text-gray-300 tablet:text-3xl">
          Rethink Authentication.
        </h2>
        {/* <h3 className="mb-6 w-[60ch] text-xl">
          Reauth provides great DevEx whilst ensuring users control their data
          and enterprises can access it on-request effecitively and efficiently.
        </h3> */}
        <h3 className="animate-slide-up-fade animation-delay-200 mb-6 text-lg tablet:text-xl desktop:w-[60ch]">
          User data ownership. Enterprise data request.
        </h3>
        <h4 className="animate-slide-up-fade animation-delay-200 text-lg font-medium">
          Press{" "}
          <span className="mx-1 rounded-lg bg-slate-800 px-2 py-[2px] font-semibold">
            A
          </span>{" "}
          to request access
        </h4>
      </div>
      {children}
    </main>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body
        className="mobile:max-w-screen-mobile tablet:max-w-screen-tablet desktop:max-w-screen-desktop"
        onKeyDown={onKeyPress}
      >
        <Matrix />
        <Header />
        {/* <Modal /> */}
        <NestedLayout>{children}</NestedLayout>
        <Footer />
      </body>
    </html>
  );
}
