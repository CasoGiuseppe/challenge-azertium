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
        v-for="(item, index) in list"
        :key="item.id"
        :style="{ transitionDelay: `${ (index) * 0.1 }s`}"
      >{{ item.id }}</li>
    </template>
  </transition-group>
</template>
  
<script setup lang='ts'>
  interface Props {
    list: { [key: string]: any }[];
  }

  const props = withDefaults(defineProps<Props>(), {
    list: [],
  });

  const outLeaveEvent = (e: any) => e.removeAttribute("style");
</script>
<style lang="scss" src="./GalleryList.scss" />
