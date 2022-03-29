<template>
  <div class="home">
    <h1>Home Page</h1>
    <p>Hello {{ name }}.I am {{ age }} years old.</p>
    <button @click="clickHandler">Click me</button>
  </div>
</template>

<script>
export default {
  setup() {
    //variables
    let name = "Rider";

    const age = 21;

    //function
    let clickHandler = () => {
      console.log("hit");
    };

    //return
    return { name, age, clickHandler };
  },
};
</script>
