<template>
  <div>
    <h1>This is the homepage</h1>
    <PostList :posts="posts" />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";

// components
import { PostList } from "../components";

export default {
  name: "Home",
  components: { PostList },
  setup() {
    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
      try {
        let data = await fetch("http://localhost:3000/posts");

        if (!data.ok) {
          throw Error("No data available");
        }

        posts.value = await data.json();
      } catch (error) {
        error.value = error.message;
        console.log(error);
      }
    };

    load();

    return { posts, error };
  },
};
</script>
