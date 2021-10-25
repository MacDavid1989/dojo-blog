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
    const posts = ref([
      {
        title: "welcome to the blog",
        body:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum architecto voluptatem sed laboriosam, ut aliquid quos sint natus, facilis exercitationem asperiores placeat cumque atque laborum numquam nulla, consectetur illum officia hic quas error repudiandae obcaecati! Facilis repellat perferendis fugiat magnam consequatur! Earum odio est itaque quidem distinctio illo architecto libero repellat eaque? Magnam facilis, obcaecati temporibus itaque quas placeat maiores dolore fugiat provident quae, sunt quia atque nisi perspiciatis quaerat ducimus. Repudiandae quia ut dolorem sapiente voluptates fugit excepturi, tempora delectus a, quisquam mollitia quasi unde temporibus quos minima recusandae exercitationem minus praesentium fugiat! Optio praesentium totam sed commodi omnis.",
        id: 1,
      },
      {
        title: "top 5 css tips",
        body:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum architecto voluptatem sed laboriosam, ut aliquid quos sint natus, facilis exercitationem asperiores placeat cumque atque laborum numquam nulla, consectetur illum officia hic quas error repudiandae obcaecati! Facilis repellat perferendis fugiat magnam consequatur! Earum odio est itaque quidem distinctio illo architecto libero repellat eaque? Magnam facilis, obcaecati temporibus itaque quas placeat maiores dolore fugiat provident quae, sunt quia atque nisi perspiciatis quaerat ducimus. Repudiandae quia ut dolorem sapiente voluptates fugit excepturi, tempora delectus a, quisquam mollitia quasi unde temporibus quos minima recusandae exercitationem minus praesentium fugiat! Optio praesentium totam sed commodi omnis.",
        id: 2,
      },
    ]);

    

    return { posts };
  },
};
</script>
