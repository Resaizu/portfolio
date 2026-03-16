<template>
  <section id="skills" class="max-w-6xl mx-auto px-4 py-16 min-h-[80vh] 2560:min-h-[50vh] scroll-mt-20">
    <div class="flex gap-3">
      <span class="font-playfair tracking-[8px] text-2xl font-bold text-neon-cyan">//</span>
      <span class="text-2xl font-semibold text-neon-pink tracking-widest">Technical Skills</span>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      <neon-card v-for="skill in skills">
        <div class="p-6">
          <h2 class="text-xl font-semibold tracking-[0.18em] uppercase text-gray-200 mb-6">
            {{ skill.title }}
          </h2>

          <!-- stack list -->
          <ul class="flex flex-col gap-3">
            <li
              class="flex items-center gap-3"
              v-for="(stack, index) in skill.stacks"
              :key="index"
            >
              <bullet></bullet>

              <span class="w-48 lg:flex-1 text-sm lg:text-base font-medium leading-none text-green-200">
                {{ stack }}
              </span>

              <span class="w-46 text-xs lg:text-sm leading-none text-green-700">
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
    stacks: [
      'Laravel',
      'REST APIs',
      'Reverb',
      'Sanctum',
      'MySQL',
    ],
    stack_equivalent: [
      'PHP Framework',
      'API Design',
      'WebSockets',
      'Authentication',
      'Relational Database',
    ]
  },
  {
    title: 'Frontend',
    stacks: [
      'Vue',
      'Pinia',
      'Tailwind CSS',
    ],
    stack_equivalent: [
      'JS Framework',
      'State Management',
      'Utility CSS',
    ]
  },
  {
    title: 'Infrastructure',
    stacks: [
      'AWS',
      'cPanel',
      'Synology NAS',
      'Linux',
      'Certbot',
      'Docker',
      'Redis',
    ],
    stack_equivalent: [
      'EC2, RDS, S3',
      'Shared Hosting',
      'Self-Hosted',
      'Server Environment',
      'SSL',
      'Containerization',
      'Caching / PubSub',
    ]
  },
  {
    title: 'IT Support',
    stacks: [
      'Hardware Diagnostics',
      'End User Support',
    ],
    stack_equivalent: [
      'Troubleshooting',
      'Technical Assistance',
    ]
  },
]
</script>