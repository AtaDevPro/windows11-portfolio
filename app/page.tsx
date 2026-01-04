import Desktop from "@/components/desktop/Desktop";
import Wallpaper from "@/components/desktop/Wallpaper";
import EdgePanel from "@/components/taskbar/edge/EdgePanel";
import FigmaPanel from "@/components/taskbar/figma/FigmaPanel";
import CopilotPanel from "@/components/taskbar/google/GooglePanel";
import SearchPanel from "@/components/taskbar/search/SearchPanel";
import VscodePanel from "@/components/taskbar/vscode/VscodePanel";

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
      <EdgePanel />
      <VscodePanel />
      <FigmaPanel />
    </main>
  );
}
