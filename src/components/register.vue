<template>
  <div class="register">
    <a-button type="primary" @click="gologin()"> 返回 </a-button>
    <a-row
      :style="{ height: '960px', width: '100%' }"
      type="flex"
      justify="center"
      align="middle"
    >
      <a-col :span="8">
        <a-card class="sign" style="margin-bottom: 50px"> 注册页面 </a-card>
        
        <a-form-model ref="form" :model="form" :rules="rules" v-bind="layout">
          <a-form-model-item has-feedback label="用户名" prop="username">
            <a-input v-model="form.username" id="username" />
          </a-form-model-item>
          <a-form-model-item has-feedback label="密码" prop="password">
            <a-input-password
              id="password"
              v-model="form.password"
              type="password"
            />
          </a-form-model-item>
          <a-form-model-item
            has-feedback
            label="再次输入密码"
            prop="repassword"
          >
            <a-input-password
              id="repassword"
              v-model="form.repassword"
              type="password"
            />
          </a-form-model-item>
          <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" @click="zhuce()" :disabled="cdis">  
            注册
            </a-button>
            <a-button style="margin-left: 10px" @click="resetForm('form')">
              清空
            </a-button>
             <a-button style="margin-left: 10px">
               <router-link :to="{name:'login',params:{username:form.username,password:form.password}}">去登录</router-link> 
            </a-button>
           <a-button style="margin-left: 10px"
           @click="ceshi()">测试</a-button>
          </a-form-model-item>
        </a-form-model>
      
      </a-col>
    </a-row>
  </div>
</template>
<script>

export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
        repassword: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名" },
          { whitespace: true, message: "不能输入空格" },
        ],
        password: [
          { required: true, message: "请输入密码" },
          { whitespace: true, message: "不能输入空格" },
        ],
        repassword: [
          { required: true, message: "请再次输入密码" },
          { whitespace: true, message: "不能输入空格" },
        ],
      },
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
    };
  },
  computed: {
    cdis() {
      return (
        this.form.username == "" ||
        this.form.password == "" ||
        this.form.repassword == ""
      );
    },
  },
  methods: {
    ceshi(){
    window.console.log(this.$route.params.users);
    
    },
    zhuce() {   
         let username = document.getElementById("username").value;
         let a = this.$route.params.users.find(function (username1) {
         return username1.username === username;
         });
         window.console.log(a);
         
          if (a) {
           this.$message.info("注册失败，用户名存在");
         } else {
           this.$message.info("注册成功");
         }
      //  let form = JSON.parse(JSON.stringify(this.form));
      //  if (form.username ==) {
      //   this.$message.info({
      //     content:'两次输入密码不一致',
      //     duration:3,
      //   });
      // } else {
      //   this.$message.info({
      //     content:'注册成功',
      //     duration:3,
      //   });
      
      // }
    },
    resetForm(formname) {
      this.$refs[formname].resetFields();
    },
    gologin() {
      this.$router.push("/");
    },

  },
};
</script>
<style scoped>
.register {
  background-image: url("../img/login.jpg");
  background-size: cover;
}
.sign{
  text-align: center;
}
</style>