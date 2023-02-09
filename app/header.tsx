import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className="my-8 flex w-full items-center justify-between">
      <h3 className="text-xl font-semibold">Reauth</h3>
      <div>
        <button className="mr-3 rounded-md border-[1px] border-solid border-slate-700 bg-slate-900 px-4 py-2 font-semibold text-slate-300 mobile:px-2 mobile:text-sm tablet:px-4 tablet:text-base">
          <div className="flex">
            Sign In{" "}
            <Image
              className="ml-2"
              src={"./right-arrow.svg"}
              alt="arrow"
              width="16"
              height="16"
            />
          </div>
        </button>
        <button
          className={`rounded-md bg-green-400 py-2 font-semibold text-green-900 mobile:px-2 mobile:text-sm tablet:px-4 tablet:text-base ${styles.shadow}`}
        >
          Request access
        </button>
      </div>
    </div>
  );
}
