<script setup>
import { computed, onMounted, ref } from 'vue';
import { useIndexStore } from '@/stores';
import AtIcon from '@/components/icons/AtIcon.vue';
import GithubIcon from '@/components/icons/GithubIcon.vue';
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue';
import { useRoute } from 'vue-router';

const store = useIndexStore();
const route = useRoute();
const isMenuOpen = ref(false);
const hasScrolled = ref(false);
const activeSection = computed(() => store.active_section);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const handleScroll = () => {
  hasScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  store.resolveImages();

  if (window.innerWidth >= 768) window.addEventListener('scroll', () => handleScroll());
});
</script>

<template>
  <div class="relative min-h-screen overflow-hidden bg-gray-950 text-gray-200">
    <div class="absolute z-10 h-full w-full bg-black opacity-80"></div>
    <div class="neon-bg transform-gpu"></div>

    <nav
      id="navbar"
      class="fixed z-30 flex w-full items-center justify-between border-b border-gray-800 px-8 py-6 md:px-10"
      :class="{ 'bg-neon-purple/1 backdrop-blur-sm': hasScrolled }"
    >
      <router-link
        :to="route.meta.name === 'project' ? '/#projects' : '/'"
        @click="$event.currentTarget.blur()"
        class="group focus:outline-none"
      >
        <h1 class="font-playfair text-xl font-bold tracking-wide">
          <span class="text-lg">Dennis</span>
          <span
            class="group-focus:text-neon-cyan group-hover:text-neon-cyan text-2xl transition-colors duration-300"
            :class="{ 'text-neon-cyan': activeSection === 'hero' }"
            >V</span
          >
          <span class="text-lg">Ampat</span>
        </h1>
      </router-link>

      <!-- Desktop Menu -->
      <div v-if="route.path === '/'" class="hidden space-x-6 md:flex">
        <router-link
          to="#about"
          class="hover:text-neon-pink focus:text-neon-pink tracking-widest uppercase transition-colors duration-300 focus:outline-none"
          :class="{ 'text-neon-pink animate-neon-boot': activeSection === 'about' }"
          >About</router-link
        >
        <router-link
          to="#skills"
          class="hover:text-neon-pink focus:text-neon-pink tracking-widest uppercase transition-colors duration-300 focus:outline-none"
          :class="{ 'text-neon-pink animate-neon-boot': activeSection === 'skills' }"
          >Skills</router-link
        >
        <router-link
          to="#projects"
          class="hover:text-neon-pink focus:text-neon-pink tracking-widest uppercase transition-colors duration-300 focus:outline-none"
          :class="{ 'text-neon-pink animate-neon-boot': activeSection === 'projects' }"
          >Projects</router-link
        >
        <router-link
          to="#contact"
          class="hover:text-neon-pink focus:text-neon-pink tracking-widest uppercase transition-colors duration-300 focus:outline-none"
          :class="{ 'text-neon-pink animate-neon-boot': activeSection === 'contact' }"
          >Contact</router-link
        >
      </div>

      <div class="flex gap-2">
        <a href="mailto:dennisampat.dev@gmail.com" class="group focus:outline-none">
          <at-icon
            class="hover:text-neon-pink group-focus:text-neon-pink h-6 w-6 transition-colors duration-300"
          ></at-icon>
        </a>
        <a href="https://github.com/Resaizu" target="_blank" rel="noopener noreferrer" class="group focus:outline-none">
          <github-icon
            class="hover:text-neon-pink group-focus:text-neon-pink h-6 w-6 transition-colors duration-300"
          ></github-icon>
        </a>
        <a
          href="https://linkedin.com/in/dennis-v-ampat"
          target="_blank"
          rel="noopener noreferrer"
          class="group focus:outline-none"
        >
          <linkedin-icon
            class="hover:text-neon-pink group-focus:text-neon-pink h-6 w-6 transition-colors duration-300"
          ></linkedin-icon>
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button
        type="button"
        @click="toggleMenu"
        class="hover:text-neon-pink focus:text-neon-pink text-gray-200 transition-colors duration-200 focus:outline-none md:hidden"
        aria-label="Toggle menu"
      >
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            v-if="!isMenuOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      <!-- Mobile Menu -->
      <div
        v-show="isMenuOpen"
        class="absolute top-full left-0 w-full border-b border-gray-800 bg-gray-950 transition-all duration-300 ease-in-out md:hidden"
      >
        <div class="space-y-4 px-4 py-4">
          <router-link
            to="#about"
            @click="closeMenu"
            class="block py-2 text-gray-200 transition-colors duration-200 hover:text-white"
          >
            About
          </router-link>
          <router-link
            to="#skills"
            @click="closeMenu"
            class="block py-2 text-gray-200 transition-colors duration-200 hover:text-white"
          >
            Skills
          </router-link>
          <router-link
            to="#projects"
            @click="closeMenu"
            class="block py-2 text-gray-200 transition-colors duration-200 hover:text-white"
          >
            Projects
          </router-link>
          <router-link
            to="#contact"
            @click="closeMenu"
            class="block py-2 text-gray-200 transition-colors duration-200 hover:text-white"
          >
            Contact
          </router-link>
        </div>
      </div>
    </nav>

    <div class="relative z-20 mx-auto max-w-6xl px-4 md:px-10">
      <router-view></router-view>
    </div>

    <footer class="relative z-30 -mt-10 mb-5 block text-sm text-gray-300">
      <div class="flex items-center justify-center gap-2">
        <span>
          Original Work by
          <a href="https://github.com/Resaizu" target="_blank" class="text-neon-pink">Dennis V. Ampat</a>
          <div class="bg-neon-purple mx-2 inline-block h-2 w-2 rounded-full"></div>
          2026.
        </span>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.neon-bg {
  position: fixed;
  inset: 0;
  pointer-events: none;

  background:
    radial-gradient(circle at 20% 30%, var(--neon-purple) 0%, transparent 40%),
    radial-gradient(circle at 80% 40%, var(--neon-cyan) 0%, transparent 40%),
    radial-gradient(circle at 50% 80%, var(--neon-pink) 0%, transparent 40%), var(--bg-deep);

  filter: blur(140px);
  animation: drift 60s linear infinite alternate;
}

@keyframes drift {
  0% {
    transform: translate(0, 0) scale(1);
  }

  25% {
    transform: translate(120px, -120px) scale(1.08);
  }

  50% {
    transform: translate(150px, 85px) scale(1.03);
  }

  75% {
    transform: translate(150px, 50px) scale(1.05);
  }

  100% {
    transform: translate(-100px, -10px) scale(1);
  }
}
</style>
