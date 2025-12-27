"use client";

import { useState } from "react";
import TaskbarIcon from "./TaskbarIcon";
import TaskbarTime from "./time/TaskbarTime";

function Taskbar() {
  const [openWindows, setOpenWindows] = useState<string[]>([]);

  const toggleWindow = (app: string) => {
    setOpenWindows((prev) =>
      prev.includes(app) ? prev.filter((a) => a !== app) : [...prev, app]
    );
  };
  return (
    <section className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-between bg-black/50 backdrop-blur-3xl border-t border-white/10 px-4 text-white">
      {/* left */}
      <div className="lg:flex items-center hidden ">
        <TaskbarIcon
          icon="/icons/taskbar/widget.png"
          label="Widgets"
          onClick={() => console.log("Open Start")}
        />
      </div>

      {/* middle */}
      <div className="flex items-center gap-3 mx-auto">
        <TaskbarIcon
          icon="/icons/taskbar/windows.png"
          label="Start"
          isActive={openWindows.includes("Start")}
          onClick={() => toggleWindow("Start")}
        />

        <TaskbarIcon
          icon="/icons/taskbar/searchLight.svg"
          label="Search"
          isActive={openWindows.includes("Search")}
          onClick={() => toggleWindow("Search")}
          className="rotate-y-180"
        />

        <TaskbarIcon
          icon="/icons/taskbar/copilot.png"
          label="Copilot"
          isActive={openWindows.includes("Copilot")}
          onClick={() => toggleWindow("Copilot")}
        />

        <TaskbarIcon
          icon="/icons/taskbar/fileExplorer.ico"
          label="File Explorer"
          isActive={openWindows.includes("Explorer")}
          onClick={() => toggleWindow("Explorer")}
        />

        <TaskbarIcon
          icon="/icons/taskbar/edge.png"
          label="Microsoft Edge"
          isActive={openWindows.includes("Edge")}
          onClick={() => toggleWindow("Edge")}
        />

        <TaskbarIcon
          icon="/icons/taskbar/vsCode.ico"
          label="vscode"
          isActive={openWindows.includes("vscode")}
          onClick={() => toggleWindow("vscode")}
        />

        <TaskbarIcon
          icon="/icons/taskbar/google.svg"
          label="Google Chrome"
          isActive={openWindows.includes("Google")}
          onClick={() => toggleWindow("Google")}
        />

        <TaskbarIcon
          icon="/icons/taskbar/figma.png"
          label="Figma"
          isActive={openWindows.includes("Figma")}
          onClick={() => toggleWindow("Figma")}
        />
      </div>

      {/* right */}

      <div className="lg:flex items-center gap-2 hidden">
        <span className=" flex items-center text-white text-sm justify-center px-6 h-12  rounded-lg transition-all duration-200 cursor-default hover:bg-white/20 group">
          ENG
        </span>

        <div className=" flex items-center  justify-center rounded-lg transition-all duration-200 hover:bg-white/20">
          <TaskbarIcon
            icon="/icons/taskbar/wifi.png"
            isActive={openWindows.includes("settings")}
            onClick={() => toggleWindow("settings")}
            sizes="w-6 h-6"
            className="-translate-y-0.5"
          />

          <TaskbarIcon
            icon="/icons/taskbar/volume.svg"
            isActive={openWindows.includes("settings")}
            onClick={() => toggleWindow("settings")}
            sizes="w-5 h-5"
          />

          <TaskbarIcon
            icon="/icons/taskbar/battery.png"
            isActive={openWindows.includes("settings")}
            onClick={() => toggleWindow("settings")}
            sizes="w-6 h-6"
          />
        </div>

        <div className=" flex flex-col items-center text-white text-sm justify-center w-full h-12 px-2 rounded-lg transition-all duration-200 cursor-default hover:bg-white/20 group">
          <TaskbarTime />
        </div>
      </div>
    </section>
  );
}

export default Taskbar;
