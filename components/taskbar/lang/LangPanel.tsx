"use client";

import { useLangStore } from "@/lib/LangStore";

function LangPanel() {
  const { isOpen, currentLang, setLang } = useLangStore();
  return (
    <div
      className={`
    fixed left-0 bottom-16 right-0 md:left-3/4 md:right-auto md:w-1/5 
    h-[30vh] md:h-1/5 
    bg-black/50 backdrop-blur-2xl z-50
    flex flex-col rounded-2xl md:rounded-t-2xl
   
    transition-all duration-500 ease-in-out
    ${
      isOpen
        ? "translate-y-0 opacity-100 visible"
        : "translate-y-full opacity-0 invisible"
    }
  `}
    >
      <div className="flex-1 text-white text-sm px-4 py-3">Keybord Layout</div>
      <button
        onClick={() => setLang("ENG")}
        className={`flex items-center text-white hover:bg-white/30 transition duration-300 px-4 py-3 cursor-pointer ${
          currentLang === "ENG" ? "bg-white/20" : ""
        }`}
      >
        <span className="mr-4">ENG</span>
        <span>English</span>
      </button>
      <button
        onClick={() => setLang("FA")}
        className={`flex items-center text-white hover:bg-white/30 transition duration-300 px-4 py-3 cursor-pointer ${
          currentLang === "FA" ? "bg-white/20" : ""
        }`}
      >
        <span className="mr-4">فا</span>
        <span>Persian</span>
      </button>
    </div>
  );
}

export default LangPanel;
