<template lang="">
  <Navbar></Navbar>
  <div class="app-holder">
    <router-view></router-view>
    <!-- <div>
      <router-link to="/about">About</router-link>
      <router-link to="/post">Post</router-link>
    </div> -->
  </div>
</template>
<script>
import Navbar from "@/components/UI/Navbar.vue";

export default {
  components: {
    Navbar,
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
