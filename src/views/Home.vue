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
// components
import { PostList } from "../components";

// composibles
import { getPosts } from "../composibles";

export default {
  name: "Home",
  components: { PostList },
  setup() {
    const { posts, error, load } = getPosts();

    load();

    return { posts, error };
  },
};
</script>
