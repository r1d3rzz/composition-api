<template>
  <h1>Posts List</h1>
  <div v-for="post in posts" :key="post.id" class="singlePost">
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
.singlePost {
  background-color: #e2d5d5;
  padding: 5px 10px;
  border-radius: 5px;
  margin: 10px 0;
  max-width: 400px;
  margin: 20px;
  text-align: start;
}
</style>