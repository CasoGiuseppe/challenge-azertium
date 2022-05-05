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
            <PictureItem
              :id="extra.id"
              :src="extra.url"
              :isDisabled="extra.deleted"
              @handleClick="setDeletedState"
            >
              <template #caption>
                {{ extra.title }}
              </template>
              <template #action>
                {{ DICTIONARY_LABELS.cta_delete }}
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
  import { CHANGE_GALLERY_DELETED_ITEM } from "@/gallery/stores/gallery/actions"

  import { DICTIONARY_LABELS } from "@/app/helpers/constants"
  import PictureItem from "@/app/ui/components/picture-item/PictureItem.vue"

  const useGallery = useGalleryStore();
  const galleryRefs = storeToRefs(useGallery);
  const galleryList = galleryRefs[GET_GALLERY_LIST];

  const setDeletedState = (id) => useGallery[CHANGE_GALLERY_DELETED_ITEM]({ value : id })
</script>

<style lang="scss" src="@/assets/styles/index.scss" />
