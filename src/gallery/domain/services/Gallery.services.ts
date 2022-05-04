import { galleryRepository } from "@/gallery/infrastructure/repositories/gallery.repository";

export const galleryServices = {
  getAllGalleryItems: (album: number) => galleryRepository.getAllGalleryItems(album),
};
