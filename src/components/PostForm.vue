<template lang="">
  <div class="add-post">
    <form class="add-post-form" @submit.prevent>
      <h4>Create new post</h4>
      <input
        class="create-post-input"
        placeholder="Enter post title"
        type="text"
        v-model="post.title"
      />
      <input
        class="create-post-input"
        placeholder="Enter post description"
        type="text"
        v-model="post.description"
      />
      <MyButton class="general-btn create-post-btn" @click="createPost">
        <template v-slot:buttonLabel>
          Add post
        </template>
        <template v-slot:buttonTitle>
          Add new post
        </template>
      </MyButton>
    </form>
  </div>
</template>
<script>
import MyButton from "./UI/MyButton.vue";
export default {
  data() {
    return {
      post: {
        title: "",
        description: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("createPost", this.post);
      this.post = {
        title: "",
        description: "",
      };
    },
  },
  components: {
    MyButton,
  },
};
</script>
<style scoped>
.create-post-input {
  border: 1px solid steelblue;
  width: 100%;
  padding: 10px;
  margin-top: 15px;
}

.add-post-form {
  display: flex;
  flex-direction: column;
}

.create-post-btn {
  align-self: flex-end;
}
</style>
