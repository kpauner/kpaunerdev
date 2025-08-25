import { create } from "zustand"

type useContactSheet = {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export const useContactSheet = create<useContactSheet>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))
