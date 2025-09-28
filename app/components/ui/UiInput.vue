<script lang="ts" setup>
import type { InputTypeHTMLAttribute } from "vue";

defineProps<{
  type: InputTypeHTMLAttribute;
  icon?: string;
}>();
</script>

<template>
  <div class="relative w-full max-w-md">
    <input
      class="w-full border-b border-black py-3 pr-12 bg-transparent focus:outline-none focus:border-accent placeholder:text-dark-gray transition-colors duration-300"
      placeholder="Your email for promotions and offers"
      :type="type"
    />
    <Icon
      v-if="icon"
      :name="icon"
      class="w-6 h-6 absolute right-0 top-1/2 -translate-y-1/2 text-dark-gray pointer-events-none"
    />
  </div>
</template>
