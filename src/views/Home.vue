<template>
  <div>
    <h1>This is the homepage</h1>
    <input type="text" v-model="search" />
    <div v-for="(name, index) in names" :key="index">{{ name }}</div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
export default {
  name: "Home",
  setup() {
    const search = ref("");
    const names = ref([
      "mario",
      "luigi",
      "peach",
      "toad",
      "yoshi",
      "bowser",
      "koopa",
    ]);

    
    return { names, search };
  },
};
</script>
