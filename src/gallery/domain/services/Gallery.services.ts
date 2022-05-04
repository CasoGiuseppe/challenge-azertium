import { galleryRepository } from "@/gallery/infrastructure/repositories/gallery.repository";

export const galleryServices = {
  getAllGalleryItems: () => galleryRepository.getAllGalleryItems(),
};
