<template>
  <section class="root-layout">
    <aside class="root-layout__aside">
      aside
    </aside>

    <section class="root-layout__modules">
      <router-view v-slot="{ Component }">
        <component
          :is="Component"
          :list="galleryList"
        >
          <template #extras="{ extra }">
            <PictureItem :src="extra.url">
              <template #caption>
                {{ extra.title }}
              </template>
              <template #action>
                delete
              </template>
            </PictureItem>
          </template>
        </component>
      </router-view>
    </section>
  </section>
</template>

<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { useGalleryStore } from "@/gallery/stores/gallery";
  import { GET_GALLERY_LIST } from "@/gallery/stores/gallery/getters"
  import PictureItem from "@/app/ui/components/picture-item/PictureItem.vue"

  const useGallery = useGalleryStore();
  const galleryRefs = storeToRefs(useGallery);
  const galleryList = galleryRefs[GET_GALLERY_LIST];

</script>

<style lang="scss" src="@/assets/styles/index.scss" />
