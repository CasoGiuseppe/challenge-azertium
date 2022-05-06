import type { Gallery } from "@/gallery/domain/models/Gallery";

export const GET_GALLERY_LIST = "getGalleryList";
export const GET_GALLERY_ALBUM = "getGalleryAlbum";
export const GET_GALLERY_DELETED_LIST = "getGalleryDeletedList";
export const GET_GALLERY_DELETED_STATE = "getGalleryDeletedState";
export const GET_GALLERY_LOADED_SIZE = "getGalleryLoadedSize";

export default {
  [GET_GALLERY_LIST](state: any): Gallery[] {
    return this[GET_GALLERY_DELETED_STATE]
      ? state.gallery.filter((item: Gallery) => item.deleted)
      : state.gallery.filter((item: Gallery) => !item.deleted)
  },
  [GET_GALLERY_ALBUM]: (state: any): number => state.album,
  [GET_GALLERY_DELETED_STATE]: (state: any): boolean => state.deleted,
  [GET_GALLERY_DELETED_LIST]: (state: any): Gallery[] => state.gallery.filter((item: Gallery) => item.deleted),
  [GET_GALLERY_LOADED_SIZE]: (state: any): number => state.loadedItems,
}