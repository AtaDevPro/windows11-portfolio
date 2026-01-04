"use client";

import { useVscodeStore } from "@/lib/vscodeStore";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function VscodePanel() {
  const { isOpen, close } = useVscodeStore();

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

  if (!isOpen) return null;

  return (
    <div
      className="absolute z-50 w-5xl"
      style={{
        left: position.x,
        top: position.y,
        cursor: isDragging ? "grabbing" : "default",
      }}
    >
      <div className="bg-gray-900/90 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 overflow-hidden w-full max-w-5xl h-[90vh] flex flex-col">
        <div
          className="bg-gray-800/80 px-4 py-3 flex items-center justify-between cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
        >
          <div className="flex items-center gap-3">
            <Image
              src="/icons/taskbar/vsCode.ico"
              alt="edge"
              width={24}
              height={24}
            />
            <span className="text-white font-medium">VS code</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={close}
              className="w-10 h-10 hover:bg-white/20 rounded flex items-center justify-center text-white text-xl"
            >
              −
            </button>
            <button
              onClick={close}
              className="w-10 h-10 hover:bg-red-600 rounded flex items-center justify-center text-white text-xl"
            >
              ✕
            </button>
          </div>
        </div>

        <iframe
          src="https://github1s.com/AtaDevPro/windows11-portfolio"
          className="flex-1 w-full border-0"
          title="vscode"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        />
      </div>
    </div>
  );
}

export default VscodePanel;
