import { createRouter, createWebHistory } from "vue-router";
import { galleryServices } from "@/gallery/domain/services/Gallery.services";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: {},

      beforeEnter: async (to, from, next) => {
        const res = await galleryServices.getAllGalleryItems();
        console.log(res)
        next();
      },
    },
  ],
});

export default router;
