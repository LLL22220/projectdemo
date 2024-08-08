<template>
  <div class="index">
    <span>欢迎使用</span>
  </div>
</template>

<script>
export default {
  created() {
    this.$emit("sendtitle", this.title);
  },
  data() {
    return {
      title: "首页",
    };
  },
  methods: {

  },
};
</script>

<style scoped>
.index {
  height: 100%;
  display: flex;
  background-image: url("../img/login.jpg");
  background-size: cover;
}
.index span{
  font-size: 50px;
  margin: auto;
}
</style>