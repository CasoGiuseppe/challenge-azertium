import type { Gallery } from "@/gallery/domain/models/Gallery";

export interface GalleryStore {
  album: number,
  gallery: Gallery[];
}