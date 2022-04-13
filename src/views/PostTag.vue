<template>
  <h1>{{ tag }}</h1>

  <div v-if="error">
    <h3>{{ error }}</h3>
  </div>

  <div v-if="posts.length">
    <PostLists :posts="postsFilter"></PostLists>
  </div>

  <div v-else>loading...</div>
</template>

<script>
import PostLists from "../components/PostLists";
import { computed } from "@vue/runtime-core";
import getPosts from "../composable/getPosts";
export default {
  components: { PostLists },
  props: ["tag"],
  setup(prop) {
    let { posts, error, load } = getPosts();

    load();

    let postsFilter = computed(() => {
      return posts.value.filter((post) => {
        return post.tags.includes(prop.tag);
      });
    });

    return { posts, error, postsFilter };
  },
};
</script>

<style>
</style>