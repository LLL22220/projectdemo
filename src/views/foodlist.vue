<template>
  <div>
    <p>食品列表</p>
  </div>
</template>

<script>
export default {
  created() {
    this.$emit("sendtitle", this.title);
  },
  data() {
    return {
      title: "食品列表",
    };
  },
};
</script>

<style>
</style>