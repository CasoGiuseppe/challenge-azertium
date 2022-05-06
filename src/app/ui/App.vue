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
            >
              <template #caption>
                {{ extra.title }}
              </template>
              <template #action>
                <BaseButton
                  :id="extra.id"
                  :is-warning="!extra.deleted"
                  @handleClick="setDeletedState"
                >
                  <template #label>
                    {{ !extra.deleted ? DICTIONARY_LABELS.cta_delete :  DICTIONARY_LABELS.cta_restore}}
                  </template>
                </BaseButton>
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
  import BaseButton from "@/app/ui/components/base/base-button/BaseButton.vue"

  const useGallery = useGalleryStore();
  const galleryRefs = storeToRefs(useGallery);
  const galleryList = galleryRefs[GET_GALLERY_LIST];

  const setDeletedState = (id) => useGallery[CHANGE_GALLERY_DELETED_ITEM]({ value: id })
</script>

<style lang="scss" src="@/assets/styles/index.scss" />
