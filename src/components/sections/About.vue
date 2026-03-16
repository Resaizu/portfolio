<template>
  <section id="about" class="neon-line max-w-6xl mx-auto px-4 py-16 min-h-[80vh] 2560:min-h-[50vh] scroll-mt-20">
    <div class="flex gap-3 pt-20">
      <span class="font-playfair tracking-[8px] text-2xl md:text-4xl font-bold text-neon-cyan">//</span>
      <span class="text-2xl md:text-4xl font-semibold text-neon-pink tracking-widest">About</span>
    </div>

    <div class="flex flex-col md:flex-row mt-6 justify-between">
      <p class="text-gray-400 max-w-2xl text-lg leading-relaxed md:w-1/3 py-6">
        I am a Web Developer who gain experience from hands-on works. 
        I enjoy building and maintaining web applications especially backend systems and API development. 
        I also provide IT support including Windows troubleshooting, network
        diagnostics, and cPanel server administration.
      </p>

      <neon-card :custom_class="'md:w-1/2 p-6'">
        <h1 class="text-2xl text-gray-200 font-bold tracking-widest">Experience</h1>
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

<script setup>
import NeonCard from '@/components/reusable/NeonCard.vue';

const experiences = [
  {
    company: 'Tat Sing International Logistics Corp.',
    role: 'Web Developer | IT Support Technician',
    years: 'March 2022 - Current'
  }
];
</script>