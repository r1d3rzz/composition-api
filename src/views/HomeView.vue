<template>
  <div class="home">
    <h1>Posts List</h1>

    <div v-if="showPosts">
      <PostLists :posts="posts" />
    </div>
    <button @click="showPosts = !showPosts">toggle posts</button>
    <button @click="posts.pop()">delete posts</button>
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
    let showPosts = ref(true);
    let posts = ref([
      {
        title: "title 1",
        body: "lorem ipsum 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate praesentium voluptatem nobis eius odio doloribus aliquam ex ut in quos.",
      },
      { title: "title 2", body: "lorem ipsum 2" },
    ]);

    return { posts, showPosts };
  },
};
</script>

<style>
</style>