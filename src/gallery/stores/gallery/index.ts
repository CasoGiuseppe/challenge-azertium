import { defineStore } from "pinia";
import type { Gallery } from "@/gallery/domain/models/Gallery";
import { BASE_GALLERY_STORE } from "@/app/helpers/constants";

import getters, {
  GET_GALLERY_LIST,
  GET_GALLERY_ALBUM,
  GET_GALLERY_DELETED_LIST
} from "./getters";

import {
  CHANGE_GALLERY_LIST,
  CHANGE_GALLERY_ALBUM,
  CHANGE_GALLERY_DELETED_ITEM,
  CHANGE_GALLERY_DELETED_STATE
} from "./actions";

export const useGalleryStore = defineStore({
  id: "gallery",
  state: () => BASE_GALLERY_STORE,

  actions: {
    [CHANGE_GALLERY_LIST]({ value }: { value: Gallery[] | any }): void {
      this.gallery = [...this.gallery, value].flat()
    },

    [CHANGE_GALLERY_ALBUM](): void {
      this.album = this.album + 1
    },

    [CHANGE_GALLERY_DELETED_ITEM]({ value }: { value: number }): void {
      const finded: any = this.gallery.find((item: Gallery) => item.id === value)
      if (finded) finded['deleted'] = !finded['deleted']
    },

    [CHANGE_GALLERY_DELETED_STATE]({ value }: { value: boolean }): void {
      this.deleted = value
    }
  },

  getters
})