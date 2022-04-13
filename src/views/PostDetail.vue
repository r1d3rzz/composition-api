<template>
  <div v-if="post" class="singlePost">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
    <div v-for="tag in post.tags" class="tagContainer" :key="tag">
      <span>{{ tag }}</span>
    </div>
  </div>
  <div v-else>
    <LoadingSpinner />
  </div>
</template>

<script>
import LoadingSpinner from "../components/LoadingSpinner";
import getPost from "../composable/getPost";

export default {
  components: { LoadingSpinner },
  props: ["id"],
  setup(prop) {
    let { post, error, load } = getPost(prop.id);

    load();

    return { post, error };
  },
};
</script>

<style>
</style>