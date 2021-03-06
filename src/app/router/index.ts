import { createRouter, createWebHistory } from "vue-router";
import { loadMoreAlbums } from "@/app/helpers/mixins"

import { useGalleryStore } from "@/gallery/stores/gallery";
import { CHANGE_GALLERY_DELETED_STATE } from "@/gallery/stores/gallery/actions";
import { GET_GALLERY_LIST } from "@/gallery/stores/gallery/getters";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "root",
      components: {
        default: () => import("@/gallery/infrastructure/ui/views/gallery-list/GalleryList.vue"),
      },
      meta: { path: 'root' },

      beforeEnter: async (to, from, next) => {
        const galleryStore = useGalleryStore();
        const galleryExist = galleryStore[GET_GALLERY_LIST].length > 0

        if (galleryExist) {
          next()
        } else {
          await loadMoreAlbums()
          next();
        }
      }
    },
    {
      path: "/deleted",
      name: "deleted",
      components: {
        default: () => import("@/gallery/infrastructure/ui/views/gallery-list/GalleryList.vue")
      },
      meta: { path: 'deleted' },

      beforeEnter: async (to, from, next) => {
        const galleryStore = useGalleryStore();
        galleryStore[CHANGE_GALLERY_DELETED_STATE]({ value: true });
        next()
      }
    }
  ],
});

router.beforeEach((to, from, next) => {
  const galleryStore = useGalleryStore();
  if (to.name !== "deleted") galleryStore[CHANGE_GALLERY_DELETED_STATE]({ value: false });
  next()
})

export default router;
