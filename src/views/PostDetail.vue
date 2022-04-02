<template>
  <div v-if="post">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </div>
  <div v-else>{{ error }}</div>
</template>

<script>
import getPost from "../composable/getPost";

export default {
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