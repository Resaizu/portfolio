<template>
  <div
    class="relative backdrop-blur-md bg-gray-950/5 rounded-lg min-h-[280px]"
    :class="custom_class"
  >
    <!-- border overlays -->
    <div class="absolute inset-0 rounded-lg border border-3
      border-t-neon-pink border-l-neon-pink
      border-b-transparent border-r-transparent opacity-25 -z-10">
    </div>
    <div class="absolute inset-0 rounded-lg border border-3
      border-b-neon-purple border-r-neon-purple
      border-t-transparent border-l-transparent opacity-10 -z-10">
    </div>

    <!-- slot -->
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  custom_class: {
    required: false,
    type: String,
    default: ''
  }
})
</script>