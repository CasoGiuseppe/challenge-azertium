import { createRouter, createWebHistory } from "vue-router";
import { galleryServices } from "@/gallery/domain/services/Gallery.services";

import { useGalleryStore } from "@/gallery/stores/gallery";
import {
  CHANGE_GALLERY_LIST,
  CHANGE_GALLERY_DELETED_STATE
} from "@/gallery/stores/gallery/actions";
import { GET_GALLERY_ALBUM } from "@/gallery/stores/gallery/getters";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "root",
      components: {
        default: () => import("@/gallery/infrastructure/ui/views/gallery-list/GalleryList.vue"),
      },

      beforeEnter: async (to, from, next) => {
        const galleryStore = useGalleryStore();

        const album = galleryStore[GET_GALLERY_ALBUM]
        galleryStore[CHANGE_GALLERY_LIST]({
          value: await await galleryServices.getAllGalleryItems(album)
        });
      
        next();
      },

      children: [
        {
          path: "/deleted",
          name: "deleted",
          component: {},

          beforeEnter: async (to, from, next) => {
            const galleryStore = useGalleryStore();

            galleryStore[CHANGE_GALLERY_DELETED_STATE]({ value: true });
            next()
          }
        }
      ]
    }
  ],
});

export default router;
