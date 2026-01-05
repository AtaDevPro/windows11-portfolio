"use client";

import { useQuickSettings } from "@/lib/quickSettingsStore";
import {
  Wifi,
  WifiOff,
  Bluetooth,
  BluetoothOff,
  Plane,
  Volume2,
  VolumeX,
  Sun,
  Battery,
  BatteryFull,
  Settings,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

export default function QuickSettings() {
  const { isOpen, close, toggle } = useQuickSettings();

  const [wifiOn, setWifiOn] = useState(true);
  const [bluetoothOn, setBluetoothOn] = useState(true);
  const [airplaneOn, setAirplaneOn] = useState(false);
  const [brightness, setBrightness] = useState(70);
  const [volume, setVolume] = useState(85);

  return (
    <>
      <button
        onClick={toggle}
        className=" z-50 flex items-center gap-3 rounded-xl px-4 py-3 text-white hover:bg-white/20 transition-all duration-200 shadow-2xl "
      >
        <Wifi className="w-5 h-5" />
        <Volume2 className="w-5 h-5" />
        <Battery className="w-5 h-5" />
        <span className="text-sm font-semibold">85%</span>
      </button>

      <div className="fixed inset-0 z-40 " onClick={close}>
        <div
          className={`
              absolute bottom-16 right-0 w-96 max-w-[calc(100vw-32px)]
            backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden
              border border-white/20 
              transition-all duration-300 ease-out origin-bottom-right
              flex flex-col gap-5 
              ${
                isOpen
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-4 opacity-0 scale-95"
              }
            `}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-6 py-1 flex flex-col gap-3">
            <div className="flex gap-4 ">
              <button
                onClick={() => setWifiOn(!wifiOn)}
                className={`
        flex flex-col items-center flex-1 justify-center gap-3 py-1 rounded-2xl transition-all duration-200
        ${
          wifiOn
            ? "bg-white/20 hover:bg-white/25"
            : "bg-white/5 hover:bg-white/10"
        }
      `}
              >
                {wifiOn ? (
                  <Wifi className="w-8 h-8" />
                ) : (
                  <WifiOff className="w-8 h-8 text-white/50" />
                )}
                <span className="text-sm font-medium text-white/90">Wi-Fi</span>
              </button>

              <button
                onClick={() => setBluetoothOn(!bluetoothOn)}
                className={`
        flex flex-col items-center flex-1 justify-center gap-3 py-1 rounded-2xl transition-all duration-200
        ${
          bluetoothOn
            ? "bg-white/20 hover:bg-white/25"
            : "bg-white/5 hover:bg-white/10"
        }
      `}
              >
                {bluetoothOn ? (
                  <Bluetooth className="w-8 h-8" />
                ) : (
                  <BluetoothOff className="w-8 h-8 text-white/50" />
                )}
                <span className="text-sm font-medium text-white/90">
                  Bluetooth
                </span>
              </button>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setAirplaneOn(!airplaneOn)}
                className={`
        flex flex-col flex-1 items-center justify-center gap-3 py-1 rounded-2xl transition-all duration-200
        ${
          airplaneOn
            ? "bg-white/20 hover:bg-white/25"
            : "bg-white/5 hover:bg-white/10"
        }
      `}
              >
                <Plane
                  className={`w-8 h-8 ${airplaneOn ? "" : "text-white/50"}`}
                />
                <span className="text-sm font-medium text-white/90">
                  Airplane mode
                </span>
              </button>

              <div
                className={`
        flex flex-col flex-1 items-center justify-center gap-3 py-6 rounded-2xl bg-white/5
      `}
              >
                <Sun className="w-8 h-8" />
                <span className="text-sm font-medium text-white/90">
                  Brightness
                </span>
              </div>
            </div>
          </div>

          <div className="px-6 pb-5 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Sun className="w-5 h-5 text-white/80" />
                <span className="text-sm text-white/80">{brightness}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={brightness}
                onChange={(e) => setBrightness(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-white"
                style={{
                  background: `linear-gradient(to right, white ${brightness}%, rgba(255,255,255,0.1) ${brightness}%)`,
                }}
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                {volume === 0 ? (
                  <VolumeX className="w-5 h-5 text-white/80" />
                ) : (
                  <Volume2 className="w-5 h-5 text-white/80" />
                )}
                <span className="text-sm text-white/80">{volume}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-white"
                style={{
                  background: `linear-gradient(to right, white ${volume}%, rgba(255,255,255,0.1) ${volume}%)`,
                }}
              />
            </div>
          </div>

          <div className="flex gap-3 items-center justify-between px-6 py-1 bg-white/5 border-t border-white/10">
            <div className="flex items-center gap-4">
              <BatteryFull className="w-6 h-6 text-green-400" />
              <div>
                <div className="text-sm font-semibold">85%</div>
                <div className="text-xs text-white/60">
                  2 hours, 15 minutes remaining
                </div>
              </div>
            </div>

            <button className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition">
              <Settings className="w-4 h-4" />

              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
