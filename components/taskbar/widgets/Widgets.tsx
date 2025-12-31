"use client";
import TaskbarIcon from "../TaskbarIcon";

import { useWidgetStore } from "@/lib/widgetStore";

function Widgets() {
  const { toggle } = useWidgetStore();

  return (
    <>
      <div className="lg:flex items-center hidden ">
        <TaskbarIcon
          icon="/icons/taskbar/widget.png"
          label="Widgets"
          onClick={toggle}
        />
      </div>
    </>
  );
}

export default Widgets;
