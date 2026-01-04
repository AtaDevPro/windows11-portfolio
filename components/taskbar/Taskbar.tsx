"use client";

import { useState } from "react";
import TaskbarIcon from "./TaskbarIcon";
import TaskbarTime from "./time/TaskbarTime";
import Widgets from "./widgets/Widgets";
import WinStart from "./winStart/WinStart";
import Search from "./search/Search";
import Copilot from "./copilot/Copilot";
import Google from "./google/Google";
import Edge from "./edge/Edge";
import Vscode from "./vscode/Vscode";
import Figma from "./figma/Figma";

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
      <Widgets />

      {/* middle */}
      <div className="flex items-center gap-3 mx-auto">
        <WinStart />

        <Search />

        <Copilot />

        <TaskbarIcon
          icon="/icons/taskbar/fileExplorer.ico"
          label="File Explorer"
          isActive={openWindows.includes("Explorer")}
          onClick={() => toggleWindow("Explorer")}
        />

        <Edge />

        <Vscode />

        <Google />

        <Figma />
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
