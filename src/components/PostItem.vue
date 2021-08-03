<template>
  <div class="post">
    <div>
      <div>{{post.id}}</div>
      <strong>{{ post.title }}</strong> {{ post.description }}
    </div>
    <div class="post-btn">
      <MyButton @click="$router.push(`/posts/${post.id}`)">
        <template v-slot:buttonLabel> Open post </template>
      </MyButton>
      <MyButton @click="$emit('removePost', post)">
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
.post-btn{
  display: flex;
  min-width: 180px;
}
</style>
