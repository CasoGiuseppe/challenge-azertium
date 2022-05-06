import type { GalleryStore } from "@/app/helpers/utilities/interfaces";

export const API_DELAY_MAX: number = 2000;
export const API_DELAY_MIN:number = 500;
export const BASE_GALLERY_STORE: GalleryStore = {
  album: 1,
  gallery: [],
  deleted: false
}
export const DICTIONARY_LABELS: Record<string, string> = {
  cta_delete: "Delete",
  cta_restore: "Restore",
  error_no_items: 'No items availables',
  router_to_home: 'Home'
};