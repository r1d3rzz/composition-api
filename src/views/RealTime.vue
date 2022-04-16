<template>
  <h1>RealTime</h1>

  <div v-for="post in posts" :key="post.id" class="realtimeBox">
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
    <p v-for="tag in post.tags" :key="tag">
      {{ tag }}
    </p>
    <hr />
  </div>
</template>

<script>
import { db } from "@/firebase/config";
import { ref } from "@vue/reactivity";
export default {
  setup() {
    let posts = ref([]);
    db.collection("posts")
      .orderBy("created_at", "desc")
      .onSnapshot((snap) => {
        posts.value = snap.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
      });

    return { posts };
  },
};
</script>

<style>
.realtimeBox {
  text-align: start;
}
</style>