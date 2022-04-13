<template>
  <nav>
    <router-link :to="{ name: 'home' }">Posts</router-link> |
    <router-link :to="{ name: 'postCreate' }">Create Post</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>