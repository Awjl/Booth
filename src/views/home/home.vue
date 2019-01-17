<template>
  <div class="home">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in listImg" :key="index">
          <img :src="`http://47.101.165.134${item.bannerUrl.split(',')[0]}`" alt>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
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
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import HomeLogin from "@/components/homeLogin/homeLogin.vue";
import HomeList from "@/components/homeList/homeList.vue";
import HomeRight from "@/components/homeRight/homeRight.vue";
import { getIndexBanner, getInfoPercent, ERR_OK } from "@/api/api.js";
import { getUser } from "@/utils/auth.js";

export default {
  name: "home",
  data() {
    return {
      listImg: []
    };
  },
  created() {
    getIndexBanner().then(res => {
      if (res.status === ERR_OK) {
        console.log("获取banner----------------");
        this.listImg = res.data.data;
      }
    });
    getInfoPercent("33").then(res => {
      if (res.status === ERR_OK) {
        console.log("获取百分比----------------");
        console.log(res.data.data)
      }
    }) 
  },
  updated() {
    let _this = this;
    var swiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        click: function() {
          const realIndex = this.realIndex;
          _this.toDetails(realIndex);
        }
      }
    });
  },
  methods: {
    toDetails(id) {
      this.$router.push({
        path: `/exhibitionDetails`,
        query: { id: this.listImg[id].id }
      });
    }
  },
  components: {
    HomeLogin,
    HomeList,
    HomeRight
  }
};
</script>

<style lang="scss">
.home {
  .swiper-container {
    width: 100%;
    height: 472px;
    margin-left: auto;
    margin-right: auto;
  }
  .swiper-slide {
    width: 100%;
    height: 100%;
  }
  .swiper-slide > img {
    width: 100%;
    height: 100%;
  }
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
