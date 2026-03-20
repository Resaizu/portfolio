<script setup>
import NeonCard from '@/components/reusable/NeonCard.vue';
</script>

<template>
  <section class="mt-16 flex flex-col items-center gap-6 py-12">
    <h1 class="font-playfair text-center text-4xl font-bold tracking-widest text-gray-200 uppercase">
      404 - Not Found
    </h1>

    <neon-card class="w-full max-w-md">
      <div class="flex flex-col gap-4 p-6">
        <h2 class="font-playfair mb-6 text-xl font-semibold tracking-[0.18em] text-gray-200 uppercase">Oops!</h2>

        <p class="text-sm leading-none text-gray-400">
          It seems the page you're trying to access is missing or has been moved.
        </p>

        <p class="text-sm leading-none text-gray-400">
          Let's get you back
          <router-link to="/" class="text-neon-cyan font-semibold">Home</router-link>
          .
        </p>
      </div>
    </neon-card>
  </section>
</template>
