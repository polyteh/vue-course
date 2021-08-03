<template>
  <div>
    <h3>Forms:</h3>
    <router-view :title="123" @click="print"></router-view>
    <button @click="goNext">Go next</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentRoute: "",
      routesLink: {
        "form-1": "form-2",
        "form-2": "home",
      },
    };
  },
  mounted() {
    this.currentRoute = this.$route.name;
  },
  methods: {
    print(formName) {
      console.log(formName);
    },
    goNext() {
      const nextRoute = this.routesLink[this.currentRoute];
      this.$router.push({ name: nextRoute });
      this.currentRoute = nextRoute;
    },
  },
};
</script>

<style lang="scss" scoped></style>
