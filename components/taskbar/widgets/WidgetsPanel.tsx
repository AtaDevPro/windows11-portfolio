"use client";

import NewsWidget from "./NewsWidget";
import PhotoWidget from "./PhotoWidget";
import WeatherWidget from "./WeatherWidget";
import { useWidgetStore } from "@/lib/widgetStore";

function WidgetsPanel() {
  const { isOpen } = useWidgetStore();
  return (
    <div
      className={`fixed left-0 top-1 h-11/12 w-2/3 
          bg-black/50 backdrop-blur-2xl  z-50
          md:flex flex-col p-6 rounded-2xl
          transition-transform duration-500 ease-in-out hidden
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <h3 className="text-white pb-3">Hello Dear 👋</h3>
      <div className="flex gap-3">
        <div className="flex flex-col gap-3 flex-4">
          <WeatherWidget />
          <PhotoWidget />
        </div>
        <div className="pb-3 flex-6">
          <NewsWidget />
        </div>
      </div>
    </div>
  );
}

export default WidgetsPanel;
