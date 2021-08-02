<template>
  <div v-if="posts.length > 0">
    <post-item
      v-for="post in posts"
      :key="post.id"
      :post="post"
      @removePost="$emit('removePost', post)"
    />
  </div>
  <div v-else>
    <h3>No data</h3>
  </div>
</template>
<script>
import PostItem from "./PostItem.vue";

export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  components: {
    PostItem,
  },
};
</script>
<style scoped></style>
