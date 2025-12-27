import { useWindowStore } from "@/lib/windowStore";
import Resume from "./Resume";
import Image from "next/image";

export default function ResumeWindow() {
  const { closeWindow, minimizeWindow, windows } = useWindowStore();

  const currentWindow = windows[windows.length - 1];
  const id = currentWindow?.id;

  if (!id) return null;

  return (
    <div
      className="bg-gray-900/90 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 overflow-hidden 
                    w-full max-w-5xl mx-4 
                    h-[90vh] max-h-screen 
                    sm:w-[90vw] sm:h-[85vh]
                    md:w-[85vw] 
                    lg:w-[80vw] lg:max-w-6xl"
    >
      <div className="bg-gray-800/80 px-4 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <Image
            src="/icons/desktop/pdf.svg"
            alt="Resume"
            width={24}
            height={24}
            className="w-5 h-5 sm:w-6 sm:h-6"
          />
          <span className="text-white text-sm sm:text-base">Resume.pdf</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => minimizeWindow(id)}
            className="w-8 h-8 sm:w-10 sm:h-10 hover:bg-white/20 rounded flex items-center justify-center text-white text-xl"
          >
            −
          </button>
          <button
            onClick={() => closeWindow(id)}
            className="w-8 h-8 sm:w-10 sm:h-10 hover:bg-red-600 rounded flex items-center justify-center text-white text-xl"
          >
            ✕
          </button>
        </div>
      </div>

      <div className="h-full overflow-hidden bg-gray-950">
        <Resume />
      </div>
    </div>
  );
}
