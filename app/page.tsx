import Desktop from "@/components/desktop/Desktop";
import Wallpaper from "@/components/desktop/Wallpaper";
import CopilotPanel from "@/components/taskbar/google/GooglePanel";
import SearchPanel from "@/components/taskbar/search/SearchPanel";

import WidgetsPanel from "@/components/taskbar/widgets/WidgetsPanel";
import WinStartPanel from "@/components/taskbar/winStart/WinStartPanel";

export default function Home() {
  return (
    <main className="relative w-full h-screen">
      <Wallpaper />
      <Desktop />
      <WidgetsPanel />
      <WinStartPanel />
      <SearchPanel />
      <CopilotPanel />
    </main>
  );
}
