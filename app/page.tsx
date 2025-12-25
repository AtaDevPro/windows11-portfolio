import Wallpaper from "@/components/desktop/Wallpaper";
import Taskbar from "@/components/ui/Taskbar";

export default function Home() {
  return (
    <main className="relative w-full h-screen">
      <Wallpaper />
      <Taskbar />
    </main>
  );
}
