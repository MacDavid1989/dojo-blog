<template>
  <div>
    <h1>This is the homepage</h1>
    <input type="text" v-model="search" />
    <p>Search term - {{ search }}</p>
    <div v-for="(name, index) in matchingNames" :key="index">{{ name }}</div>
    <button @click="handleClick">Stop Watching</button>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { watch, watchEffect } from "@vue/runtime-core";
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

    // only runs when the ref passed as an argument changes
    const stopWatch = watch(search, () => {
      console.log("watch function");
    });

    // runs once setup runs and then everytime a ref used within the function changes
    const stopEffect = watchEffect(() => {
      console.log("watch effect function", search.value);
    });

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    const handleClick = () => {
      stopWatch();
      stopEffect();
    };

    return { names, search, matchingNames, handleClick };
  },
};
</script>
