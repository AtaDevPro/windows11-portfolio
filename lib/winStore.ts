import { create } from "zustand";

export const useWinStore = create<{ isOpen: boolean; toggle: () => void }>(
  (set) => ({
    isOpen: false,
    toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  })
);
