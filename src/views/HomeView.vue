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
import getPosts from "../composable/getPosts";

import { ref } from "@vue/reactivity";
export default {
  components: {
    PostLists,
  },
  setup() {
    let { posts, error, load } = getPosts();

    load();

    return { posts, error };
  },
};
</script>

<style>
</style>