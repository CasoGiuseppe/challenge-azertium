import type { Gallery } from "@/gallery/domain/models/Gallery";

export interface GalleryStore {
  album: number,
  gallery: Gallery[];
  deleted: boolean | null
}

export interface CosmeticStore {
  allowLoadMore: boolean;
}