<template>
  <div class="card-grid">
    <project-box :card-details="card" v-for="card in activeProjects" :key="card.id"/>
  </div>
</template>

<script setup>
import {computed, onMounted} from "vue";
import {useProjectStore} from "@/VueGitHubBrowser/Store/projects.js";
import ProjectBox from "@/VueGitHubBrowser/ProjectBox.vue";

const activeProjects = computed(() => useProjectStore().projects);

onMounted(async () => {
  await useProjectStore().FetchProjects();
})
</script>

<style lang="scss" scoped>
.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px; // Space between cards

}
</style>