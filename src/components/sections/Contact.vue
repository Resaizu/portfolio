<script setup>
import Bullet from '@/components/reusable/Bullet.vue';
import resume from '@/assets/pdf/Dennis_Ampat_Resume.pdf';
import GithubIcon from '@/components/icons/GithubIcon.vue';
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue';
import FileCv from '@/components/icons/FileCv.vue';
import AtIcon from '@/components/icons/AtIcon.vue';
import ArrowUpRight from '@/components/icons/ArrowUpRight.vue';
import { ref } from 'vue';

const isIn = ref({
  email: false,
  resume: false,
  github: false,
  linkedin: false,
});

const onHover = (div) => {
  isIn.value[div] = true;
};

const onLeave = (div) => {
  isIn.value[div] = false;
};
</script>

<template>
  <section
    id="contact"
    class="2560:min-h-[50vh] mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-between px-4 py-16"
  >
    <div>
      <div class="flex gap-3">
        <span class="font-playfair text-neon-cyan text-2xl font-bold tracking-[8px]">//</span>
        <span class="text-neon-pink text-2xl font-semibold tracking-widest">Contact</span>
      </div>

      <div class="mt-6">
        <p class="mb-6 text-center text-xl font-bold tracking-wider text-gray-200 text-gray-300 md:text-6xl">
          Let's work <span class="text-neon-green">together</span>
        </p>
        <div class="flex items-center justify-center gap-2">
          <bullet></bullet>

          <span class="text-sm text-gray-300 md:text-2xl"> Open for backend roles and freelance work. </span>
        </div>
      </div>
    </div>

    <div class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:px-12">
      <!-- Email -->
      <a
        href="mailto:dennisampat.dev@gmail.com"
        @mouseenter="onHover('email')"
        @mouseleave="onLeave('email')"
        @focus="onHover('email')"
        @blur="onLeave('email')"
        class="bg-root-deep/20 border-neon-purple group relative flex items-center gap-4 rounded-lg border p-4 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_0_8px_0_var(--neon-purple)] focus:translate-y-[-2px] focus:shadow-[0_0_8px_0_var(--neon-purple)] focus:outline-none"
      >
        <div class="bg-neon-purple/10 rounded-md p-4">
          <at-icon class="text-neon-purple h-6 w-6"></at-icon>
        </div>
        <div class="flex flex-col">
          <span class="text-xl font-semibold tracking-wide">Email Me</span>
          <span
            class="group-hover:text-neon-pink group-focus:text-neon-pink text-sm text-gray-200 transition-colors duration-300 lg:text-lg"
          >
            dennisampat.dev@gmail.com
          </span>
        </div>

        <arrow-up-right
          :class="[
            'text-neon-purple absolute right-4 h-6 w-6',
            isIn.email ? 'animate-neon-boot transition-opacity duration-300 group-hover:opacity-100' : 'opacity-0',
          ]"
        ></arrow-up-right>
      </a>

      <!-- Resume -->
      <a
        :href="resume"
        download
        @mouseenter="onHover('resume')"
        @mouseleave="onLeave('resume')"
        @focus="onHover('resume')"
        @blur="onLeave('resume')"
        class="bg-root-deep/20 border-neon-green group relative flex items-center gap-4 rounded-lg border p-4 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_0_8px_0_var(--neon-green)] focus:translate-y-[-2px] focus:shadow-[0_0_8px_0_var(--neon-green)] focus:outline-none"
      >
        <div class="bg-neon-green/10 rounded-md p-4">
          <file-cv class="text-neon-green h-6 w-6"></file-cv>
        </div>
        <div class="flex flex-col">
          <span class="text-xl font-semibold tracking-wide">My Resume</span>
          <span
            class="group-hover:text-neon-pink group-focus:text-neon-pink text-sm text-gray-200 transition-colors duration-300 lg:text-lg"
          >
            Download PDF
          </span>
        </div>

        <arrow-up-right
          :class="[
            'text-neon-green absolute right-4 h-6 w-6',
            isIn.resume ? 'animate-neon-boot transition-opacity duration-300 group-hover:opacity-100' : 'opacity-0',
          ]"
        ></arrow-up-right>
      </a>

      <!-- GitHub -->
      <a
        href="https://github.com/Resaizu"
        noreferrer
        target="_blank"
        @mouseenter="onHover('github')"
        @mouseleave="onLeave('github')"
        @focus="onHover('github')"
        @blur="onLeave('github')"
        class="bg-root-deep/20 border-neon-pink group relative flex items-center gap-4 rounded-lg border p-4 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_0_8px_0_var(--neon-pink)] focus:translate-y-[-2px] focus:shadow-[0_0_8px_0_var(--neon-pink)] focus:outline-none"
      >
        <div class="bg-neon-pink/10 rounded-md p-4">
          <github-icon class="text-neon-pink h-6 w-6"></github-icon>
        </div>
        <div class="flex flex-col">
          <span class="text-xl font-semibold tracking-wide">GitHub</span>
          <span
            class="group-hover:text-neon-pink group-focus:text-neon-pink text-sm text-gray-200 transition-colors duration-300 lg:text-lg"
          >
            github.com/Resaizu
          </span>
        </div>

        <arrow-up-right
          :class="[
            'text-neon-pink absolute right-4 h-6 w-6',
            isIn.github ? 'animate-neon-boot transition-opacity duration-300 group-hover:opacity-100' : 'opacity-0',
          ]"
        ></arrow-up-right>
      </a>

      <!-- LinkedIn -->
      <a
        href="https://linkedin.com/in/dennis-v-ampat"
        noreferrer
        target="_blank"
        @mouseenter="onHover('linkedin')"
        @mouseleave="onLeave('linkedin')"
        @focus="onHover('linkedin')"
        @blur="onLeave('linkedin')"
        class="bg-root-deep/20 border-neon-cyan group relative flex items-center gap-4 rounded-lg border p-4 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_0_8px_0_var(--neon-cyan)] focus:translate-y-[-2px] focus:shadow-[0_0_8px_0_var(--neon-cyan)] focus:outline-none"
      >
        <div class="bg-neon-cyan/10 rounded-md p-4">
          <linkedin-icon class="text-neon-cyan h-6 w-6"></linkedin-icon>
        </div>
        <div class="flex flex-col">
          <span class="text-xl font-semibold tracking-wide">LinkedIn</span>
          <span
            class="group-hover:text-neon-cyan group-focus:text-neon-cyan text-sm text-gray-200 transition-colors duration-300 lg:text-lg"
          >
            linkedin.com/in/dennis-v-ampat
          </span>
        </div>

        <arrow-up-right
          :class="[
            'text-neon-cyan absolute right-4 h-6 w-6',
            isIn.linkedin ? 'animate-neon-boot transition-opacity duration-300 group-hover:opacity-100' : 'opacity-0',
          ]"
        ></arrow-up-right>
      </a>
    </div>

    <!-- neon line -->
    <div class="neon-line mt-12"></div>
  </section>
</template>
