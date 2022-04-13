<template>
  <router-link :to="{ name: 'postDetail', params: { id: post.id } }">
    <h2>{{ post.title }}</h2>
  </router-link>
  <p>{{ cutPostBody }}</p>
  <div v-for="tag in post.tags" class="tagContainer" :key="tag">
    <span>{{ tag }}</span>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  props: ["post"],
  setup(prop) {
    let cutPostBody = computed(() => {
      return prop.post.body.substring(0, 13) + "...";
    });
    return { cutPostBody };
  },
};
</script>

<style>
</style>