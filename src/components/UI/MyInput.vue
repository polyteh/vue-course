<template>
  <input
    :value="modelValue"
    @input="updateInput"
    class="general-input"
    type="text"
  />
</template>
<script>
export default {
  name: "MyInput",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
<style scoped>
.general-input {
  border: 1px solid steelblue;
  width: 100%;
  padding: 10px;
  margin-top: 15px;
}
</style>
