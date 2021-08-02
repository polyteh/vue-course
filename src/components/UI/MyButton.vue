<template>
  <button>
    <slot name="buttonLabel"></slot>
  </button>
</template>
<script>
export default {
//   name: "MyButton",
  mounted() {
    console.log(this.$slots.buttonTitle);
    console.log(this.$slots);
  },
};
</script>
<style scoped>
.general-btn {
  margin-top: 15px;
  padding: 10px;
  border: 1px solid steelblue;
  background: none;
  color: steelblue;
}
</style>
