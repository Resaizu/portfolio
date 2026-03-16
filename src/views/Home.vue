<template>
  <div class="relative max-w-6xl mx-auto">
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </div>
</template>

<script setup>
import Hero from '@/components/sections/Hero.vue';
import About from '@/components/sections/About.vue';
import Skills from '@/components/sections/Skills.vue';
import Projects from '@/components/sections/Projects.vue';
import Contact from '@/components/sections/Contact.vue';
import { onMounted, ref } from 'vue';
import { useIndexStore } from '@/stores';

const store = useIndexStore();

const handleScroll = (sections) => {
  if (window.innerWidth >= 768) {
    let mostVisible = null
    let highestPercent = 0

    sections.forEach(section => {
      const element = document.getElementById(section);
      
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
      const visiblePercent = visibleHeight / rect.height;

      if (visiblePercent >= 0.49 && visiblePercent > highestPercent) {
        highestPercent = visiblePercent;
        mostVisible = section;
      }
    });

    if (mostVisible) {
      store.set_active_section(mostVisible);
    }
  }
}

onMounted(() => {
  const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
  
  window.addEventListener('scroll', () => handleScroll(sections));
})
</script>