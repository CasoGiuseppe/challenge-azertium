import { galleryServices } from "@/gallery/domain/services/Gallery.services";

import { useGalleryStore } from "@/gallery/stores/gallery";
import {
  CHANGE_GALLERY_LIST,
  CHANGE_GALLERY_ALBUM
} from "@/gallery/stores/gallery/actions";
import { GET_GALLERY_ALBUM } from "@/gallery/stores/gallery/getters";

import { useCosmeticStore } from "@/app/stores/cosmetics";
import { CHANGE_BUTTON_LOAD_STATE } from "@/app/stores/cosmetics/actions";

export const loadMoreAlbums = async (): Promise<void> => {
  const galleryStore = useGalleryStore()
  const useCosmetic = useCosmeticStore();

  galleryStore[CHANGE_GALLERY_ALBUM]()

  const album = galleryStore[GET_GALLERY_ALBUM]
  galleryStore[CHANGE_GALLERY_LIST]({ value: await galleryServices.getAllGalleryItems(album) })

  useCosmetic[CHANGE_BUTTON_LOAD_STATE]({ value: false })
} 