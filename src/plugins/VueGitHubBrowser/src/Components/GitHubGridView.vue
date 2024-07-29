<template>
  <div class="card-grid" v-if="projects">
    <project-box :card-details="card" v-for="card in filteredItems" :key="card.id"/>
  </div>
</template>

<script setup>
import {computed, defineProps, onMounted, ref} from "vue";
import ProjectBox from "./GitHubProjectBox.vue";
import {state} from "../index";
import {getNestedPropertyIgnoreCase} from "../index";

const props = defineProps({
  projectsToShow: Array | undefined,
  searchQuery: String
})

const projects = computed(() => props.projectsToShow ? props.projectsToShow : state.projects);

// Define the computed property for filtered items
const filteredItems = computed(() => {
  if (!projects) {
    return [];
  }

  if (props.searchQuery === undefined || props.searchQuery === '') {
    return projects.value;
  }

  const queries = props.searchQuery
      .toLowerCase()
      .split(',')  // Assume queries are separated by commas
      .map(query => query.split(':').map(part => part.trim()));

  return projects.value.filter(item => {
    return queries.every(([key, searchValue]) => {
      if (!key || !searchValue) return true;  // Ignore invalid queries
      const value = getNestedPropertyIgnoreCase(item, key);
      return value && value.toString().toLowerCase().includes(searchValue);
    });
  });
});
</script>

<style lang="scss" scoped>
.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px; // Space between cards
}
</style>