<template>
  <div class="bg-gray-950 text-gray-200 min-h-screen relative overflow-hidden">
    <div class="absolute bg-black opacity-80 w-full h-full z-10"></div>
    <div class="neon-bg"></div>

    <nav id="navbar"
      class="flex justify-between items-center px-8 md:px-10 py-6 fixed w-full z-30 border-b border-gray-800">
      <h1 class="text-xl font-bold tracking-wide">
        <span>Dennis</span>
        <span>V</span>
        <span>Ampat</span>
      </h1>

      <!-- Desktop Menu -->
      <div class="hidden md:flex space-x-6 text-sm">
        <a href="#about" class="hover:text-white transition-colors duration-200">About</a>
        <a href="#skills" class="hover:text-white transition-colors duration-200">Skills</a>
        <a href="#projects" class="hover:text-white transition-colors duration-200">Projects</a>
        <a href="#contact" class="hover:text-white transition-colors duration-200">Contact</a>
      </div>

      <div class="flex gap-2">
        <a href="mailto:dennis.ampat@example.com">
          <img src="@/assets/images/logos/icons8-email-50.png" alt="Email" class="w-6 h-6">
        </a>
        <a href="https://github.com/Resaizu" target="_blank" rel="noopener noreferrer">
          <img src="@/assets/images/logos/icons8-github-48.png" alt="GitHub" class="w-6 h-6">
        </a>
        <a href="https://linkedin.com/in/dennis-v-ampat" target="_blank" rel="noopener noreferrer">
          <img src="@/assets/images/logos/icons8-linkedin-50.png" alt="LinkedIn" class="w-6 h-6">
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button type="button" @click="toggleMenu"
        class="md:hidden text-gray-200 hover:text-white focus:outline-none focus:text-white transition-colors duration-200"
        aria-label="Toggle menu">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16">
          </path>
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
          </path>
        </svg>
      </button>

      <!-- Mobile Menu -->
      <div v-show="isMenuOpen"
        class="md:hidden absolute top-full left-0 w-full bg-gray-950 border-b border-gray-800 transition-all duration-300 ease-in-out">
        <div class="px-4 py-4 space-y-4">
          <a href="#about" @click="closeMenu"
            class="block text-gray-200 hover:text-white transition-colors duration-200 py-2">
            About
          </a>
          <a href="#skills" @click="closeMenu"
            class="block text-gray-200 hover:text-white transition-colors duration-200 py-2">
            Skills
          </a>
          <a href="#projects" @click="closeMenu"
            class="block text-gray-200 hover:text-white transition-colors duration-200 py-2">
            Projects
          </a>
          <a href="#contact" @click="closeMenu"
            class="block text-gray-200 hover:text-white transition-colors duration-200 py-2">
            Contact
          </a>
        </div>
      </div>
    </nav>

    <div class="relative z-20 max-w-6xl mx-auto px-4 md:px-10">

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <footer class="text-center text-gray-500 py-10 border-t border-gray-800">
        © {{ new Date().getFullYear() }} Dennis.dev
      </footer>
    </div>
  </div>
</template>

<style scoped>
.neon-bg {
  position: fixed;
  inset: 0;
  pointer-events: none;

  background:
    radial-gradient(circle at 20% 30%, var(--neon-purple) 0%, transparent 60%),
    radial-gradient(circle at 80% 40%, var(--neon-cyan) 0%, transparent 60%),
    radial-gradient(circle at 50% 80%, var(--neon-pink) 0%, transparent 60%),
    var(--bg-deep);

  filter: blur(140px);
}
</style>

<script setup>
import Hero from '@/views/Hero.vue';
import About from '@/views/About.vue';
import Skills from '@/views/Skills.vue';
import Projects from '@/views/Projects.vue';
import Contact from '@/views/Contact.vue';
import { animate, random } from 'animejs';
import { onMounted, ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

onMounted(() => {
  const points = []

  for (let i = 0; i < 30; i++) {
    points.push({
      x: random(-250, 250),
      y: random(-250, 250),
      scale: random(100, 110) / 100,
      rotate: random(-5, 5)
    })
  }

  animate('.neon-bg', {
    keyframes: points.map(p => ({
      translateX: p.x,
      translateY: p.y,
      scale: p.scale,
      rotate: p.rotate
    })),

    duration: 120000,
    easing: 'easeInOutSine',
    direction: 'alternate',
    loop: true
  })

  onscroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;

    document.getElementById('navbar').classList.toggle('bg-gray-950', scrollY > 50);
  };
})
</script>