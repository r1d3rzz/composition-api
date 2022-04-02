<template>
  <div v-if="post">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
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