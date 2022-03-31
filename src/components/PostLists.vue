<template>
  <div v-for="post in posts" :key="post.id">
    <SinglePost :post="post" />
  </div>
</template>

<script>
import SinglePost from "../components/SinglePost";
export default {
  props: ["posts"],
  components: {
    SinglePost,
  },
};
</script>

<style>
</style>