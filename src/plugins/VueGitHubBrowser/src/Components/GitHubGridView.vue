<template>
  <div class="card-grid" v-if="projects">
    <project-box :card-details="card" v-for="card in projects" :key="card.id"/>
  </div>
</template>

<script setup>
import {computed, defineProps, onMounted} from "vue";
import ProjectBox from "./GitHubProjectBox.vue";
import store from '../Store/storedProjects';

const props = defineProps({
  projectsToShow: Array | undefined
})

onMounted(async () =>
{
  if(props.projectsToShow)
  {}
  else
  {
    await store.FetchProjects();
  }
})

const projects = computed(() => props.projectsToShow ? props.projectsToShow : store.state.projects);

</script>

<style lang="scss" scoped>
.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px; // Space between cards
}
</style>