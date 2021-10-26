<template>
  <div>
    <h1>This is the homepage</h1>
    <div v-if="error">
      <p>
        {{ error }}
      </p>
    </div>
    <div v-if="!posts.length && !error"><p>Loading...</p></div>
    <div v-else>
      <PostList :posts="posts" />
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";

// components
import { PostList } from "../components";
import { onMounted } from "@vue/runtime-core";

export default {
  name: "Home",
  components: { PostList },
  setup() {
    const posts = ref([]);
    const error = ref(null);

    onMounted(async () => {
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
    });

    return { posts, error };
  },
};
</script>
