<template>
  <div class="home">
    <h1>Ref Vs Reactive</h1>

    <!--use Ref-->
    <div class="box">
      <h2 class="title">Use Ref</h2>
      <h2>Name : {{ personOne.name }}</h2>
      <h2>Age : {{ personOne.age }}</h2>
      <h3>Normal name : {{ nameOne }}</h3>
      <button @click="changeNameOne">Change Name</button>
    </div>

    <div class="box">
      <h2 class="title">Use Ref</h2>
      <h2>Name : {{ personTwo.name }}</h2>
      <h2>Age : {{ personTwo.age }}</h2>
      <h3>Normal name : {{ nameTwo }}</h3>
      <button @click="changeNameTwo">Change Name</button>
    </div>
  </div>
</template>

<script>
/*
  ref can change eveny things but reactive can change object and array only;
*/
import { reactive, ref } from "@vue/reactivity";
export default {
  setup() {
    let personOne = ref({ name: "rider", age: 21 });
    let nameOne = ref("Rider");
    let changeNameOne = () => {
      personOne.value.name = "Myint Thway Khine";
      nameOne.value = "Change Name One";
    };

    let personTwo = reactive({ name: "kyawkyaw", age: 21 });
    let nameTwo = reactive("Kyaw Kyaw"); //with error value cannot be made reactive: Kyaw Kyaw
    let changeNameTwo = () => {
      personTwo.name = "Myint Thway Khine";
    };
    return {
      personOne,
      changeNameOne,
      personTwo,
      changeNameTwo,
      nameOne,
      nameTwo,
    };
  },
};
</script>

<style scoped>
.box {
  border: 1px solid;
  width: 300px;
  margin: 60px auto;
  padding: 20px;
}
.title {
  color: blue;
}
</style>
