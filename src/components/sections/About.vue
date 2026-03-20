<script setup>
import NeonCard from '@/components/reusable/NeonCard.vue';

const experiences = [
  {
    company: 'Tat Sing International Logistics Corp.',
    role: 'Web Developer | IT Support Technician',
    years: 'March 2022 - Current',
  },
];
</script>

<template>
  <section id="about" class="neon-line 2560:min-h-[50vh] mx-auto min-h-[80vh] max-w-6xl px-4 py-16">
    <div class="flex gap-3 pt-20">
      <span class="font-playfair text-neon-cyan text-2xl font-bold tracking-[8px] md:text-4xl">//</span>
      <span class="text-neon-pink text-2xl font-semibold tracking-widest md:text-4xl">About</span>
    </div>

    <div class="mt-6 flex flex-col justify-between md:flex-row">
      <p class="max-w-2xl py-6 text-lg leading-relaxed text-gray-400 md:w-1/3">
        I am a Web Developer who gain experience from hands-on works. I enjoy building and maintaining web applications
        especially backend systems and API development. I also provide IT support including Windows troubleshooting,
        network diagnostics, and cPanel server administration.
      </p>

      <neon-card :custom_class="'md:w-1/2 p-6'">
        <h1 class="text-2xl font-bold tracking-widest text-gray-200">Experience</h1>
        <div class="mt-6">
          <div class="flex flex-col gap-2" v-for="experience in experiences" :key="experience">
            <h1 class="text-lg font-semibold">{{ experience.company }}</h1>
            <span class="text-neon-cyan text-base">{{ experience.role }}</span>
            <span class="text-sm">{{ experience.years }}</span>
          </div>
        </div>
      </neon-card>
    </div>
  </section>
</template>
