<template>
<div>
<div class="box">
    <h1>其他</h1>
</div>
</div>
</template>

<script>
export default {
  created() {
    this.$emit("sendtitle", this.title);
  },
 data(){
    return{
    title:'其他'
    }
  }
}
</script>

<style scoped>
.message {
  width: 100%;
}
.box {
  border: solid 5px;
  text-align: center;
  height: 100%;
}
</style>