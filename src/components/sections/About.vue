<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const experiences = [
  {
    company: 'Tat Sing International Logistics Corp.',
    role: 'Web Developer | IT Support Technician',
    years: 'March 2022 - Current',
    current: true,
  },
  {
    company: 'Example',
    role: 'Web Developer',
    years: 'March 2020 - March 2022',
  },
  {
    company: 'Another Example',
    role: 'IT Support Technician',
    years: 'March 2015 - March 2020',
  },
  {
    company: 'Another Example',
    role: 'IT Support Technician',
    years: 'March 2014 - March 2025',
  },
];

const pills = ['Backend Dev', 'Fullstack Dev', 'API Design', 'Hands-on', 'Remote Ready', 'IT Support'];

const isInTop = ref(true);

const scrollEl = ref(null);

const update = () => {
  if (!scrollEl.value) return;

  const scrollPercent = (scrollEl.value.scrollTop / (scrollEl.value.scrollHeight - scrollEl.value.clientHeight)) * 100;

  isInTop.value = scrollPercent < 60;
};

onMounted(() => {
  if (experiences.length <= 1) return;

  scrollEl.value?.addEventListener('scroll', update);
  update();
});

onUnmounted(() => {
  if (experiences.length <= 1) return;

  scrollEl.value?.removeEventListener('scroll', update);
});
</script>

<template>
  <section id="about" class="neon-line 2560:min-h-[50vh] mx-auto min-h-[80vh] max-w-6xl px-4 pt-16 pb-18">
    <div class="flex gap-3 pt-20">
      <span class="font-playfair text-neon-cyan text-2xl font-bold tracking-[8px]">//</span>
      <span class="text-neon-pink text-2xl font-semibold tracking-widest">About</span>
    </div>

    <div class="mt-6 flex flex-col justify-between gap-4 md:flex-row">
      <div class="flex flex-col gap-4 md:basis-lg">
        <p class="max-w-2xl text-lg leading-relaxed text-gray-400 md:py-6">
          I am a Web Developer who gain experience from hands-on works. I enjoy building and maintaining web
          applications especially backend systems and API development. I also provide IT support including Windows
          troubleshooting, network diagnostics, and cPanel server administration.
        </p>

        <div class="flex flex-wrap gap-4">
          <div
            v-for="pill in pills"
            :key="pill"
            class="bg-neon-purple/5 border-neon-purple relative flex flex-col justify-center rounded-xl border px-4 py-2 text-center"
          >
            <span class="w-full text-center text-xs font-bold lg:text-sm">
              {{ pill }}
            </span>
          </div>
        </div>
      </div>

      <div
        class="border-neon-pink relative flex h-1/3 flex-col overflow-auto rounded-lg border bg-gray-950/5 p-4 backdrop-blur-md lg:p-6"
      >
        <h1 class="text-2xl font-bold tracking-widest text-gray-200">Experience</h1>

        <div class="relative pb-6" id="experiences">
          <!-- chevron up -->
          <div
            v-if="experiences.length > 1"
            class="absolute top-0 left-1/2 h-6 w-6 -translate-x-1/2 transition-colors duration-1000"
            :class="[!isInTop ? 'text-neon-pink animate-neon-breath' : 'text-gray-500']"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </div>

          <!-- body -->
          <div class="scroll-hidden mt-6 h-[288px] overflow-y-auto pr-2" ref="scrollEl">
            <div class="relative flex gap-3 py-2" v-for="experience in experiences" :key="experience">
              <div class="mb-2 flex flex-col items-center pl-2">
                <div
                  class="mt-2 h-3 w-3 shrink-0 rounded-full"
                  :class="[
                    experience.current
                      ? 'bg-neon-green shadow-neon-green-sm shadow-neon-green-md'
                      : 'border border-2 border-gray-500',
                  ]"
                ></div>
                <div class="w-px flex-1 bg-gray-500"></div>
              </div>
              <div class="flex flex-col gap-1">
                <h1 class="text-lg font-bold">{{ experience.company }}</h1>
                <span class="text-neon-cyan text-base font-semibold">{{ experience.role }}</span>
                <span class="text-sm">{{ experience.years }}</span>
              </div>
            </div>
          </div>

          <!-- chevron down -->
          <div
            v-if="experiences.length > 1"
            class="absolute bottom-0 left-1/2 h-6 w-6 -translate-x-1/2 transition-colors duration-1000"
            :class="[isInTop ? 'text-neon-pink animate-neon-breath' : 'text-gray-500']"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
