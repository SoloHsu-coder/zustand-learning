import create from "zustand";
import { devtools, persist } from "zustand/middleware";

let settingStore = (set) => ({
  dark: false,
  toggleDarkMode: () => set((state) => ({ dark: !state.dark })),
});

let peopleStore = (set) => ({
  people: ["solo", "hsu"],
  addPerson: (person) =>
    set((state) => ({ people: [...state.people, person] })),
});
settingStore = devtools(settingStore);
settingStore = persist(settingStore, { name: "mode_settings" });

peopleStore = devtools(peopleStore);
peopleStore = persist(peopleStore, { name: "user_settings" });

export const useSettingStore = create(settingStore);
export const usePeopleStore = create(peopleStore);
