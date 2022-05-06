<template>
  <transition-group
      appear
      class="gallery-list"
      tag="ul"
      name="appear-gallery-item"
      @after-enter="endEnterEvent"
    >
    <template v-if="list.length > 0">
      <li
        v-for="(extra, index) in list"
        :key="extra.id"
        :style="{ transitionDelay: `${((index + loadedSize - parseInt(gallerySize.length)) * 0.1) * -1 }s`}"
      >
        <slot :extra="extra" name="extras" />
      </li>
    </template>
    <template v-else>
      <li
        class="gallery-list__warning"
        :style="{ transitionDelay: `0s`}"
      >
        {{ DICTIONARY_LABELS.error_no_items }}
      </li>
    </template>
  </transition-group>
</template>
  
<script setup lang='ts'>
  import { computed } from "vue";
  import { storeToRefs } from "pinia";

  import { DICTIONARY_LABELS } from "@/app/helpers/constants";
  import { Observe } from "@/app/helpers/utilities/observer";

  import { useGalleryStore } from "@/gallery/stores/gallery";
  import {
    GET_GALLERY_LIST,
    GET_GALLERY_LOADED_SIZE
  } from "@/gallery/stores/gallery/getters";

  interface Props {
    list: { [key: string]: any }[];
  }

  const props = withDefaults(defineProps<Props>(), {
    list: [],
  });

  const useGallery = useGalleryStore();
  const galleryRefs = storeToRefs(useGallery);
  const gallerySize = computed(() => galleryRefs[GET_GALLERY_LIST].value);
  const loadedSize = computed(() => galleryRefs[GET_GALLERY_LOADED_SIZE].value);

  const emits = defineEmits([ "handleObserve" ]);
  const handleObserve = (): void => emits("handleObserve");

  const endEnterEvent = (e: any): void => {
    e.removeAttribute("style")
    const child = e.children[0];
    if (!child) return false;

    const obs = new Observe();
    const { index }: { index: number } = child.dataset;
    obs.create({
      element: child,
      action: (): void => {
        parseInt(index) === props.list.length - 1
          ? handleObserve()
          : null;
      },
    });
  }
</script>
<style lang="scss" src="./GalleryList.scss" />
