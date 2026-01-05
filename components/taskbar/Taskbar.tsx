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
import Lang from "./lang/Lang";
import QuickSettings from "./quickSettings/QuickSettings";

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

        <Edge />

        <Vscode />

        <Google />

        <Figma />
      </div>

      {/* right */}

      <div className="lg:flex items-center gap-2 hidden">
        <Lang />

        <QuickSettings />

        <TaskbarTime />
      </div>
    </section>
  );
}

export default Taskbar;
