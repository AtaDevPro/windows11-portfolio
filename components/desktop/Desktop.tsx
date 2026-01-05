"use client";

import { useWindowStore } from "@/lib/windowStore";
import ResumeWindow from "./resume/ResumeWindow";
import DesktopIcon from "./DesktopIcon";
import Link from "next/link";

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
      <div className=" flex flex-col gap-4">
        <DesktopIcon
          icon="/icons/desktop/pdf.svg"
          label="Resume.pdf"
          onDoubleClick={openResume}
        />
        <Link href="https://github.com/AtaDevPro" target="_blank">
          <DesktopIcon
            icon="/icons/startmenu/github.png"
            label="Github"
            className="brightness-0 invert"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/atadevpro/" target="_blank">
          <DesktopIcon icon="/icons/startmenu/linkedin.png" label="linkedin" />
        </Link>
        <Link href="https://atadev.ir/" target="_blank">
          <DesktopIcon
            icon="/icons/ata/ata.jpg"
            label="My Site"
            className="rounded-xl"
          />
        </Link>
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
              display: win.isMinimized ? "none" : "block",
            }}
          >
            {win.component}
          </div>
        ))}
      </div>
    </div>
  );
}
