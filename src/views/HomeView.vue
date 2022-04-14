<template>
  <div class="home">
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="posts.length > 0" class="layout">
      <div>
        <PostLists :posts="posts" />
      </div>
      <div>
        <TagCloud :posts="posts"></TagCloud>
      </div>
    </div>
    <div v-else>
      <LoadingSpinner />
    </div>
  </div>
</template>

<script>
import TagCloud from "../components/TagCloud";
import LoadingSpinner from "../components/LoadingSpinner";
import PostLists from "../components/PostLists";
import getPosts from "../composable/getPosts";

import { ref } from "@vue/reactivity";
export default {
  components: {
    TagCloud,
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
  max-width: 1000px;
  text-align: start;
  margin: 0 auto;
}
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>