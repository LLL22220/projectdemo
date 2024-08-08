<template>
  <div class="login">
    <a-row
      :style="{ height: '960px', width: '100%' }"
      type="flex"
      justify="center"
      align="middle"
    >
      <a-col :span="8">
        <a-card class="sign" style="margin-bottom: 50px"> 登录页面 </a-card>
        <a-form-model
          id="components-form-demo-normal-login"
          class="login-form"
          :model="form"
          :rules="rules"
        >
          <a-form-model-item ref="username" prop="username">
            <a-input
              id="username"
              v-model="form.username"
              placeholder="Username"
            >
              <a-icon
                slot="prefix"
                type="user"
                style="color: rgba(0, 0, 0, 0.25)"
              />
            </a-input>
          </a-form-model-item>
          <a-form-model-item ref="password" prop="password">
            <a-input-password
              id="userpassword"
              v-model="form.password"
              type="password"
              placeholder="Password"
            >
              <a-icon
                slot="prefix"
                type="lock"
                style="color: rgba(0, 0, 0, 0.25)"
              />
            </a-input-password>
          </a-form-model-item>
          <!-- 验证码部分 -->
          <a-form-model-item ref="yanzhengma" prop="yanzhengma">
            <HomeView @transfer="getdata"></HomeView>
          </a-form-model-item>
          <a-form-model-item>
            <a-button
              type="primary"
              html-type="submit"
              class="login-form-button"
              block
              @click="login()"
            >
              登录
            </a-button>
            <a class="login-form-forgot" href=""> 忘记密码 </a>
            <a-checkbox
              class="float-right"
              v-decorator="[
                'remember',
                {
                  valuePropName: 'checked',
                  initialValue: true,
                },
              ]"
            >
              记住我
            </a-checkbox>
            <router-link :to="{ name: 'register', params: { users } }"
              >立即注册</router-link
            >
          </a-form-model-item>
        </a-form-model>
        <button @click="ceshi()">测试</button>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import HomeView from "../views/HomeView.vue";
export default {
  created() {
    if (
      JSON.stringify(this.$route.params) === "{}" ||
      JSON.stringify(this.$route.params.username) == ""
    ) {
      window.console.log();
    } else {
      this.users.push(this.$route.params);
    }
  },
  components: {
    HomeView,
  },
  methods: {
    ceshi() {
      // window.console.log(JSON.stringify(this.$route.params.username));
      // window.console.log(this.$route.params);
      // window.console.log(this.users);
      // window.console.log(this.data);
    },
    getdata(a) {
      this.data = a;
    },

    // register() {
    //   this.$router.push("/register");
    // },
    home() {
      this.$router.push("/home");
    },
    login() {
      // 取输入值
      let username = document.getElementById("username").value;
      let password = document.getElementById("userpassword").value;
      // 将数组先转换为JSON字符串形式，然后再从字符串形式转换成JSON格式JSON.parse(JSON.stringify(data))
      //  window.console.log("运行记录组件接到的数据", this.users[0].username);
      //  let resdata = JSON.parse(JSON.stringify(this.users));
      //  校验输入值和数组内的值
      let user = this.users.find(function (users) {
        return users.username === username && users.password === password;
      });
      let end = user && this.data
      if (end) {
        this.home();
      } else {
        this.$message.info("登录失败，用户名或密码错误");
      }
    },
  },

  data() {
    return {
      users: [
        { username: "zhangsan", password: "zhangsan" },
        { username: "lisi", password: "lisi" },
        { username: "wangwu", password: "wangwu" },
      ],
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [{ required: true, message: "请输入你的账号" }],
        password: [{ required: true, message: "请输入你的密码" }],
        yanzhengma: [{ required: true, message: "请输入验证码" }],
      },
      data:'',
    };
  },
};
</script>

<style scoped>
.login {
  background-image: url("../img/login.jpg");
  background-size: cover;
}
.float-right {
  float: right;
}
.login-form-forgot {
  float: right;
}
.ant-card-body {
  text-align: center;
}
</style>
