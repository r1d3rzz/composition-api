<template>
  <div class="home">
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="posts.length > 0">
      <PostLists :posts="posts" />
    </div>
    <div v-else>loading...</div>
  </div>
</template>

<script>
import PostLists from "../components/PostLists";

import { ref } from "@vue/reactivity";
export default {
  components: {
    PostLists,
  },
  setup() {
    let posts = ref([]);
    let error = ref("");

    let load = async () => {
      try {
        let response = await fetch("http://localhost:3000/posts");
        if (response.status === 404) {
          throw new Error("URL NOT FOUND");
        }
        let data = await response.json();
        posts.value = data;
      } catch (err) {
        error.value = err.message;
      }
    };

    load();

    return { posts, error };
  },
};
</script>

<style>
</style>