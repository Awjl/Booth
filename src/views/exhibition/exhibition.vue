<template>
  <div class="exhibition">
    <Swiper></Swiper>
    <div class="exhibitionBottom">
      <div class="leftBtn"></div>
      <div class="exhibitionMain" @click="toDetails">
        <div class="exhibitionMainName">
          <p>HOUSE VISION 2018 BEIJING EXHIBITION</p>
          <p>探索家——未来生活大展</p>
        </div>
        <div class="exhibitionMainList">
          <div class="exhibitionMainItem">主题：NEW GRAVITY</div>
          <div class="exhibitionMainItem">时间：2018年9月21日—11月6日</div>
          <div class="exhibitionMainItem">地点：北京・国家体育场(鸟巢)南广场</div>
          <div class="exhibitionMainItem">简述：“CHINA HOUSE VISION探索家”</div>
          <div class="exhibitionMainItem">是一个思考中国未来生活形态的平 台，也是一个首次尝试将建筑、设 计、科技、制造等多个产业跨界合 作的项目。</div>
        </div>
      </div>
      <div class="leftRight"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "@/base/swiper/swiper.vue";

export default {
  methods: {
    toDetails() {
      this.$router.push({
        path: `/exhibitionDetails`
      });
    }
  },
  components: {
    Swiper
  }
};
</script>

<style lang="scss">
.exhibitionBottom {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  height: calc(100vh - 685px);
  width: 100%;
  background: #fff;
  .exhibitionMain {
    width: 90%;
    display: flex;
    cursor: pointer;
    .exhibitionMainName {
      width: 50%;
      padding: 0 5%;
      font-size: 24px;
    }
    .exhibitionMainList {
      width: 50%;
      padding: 0 5%;
      font-size: 14px;
      .exhibitionMainItem {
        margin: 6px 0;
      }
    }
  }
}
</style>
