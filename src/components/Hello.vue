<template>
  <div class="">
    我是首页
    <div class="box">
      <div class="item">
        tt
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
$baseColor: #3b99fc;
.box{
  width: 100px;
  height: 200px;
  background: $baseColor;
  display: flex;
  justify-content: center;
  align-items: center;
  .item {
    width: 30px;
    height: 60px;
    background: yellow;
  }
}
</style>
