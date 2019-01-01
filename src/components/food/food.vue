<template>
  <div class="food">
    <div class="foodImg">
      <img src="../../assets/images/home/foodlogo.png" alt />
    </div>
    <div class="foodshare">
      <p>
        Basics contains components and complex blocks which can easily be
        untegrated
      </p>
      <p>into almost any design</p>
      <p>
        <img src="../../assets/images/home/f.png" alt />
        <img src="../../assets/images/home/t.png" alt />
        <img src="../../assets/images/home/i.png" alt />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "food"
};
</script>

<style lang="scss">
.food {
  width: 100vw;
  height: 158px;
  background: #326b90;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  box-sizing: border-box;
  .foodshare {
    p {
      color: #fff;
      text-align: right;
      margin-top: 10px;
      img {
        margin-left: 26px;
      }
    }
  }
}
</style>
