<template>
  <section id="projects" class="max-w-6xl mx-auto px-4 py-16">
    <div class="flex gap-3">
      <span class="font-playfair tracking-[8px] text-2xl font-bold text-[var(--neon-cyan)]">//</span>
      <span class="text-2xl font-semibold text-[var(--neon-pink)] tracking-widest">Projects</span>
    </div>

    <div class="grid md:grid-cols-3 gap-8">

      <div v-for="project in projects" :key="project.title"
        class="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition">
        <h4 class="text-lg font-semibold mb-2">
          {{ project.title }}
        </h4>

        <p class="text-sm text-gray-400 mb-4">
          {{ project.description }}
        </p>

        <div class="flex gap-2 flex-wrap">
          <span v-for="tech in project.stack" :key="tech" class="text-xs bg-gray-800 px-2 py-1 rounded">
            {{ tech }}
          </span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>

const projects = [
  {
    title: "POS System",
    description: "Cloud POS with realtime inventory and multi-branch support.",
    stack: ["Laravel", "Vue", "MySQL"]
  },
  {
    title: "Realtime Data Table",
    description: "Excel-like collaborative table using WebSockets.",
    stack: ["Laravel Echo", "Reverb", "Vue"]
  },
  {
    title: "Ecommerce Platform",
    description: "Marketplace platform with seller dashboard.",
    stack: ["Laravel", "Vue", "Redis"]
  }
]

</script>
