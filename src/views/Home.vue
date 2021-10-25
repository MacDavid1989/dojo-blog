<template>
  <div>
    <h1>This is the homepage</h1>
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click Me</button>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "Home",
  setup() {
    const name = ref("mario");
    const age = ref(30);

    const handleClick = () => {
      name.value = "luigi";
    };

    return {
      name,
      age,
      handleClick,
    };
  },
};
</script>
