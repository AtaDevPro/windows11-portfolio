"use client";

import { useWindowStore } from "@/lib/windowStore";
import ResumeWindow from "./resume/ResumeWindow";
import DesktopIcon from "./DesktopIcon";

export default function Desktop() {
  const { openWindow, windows } = useWindowStore();

  const openResume = () => {
    openWindow({
      title: "Resume",
      icon: "/icons/resume.png",
      component: <ResumeWindow />,
    });
  };

  return (
    <div>
      <div className="absolute top-4 left-4 flex flex-col gap-4">
        <DesktopIcon
          icon="/icons/desktop/pdf.svg"
          label="Resume.pdf"
          onDoubleClick={openResume}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {windows.map((win, index) => (
          <div
            key={win.id}
            className="absolute pointer-events-auto"
            style={{
              zIndex: index + 10,
              left: win.position?.x,
              top: win.position?.y,
              width: win.size?.width,
              height: win.size?.height,
              display: win.minimized ? "none" : "block",
            }}
          >
            {win.component}
          </div>
        ))}
      </div>
    </div>
  );
}
