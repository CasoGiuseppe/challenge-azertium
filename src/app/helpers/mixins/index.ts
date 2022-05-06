import { galleryServices } from "@/gallery/domain/services/Gallery.services";

import { useGalleryStore } from "@/gallery/stores/gallery";
import {
  CHANGE_GALLERY_LIST,
  CHANGE_GALLERY_ALBUM,
  CHANGE_GALLERY_LOADED_SIZE
} from "@/gallery/stores/gallery/actions";
import { GET_GALLERY_ALBUM } from "@/gallery/stores/gallery/getters";

import { useCosmeticStore } from "@/app/stores/cosmetics";
import {
  CHANGE_BUTTON_LOAD_STATE,
  CHANGE_LOADING_STATE
} from "@/app/stores/cosmetics/actions";

export const loadMoreAlbums = async (): Promise<void> => {
  const galleryStore = useGalleryStore()
  const useCosmetic = useCosmeticStore();

  useCosmetic[CHANGE_LOADING_STATE]({ value: true })
  galleryStore[CHANGE_GALLERY_ALBUM]()

  const album = galleryStore[GET_GALLERY_ALBUM]
  const response = await galleryServices.getAllGalleryItems(album)
  galleryStore[CHANGE_GALLERY_LIST]({ value: response})
  galleryStore[CHANGE_GALLERY_LOADED_SIZE]({ value: response.length })

  useCosmetic[CHANGE_BUTTON_LOAD_STATE]({ value: false })
  useCosmetic[CHANGE_LOADING_STATE]({ value: false })
} 