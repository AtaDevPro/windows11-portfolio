import { create } from "zustand";

export const useGoogleStore = create<{
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
}>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  close: () => set({ isOpen: false }),
}));
