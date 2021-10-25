<template>
  <div>
    <h1>This is the homepage</h1>
    <p>{{ name }}</p>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
export default {
  name: "Home",
  setup() {
    const name = computed(() => {
      return "shaun";
    });
    return { name };
  },
};
</script>
