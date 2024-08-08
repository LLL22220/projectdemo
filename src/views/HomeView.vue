<template>
  <div>
    <div class="home">
      <a-input
        placeholder="请输入验证码"
        style="height: 38px; margin-right: 20px"
        v-model="formLogin.code"
      ></a-input>
      <div class="login-code" @click="refreshCode">
        <!--验证码组件-->
        <dentify :identifyCode="identifyCode"></dentify>
      </div>
    </div>
    <a-button @click="setUser()">提交验证码</a-button>
  </div>
</template>

<script>
import dentify from "./dentify";
export default {
  name: "HomeView",
  components: {
    dentify,
  },
  computed:{
  
  },
  data() {
    return {
      // 表单提交内容
        
      formLogin: {
        code: "", //验证码输入框
      },
      identifyCodes: "1234567890abcdefjhijklinopqrsduvwxyz", //随机串内容,从这里随机抽几个显示验证码
      identifyCode: "", //验证码图片内容
    };
  },
  mounted() {
    // 初始化验证码
    this.identifyCode = "";
    //参数：（1）随机串内容。（2）验证码显示位数
    this.makeCode(this.identifyCodes, 4);
  },
  methods: {
    // 重置验证码
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    //获取验证码的值
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        //通过循环获取字符串内随机几位
        this.identifyCode +=
          this.identifyCodes[this.randomNum(0, this.identifyCodes.length)];
      }
    },
    //随机数字：用于当角标拿字符串的值
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },

    // 传递校准信息
     setUser(){
      this.$emit('transfer',this.identifyCode == this.formLogin.code);
       window.console.log("验证码:", this.identifyCode);
      window.console.log("用户输入的验证码:", this.formLogin.code);
      window.console.log(
        "是否验证通过:",
        this.identifyCode == this.formLogin.code
      );
      if(this.identifyCode == this.formLogin.code){
        this.$message.info("验证码验证成功");
      }else{
        this.$message.info("验证码错误");
        this.refreshCode();
      }
     },
  },
};
</script>
<style scoped>
.home {
  display: flex;
}
</style>
