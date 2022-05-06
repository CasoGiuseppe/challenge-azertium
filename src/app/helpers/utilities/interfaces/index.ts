import type { Gallery } from "@/gallery/domain/models/Gallery";

export interface GalleryStore {
  album: number,
  gallery: Gallery[];
  deleted: boolean | null,
  loadedItems: number,
}

export interface CosmeticStore {
  allowLoadMore: boolean;
  isLoading: boolean
}