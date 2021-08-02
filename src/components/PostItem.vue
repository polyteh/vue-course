<template>
  <div class="post">
    <div>
      <strong>{{ post.title }}</strong> {{ post.description }}
    </div>
    <div class="post-btn">
      <MyButton class="general-btn">
        <template v-slot:buttonLabel> Delete post </template>
      </MyButton>
    </div>
  </div>
</template>
<script>
import MyButton from "./UI/MyButton.vue";
export default {
  props: {
    post: {
      type: Object,
      requied: true,
    },
  },
  components: {
    MyButton,
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
