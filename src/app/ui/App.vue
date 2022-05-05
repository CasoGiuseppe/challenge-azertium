<template>
  <section class="root-layout">
    <aside class="root-layout__aside">
      aside
    </aside>

    <section class="root-layout__modules">
      <router-view
        :list="galleryList"
      ></router-view>
    </section>
  </section>
</template>

<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { useGalleryStore } from "@/gallery/stores/gallery";
  import { GET_GALLERY_LIST } from "@/gallery/stores/gallery/getters"

  const useGallery = useGalleryStore();
  const galleryRefs = storeToRefs(useGallery);
  const galleryList = galleryRefs[GET_GALLERY_LIST];

</script>

<style lang="scss" src="@/assets/styles/index.scss" />
