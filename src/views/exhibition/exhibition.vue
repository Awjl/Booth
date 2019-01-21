<template>
  <div class="exhibition">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(item, index) in listImg"
          :key="index"
        >
          <img
            :src="`http://47.101.165.134${item.bannerUrl.split(',')[0]}`"
            alt
          >
          <div class="exhibitionBottom">
            <div
              class="exhibitionMain"
              @click="toDetails"
            >
              <div class="exhibitionMainName">
                <p>{{item.nameEng}}</p>
                <p>{{item.name}}</p>
              </div>
              <div class="exhibitionMainList">
                <div class="exhibitionMainItem">主题：{{item.title}}</div>
                <div class="exhibitionMainItem">时间：{{item.date}}</div>
                <div class="exhibitionMainItem">地点：{{item.location}}</div>
                <div class="exhibitionMainItem">简述：{{item.summary}}</div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>

  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

import { getIndexBanner, ERR_OK } from "@/api/api.js";
export default {
  data() {
    return {
      listImg: []
    };
  },
  created() {
    getIndexBanner().then(res => {
      if (res.status === ERR_OK) {
        this.listImg = res.data.data;
        console.log(this.listImg)
      }
    });
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
        click: function () {
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
  }
};
</script>

<style lang="scss">
.exhibition {
  .swiper-container {
    width: 100%;
    // height: 472px;
    margin-left: auto;
    margin-right: auto;
  }
  .swiper-slide {
    width: 100%;
    height: 100%;
  }
  .swiper-slide > img {
    width: 100%;
    height: 472px;
  }
}
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
