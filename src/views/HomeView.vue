<template>
  <div class="home">
    <h1>Home Page</h1>
    <p>Hello {{ name }}.I am {{ age }} years old.</p>
    <input type="text" v-model="name" />
    <button @click="clickHandler">Click</button><br /><br />
    <button @click="age--">decrease age</button>
    <button @click="age++">increase age</button>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity"; //ref for Reactive Value

export default {
  setup() {
    //variables
    let name = ref("Myint Thway Khine");

    let age = ref(21);

    //function
    let clickHandler = () => {
      name.value = "Rider";
      console.log("Name :", name.value);
    };

    //return
    return { name, age, clickHandler };
  },
};
</script>
