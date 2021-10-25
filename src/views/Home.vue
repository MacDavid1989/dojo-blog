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
    const p = ref(null);

    let name = "mario";
    let age = 30;

    const handleClick = () => {
      console.log(p, p.value);
      p.value.classList.add("test");
      p.value.textContent = 'Hello Ninjas'
    };

    return {
      name,
      age,
      handleClick,
      p,
    };
  },
};
</script>
