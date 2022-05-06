import { BASE_COSMETIC_STORE } from "@/app/helpers/constants";
import { defineStore } from "pinia";

import getters, {
  GET_BUTTON_LOAD_STATE
} from "./getters";

import {
  CHANGE_LOADING_STATE,
  CHANGE_BUTTON_LOAD_STATE,
} from "./actions";

export const useCosmeticStore = defineStore({
  id: "cosmetic",
  state: () => BASE_COSMETIC_STORE,

  actions: {
    [CHANGE_LOADING_STATE]({ value }: { value: boolean }): void {
      this.isLoading = value;
    },
    
    [CHANGE_BUTTON_LOAD_STATE]({ value }: { value: boolean }): void {
      this.allowLoadMore = value;
    },
  },

  getters,
});
