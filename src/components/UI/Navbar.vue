<template>
  <div class="navbar">
    <div @click="$router.push('/')">Home</div>
    <div class="navbar-btn">
      <MyButton @click="$router.push('/posts')">
        <template v-slot:buttonLabel>Posts</template>
      </MyButton>
      <MyButton @click="$router.push('/about')" style="margin-left: 20px">
        <template v-slot:buttonLabel>About</template>
      </MyButton>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.navbar {
  height: 50px;
  background-color: lightgrey;
  box-shadow: 2px 2px 4px grey;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.navbar-btn{
  margin-left: auto;
}
</style>
