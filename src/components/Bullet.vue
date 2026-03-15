<template>
  <span :class="tailwindClass"></span>
</template>

<script setup>
const props = defineProps({
  color: { type: String, default: 'green' }
})

const colorMap = {
  green:  {
    bg: 'bg-neon-green',
    shadow: 'shadow-[0_0_8px_var(--neon-green),0_0_10px_var(--neon-green)]'
  },
  pink:   {
    bg: 'bg-neon-pink',
    shadow: 'shadow-[0_0_8px_var(--neon-pink),0_0_10px_var(--neon-pink)]'
  },
  purple: {
    bg: 'bg-neon-purple',
    shadow: 'shadow-[0_0_8px_var(--neon-purple),0_0_10px_var(--neon-purple)]'
  },
  cyan:   {
    bg: 'bg-neon-cyan',
    shadow: 'shadow-[0_0_8px_var(--neon-cyan),0_0_10px_var(--neon-cyan)]'
  },
}

const tailwindClass = `w-1.5 h-1.5 rounded-full shrink-0 ${colorMap[props.color].bg} ${colorMap[props.color].shadow}`;
</script>