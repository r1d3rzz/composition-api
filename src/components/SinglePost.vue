<template>
  <h2>{{ post.title }}</h2>
  <p>{{ cutPostBody }}</p>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  props: ["post"],
  setup(prop) {
    let cutPostBody = computed(() => {
      return prop.post.body.substring(0, 13) + "...";
    });
    return { cutPostBody };
  },
};
</script>

<style>
</style>