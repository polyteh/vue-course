<template>
  <div class="post">
    <div>
      <strong>{{ post.title }}</strong> {{ post.description }}
    </div>
    <div class="post-btn">
      <MyButton class="general-btn" @click="$emit('removePost', post)">
        <template v-slot:buttonLabel> Delete post </template>
      </MyButton>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    post: {
      type: Object,
      requied: true,
    },
  },

};
</script>
<style scoped>
.post {
  padding: 15px;
  border: 1px solid steelblue;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
