<script setup>
const props = defineProps({
  custom_class: {
    required: false,
    type: String,
    default: '',
  },
});
</script>

<template>
  <div class="relative min-h-[280px] rounded-lg bg-gray-950/5 backdrop-blur-md" :class="custom_class">
    <!-- border overlays -->
    <div
      class="border-t-neon-pink border-l-neon-pink absolute inset-0 -z-10 rounded-lg border border-3 border-r-transparent border-b-transparent opacity-25"
    ></div>
    <div
      class="border-b-neon-purple border-r-neon-purple absolute inset-0 -z-10 rounded-lg border border-3 border-t-transparent border-l-transparent opacity-10"
    ></div>

    <!-- slot -->
    <slot></slot>
  </div>
</template>
