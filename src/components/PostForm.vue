<template lang="">
  <div class="add-post">
    <form class="add-post-form" @submit.prevent>
      <h4>Create new post</h4>
      <MyInput
        placeholder="Enter post title"
        type="text"
        v-model="post.title"
      />
      <MyInput
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
