import { create } from "zustand";

type Window = {
  id: string;
  title: string;
  component: React.ReactNode;
  icon: string;
  minimized?: boolean;
  position?: { x: number; y: number };
  size?: { width: number; height: number };
};

type WindowState = {
  windows: Window[];
  openWindow: (window: Omit<Window, "id">) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  bringToFront: (id: string) => void;
};

export const useWindowStore = create<WindowState>((set) => ({
  windows: [],

  openWindow: (newWindow) =>
    set((state) => ({
      windows: [
        ...state.windows,
        {
          ...newWindow,
          id: `${newWindow.title}-${Date.now()}`,
          minimized: false,
          position: {
            x: 100 + state.windows.length * 50,
            y: 50 + state.windows.length * 30,
          },
          size: { width: 800, height: 400 },
        },
      ],
    })),

  closeWindow: (id) =>
    set((state) => ({
      windows: state.windows.filter((w) => w.id !== id),
    })),

  minimizeWindow: (id) =>
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id ? { ...w, minimized: !w.minimized } : w
      ),
    })),

  bringToFront: (id) =>
    set((state) => {
      const window = state.windows.find((w) => w.id === id);
      if (!window) return state;
      return {
        windows: [...state.windows.filter((w) => w.id !== id), window],
      };
    }),
}));
