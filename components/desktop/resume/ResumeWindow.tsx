"use client";
import { useWindowStore } from "@/lib/windowStore";
import Resume from "./Resume";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function ResumeWindow() {
  const { closeWindow, minimizeWindow, bringToFront, windows } =
    useWindowStore();

  const currentWindow = windows.find((w) => !w.isMinimized);
  const id = currentWindow?.id;
  const [position, setPosition] = useState({ x: 100, y: 50 });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef({ startX: 0, startY: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragRef.current = {
      startX: e.clientX - position.x,
      startY: e.clientY - position.y,
    };
    e.preventDefault();
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragRef.current.startX,
      y: e.clientY - dragRef.current.startY,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging]);

  if (!id || currentWindow?.isMinimized) return null;

  return (
    <div
      style={{
        left: position.x,
        top: position.y,
      }}
      className="absolute bg-gray-900/90 backdrop-blur-xl rounded-xl cursor-grab active:cursor-grabbing shadow-2xl border border-white/20 overflow-hidden 
                    w-full max-w-5xl mx-4 
                    h-[90vh] max-h-screen 
                    sm:w-[90vw] sm:h-[85vh]
                    md:w-[85vw] 
                    lg:w-[80vw] lg:max-w-6xl"
      onMouseDown={() => bringToFront(id)}
    >
      <div
        onMouseDown={handleMouseDown}
        className="bg-gray-800/80 px-4 py-3 flex items-center justify-between shrink-0 select-none cursor-move"
      >
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

      <div className="h-full overflow-auto bg-gray-950">
        <Resume />
      </div>
    </div>
  );
}
