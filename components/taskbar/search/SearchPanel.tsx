"use client";

import { useSearchStore } from "@/lib/searchStore";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface TipProps {
  quoteText: string;
  quoteAuthor?: string;
}

function SearchPanel() {
  const { isOpen } = useSearchStore();
  const [search, setSearch] = useState("");

  const [tip, setTip] = useState<TipProps | null>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en"
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch tip");
        return res.json();
      })
      .then((data: TipProps) => {
        setTip(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setTip({
          quoteText: "Keep coding, you're doing great! 💪",
          quoteAuthor: "Your Portfolio",
        });
        setLoading(false);
      });
  }, []);

  return (
    <div
      className={`
    fixed left-0 bottom-16 right-0 md:left-1/4 md:right-auto md:w-2/5 
    h-[80vh] md:h-3/4 
    bg-black/50 backdrop-blur-2xl z-50
    flex flex-col p-6 md:p-9 rounded-2xl md:rounded-t-2xl
   
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
          placeholder="Search ..."
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
      <div className="flex justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <span className="text-white text-base">Resent</span>
          </div>

          {/* apps */}
          <div className="flex flex-col items-start gap-3 ">
            <Link
              href="https://web.telegram.org/"
              target="_blank"
              className="flex items-center gap-2  justify-center rounded-md p-2 hover:bg-gray-800/30 transition-all duration-300  cursor-pointer flex-2"
            >
              <Image
                src="/icons/taskbar/telegram.png"
                alt="telegram"
                width={30}
                height={30}
                className=""
              />
              <span className="text-white text-sm">Telegram</span>
            </Link>

            <Link
              href="/"
              className="flex items-center gap-2  justify-center rounded-md p-2 hover:bg-gray-800/30 transition-all duration-300  cursor-pointer flex-2"
            >
              <Image
                src="/icons/taskbar/cmd.png"
                alt="Command Prompt"
                width={30}
                height={30}
                className=""
              />
              <span className="text-white text-sm">Command Prompt</span>
            </Link>

            <Link
              href="https://visualstudio.microsoft.com/"
              target="_blank"
              className="flex items-center gap-2  justify-center rounded-md p-2 hover:bg-gray-800/30 transition-all duration-300  cursor-pointer flex-2"
            >
              <Image
                src="/icons/taskbar/visualStudio.png"
                alt="Visual Studio"
                width={30}
                height={30}
                className=""
              />
              <span className="text-white text-sm">Visual Studio 2022</span>
            </Link>

            <Link
              href="/"
              className="flex items-center gap-2  justify-center rounded-md p-2 hover:bg-gray-800/30 transition-all duration-300  cursor-pointer flex-2"
            >
              <Image
                src="/icons/taskbar/calculator.png"
                alt="calculator"
                width={30}
                height={30}
                className=""
              />
              <span className="text-white text-sm">Calculator</span>
            </Link>

            <Link
              href="https://github.com/AtaDevPro"
              target="_blank"
              className="flex items-center gap-2  justify-center rounded-md p-2 hover:bg-gray-800/30 transition-all duration-300  cursor-pointer flex-2"
            >
              <Image
                src="/icons/startmenu/github.png"
                alt="github"
                width={30}
                height={30}
                className=""
              />
              <span className="text-white text-sm">Github</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/atadevpro/"
              target="_blank"
              className="flex items-center gap-2 justify-center rounded-md p-2 hover:bg-gray-800/30 transition-all duration-300  cursor-pointer flex-2"
            >
              <Image
                src="/icons/startmenu/linkedin.png"
                alt="linkedin"
                width={30}
                height={30}
                className=""
              />
              <span className="text-white text-sm">Linkedin</span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <span className="text-white text-base">Today</span>
          </div>
          <div className="flex flex-col items-center gap-5 bg-white/10 rounded-2xl p-6">
            <h3 className="text-white font-medium mb-4">Programming Tip</h3>
            <p className="text-white italic">&quot;{tip?.quoteText}&quot;</p>
            <p className="text-white/70 text-sm mt-2">— {tip?.quoteAuthor}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPanel;
