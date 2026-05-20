import { create } from 'zustand';
import { Audit } from '../types';

interface SavedStore {
  savedItems: Audit[];
  addSavedItem: (item: Audit) => void;
  removeSavedItem: (id: string) => void;
  clearSavedItems: () => void;
  isSaved: (id: string) => boolean;
}

export const useSavedStore = create<SavedStore>((set, get) => ({
  savedItems: [],
  addSavedItem: (item) =>
    set((state) => ({
      savedItems: [...state.savedItems, item],
    })),
  removeSavedItem: (id) =>
    set((state) => ({
      savedItems: state.savedItems.filter((i) => i.id !== id),
    })),
  clearSavedItems: () => set({ savedItems: [] }),
  isSaved: (id) => get().savedItems.some((item) => item.id === id),
}));