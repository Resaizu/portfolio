<template>
  <section id="projects" class="max-w-6xl mx-auto px-4 py-16 min-h-[80vh] 2560:min-h-[50vh] scroll-mt-20">
    <div class="flex gap-3">
      <span class="font-playfair tracking-[8px] text-2xl font-bold text-neon-cyan">//</span>
      <span class="text-2xl font-semibold text-neon-pink tracking-widest">Projects</span>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      <neon-card
        v-for="project in projects" :key="project"
        class="hover:shadow-[0_0_8px_0_var(--neon-purple)] transition-shadow duration-300"
      >
        <div class="flex flex-col h-full p-2">
          <div class="relative h-48 shrink-0 overflow-hidden rounded-t-md">
            <img :src="project.image" class="w-full h-full object-cover" />

            <div class="absolute inset-0 bg-neon-purple/20 mix-blend-color"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
          </div>

          <div class="p-4 flex flex-col gap-4 h-full">
            <h2 class="text-xl font-semibold tracking-[0.18em] uppercase text-gray-200 break-words">
              {{ project.title }}
            </h2>

            <div class="mt-auto">
              <p class="text-sm mb-4 leading-relaxed">{{ project.description }}</p>
              
              <div class="flex flex-wrap gap-3 text-xs">
                <span v-for="stack in project.stack" :key="stack"
                  class="rounded-lg border border-neon-purple p-2">
                    {{ stack }}
                  </span>
              </div>
            </div>
          </div>
        </div>
      </neon-card>
    </div>
  </section>
</template>

<script setup>
import NeonCard from '@/components/reusable/NeonCard.vue';
import logisticsProject from '@/assets/images/projects/logistics.png'

const projects = [
  {
    title: 'Corporate Websites',
    description: 'Informational Websites for all Main and Sister Companies along with admin panel.',
    stack: ['Laravel', 'REST API', 'MySQL', 'Vue', 'Bootstrap'],
    image: logisticsProject
  },
  {
    title: 'Client Website',
    description: 'Information Website with admin panel that controls what to view.',
    stack: ['Laravel', 'REST API', 'MySQL', 'Vue', 'Tailwind CSS'],
    image: logisticsProject
  },
  {
    title: 'Hydro Booking System',
    description: 'A System where Club goers can book their preferred seats',
    stack: ['Laravel', 'REST API', 'Sanctum', 'Reverb', 'MySQL'],
    image: logisticsProject
  }
]

</script>
