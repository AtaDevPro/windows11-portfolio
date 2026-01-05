import { create } from "zustand";

export type Window = {
  id: string;
  title: string;
  icon: string;
  component: React.ComponentType;
  position?: { x: number; y: number };
  size?: { width: number; height: number };
  isMinimized?: boolean;
};

type WindowStore = {
  windows: Window[];
  openWindow: (window: Omit<Window, "id" | "position" | "isMinimized">) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  updateWindowPosition: (
    id: string,
    position: { x: number; y: number }
  ) => void; // جدید
  bringToFront: (id: string) => void;
};

export const useWindowStore = create<WindowStore>((set) => ({
  windows: [],

  openWindow: (window) =>
    set((state) => {
      const newId = `${window.title}-${Date.now()}`;
      const offset = state.windows.length * 40;
      return {
        windows: [
          ...state.windows,
          {
            ...window,
            id: newId,
            position: { x: 100 + offset, y: 50 + offset },
            isMinimized: false,
          },
        ],
      };
    }),

  closeWindow: (id) =>
    set((state) => ({
      windows: state.windows.filter((w) => w.id !== id),
    })),

  minimizeWindow: (id) =>
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id ? { ...w, isMinimized: true } : w
      ),
    })),

  updateWindowPosition: (id, position) =>
    set((state) => ({
      windows: state.windows.map((w) => (w.id === id ? { ...w, position } : w)),
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
