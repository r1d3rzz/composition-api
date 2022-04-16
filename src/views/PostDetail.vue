<template>
  <div v-if="post" class="singlePost detailSingle">
    <div class="flexing">
      <div>
        <h2>{{ post.title }}</h2>
      </div>
      <div>
        <button class="deleteBtn" @click="deletePost">Delete</button>
      </div>
    </div>
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
import { useRoute, useRouter } from "vue-router";
import LoadingSpinner from "../components/LoadingSpinner";
import getPost from "../composable/getPost";
import { db } from "../firebase/config";

export default {
  components: { LoadingSpinner },
  props: ["id"],
  setup(prop) {
    let route = useRoute();
    let router = useRouter();

    let { post, error, load } = getPost(route.params.id);

    load();

    let deletePost = async () => {
      let id = prop.id;
      await db.collection("posts").doc(id).delete();
      router.push("/");
    };

    return { post, error, deletePost };
  },
};
</script>

<style>
.detailSingle {
  max-width: 600px;
  margin: 0 auto;
}
.flexing {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.deleteBtn {
  background-color: red;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
</style>