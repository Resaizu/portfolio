<template>
  <section id="hero" class="2560:min-h-[50vh] min-h-screen px-4 py-20">
    <div class="flex flex-col justify-center pt-20">
      <h1 class="font-playfair font-serif text-4xl leading-none font-bold md:text-7xl">Dennis Ampat</h1>

      <p class="text-neon-pink mt-3 text-lg font-semibold tracking-[3px] uppercase md:text-xl">Web Developer</p>

      <p class="mt-3 max-w-lg text-base leading-relaxed text-gray-300">
        Backend-focused Web Developer specializing in Laravel and Vue. Building and maintaining web applications.
      </p>

      <div class="mt-10 flex gap-4">
        <router-link
          to="#projects"
          class="border-neon-purple hover:border-neon-pink font-playfair hover:shadow-neon-pink-sm focus:shadow-neon-pink-sm rounded border px-6 py-3 font-medium transition-colors duration-300 focus:outline-none"
        >
          View Projects
        </router-link>

        <router-link
          to="#contact"
          class="font-playfair hover:shadow-neon-green-sm focus:shadow-neon-green-sm rounded border border-gray-700 px-6 py-3 text-gray-300 transition-colors duration-300 hover:border-gray-400 focus:outline-none"
        >
          Get in Touch
        </router-link>
      </div>
    </div>
  </section>
</template>
