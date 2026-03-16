<template>
  <section id="contact" class="2560:min-h-[50vh] mx-auto min-h-[80vh] max-w-6xl scroll-mt-20 px-4 py-16">
    <div class="flex gap-3">
      <span class="font-playfair text-neon-cyan text-2xl font-bold tracking-[8px]">//</span>
      <span class="text-neon-pink text-2xl font-semibold tracking-widest">Contact</span>
    </div>

    <div class="mt-6">
      <p class="mb-6 text-xl font-bold tracking-wider text-gray-200 text-gray-300 md:text-4xl">Let's work together</p>
      <div class="flex items-center gap-2">
        <bullet></bullet>

        <span class="text-sm text-gray-300 md:text-2xl"> Open for backend roles and freelance work. </span>
      </div>
    </div>
    <div class="mt-6 flex flex-wrap justify-center gap-4">
      <neon-card :class="'flex-1 transition-shadow duration-300 hover:shadow-[0_0_8px_0_var(--neon-purple)]'">
        <div class="flex h-full flex-col justify-evenly p-6 text-center">
          <div class="relative mx-auto h-12 w-12">
            <img src="@/assets/images/logos/icons8-email-50.png" alt="email" class="h-full w-full" />
            <div class="bg-neon-purple/20 absolute inset-0 mix-blend-color"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
          </div>

          <span class="text-neon-cyan h-[28px] text-xl">dennis.ampat@gmail.com</span>

          <a
            href="mailto:dennis.ampat@gmail.com"
            class="bg-neon-green hover:bg-neon-cyan/90 rounded-md py-2 text-lg font-semibold tracking-wide text-gray-900 transition-colors duration-300"
          >
            Email Me
          </a>
        </div>
      </neon-card>
      <neon-card :class="'flex-1 transition-shadow duration-300 hover:shadow-[0_0_8px_0_var(--neon-purple)]'">
        <div class="flex h-full flex-col justify-evenly p-6 text-center">
          <div class="relative mx-auto h-12 w-12">
            <img src="@/assets/images/logos/icons8-github-48.png" alt="github" class="mx-auto h-12 w-12" />
            <div class="bg-neon-purple/20 absolute inset-0 rounded-full mix-blend-color"></div>
            <div
              class="absolute inset-0 rounded-full bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"
            ></div>
          </div>

          <span class="text-neon-cyan h-[28px] text-xl">github.com/Resaizu</span>

          <a
            href="https://github.com/Resaizu"
            noreferrer
            target="_blank"
            class="bg-neon-green hover:bg-neon-cyan/90 rounded-md py-2 text-lg font-semibold tracking-wide text-gray-900 transition-colors duration-300"
          >
            View GitHub
          </a>
        </div>
      </neon-card>
      <neon-card :class="'flex-1 transition-shadow duration-300 hover:shadow-[0_0_8px_0_var(--neon-purple)]'">
        <div class="flex h-full flex-col justify-evenly p-6 text-center">
          <div class="relative mx-auto h-12 w-12">
            <img src="@/assets/images/logos/icons8-linkedin-50.png" alt="linkedin" class="mx-auto h-12 w-12" />
            <div class="bg-neon-purple/20 absolute inset-0 rounded-md mix-blend-color"></div>
            <div
              class="absolute inset-0 rounded-md bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"
            ></div>
          </div>

          <span class="text-neon-cyan h-[28px] text-xl">linkedin.com/in/dennis-v-ampat</span>

          <a
            href="https://linkedin.com/in/dennis-v-ampat"
            noreferrer
            target="_blank"
            class="bg-neon-green hover:bg-neon-cyan/90 rounded-md py-2 text-lg font-semibold tracking-wide text-gray-900 transition-colors duration-300"
          >
            View LinkedIn
          </a>
        </div>
      </neon-card>
    </div>
    <div class="neon-line mt-12"></div>
  </section>
</template>

<script setup>
import NeonCard from '@/components/reusable/NeonCard.vue';
import Bullet from '@/components/reusable/Bullet.vue';
</script>
