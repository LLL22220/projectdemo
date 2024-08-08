<template>
  <div>
    <p>用户列表</p>
  </div>
</template>

<script>
export default {
created() {
    this.$emit("sendtitle", this.title);
  },
  data(){
    return{
      title:'用户列表'
    }
  },
}
</script>

<style>

</style>