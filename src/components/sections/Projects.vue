<script setup>
import NeonCard from '@/components/reusable/NeonCard.vue';
import { useIndexStore } from '@/stores';
import { computed } from 'vue';

const store = useIndexStore();

const projects = computed(() => store.project_list);
</script>

<template>
  <section id="projects" class="2560:min-h-[50vh] mx-auto min-h-[80vh] max-w-6xl px-4 py-16">
    <div class="flex gap-3">
      <span class="font-playfair text-neon-cyan text-2xl font-bold tracking-[8px]">//</span>
      <span class="text-neon-pink text-2xl font-semibold tracking-widest">Projects</span>
    </div>

    <div class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <neon-card
        v-for="project in projects"
        :key="project"
        class="transition-all duration-300 hover:translate-y-[-3px] hover:shadow-[0_0_5px_0_var(--neon-pink)]"
      >
        <div class="flex h-full flex-col p-2">
          <div class="relative h-48 shrink-0 overflow-hidden rounded-t-md">
            <img :src="project.images[0].path" class="h-full w-full object-cover" loading="lazy" />

            <div class="bg-neon-purple/20 absolute inset-0 mix-blend-color"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
          </div>

          <div class="flex h-full flex-col gap-4 p-4">
            <h2 class="text-xl font-semibold tracking-[0.18em] break-words text-gray-200 uppercase">
              {{ project.title }}
            </h2>

            <div class="mt-auto">
              <p class="mb-4 line-clamp-2 text-sm leading-relaxed">{{ project.description }}</p>

              <div class="flex flex-wrap gap-3 text-xs">
                <span v-for="stack in project.tech_stack" :key="stack" class="border-neon-purple rounded-lg border p-2">
                  {{ stack }}
                </span>
              </div>
            </div>

            <div class="mt-4 flex justify-center gap-4">
              <a
                v-if="project.live_link"
                :href="project.live_link"
                class="bg-neon-green/5 border-neon-green text-neon-green rounded-md border px-4 py-2 hover:shadow-neon-green-sm focus:shadow-neon-green-sm focus:outline-none"
                >View Live</a
              >

              <router-link
                :to="`/project/${project.slug}`"
                class="bg-neon-pink/5 border-neon-pink text-neon-pink rounded-md border px-4 py-2 hover:shadow-neon-pink-sm focus:shadow-neon-pink-sm focus:outline-none"
              >
                View Project
              </router-link>
            </div>
          </div>
        </div>
      </neon-card>
    </div>
  </section>
</template>
