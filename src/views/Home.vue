<template>
  <div>
    <h1>This is the homepage</h1>
    <h2>Refs</h2>
    <p ref="p">{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update Ninja One</button>
    <h2>Reactive</h2>
    <p ref="p">{{ ninjaTwo.name }} - {{ ninjaTwo.age }} - {{ nameTwo }}</p>
    <button @click="updateNinjaTwo">Update Ninja One</button>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
export default {
  name: "Home",
  setup() {
    const ninjaOne = ref({ name: "mario", age: 30 });
    const ninjaTwo = reactive({ name: "luigi", age: 35 });
    // we can't use primitive values inside reactive as the variable will not become reactive
    // refs retain their activity when exposed by external functions
    const nameOne = ref("mario");
    const nameTwo = reactive("luigi");

    const updateNinjaOne = () => {
      ninjaOne.value.age = 40;
    };

    const updateNinjaTwo = () => {
      ninjaTwo.age = 45;
      nameTwo = "bowser";
    };

    return {
      ninjaOne,
      updateNinjaOne,
      ninjaTwo,
      updateNinjaTwo,
      nameTwo,
    };
  },
};
</script>
