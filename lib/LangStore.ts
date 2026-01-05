import { create } from "zustand";

type Lang = "ENG" | "FA";

interface LangStore {
  currentLang: Lang;
  isOpen: boolean;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  close: () => void;
}

export const useLangStore = create<LangStore>((set) => ({
  currentLang: "ENG",
  isOpen: false,
  setLang: (lang) => set({ currentLang: lang, isOpen: false }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  close: () => set({ isOpen: false }),
}));
