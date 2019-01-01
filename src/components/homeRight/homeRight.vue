<template>
  <div class="homeRight">
    <img src="../../assets/images/home/banner1.png" alt="" />
    <div class="homeTitle">
      <img src="../../assets/images/home/logo.png" alt="" />
      <img src="../../assets/images/home/logoText.png" alt="" />
    </div>
    <img src="../../assets/images/home/banner2.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "homeRight"
};
</script>

<style lang="scss">
.homeRight {
  background: #2c73a1;
  padding: 14px 14px 24px;
  box-sizing: border-box;
  .homeTitle {
    margin: 14px 34px 24px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    border-bottom: 2px solid #fff;
    padding-bottom: 10px;
    img:nth-child(2) {
      margin: 0 0 10px 10px;
    }
  }
}
</style>
