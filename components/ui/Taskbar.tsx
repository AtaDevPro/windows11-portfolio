"use client";

import { useState } from "react";
import TaskbarIcon from "./TaskbarIcon";

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
      <div className="md:flex items-center hidden ">
        <TaskbarIcon
          icon="/icons/taskbar/widget.png"
          label="Widgets"
          onClick={() => console.log("Open Start")}
        />
      </div>

      {/* middle */}
      <div className="flex items-center gap-2 mx-auto">
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
      {/* Must Be fix */}
      <div className="md:flex items-center gap-1 hidden">
        <TaskbarIcon
          icon="/icons/taskbar/widget.svg"
          label="Start Menu"
          onClick={() => console.log("Open Start")}
        />

        <TaskbarIcon
          icon="/icons/taskbar/widget.svg"
          label="File Explorer"
          isActive={openWindows.includes("explorer")}
          onClick={() => toggleWindow("explorer")}
        />

        <TaskbarIcon
          icon="/icons/taskbar/widget.svg"
          label="Microsoft Edge"
          isActive={openWindows.includes("edge")}
          onClick={() => toggleWindow("edge")}
        />

        <TaskbarIcon
          icon="/icons/taskbar/widget.svg"
          label="VS Code"
          onClick={() => toggleWindow("vscode")}
        />
      </div>
    </section>
  );
}

export default Taskbar;
