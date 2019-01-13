<template>
  <div class="home">
    <Swiper></Swiper>
    <!-- <Swiper :listImg="listImg" :height="height"></Swiper> -->
    <div class="mian">
      <div class="mianLeft">
        <HomeLogin></HomeLogin>
      </div>
      <div class="mianList">
        <HomeList></HomeList>
      </div>
      <div class="mianRight">
        <HomeRight></HomeRight>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "@/base/swiper/swiper.vue";
import HomeLogin from "@/components/homeLogin/homeLogin.vue";
import HomeList from "@/components/homeList/homeList.vue";
import HomeRight from "@/components/homeRight/homeRight.vue";

export default {
  name: "home",
  data() {
    return {
      listImg: [
        { url: "../../assets/images/home/banner.png" },
        { url: "../../assets/images/home/banner.png" }
      ],
      height: "472"
    };
  },
  components: {
    Swiper,
    HomeLogin,
    HomeList,
    HomeRight
  }
};
</script>

<style lang="scss">
.home {
  .mian {
    padding: 30px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    .mianLeft {
      width: 100%;
      max-width: 396px;
    }
    .mianList {
      width: 100%;
      min-width: 576px;
      margin: 0 12px;
    }
    .mianRight {
      width: 100%;
      max-width: 307px;
    }
  }
}
</style>
