<template>
  <div v-if="error">
    <p>
      {{ error }}
    </p>
  </div>
  <div v-if="!post && !error"><p>Loading...</p></div>
  <div v-else-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
  </div>
</template>

<script>
// composibles
import { getPost } from "../composibles";

export default {
  props: ["id"],
  setup(props) {
    const { post, error, load } = getPost(props.id);

    load();

    return { post, error };
  },
};
</script>

<style scoped>
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
</style>
