"use client";

import { useWinStore } from "@/lib/winStore";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function WinStartPanel() {
  const { isOpen } = useWinStore();
  const [search, setSearch] = useState("");
  return (
    <div
      className={`
    fixed left-0 bottom-16 right-0 md:left-1/3 md:right-auto md:w-1/3 
    h-[80vh] md:h-2/3 
    bg-black/50 backdrop-blur-2xl z-50
    flex flex-col p-6 md:p-9 rounded-2xl md:rounded-t-2xl
   justify-between
    transition-all duration-500 ease-in-out
    ${
      isOpen
        ? "translate-y-0 opacity-100 visible"
        : "translate-y-full opacity-0 invisible"
    }
  `}
    >
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 ">
          <Image
            src="/icons/taskbar/searchLight.svg"
            alt="Search icon"
            width={20}
            height={20}
            className="rotate-y-180"
          />
        </div>

        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for apps, settings, and files"
          className="
            w-full py-3 pl-12 pr-4 
            bg-gray-800/30 backdrop-blur-md 
            text-white text-base 
            rounded-full 
            border border-gray-600 
            focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30
            transition-all
          "
        />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <span className="text-white text-base">Pinned</span>
          <span className="text-white text-base px-4 py-2 bg-gray-800/30 hover:bg-gray-800/60 transition-all duration-300  border border-gray-600/50  cursor-pointer rounded-lg">
            All apps
          </span>
        </div>

        {/* apps */}
        <div className="flex items-center gap-5">
          <Link
            href="https://www.microsoft.com/en-us/edge/"
            target="_blank"
            className="flex items-center gap-2 flex-col justify-center rounded-md p-2 hover:bg-gray-800/30 transition-all duration-300  cursor-pointer flex-2"
          >
            <Image
              src="/icons/taskbar/edge.png"
              alt="Edge"
              width={50}
              height={50}
              className=""
            />
            <span className="text-white text-sm">Edge</span>
          </Link>

          <Link
            href="https://www.google.com/"
            target="_blank"
            className="flex items-center gap-2 flex-col justify-center rounded-md p-2 hover:bg-gray-800/30 transition-all duration-300  cursor-pointer flex-2"
          >
            <Image
              src="/icons/taskbar/google.svg"
              alt="google"
              width={50}
              height={50}
              className=""
            />
            <span className="text-white text-sm">Google</span>
          </Link>

          <Link
            href="https://vscode.dev/"
            target="_blank"
            className="flex items-center gap-2 flex-col justify-center rounded-md p-2 hover:bg-gray-800/30 transition-all duration-300  cursor-pointer flex-2"
          >
            <Image
              src="/icons/taskbar/vsCode.ico"
              alt="vscode"
              width={50}
              height={50}
              className=""
            />
            <span className="text-white text-sm">vscode</span>
          </Link>

          <Link
            href="https://copilot.microsoft.com/"
            target="_blank"
            className="flex items-center gap-2 flex-col justify-center rounded-md p-2 hover:bg-gray-800/30 transition-all duration-300  cursor-pointer flex-2"
          >
            <Image
              src="/icons/taskbar/copilot.png"
              alt="Copilot"
              width={50}
              height={50}
              className=""
            />
            <span className="text-white text-sm">Copilot</span>
          </Link>

          <Link
            href="https://www.figma.com/"
            target="_blank"
            className="flex items-center gap-2 flex-col justify-center rounded-md p-2 hover:bg-gray-800/30 transition-all duration-300  cursor-pointer flex-2"
          >
            <Image
              src="/icons/taskbar/figma.png"
              alt="Figma"
              width={50}
              height={50}
              className=""
            />
            <span className="text-white text-sm">Figma</span>
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <span className="text-white text-base">Recommended</span>
          <span className="text-white text-base px-4 py-2 bg-gray-800/30 hover:bg-gray-800/60 transition-all duration-300  border border-gray-600/50  cursor-pointer rounded-lg">
            More
          </span>
        </div>
        <div className="flex items-center gap-5">
          <Link
            href="https://github.com/AtaDevPro"
            target="_blank"
            className="flex items-center gap-2 flex-col justify-center rounded-md p-2 hover:bg-gray-800/30 transition-all duration-300  cursor-pointer flex-2"
          >
            <Image
              src="/icons/startmenu/github.png"
              alt="github"
              width={50}
              height={50}
              className=""
            />
            <span className="text-white text-sm">Github</span>
          </Link>

          <Link
            href="https://atadev.ir//"
            target="_blank"
            className="flex items-center gap-3 flex-col justify-center rounded-md p-2 hover:bg-gray-800/30 transition-all duration-300  cursor-pointer flex-2"
          >
            <Image
              src="/icons/ata/ata.jpg"
              alt="my photo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="text-white text-sm">Ata</span>
          </Link>

          <Link
            href="https://www.linkedin.com/in/atadevpro/"
            target="_blank"
            className="flex items-center gap-2 flex-col justify-center rounded-md p-2 hover:bg-gray-800/30 transition-all duration-300  cursor-pointer flex-2"
          >
            <Image
              src="/icons/startmenu/linkedin.png"
              alt="linkedin"
              width={50}
              height={50}
              className=""
            />
            <span className="text-white text-sm">Linkedin</span>
          </Link>
        </div>

        <div className="flex items-center justify-between border-t-2 border-gray-600/50 ">
          <div className="flex items-center gap-3 mt-5">
            <Image
              src="/icons/startmenu/user.png"
              alt="User"
              width={40}
              height={40}
              className=" rounded-full bg-gray-600/50 p-2"
            />
            <span className="text-white text-sm">User</span>
          </div>
          <Image
            src="/icons/startmenu/power.png"
            alt="power"
            width={40}
            height={40}
            className="brightness-0 invert p-2 cursor-pointer hover:brightness-50 transition-all duration-300 mt-5"
          />
        </div>
      </div>
    </div>
  );
}

export default WinStartPanel;
