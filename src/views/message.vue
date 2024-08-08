<template>
  <div class="message">
    <a-card>
      <a-avatar :size="64" icon="user" />
      <p>Admin</p>
    </a-card>
    </div>
</template>

<script>
export default {
  created() {
    this.$emit("sendtitle", this.title);
  },
  data() {
    return {
      title: "个人信息",
    };
  },
};
</script>

<style scoped>
.message {
  height: 92%;
  border: solid 5px;
}
.ant-card{
  position: relative;
  width: 300px;

}
.ant-card p {
  font-size: 30px;
  position: absolute;
  left: 150px;
  top: 30px;
}
</style>