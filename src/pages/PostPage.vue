<template>
  <div>
    <MyInput v-model="searcyQuery" placeholder="Search..."> </MyInput>
    <div class="post-buttons">
      <div>
        <MyButton @click="showDialog" style="margin-top:15px">
          <template v-slot:buttonLabel>Create post</template>
        </MyButton>
      </div>
      <MySelect
        v-model="selectedSort"
        :options="sortOption"
        v-bind:style="{ color: 'steelblue', 'margin-top': 15 + 'px' }"
      />
    </div>
    <div>
      <MyButton @click="fetchPosts" style="margin-top:15px">
        <template v-slot:buttonLabel>Get posts</template>
      </MyButton>
    </div>

    <CreateDialog v-model:show="showCreateDialog">
      <PostForm @createPost="createPost" />
    </CreateDialog>
    <!-- <PostForm @createPost="createPost" /> -->
    <PostList v-bind:posts="sortedAndSearchedPosts" @removePost="removePost" />
    <div class="page-wrapper">
      <div
        class="page"
        v-for="page in totalPages"
        :key="page"
        :class="{ 'current-page': page === pageNumber }"
        @click="changePage(page)"
      >
        {{ page }}
      </div>
    </div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
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
      searcyQuery: "",
      pageNumber: 1,
      limit: 10,
      totalPages: 0,
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
    changePage(page){
      this.pageNumber = page;
    },
    async fetchPosts() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?",
          {
            params: {
              _limit: this.limit,
              _page: this.pageNumber,
            },
          }
        );

        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
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
  computed: {
    sortedPosts() {
      return [...this.postList].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(
          post2[this.selectedSort]
        );
      });
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.includes(this.searcyQuery)
      );
    },
  },
  watch: {
    // selectedSort(newValue) {
    //   this.postList.sort((post1, post2) => {
    //     return post1[newValue]?.localeCompare(post2[newValue]);
    //   });
    // },
    pageNumber(){
            this.fetchPosts();
    },
  },
};
</script>

<style>

.post-buttons {
  display: flex;
  justify-content: space-between;
}

.page-wrapper {
  display: flex;
  margin-top: 10px;
}

.page {
  border: 1px solid black;
  padding: 10px;
}

.current-page {
  border: 2px solid steelblue;
}
</style>
