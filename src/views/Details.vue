<template>
  <h1>This is the details page</h1>
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

<style></style>
