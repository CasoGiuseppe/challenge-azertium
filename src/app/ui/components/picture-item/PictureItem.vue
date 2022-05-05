<template>
  <figure class="picture-item">
    <img
      :src="src"
      :alt="caption"
    />

    <figcaption
      v-if="$slots['caption']"
      class="picture-item__caption"
    >
      <slot name="caption" />
    </figcaption>

    <button
      v-if="$slots['action']"
      class="picture-item__action"
    >
      <slot name="action" />
    </button>
  </figure>
</template>
  
<script setup lang='ts'>
  interface Props {
      src: string;
    }

  const props = withDefaults(defineProps<Props>(), {
    src: null
  });
</script>
<style lang="scss" src="./PictureItem.scss" />
