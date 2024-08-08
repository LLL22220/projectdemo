<template>
  <div class="root">
    <div class="menu">
      <a-menu
        style="width: 100%; height: 100%; background-color: #324057"
        mode="inline"
        :theme="theme"
        :selected-keys="[current]"
        @click="handleClick"
      >
        <a-menu-item @click="goindex()" key="1">
          <a-icon type="home" />
          首页
        </a-menu-item>

        <a-sub-menu key="sub1">
          <span slot="title"
            ><a-icon type="database" />
            <span>数据管理</span>
          </span>
          <a-menu-item class="abc" key="2">
            <router-link :to="{ name: 'userlist' }">用户列表</router-link>
          </a-menu-item>
          <a-menu-item class="abc" key="3">
            <router-link :to="{ name: 'storelist' }">商家列表</router-link>
          </a-menu-item>
          <a-menu-item class="abc" key="4">
            <router-link :to="{ name: 'foodlist' }">食品列表</router-link>
          </a-menu-item>
          <a-menu-item class="abc" key="5">
            <router-link :to="{ name: 'orderlist' }">订单列表</router-link>
          </a-menu-item>
        </a-sub-menu>

        <a-sub-menu class="sub2" key="sub2">
          <span slot="title"
            ><a-icon type="plus" />
            <span>添加数据</span>
          </span>
          <a-menu-item class="abc" key="6"> 添加商铺</a-menu-item>
          <a-menu-item class="abc" key="7"> 添加商品 </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3">
          <span slot="title"
            ><a-icon type="pie-chart" />
            <span>图表</span>
          </span>
          <a-menu-item class="abc" key="8">用户分布</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9"><a-icon type="book" />说明</a-menu-item>
      </a-menu>
    </div>

    <!-- 表头 -->
    <div class="right">
      <a-page-header
        style="
          border: 1px solid rgb(235, 237, 240);
          height: 8%;
          background-color: #eff2f7;
        "
        :title="title"
        @back="() => this.gologin()"
        id="head"
      >
         <a-breadcrumb id="bread">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item
            ><a href="">Application Center</a></a-breadcrumb-item
          >
          <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
          <a-breadcrumb-item>An Application</a-breadcrumb-item>
        </a-breadcrumb> 
      </a-page-header>

      <div class="right">
        <router-view @sendtitle="getdata"></router-view>
      </div>
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
      title: "",
    };
  },
  methods: {
    handleClick(e) {
      window.console.log("click ", e);
      this.current = e.key;
    },
    getdata(newdata) {
      this.title = newdata;
    },
    gologin() {
      this.$router.push("/");
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
.right {
  width: 85%;
  height: 100%;
}
.menu {
  width: 15%;
  height: 100%;
}

.right {
  width: 100%;
  height: 92%;
}
.abc {
  background-color: #1f2d3d !important;
  margin: 0px !important;
  height: 50px !important;
}
#bread{
  position: absolute;
  bottom: 2px;
  left: 15px;
}
#head{
  position: relative;
}
</style>