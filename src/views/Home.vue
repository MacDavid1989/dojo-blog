<template>
  <div>
    <h1>This is the homepage</h1>
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick"> Click Me</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  setup() {
    let name = "mario";
    let age = 30;

    const handleClick = () => {
      console.log('clicked')
    };

    return {
      name,
      age,
      handleClick
    };
  },
};
</script>
