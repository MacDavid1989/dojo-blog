import { ref } from "@vue/reactivity";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch(`http://localhost:3000/posts/${id}`);

      if (!data.ok) {
        throw Error(`Post with id ${id} does not exist`);
      }

      post.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.error(err);
    }
  };

  return { post, error, load };
};

export default getPost;
