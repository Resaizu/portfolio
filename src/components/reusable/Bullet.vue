<script setup>
const props = defineProps({
  color: { type: String, default: 'green' },
});

const colorMap = {
  green: {
    bg: 'bg-neon-green',
    shadow: 'shadow-neon-green-sm shadow-neon-green-md',
  },
  pink: {
    bg: 'bg-neon-pink',
    shadow: 'shadow-neon-pink-sm shadow-neon-pink-md',
  },
  purple: {
    bg: 'bg-neon-purple',
    shadow: 'shadow-neon-purple-sm shadow-neon-purple-md',
  },
  cyan: {
    bg: 'bg-neon-cyan',
    shadow: 'shadow-neon-cyan-sm shadow-neon-cyan-md',
  },
};

const tailwindClass = `w-1.5 h-1.5 rounded-full shrink-0 ${colorMap[props.color].bg} ${colorMap[props.color].shadow}`;
</script>

<template>
  <span :class="tailwindClass"></span>
</template>
