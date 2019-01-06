<template>
  <div class="core">
    <div class="coreHeard">
      <div class="coreHeardLogo"></div>
      <div class="coreHeardName">
        <div class="coreHeardNameTop">
          <div class="coreName">
            <p>基准方中建筑设计有限公司</p>
            <p>Sichuan，Chengdu 856 位关注者</p>
            <p>建筑设计行业</p>
          </div>
        </div>
        <div class="coreHeardNameBottom">
          <div class="">关注</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "core"
};
</script>

<style lang="scss" scoped>
.core {
  padding: 30px 20px;
  box-sizing: border-box;
  .coreHeard {
    display: flex;
    .coreHeardLogo {
      width: 170px;
      height: 170px;
      background: #fff;
    }
  }
}
</style>
