<template>
  <section id="skills" class="2560:min-h-[50vh] mx-auto min-h-[80vh] max-w-6xl scroll-mt-20 px-4 py-16">
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
                {{ stack }}
              </span>

              <span class="w-46 text-xs leading-none text-green-700 lg:text-sm">
                {{ skill.stack_equivalent[index] }}
              </span>
            </li>
          </ul>
        </div>
      </neon-card>
    </div>
  </section>
</template>

<script setup>
import Bullet from '@/components/reusable/Bullet.vue';
import NeonCard from '@/components/reusable/NeonCard.vue';

const skills = [
  {
    title: 'Backend',
    stacks: ['Laravel', 'REST APIs', 'Reverb', 'Sanctum', 'MySQL'],
    stack_equivalent: ['PHP Framework', 'API Design', 'WebSockets', 'Authentication', 'Relational Database'],
  },
  {
    title: 'Frontend',
    stacks: ['Vue', 'Pinia', 'Tailwind CSS'],
    stack_equivalent: ['JS Framework', 'State Management', 'Utility CSS'],
  },
  {
    title: 'Infrastructure',
    stacks: ['AWS', 'cPanel', 'Synology NAS', 'Linux', 'Certbot', 'Docker', 'Redis'],
    stack_equivalent: [
      'EC2, RDS, S3',
      'Shared Hosting',
      'Self-Hosted',
      'Server Environment',
      'SSL',
      'Containerization',
      'Caching / PubSub',
    ],
  },
  {
    title: 'IT Support',
    stacks: ['Hardware Diagnostics', 'End User Support'],
    stack_equivalent: ['Troubleshooting', 'Technical Assistance'],
  },
];
</script>
