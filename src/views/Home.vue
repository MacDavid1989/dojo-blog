<template>
  <div>
    <h1>This is the homepage</h1>
    <p>My name is {{ name }} and my age is {{ age }}</p>
  </div>
</template>

<script>
export default {
  name: "Home",
  setup() {
    let name = "mario";
    let age = 30;

    return {
      name,
      age,
    };
  },
};
</script>
