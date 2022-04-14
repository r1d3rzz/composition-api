<template>
  <h1>Tag Cloud</h1>

  <div v-for="tag in uniqueTags" :key="tag">
    <router-link
      :to="{ name: 'postTag', params: { tag } }"
      class="tagContainer"
    >
      <span>{{ tag }}</span>
    </router-link>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  props: ["posts"],
  setup(prop) {
    let tags = ref([]);
    prop.posts.forEach((post) => {
      post.tags.forEach((tag) => {
        tags.value.push(tag);
      });
    });

    let uniqueTags = tags.value.filter((tag, index, array) => {
      return array.indexOf(tag) === index;
    });

    return { uniqueTags };
  },
};
</script>

<style>
</style>