<template>
  <div class="card-grid">
    <div class="card" v-for="card in activeProjects" :key="card.id">
      <project-box :card-details="card"/>
    </div>
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

  .card {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: calc(33.333% - 16px); // Adjust based on the number of cards per row
    position: relative;
    box-sizing: border-box; // Include padding and border in the element's width and height


    @media (max-width: 768px) {
      width: calc(50% - 16px);
    }

    @media (max-width: 480px) {
      width: 100%;
    }
  }
}
</style>