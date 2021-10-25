<template>
  <div>
    <h1>This is the homepage</h1>
    <input type="text" v-model="search" />
    <p>Search term - {{ search }}</p>
    <div v-for="(name, index) in matchingNames" :key="index">{{ name }}</div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
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

    watch(search, () => {
      console.log("watching function");
    });

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    return { names, search, matchingNames };
  },
};
</script>
