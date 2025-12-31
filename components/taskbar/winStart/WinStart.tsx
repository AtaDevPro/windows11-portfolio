"use client";

import TaskbarIcon from "../TaskbarIcon";
import WinStartPanel from "./WinStartPanel";
import { useWinStore } from "@/lib/winStore";

function WinStart() {
  const { toggle } = useWinStore();
  return (
    <div>
      <TaskbarIcon
        icon="/icons/taskbar/windows.png"
        label="Start"
        onClick={toggle}
      />
    </div>
  );
}

export default WinStart;
