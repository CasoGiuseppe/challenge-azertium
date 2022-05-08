<template>
  <figure
    ref="root"
    :class="[
      isDisabled ? 'picture-item--is-disabled' : null,
      hasLoading ? 'picture-item--is-loading' : null,
      'picture-item'
    ]"
    :data-index="id"
  >
    <img
      data-image
      :data-src="src"
      loading="lazy"
      @load="lazyLoadEnd"
    />

    <figcaption
      v-if="$slots['caption']"
      class="picture-item__caption"
    >
      {{ hasLoading }}
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
  import { onMounted, ref, computed } from "vue";
  import { Observe } from "@/app/helpers/utilities/observer";

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

  const root = ref(null)
  const hasLoading = ref(true)

  onMounted(() => {
    const child = root.value.children[0];
    if (!child) return false;

    const obs = new Observe();
    obs.create({
      element: root.value,
      action: async (): void => {
        const { src } = child.dataset
        child.src = src
      }
    })
  })

  const lazyLoadEnd = (e: any): void => {
    const { target } = e
    target.removeAttribute('data-src')
    target.classList.add('is--load-end')
    hasLoading.value = false
  }
</script>
<style lang="scss" src="./PictureItem.scss" />
