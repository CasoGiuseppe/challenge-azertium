<template>
  <button
    :class="[
      `base-button--is-${mode}`,
      isSecondary ? 'base-button--is-secondary' : null,
      isWarning ? 'base-button--is-warning' : null,
      'base-button',
    ]"
    :data-id="id"
    :disabled="isDisabled"
    @click="handleClick(id)"
  >
    <span class="base-button__label">
      <transition
        mode="out-in"
        name="appear-extra-info"
      >
        <span
          :key="`appear-${id}-${isWarning}`"
          class="base-button__label--is-animated"
        >
          <slot name="label" />
        </span>
      </transition>
    </span>
  </button>
</template>

<script setup lang="ts">
const clickEmit = defineEmits(["handleClick"]);
const handleClick = (id: number | string): void => clickEmit("handleClick", id);

defineProps({
  id: {
    type: [String, Number],
    default: "test",
  },
  mode: {
    type: String,
    default: "basic",
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  isSecondary: {
    type: Boolean,
    default: false,
  },
  isWarning: {
    type: Boolean,
    default: false,
  }
});
</script>
<style lang="scss" src="./BaseButton.scss" />
