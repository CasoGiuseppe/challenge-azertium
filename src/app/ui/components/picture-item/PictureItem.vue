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

    <button
      v-if="$slots['action']"
      :data-id="id"
      class="picture-item__action"
      @click="handleClick(id)"
    >
      <slot name="action" />
    </button>
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

  const clickEmit = defineEmits(["handleClick"]);
  const handleClick = (id: number | string): void => clickEmit("handleClick", id);
</script>
<style lang="scss" src="./PictureItem.scss" />
