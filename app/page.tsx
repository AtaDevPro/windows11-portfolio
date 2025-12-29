import Desktop from "@/components/desktop/Desktop";
import Wallpaper from "@/components/desktop/Wallpaper";
import Taskbar from "@/components/taskbar/Taskbar";
import WidgetsPanel from "@/components/taskbar/widgets/WidgetsPanel";

export default function Home() {
  return (
    <main className="relative w-full h-screen">
      <Wallpaper />
      <Desktop />
      <WidgetsPanel />
      <Taskbar />
    </main>
  );
}
