import type { Gallery } from "@/gallery/domain/models/Gallery";

export const GET_GALLERY_LIST = "getGalleryList";
export const GET_GALLERY_ALBUM = "getGalleryAlbum";

export default {
  [GET_GALLERY_LIST]: (state: any): Gallery[] => state.gallery,
  [GET_GALLERY_ALBUM]: (state: any): number => state.album,
}