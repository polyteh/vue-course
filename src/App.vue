<template>
  <div class="app-holder">
    Base App
    <div class="add-post">
      <form class="add-post-form" @submit.prevent>
        <h4>Create new post</h4>
        <input class="create-post-input" placeholder="Enter post title" v-bind:value="title" type="text" @input="title=$event.target.value">
        <input class="create-post-input" placeholder="Enter post description" v-bind:value="description" type="text" @input="inputDescription">
        <button class="create-post-btn" @click="createPost">Add post</button>
      </form>
    </div>
    <div class="post" v-for="post in posts" :key="post.id">
      <div><strong>{{post.title}}</strong> {{post.description}}</div>
    </div>
  </div>
</template>

<script>
export default{
  data(){
    return {
      posts: [
        {id: 1, title: "Olymplic Games 2020", description: "Olymplic Games 2020 was postponed to 2021"},
        {id: 2, title: "F1 2021", description: "The laterst news from F1 world"},
        {id: 3, title: "Champoins League 2021/2022", description: "Cooming soon"},
      ],
      title: '',
      description: ''
    }
  },
  methods:{
    createPost(){
        const newPost={
          id: Date.now(),
          title: this.title,
          description: this.description
        };
        this.posts.push(newPost);
    },
    inputTitle(event){
      this.title = event.target.value;
    },
    inputDescription(event){
      this.description = event.target.value;
    }
  }
}
</script>

<style>
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}
.post{
  padding: 15px;
  border: 1px solid steelblue;
  margin-top: 15px;
}
.create-post-input{
    border: 1px solid steelblue;
    width: 100%;
    padding: 10px;
    margin-top: 15px;
}
.app-holder{
  padding: 20px;
}

.add-post-form{
  display: flex;
  flex-direction: column;
}

.create-post-btn{
  margin-top: 15px;
  align-self: flex-end;
  padding: 10px;
  border: 1px solid steelblue;
  background: none;
  color: steelblue;
}

</style>
