<template>
  <div class="index">
    <a-carousel :after-change="onChange()">
      <div><img src="../ghj8a1yy.png"></div>
      <div><img src="../ghj8a1yy.png"></div>
      <div><img src="../ghj8a1yy.png"></div>
      <div><img src="../ghj8a1yy.png"></div>
    </a-carousel>
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
    onChange(a, b, c) {
      window.console.log(a, b, c);
    },
  },
};
</script>

<style scoped>
.index {
  height: 92%;
  border: solid 5px;
}
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 800px;
  width: 10%;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>