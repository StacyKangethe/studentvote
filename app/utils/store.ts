import { create } from "zustand";
import { ActionType, CartType } from "@/types/types";

const INITIAL_STATE = {
  candidates: [],
  totalCandidates: 0,
  totalVotes: 0,
};

export const useCartStore = create<CartType & ActionType>((set, get) => ({
  candidates: INITIAL_STATE.candidates,
  totalCandidates: INITIAL_STATE.totalCandidates,
  totalVotes: INITIAL_STATE.totalVotes,
  addToCart(item) {
    set((state) => ({
      candidates: [...state.candidates],
      quantity: state.totalCandidates + item.quantity,
      totalVotes: state.totalVotes + item.vote,
    }));
  },
}));
