<template>
  <figure class="picture-item">
    <img
      :src="src"
      :alt="alt"
    />
  </figure>
</template>
  
<script setup lang='ts'>
  interface Props {
      src: string;
      alt?: string
    }

  const props = withDefaults(defineProps<Props>(), {
    src: null,
    alt: 'alt image'
  });
</script>
<style lang="scss" src="./PictureItem.scss" />
