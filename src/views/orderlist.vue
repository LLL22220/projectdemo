<template>
  <div>
    <p>订单列表</p>
  </div>
</template>

<script>
export default {
  created() {
    this.$emit("sendtitle", this.title);
  },
  data() {
    return {
      title: "订单列表",
    };
  },
};
</script>

<style>
</style>