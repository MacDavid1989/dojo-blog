<template>
  <div>
    <h1>This is the homepage</h1>
    <div v-if="error">
      <p>
        {{ error }}
      </p>
    </div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else-if="!error"><p>Loading...</p></div>
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
      } catch (err) {
        error.value = err.message;
        console.error(err);
      }
    };

    load();

    return { posts, error };
  },
};
</script>
