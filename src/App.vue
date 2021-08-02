<template>
  <div class="app-holder">
    Base App
    <PostForm @createPost="createPost" />
    <PostList v-bind:posts="postList" @removePost = "removePost"/>
  </div>
</template>

<script>
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";
export default {
  data() {
    return {
      postList: [
        {
          id: 1,
          title: "Olymplic Games 2020",
          description: "Olymplic Games 2020 was postponed to 2021",
        },
        {
          id: 2,
          title: "F1 2021",
          description: "The laterst news from F1 world",
        },
        {
          id: 3,
          title: "Champoins League 2021/2022",
          description: "Cooming soon",
        },
      ],
    };
  },
  components: {
    PostForm,
    PostList,
  },
  methods: {
    createPost(post) {
      this.postList.push(post);
    },
    inputTitle(event) {
      this.title = event.target.value;
    },
    inputDescription(event) {
      this.description = event.target.value;
    },
    removePost(post) {
      this.postList = this.postList.filter((p) => p.id !== post.id);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app-holder {
  padding: 20px;
}
</style>
