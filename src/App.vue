<template>
  <div class="bg-gray-950 text-gray-200 min-h-screen relative overflow-hidden">
    <div class="absolute bg-black opacity-80 w-full h-full z-10"></div>
    <div class="transform-gpu neon-bg"></div>

    <nav id="navbar"
      class="flex justify-between items-center px-8 md:px-10 py-6 fixed w-full z-30 border-b border-gray-800"
      :class="{'bg-neon-purple/1 backdrop-blur-sm': hasScrolled}">
      <a href="#hero" class="focus:outline-none group">
        <h1 class="text-xl font-bold tracking-wide font-playfair">
          <span class="text-lg">Dennis</span>
          <span
            class="text-2xl group-focus:text-neon-cyan group-hover:text-neon-cyan"
            :class="{'text-neon-cyan': activeSection === 'hero'}"
          >V</span>
          <span class="text-lg">Ampat</span>
        </h1>
      </a>

      <!-- Desktop Menu -->
      <div class="hidden md:flex space-x-6">
        <a
          href="#about"
          class="tracking-widest uppercase hover:text-neon-pink focus:outline-none focus:text-neon-pink"
          :class="{'neon-text': activeSection === 'about'}"
        >About</a>
        <a
          href="#skills"
          class="tracking-widest uppercase hover:text-neon-pink focus:outline-none focus:text-neon-pink"
          :class="{'neon-text': activeSection === 'skills'}"
        >Skills</a>
        <a
          href="#projects"
          class="tracking-widest uppercase hover:text-neon-pink focus:outline-none focus:text-neon-pink"
          :class="{'neon-text': activeSection === 'projects'}"
        >Projects</a>
        <a
          href="#contact"
          class="tracking-widest uppercase hover:text-neon-pink focus:outline-none focus:text-neon-pink"
          :class="{'neon-text': activeSection === 'contact'}"
        >Contact</a>
      </div>

      <div class="flex gap-2">
        <a href="mailto:dennis.ampat@gmail.com">
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
        class="md:hidden text-gray-200 hover:text-white focus:outline-none focus:text-white
          transition-colors duration-200"
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
        class="md:hidden absolute top-full left-0 w-full bg-gray-950
          border-b border-gray-800 transition-all duration-300 ease-in-out">
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
    </div>
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
    radial-gradient(circle at 50% 80%, var(--neon-pink) 0%, transparent 40%),
    var(--bg-deep);

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

<script setup>
import Hero from '@/views/Hero.vue';
import About from '@/views/About.vue';
import Skills from '@/views/Skills.vue';
import Projects from '@/views/Projects.vue';
import Contact from '@/views/Contact.vue';
import { onMounted, ref } from 'vue';

const isMenuOpen = ref(false);
const hasScrolled = ref(false);
const activeSection = ref('hero');

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const handleScroll = (sections) => {
  hasScrolled.value = window.scrollY > 50;
  
  if (window.innerWidth >= 768) {
    let mostVisible = null
    let highestPercent = 0

    sections.forEach(section => {
      const element = document.getElementById(section);
      
      if (!element) return;

      const rect = element.getBoundingClientRect()
      const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0)
      const visiblePercent = visibleHeight / rect.height

      if (visiblePercent >= 0.49 && visiblePercent > highestPercent) {
        highestPercent = visiblePercent
        mostVisible = section
      }
    });

    if (mostVisible) activeSection.value = mostVisible
  }
}

onMounted(() => {
  const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
  
  window.addEventListener('scroll', () => handleScroll(sections));
})
</script>