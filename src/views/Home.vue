<template>
  <div>
    <h1>This is the homepage</h1>
    <h2>Refs</h2>
    <p ref="p">{{ ninjaOne.name }}- {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update Ninja One</button>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "Home",
  setup() {
    const ninjaOne = ref({ name: "mario", age: 30 });

    const updateNinjaOne = () => {
      ninjaOne.value.age = 40;
    };

    return {
      ninjaOne,
      updateNinjaOne,
    };
  },
};
</script>
