<template>
  <transition-group
      appear
      class="gallery-list"
      tag="ul"
      name="appear-gallery-item"
      @before-leave="outLeaveEvent"
    >
    <template v-if="list.length > 0">
      <li
        v-for="(extra, index) in list"
        :key="extra.id"
        :style="{ transitionDelay: `${ (index) * 0.1 }s`}"
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
  import { DICTIONARY_LABELS } from "@/app/helpers/constants"
  import { Observe } from "@/app/helpers/utilities/observer";
  
  interface Props {
    list: { [key: string]: any }[];
  }

  const props = withDefaults(defineProps<Props>(), {
    list: [],
  });

  const outLeaveEvent = (e: any) => e.removeAttribute("style");
</script>
<style lang="scss" src="./GalleryList.scss" />
