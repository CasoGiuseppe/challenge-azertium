<template>
  <section class="root-layout">
    <aside class="root-layout__aside">
      <BaseButton
        id="home"
        :is-disabled="$route.meta.path === 'root'"
        is-secondary
        @handleClick="() => goToRouterLink('root')"
      >
        <template #label>
          {{ DICTIONARY_LABELS.router_to_home }}
        </template>
      </BaseButton>

      <BaseButton
        :id="`deleted_items--${galleryDeletedSize.length}`"
        :is-disabled="galleryDeletedSize.length === 0"
        is-secondary
        is-warning
        @handleClick="() => goToRouterLink('deleted')"
      >
        <template #label>
          {{ galleryDeletedSize.length }}
        </template>
      </BaseButton>
    </aside>

    <section class="root-layout__modules">
      <router-view v-slot="{ Component }">
        <component
          :is="Component"
          :list="galleryList"
          :key="$route.meta.path"
        >
          <template #extras="{ extra }">
            <PictureItem
              :id="extra.id"
              :src="extra.url"
              :isDisabled="extra.deleted"
              :data-index="extra.id"
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
  import { computed } from "vue";
  import { storeToRefs } from "pinia";
  import router from "@/app/router";

  import { useGalleryStore } from "@/gallery/stores/gallery";
  import {
    GET_GALLERY_LIST,
    GET_GALLERY_DELETED_LIST,
    GET_GALLERY_DELETED_STATE
  } from "@/gallery/stores/gallery/getters"
  import { CHANGE_GALLERY_DELETED_ITEM } from "@/gallery/stores/gallery/actions"
  
  import { DICTIONARY_LABELS } from "@/app/helpers/constants"
  import PictureItem from "@/app/ui/components/picture-item/PictureItem.vue"
  import BaseButton from "@/app/ui/components/base/base-button/BaseButton.vue"

  const useGallery = useGalleryStore();
  const galleryRefs = storeToRefs(useGallery);
  const galleryDeletedState = computed(() => galleryRefs[GET_GALLERY_DELETED_STATE].value)
  const galleryDeletedSize = computed(() => galleryRefs[GET_GALLERY_DELETED_LIST].value)
  const galleryList = computed(() => {
    return galleryDeletedState.value
      ? galleryRefs[GET_GALLERY_DELETED_LIST].value
      : galleryRefs[GET_GALLERY_LIST].value
  });

  const setDeletedState = (id) => useGallery[CHANGE_GALLERY_DELETED_ITEM]({ value: id })
  const goToRouterLink = (name) => router.push({ name });
</script>

<style lang="scss" src="@/assets/styles/index.scss" />
