<script setup>
import Bullet from '@/components/reusable/Bullet.vue';
import NeonCard from '@/components/reusable/NeonCard.vue';

const skills = [
  {
    title: 'Backend',
    stacks: [
      {
        name: 'Laravel',
        desc: 'PHP Framework',
      },
      {
        name: 'REST APIs',
        desc: 'API Design',
      },
      {
        name: 'Reverb',
        desc: 'WebSockets',
      },
      {
        name: 'Sanctum',
        desc: 'Authentication',
      },
      {
        name: 'MySQL',
        desc: 'Relational Database',
      },
    ],
  },
  {
    title: 'Frontend',
    stacks: [
      {
        name: 'Vue 3',
        desc: 'JS Framework',
      },
      {
        name: 'Vue Router',
        desc: 'Routing',
      },
      {
        name: 'Axios',
        desc: 'API Communication',
      },
      {
        name: 'Pinia',
        desc: 'State Management',
      },
      {
        name: 'Tailwind CSS',
        desc: 'Utility CSS',
      },
    ],
  },
  {
    title: 'Infrastructure',
    stacks: [
      {
        name: 'AWS',
        desc: 'EC2, RDS, S3',
      },
      {
        name: 'cPanel',
        desc: 'Shared Hosting',
      },
      {
        name: 'Synology NAS',
        desc: 'Self-Hosted',
      },
      {
        name: 'Linux',
        desc: 'Server Environment',
      },
      {
        name: 'Certbot',
        desc: 'SSL',
      },
      {
        name: 'Docker',
        desc: 'Container Deployment',
      },
      {
        name: 'Redis',
        desc: 'Caching / Message Broker',
      },
    ],
  },
  {
    title: 'IT Support',
    stacks: [
      {
        name: 'Hardware Diagnostics',
        desc: 'PC Repair & Diagnostics',
      },
      {
        name: 'System Troubleshooting',
        desc: 'Windows & Software Support',
      },
      {
        name: 'End User Support',
        desc: 'Technical Assistance',
      },
    ],
  },
];
</script>

<template>
  <section id="skills" class="2560:min-h-[50vh] mx-auto min-h-[80vh] max-w-6xl px-4 py-16">
    <div class="flex gap-3">
      <span class="font-playfair text-neon-cyan text-2xl font-bold tracking-[8px]">//</span>
      <span class="text-neon-pink text-2xl font-semibold tracking-widest">Technical Skills</span>
    </div>

    <div class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
      <neon-card v-for="skill in skills">
        <div class="p-6">
          <h2 class="mb-6 text-xl font-semibold tracking-[0.18em] text-gray-200 uppercase">
            {{ skill.title }}
          </h2>

          <!-- stack list -->
          <ul class="flex flex-col gap-3">
            <li class="flex items-center gap-3" v-for="(stack, index) in skill.stacks" :key="index">
              <bullet></bullet>

              <span class="w-48 text-sm leading-none font-medium text-green-200 lg:flex-1 lg:text-base">
                {{ stack.name }}
              </span>

              <span class="w-46 text-xs leading-none text-green-700 lg:text-sm">
                {{ stack.desc }}
              </span>
            </li>
          </ul>
        </div>
      </neon-card>
    </div>
  </section>
</template>
