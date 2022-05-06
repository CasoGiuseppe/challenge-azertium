<template>
  <figure
    :class="[
      isDisabled ? 'picture-item--is-disabled' : null,
      'picture-item'
    ]"
  >
    <img :src="src" />

    <figcaption
      v-if="$slots['caption']"
      class="picture-item__caption"
    >
      <slot name="caption" />
    </figcaption>

    <span
      v-if="$slots['action']"
      class="picture-item__action"
    >
      <slot name="action" />
    </span>
  </figure>
</template>
  
<script setup lang='ts'>
  interface Props {
      id: string;
      src: string;
      isDisabled: boolean
    }

  const props = withDefaults(defineProps<Props>(), {
    id: 'id',
    src: null,
    isDisabled: false
  });
  
</script>
<style lang="scss" src="./PictureItem.scss" />
