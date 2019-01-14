<template>
  <div class="boot">
    <div class="bootLogo"><div class="logo"></div></div>
    <div class="bootBg"><Choice v-on:cliceToBooth="cliceToBooth"></Choice></div>
    <div class="bootFoot">
      <div class="footImg">
        <img src="../../assets/images/guide/item1.png" alt="" />
        <img src="../../assets/images/guide/item2.png" alt="" />
        <img src="../../assets/images/guide/item3.png" alt="" />
        <img src="../../assets/images/guide/item4.png" alt="" />
        <img src="../../assets/images/guide/item5.png" alt="" />
        <img src="../../assets/images/guide/item6.png" alt="" />
        <img src="../../assets/images/guide/item7.png" alt="" />
        <img src="../../assets/images/guide/item8.png" alt="" />
        <img src="../../assets/images/guide/item9.png" alt="" />
      </div>
      <div class="footText">Shanghai maiyu technology co.LTD</div>
    </div>
    <div class="bootBox" v-if="title">
      <p class="black" @click="heavy()">
        <i class="icon iconBack"></i>返回，重新选择
      </p>
      <div class="ToBox">
        <p>{{ title }}</p>
        <div @click="toHome()">进入booth</div>
      </div>
    </div>
  </div>
</template>

<script>
import Choice from "@/components/choice/choice.vue";
import { getIndustry, ERR_OK} from "@/api/api.js";

export default {
  name: "boot",
  data() {
    return {
      title: "",
      industryData: []
    };
  },
  created() {
    this._getIndustry()
  },
  components: {
    Choice
  },
  methods: {
    _getIndustry() {
      console.log('123')
      getIndustry().then((res) => {
        if (res.status === ERR_OK) {
          this.industryData =res.data
          console.log(this.industryData)
        }
      })
    },
    cliceToBooth(ToBooth) {
      this.title = ToBooth;
      console.log(this.title);
    },
    heavy() {
      this.title = "";
    },
    toHome() {
      this.$router.push({
        path: `/home`
      });
    }
  }
};
</script>

<style lang="scss">
.boot {
  width: 100vw;
  height: 100vh;
  .bootLogo {
    width: 100vw;
    height: 134px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .bootBg {
    height: calc(100vh - 263px);
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .bootFoot {
    height: 129px;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #326b90;
    .footImg {
      img {
        margin: 0 10px;
      }
    }
    .footText {
      font-size: 12px;
      margin-top: 20px;
    }
  }
  .bootBox {
    height: 100vh;
    width: 362px;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .black {
      color: #fff;
      font-size: 12px;
      margin-bottom: 4px;
      cursor: pointer;
    }
    .ToBox {
      width: 362px;
      height: 144px;
      background: #fff;
      p {
        color: #3c586d;
        width: 100%;
        text-align: center;
        font-size: 20px;
        margin: 26px 0 16px;
        font-weight: 600;
      }
      div {
        width: 232px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        background: #326b90;
        color: #fff;
        font-size: 16px;
        margin: 0 auto;
        cursor: pointer;
      }
    }
  }
}
</style>
