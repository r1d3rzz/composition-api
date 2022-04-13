<template>
  <h1>Create Your Post</h1>

  <div class="postCreate">
    <form @submit.prevent="addPost">
      <div class="inputBox">
        <label for="title" class="postLabel">Post Title</label>
        <input
          type="text"
          id="title"
          class="postInput"
          v-model="title"
          required
        />
      </div>

      <div class="inputBox">
        <label for="body" class="postLabel">Post Body</label>
        <textarea
          class="postTextarea"
          cols="30"
          rows="5"
          id="body"
          v-model="body"
        ></textarea>
      </div>

      <div class="inputBox">
        <label for="tag" class="postLabel">Tag(Enter add new Tag)</label>
        <input
          type="text"
          id="tag"
          class="postInput"
          @keydown.enter.prevent="addNewTags"
          v-model="tag"
        />
        <br />
        <div v-for="tag in tags" :key="tag" class="tagContainer">
          <span>{{ tag }}</span>
        </div>
      </div>

      <div class="inputBox">
        <button class="createBtn">Create Post</button>
      </div>
    </form>
  </div>

  <!-- Title - {{ title }} <br />
  Body - {{ body }} <br />
  Tag - {{ tag }} <br />
  Tags - {{ tags }} -->
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    let title = ref("");
    let body = ref("");
    let tag = ref("");
    let tags = ref([]);

    let addNewTags = () => {
      if (!tags.value.includes(tag.value)) {
        tags.value.push(tag.value);
      }
      tag.value = "";
    };

    let addPost = async () => {
      await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title.value,
          body: body.value,
          tags: tags.value,
        }),
      });
    };

    return { title, body, tag, addNewTags, tags, addPost };
  },
};
</script>

<style>
.inputBox {
  text-align: start;
  max-width: 400px;
  margin: 30px auto;
}
.postLabel {
  font-size: 22px;
  display: block;
  font-weight: bold;
  padding: 10px 0;
}
.postInput {
  border: none;
  width: 80%;
  outline: none;
  font-size: 22px;
  border-bottom: 2px solid gray;
}
.postTextarea {
  border-radius: 5px;
  width: 80%;
  font-size: 15px;
}
.createBtn {
  border: none;
  background-color: blue;
  font-size: 15px;
  border-radius: 5px;
  padding: 5px 10px;
  font-weight: bold;
  color: white;
  cursor: pointer;
}
.tagContainer {
  width: 50px;
  background-color: #fafa;
  text-align: center;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 18px;
  display: inline-block;
  margin-top: 10px;
  margin-right: 10px;
}
</style>