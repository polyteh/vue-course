<template>
  <div class="app-holder">
    Base App
    <div class="post-buttons">
      <div>
        <MyButton @click="showDialog">
          <template v-slot:buttonLabel>Create post</template>
        </MyButton>
      </div>
      <div>
        <MySelect v-model="selectedSort" :options="sortOption" />
      </div>
    </div>

    <div>
      <MyButton @click="fetchPosts">
        <template v-slot:buttonLabel>Get posts</template>
      </MyButton>
    </div>

    <CreateDialog v-model:show="showCreateDialog">
      <PostForm @createPost="createPost" />
    </CreateDialog>
    <!-- <PostForm @createPost="createPost" /> -->
    <PostList v-bind:posts="postList" @removePost="removePost" />
  </div>
</template>

<script>
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";
import axios from "axios";

export default {
  data() {
    return {
      postList: [
        // {
        //   id: 1,
        //   title: "Olymplic Games 2020",
        //   description: "Olymplic Games 2020 was postponed to 2021",
        // },
        // {
        //   id: 2,
        //   title: "F1 2021",
        //   description: "The laterst news from F1 world",
        // },
        // {
        //   id: 3,
        //   title: "Champoins League 2021/2022",
        //   description: "Cooming soon",
        // },
      ],
      showCreateDialog: false,
      modoficatorValue: "",
      selectedSort: "",
      sortOption: [
        { value: "title", name: "By Title" },
        { value: "description", name: "By Description" },
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
      this.showCreateDialog = false;
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
    showDialog() {
      this.showCreateDialog = true;
    },
    async fetchPosts() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        this.postList = response.data.map((x) => {
          return {
            id: x.id,
            title: x.title,
            description: x.body,
          };
        });
      } catch (e) {
        alert("Error occured");
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
  watch: {
    selectedSort(newValue) {
      this.postList.sort((post1, post2)=>{
        return post1[newValue]?.localeCompare(post2[newValue]);
      });
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

.post-buttons {
  display: flex;
  justify-content: space-between;
}
</style>
