<script setup>
import Bullet from '@/components/reusable/Bullet.vue';
import { onMounted, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const modules = [FreeMode, Navigation, Thumbs, Autoplay];

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const activeSliderIndex = ref(0);

const onSlideChange = (swiper) => {
  activeSliderIndex.value = swiper.activeIndex;
};

const props = defineProps({
  data: {
    required: true,
    type: Object,
  },
});

const numberOfThumbs = ref(5);

onMounted(() => {
  if (window.innerWidth < 768) numberOfThumbs.value = 2;
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-wrap items-center justify-between gap-4 pt-4 md:pt-20">
      <div class="flex flex-col gap-2">
        <h1 class="text-4xl font-semibold">
          Project - <span class="text-neon-pink font-bold">{{ data.title }}</span>
        </h1>
        <p class="w-[90%] text-sm text-gray-300">
          {{ data.description }}
        </p>
      </div>
      <div v-if="data.live_link" class="flex w-full lg:w-auto">
        <a
          :href="data.live_link"
          noreferrer
          target="_blank"
          class="border-neon-green bg-neon-green/5 rounded-lg border py-2 px-4 font-semibold hover:shadow-[0_0_8px_0_var(--neon-green)] focus:outline-none focus:shadow-[0_0_8px_0_var(--neon-green)] transition duration-300"
        >
          View Live
        </a>
      </div>
    </div>

    <div class="w-full">
      <div
        class="bg-root-deep/20 border-neon-pink relative h-[24rem] rounded-lg border shadow-[0_0_8px_0_var(--neon-pink)]"
      >
        <!-- main -->
        <swiper
          :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }"
          :navigation="true"
          :thumbs="{ swiper: thumbsSwiper }"
          :modules="modules"
          :slidesPerView="'auto'"
          @slideChange="onSlideChange"
          class="border-neon-pink h-[22rem] rounded-t-lg border"
        >
          <swiper-slide v-for="image in data.images" :key="image">
            <img :src="image.path" :alt="image.path" class="h-full w-full object-contain" loading="lazy" />
            <div v-if="image.description" class="absolute bottom-0 left-0 h-1/4 w-full">
              <div class="bg-root-deep/10 to-bg-black absolute top-0 h-full w-full"></div>
              <p
                class="text-neon-pink absolute bottom-0 left-0 p-3 text-lg leading-relaxed font-semibold tracking-wide"
              >
                {{ image.description }}
              </p>
            </div>
          </swiper-slide>
        </swiper>

        <div class="absolute bottom-2 z-10 flex w-full justify-center gap-2">
          <span
            v-for="(_, i) in data.images"
            :key="i"
            class="h-3 w-3 rounded-full"
            :class="[
              i === activeSliderIndex
                ? 'bg-neon-pink shadow-[0_0_8px_var(--neon-pink)] shadow-[0_0_10px_0_var(--neon-pink)]'
                : 'bg-neon-purple/50',
            ]"
          >
          </span>
        </div>
      </div>

      <!-- thumbs -->
      <swiper
        class="mySwiper mt-2 h-full"
        @swiper="setThumbsSwiper"
        :slides-per-view="numberOfThumbs"
        :watch-slides-progress="true"
        :space-between="10"
        :modules="modules"
      >
        <swiper-slide v-for="(image, i) in data.images" :key="i"
        class="cursor-pointer rounded-lg overflow-hidden"
        :class="{'border border-neon-pink border-2': i === activeSliderIndex}">
          <img :src="image.path" :alt="image.path" class="h-22 md:h-[196px] w-full object-cover" loading="lazy" />
        </swiper-slide>
      </swiper>
    </div>

    <div class="flex flex-wrap justify-between gap-4">
      <div class="bg-neon-purple/5 flex-1 rounded-lg border border-neon-pink/50 p-4">
        <h1 class="text-xl font-bold text-neon-pink tracking-wider">Key Features</h1>
        <ul class="mt-2 px-2">
          <li
            v-for="keyFeature in data.key_features"
            :key="keyFeature"
            class="text-lg flex gap-3 items-center text-gray-300"
          >
            <bullet></bullet>
            {{ keyFeature }}
          </li>
        </ul>
      </div>

      <div class="bg-neon-purple/5 w-full md:w-1/3 rounded-lg border border-neon-pink/50 p-4">
        <h1 class="text-xl font-bold text-neon-pink tracking-wider">Tech Stack</h1>
        <ul class="mt-2 px-2">
          <li
            v-for="stack in data.tech_stack"
            :key="stack"
            class="text-lg flex gap-3 items-center text-gray-300"
          >
            <bullet></bullet>
            <span>{{ stack }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="bg-neon-purple/5 rounded-lg border border-neon-pink/50 p-4">
      <h1 class="text-xl font-bold text-neon-pink tracking-wider">About the Project</h1>
      <p class="text-gray-300 mt-2 text-justify leading-relaxed">{{ data.about }}</p>
    </div>
  </div>
</template>
