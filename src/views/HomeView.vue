<template>
  <div class="home">
    <h1>Posts List</h1>

    <PostLists :posts="posts" />
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
    let posts = ref([
      {
        title: "title 1",
        body: "lorem ipsum 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate praesentium voluptatem nobis eius odio doloribus aliquam ex ut in quos.",
      },
      { title: "title 2", body: "lorem ipsum 2" },
    ]);

    return { posts };
  },
};
</script>

<style>
</style>