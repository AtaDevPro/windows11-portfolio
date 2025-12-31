import Desktop from "@/components/desktop/Desktop";
import Wallpaper from "@/components/desktop/Wallpaper";

import WidgetsPanel from "@/components/taskbar/widgets/WidgetsPanel";
import WinStartPanel from "@/components/taskbar/winStart/WinStartPanel";

export default function Home() {
  return (
    <main className="relative w-full h-screen">
      <Wallpaper />
      <Desktop />
      <WidgetsPanel />
      <WinStartPanel />
    </main>
  );
}
