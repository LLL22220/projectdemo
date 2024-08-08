<template>
  <div class="root">
    <!-- 侧导航 -->
    <div class="menu">
      <a-menu
        style="width: 100%; height: 100%"
        mode="inline"
        :theme="theme"
        :selected-keys="[current]"
        @click="handleClick"
      >
        <a-menu-item @click="goindex()" key="1">
          <a-icon type="mail" />
          首页
        </a-menu-item>
        <a-menu-item @click="gomessage()" key="2">
          <a-icon type="mail" />
          个人信息
        </a-menu-item>

        <a-menu-item @click="goshop()" key="3">
          <a-icon type="calendar" />
          商品管理
        </a-menu-item>

        <a-menu-item @click="gousers()" key="4">
          <a-icon type="calendar" />
          用户管理
        </a-menu-item>

        <a-menu-item @click="goother()" key="5">
          <a-icon type="setting" />
          其他
        </a-menu-item>
      </a-menu>
    </div>

    <!-- 右边部分 -->
    <div class="right">
      <a-page-header
        style="border: 1px solid rgb(235, 237, 240);height:8%;"
        :title="title"
      />
      <router-view @sendtitle="getdata"></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: "",
      arr: ["mail"],
      theme: "dark",
      title:''
    };
  },
  methods: {
    handleClick(e) {
      window.console.log("click ", e);
      this.current = e.key;
    },
    changeTheme(checked) {
      this.theme = checked ? "dark" : "light";
    },
    getdata(newdata){
      this.title=newdata
    },

    gomessage() {
      this.$router.push("/home/message");
    },
    goother() {
      this.$router.push("/home/other");
    },
    goshop() {
      this.$router.push("/home/shop");
    },
    gousers() {
      this.$router.push("/home/users");
    },
    goindex() {
      this.$router.push("/home/index");
    },
  },
};
</script>

<style scoped>
.root {
  height: 100%;
  width: 100%;
  display: flex;
}
.menu {
  width: 15%;
  height: 100%;
}
.right {
  width: 85%;
  height: 100%;
}
</style>