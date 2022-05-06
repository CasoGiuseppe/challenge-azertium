import { http } from "../http/http";
import type { GalleryDTO } from "@/gallery/infrastructure/http/dto/GalleryDTO";
import type { Gallery } from "@/gallery/domain/models/Gallery";

export const galleryRepository = {  
  getAllGalleryItems: async (album: number) => {
    const gallery = await http.get<GalleryDTO[]>(`${import.meta.env.VITE_APP_API_URL}gallery/${album}`);
    return gallery.map((gallery, index: number): Gallery => {
      return {
        albumId: gallery.albumId,
        title: gallery.title,
        url: gallery.url,
        thumbnailUrl: gallery.thumbnailUrl,
        id: gallery.id,
        deleted: false,
        index
      };
    });
  },
};
