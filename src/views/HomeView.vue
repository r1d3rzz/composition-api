<template>
  <div class="home">
    <h1>Names Filter</h1>
    <input type="text" v-model="search" /><br />
    search item - {{ search }}
    <div v-for="name in filterName" :key="name">
      {{ name }}
    </div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/runtime-core";
export default {
  setup() {
    let search = ref("");
    let names = ref(["aungaung", "rider", "kyawkyaw", "susu", "ayeaye"]);
    let filterName = computed(() => {
      return names.value.filter((n) => {
        return n.includes(search.value);
      });
    });
    return { names, search, filterName };
  },
};
</script>

<style>
input {
  margin: 20px auto;
}
</style>