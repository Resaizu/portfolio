<template>
  <div class="bg-gray-950 text-gray-200 min-h-screen relative overflow-hidden">
    <!-- <div class="blob w-96 h-96 bg-purple-500 opacity-30 rounded-full blur-3xl absolute"></div>
    <div class="blob w-96 h-96 bg-cyan-400 opacity-30 rounded-full blur-3xl absolute"></div>
    <div class="blob w-96 h-96 bg-orange-600 opacity-30 rounded-full blur-3xl absolute"></div> -->
    <div class="absolute bg-black opacity-80 w-full h-full z-10"></div>
    <div class="neon-bg"></div>

    <div class="relative z-20">
      <nav
        class="mx-auto flex justify-evenly items-center py-6 px-4 fixed w-full bg-gray-950 z-10 border-b border-gray-800">
        <h1 class="text-xl font-bold tracking-wide">Dennis.dev</h1>
        <div class="space-x-6 text-sm">
          <a href="#about" class="hover:text-white">About</a>
          <a href="#skills" class="hover:text-white">Skills</a>
          <a href="#projects" class="hover:text-white">Projects</a>
          <a href="#contact" class="hover:text-white">Contact</a>
        </div>
      </nav>

      <Home />
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
    radial-gradient(circle at 20% 30%, #a855f7 0%, transparent 60%),
    radial-gradient(circle at 80% 40%, #22d3ee 0%, transparent 60%),
    radial-gradient(circle at 50% 80%, #fb7185 0%, transparent 60%),
    #020617;

  filter: blur(140px);
}
</style>

<script setup>
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Skills from '@/views/Skills.vue';
import Projects from '@/views/Projects.vue';
import Contact from '@/views/Contact.vue';
import { animate, random } from 'animejs';
import { onMounted } from 'vue';


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

})
</script>