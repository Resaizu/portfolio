<script setup>
import NotFound from './NotFound.vue';
import Project from '@/components/sections/Project.vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useIndexStore } from '@/stores';

const store = useIndexStore();

const projectList = ref(store.project_list);

const route = useRoute();
const activeProject = ref({});

onMounted(async () => {
  activeProject.value = projectList.value.find((project) => project.slug == route.params.slug);
  
  activeProject.value.images = await Promise.all(
    activeProject.value.images.map(async (image) => ({
      ...image,
      path: await store.importImages(activeProject.value.slug, image.path)
    }))
  )
});
</script>

<template>
  <section v-if="activeProject" :id="activeProject.slug" class="2560:min-h-[50vh] min-h-screen px-4 py-20">
    <project :data="activeProject"></project>
  </section>

  <not-found v-else></not-found>
</template>
