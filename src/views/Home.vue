<template>
  <div>
    <h1>This is the homepage</h1>
    <PostList :posts="posts" />
  </div>
</template>

<script>
import { ref } from "vue";
// components
import { PostList } from "../components";
export default {
  name: "Home",
  components: { PostList },
  setup() {
    const posts = ref([
      {
        title: "welcome to the blog",
        body: "Lorem ipsum",
        id: 1,
      },
      {
        title: "top 5 css tips",
        body: "Lorem ipsum",
        id: 2,
      },
    ]);
    return { posts };
  },
};
</script>
