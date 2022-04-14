<template>
  <h1>{{ tag }}</h1>

  <div v-if="error">
    <h3>{{ error }}</h3>
  </div>

  <div v-if="posts.length" class="layout tag">
    <div>
      <PostLists :posts="postsFilter"></PostLists>
    </div>
    <div>
      <TagCloud></TagCloud>
    </div>
  </div>

  <div v-else>loading...</div>
</template>

<script>
import TagCloud from "../components/TagCloud";
import PostLists from "../components/PostLists";
import { computed } from "@vue/runtime-core";
import getPosts from "../composable/getPosts";
export default {
  components: {
    TagCloud,
    PostLists,
  },
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
.tag {
  max-width: 1000px;
  margin: 0 auto;
  text-align: start;
}
</style>