<template>
  <section id="contact" class="max-w-6xl mx-auto px-4 py-16 min-h-[80vh] 2560:min-h-[50vh] scroll-mt-20">
    <div class="flex gap-3">
      <span class="font-playfair tracking-[8px] text-2xl font-bold text-neon-cyan">//</span>
      <span class="text-2xl font-semibold text-neon-pink tracking-widest">Contact</span>
    </div>

    <div class="mt-6">
      <p class="text-xl md:text-4xl text-gray-200 font-bold tracking-wider mb-6 text-gray-300">
        Let's work together
      </p>
      <div class="flex gap-2 items-center">
        <bullet></bullet>

        <span class="text-sm md:text-2xl text-gray-300">
          Open for backend roles and freelance work.
        </span>
      </div>
    </div>
    <div class="flex flex-wrap justify-center gap-4 mt-6">
      <neon-card :class="'flex-1'">
        <div class="flex flex-col justify-evenly p-6 h-full text-center">
          <div class="relative w-12 h-12 mx-auto">
            <img src="@/assets/images/logos/icons8-email-50.png" alt="email" class="w-full h-full">
            <div class="absolute inset-0 bg-neon-purple/20 mix-blend-color"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
          </div>

          <span class="text-neon-cyan text-xl">dennis.ampat@gmail.com</span>

          <a
            href="mailto:dennis.ampat@gmail.com"
            class="bg-neon-green py-2 rounded-md text-lg text-gray-900 font-semibold tracking-wide"
          >
            Email Me
          </a>
        </div>
      </neon-card>
      <neon-card :class="'flex-1'">
        <div class="flex flex-col justify-evenly p-6 h-full text-center">
          <div class="relative w-12 h-12 mx-auto">
            <img src="@/assets/images/logos/icons8-github-48.png" alt="github" class="w-12 h-12 mx-auto">
            <div class="absolute inset-0 bg-neon-purple/20 mix-blend-color rounded-full"></div>
            <div
              class="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent rounded-full"
            ></div>
          </div>

          <span class="text-neon-cyan text-xl">github.com/Resaizu</span>

          <a
            href="https://github.com/Resaizu"
            class="bg-neon-green py-2 rounded-md text-lg text-gray-900 font-semibold tracking-wide"
          >
            View
          </a>
        </div>
      </neon-card>
      <neon-card :class="'flex-1'">
        <div class="flex flex-col justify-evenly p-6 h-full text-center">
          <div class="relative w-12 h-12 mx-auto">
            <img src="@/assets/images/logos/icons8-linkedin-50.png" alt="linkedin" class="w-12 h-12 mx-auto">
            <div class="absolute inset-0 bg-neon-purple/20 mix-blend-color rounded-md"></div>
            <div
              class="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent rounded-md"
            ></div>
          </div>

          <span class="text-neon-cyan text-xl">linkedin.com/in/dennis-v-ampat</span>

          <a
            href="https://linkedin.com/in/dennis-v-ampat"
            class="bg-neon-green py-2 rounded-md text-lg text-gray-900 font-semibold tracking-wide"
          >
            View
          </a>
        </div>
      </neon-card>
    </div>
    <div class="neon-line mt-12"></div>
  </section>
</template>

<script setup>
import NeonCard from '@/components/NeonCard.vue';
import Bullet from '@/components/Bullet.vue';
</script>