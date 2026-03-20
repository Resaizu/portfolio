<script setup>
import NeonCard from '@/components/reusable/NeonCard.vue';
</script>

<template>
  <section class="flex flex-col items-center gap-6 py-12 mt-16">
    <h1 class="text-4xl font-bold tracking-widest font-playfair text-gray-200 uppercase text-center">404 - Not Found</h1>

    <neon-card class="w-full max-w-md">
      <div class="flex flex-col gap-4 p-6">
        <h2 class="mb-6 text-xl font-semibold tracking-[0.18em] text-gray-200 uppercase font-playfair">
          Oops!
        </h2>

        <p class="text-sm leading-none text-gray-400">
          It seems the page you're trying to access is missing or has been moved.
        </p>

        <p class="text-sm leading-none text-gray-400">
          Let's get you back
          <a href="/" class="text-neon-cyan font-semibold">Home</a>
          .
        </p>
      </div>
    </neon-card>
  </section>
</template>
