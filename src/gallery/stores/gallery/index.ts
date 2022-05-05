import { defineStore } from "pinia";
import type { Gallery } from "@/gallery/domain/models/Gallery";
import { BASE_GALLERY_STORE } from "@/app/helpers/constants";

import getters, {
  GET_GALLERY_LIST,
  GET_GALLERY_ALBUM
} from "./getters";

import {
  CHANGE_GALLERY_LIST,
  CHANGE_GALLERY_ALBUM
} from "./actions";

export const useGalleryStore = defineStore({
  id: "doctors",
  state: () => BASE_GALLERY_STORE,

  actions: {
    [CHANGE_GALLERY_LIST]({ value }: { value: Gallery[] }): void {
      this.gallery = Object.assign(this.gallery, value)
    },

    [CHANGE_GALLERY_ALBUM](): void {
      this.album + 1
    }
  },

  getters
})