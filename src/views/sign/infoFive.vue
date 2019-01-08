<template>
  <div class="signDetails">
    <div class="signBg">
      <div class="signBgInfoLog">
        <div class="infoLog">
          <img src="../../assets/images/home/logo.png" alt />
        </div>
        <div class="infoLog">
          <p>入驻booth</p>
          <p>目前只开放企业用户注册</p>
        </div>
      </div>
      <div class="signBgMain">
        <div class="signBgMainLeft">
          <div class="signBgMainList" @click="toOne">基础信息</div>
          <div class="signBgMainList" @click="toTwo">行业及商业伙伴</div>
          <div class="signBgMainList" @click="toThree">其他信息</div>
          <div class="signBgMainList" @click="toFour">形象展示</div>
          <div class="signBgMainList ListAct" @click="toFive">信息核对</div>
        </div>
        <div class="signBgMainRight"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sign",
  methods: {
    toOne() {
      this.$router.push({
        path: `/infoOne`
      });
    },
    toTwo() {
      this.$router.push({
        path: `/infoTwo`
      });
    },
    toThree() {
      this.$router.push({
        path: `/infoThree`
      });
    },
    toFour() {
      this.$router.push({
        path: `/infoFour`
      });
    },
    toFive() {
      this.$router.push({
        path: `/infoFive`
      });
    }
  }
};
</script>

<style lang="scss">
.signDetails {
  width: 100vw;
  height: 100vh;
  background: #2c73a1;
  overflow: auto;
  .signBg {
    height: 100%;
    width: 100%;
    .signBgInfoLog {
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      .infoLog {
        color: #fff;
        text-align: center;
        p:nth-child(1) {
          font-size: 50px;
        }
        p:nth-child(2) {
          font-size: 20px;
        }
      }
    }
    .signBgMain {
      height: 496px;
      width: 100%;
      padding: 0 30px;
      box-sizing: border-box;
      .signBgMainLeft {
        height: 100%;
        width: 246px;
        padding: 0 20px;
        border-right: 1px dashed #fff;
        .signBgMainList {
          width: 100%;
          text-align: right;
          font-size: 16px;
          color: #ddd;
          margin-bottom: 20px;
          cursor: pointer;
        }
        .ListAct {
          color: #fff;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
