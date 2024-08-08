<template>
  <div id="root">
    <p>商家列表</p>
     <!-- <a-breadcrumb id="bread">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item
            ><a href="">Application Center</a></a-breadcrumb-item
          >
          <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
          <a-breadcrumb-item>An Application</a-breadcrumb-item>
        </a-breadcrumb> -->
  </div>
</template>

<script>
export default {
  created() {
    this.$emit("sendtitle", this.title);
  },
  data() {
    return {
      title: "商家列表",
    };
  },
};
</script>

<style>
/* #root{
  position: relative;
}
#bread{
  position: absolute;
  top:-23px;
  left: 27px;
} */
</style>