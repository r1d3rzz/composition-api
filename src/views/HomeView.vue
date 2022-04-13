<template>
  <div class="home">
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="posts.length > 0">
      <PostLists :posts="posts" />
    </div>
    <div v-else>
      <LoadingSpinner />
    </div>
  </div>
</template>

<script>
import LoadingSpinner from "../components/LoadingSpinner";
import PostLists from "../components/PostLists";
import getPosts from "../composable/getPosts";

import { ref } from "@vue/reactivity";
export default {
  components: {
    LoadingSpinner,
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
.home {
  max-width: 600px;
  text-align: start;
  margin: 0 auto;
}
</style>