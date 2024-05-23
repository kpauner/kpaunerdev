import { create } from "zustand";

type AnimationPlayedStore = {
  played: boolean;
  hasPlayed: () => void;
};

export const useAnimationPlayedStore = create<AnimationPlayedStore>((set) => ({
  played: false,
  hasPlayed: () => {
    set({
      played: true,
    });
  },
}));
