<template>
  <div class="signDetails">
    <div class="signBgTwo">
      <div class="signBgInfoLog">
        <div class="infoLog" @click="tohome">
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
          <div class="signBgMainList ListAct" @click="toFour">形象展示</div>
          <div class="signBgMainList" @click="toFive">信息核对</div>
        </div>
        <div class="signBgMainRight">
          <div class="signBgFourMainList">
            <div class="signBgFourLogo">
              <div class="signBgFourLogoP">企业Logo</div>
              <div class="signBgFourLogoImg"></div>
              <div class="signBgFourLogoP">公司介绍页</div>
              <div class="signBgFourLogoImg"></div>
            </div>
            <div class="signBgFourproduct">
              <div class="signBgFourHeard">产品手册展示</div>
              <div class="signBgFourproductList">
                <div class="brochureItem">
                  <div class="brochureItemImg"></div>
                  <div class="brochureItemText">
                    <div class="brochureItemmanual">
                      <p>某某公司企业宣传手册</p>
                      <div class="label">
                        <span>标签</span><span>标签</span><span>标签</span>
                      </div>
                      <div class="brochureintroduce"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="signBgMainFoot">
            <span>保存并返回到首页</span><span>下一页</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sign",
  methods: {
    tohome() {
      this.$router.push({
        path: `/home`
      });
    },
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
  .signBgTwo {
    height: 100%;
    width: 100%;
    .signBgInfoLog {
      height: 90px;
      padding: 10px;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .infoLog {
        color: #fff;
        text-align: center;
        img {
          cursor: pointer;
        }
        p:nth-child(1) {
          font-size: 50px;
        }
        p:nth-child(2) {
          font-size: 20px;
        }
      }
    }
    .signBgMain {
      height: calc(100% - 90px);
      margin: 0 auto;
      max-width: 1200px;
      width: 100%;
      padding: 0 30px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      .signBgMainLeft {
        height: 496px;
        width: 200px;
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
      .signBgMainRight {
        width: calc(100% - 200px);
        padding: 0 80px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: auto;
        .signBgFourMainList {
          display: flex;
          justify-content: space-between;
          width: 100%;
          .signBgFourLogo {
            width: 20%;
            .signBgFourLogoP {
              font-size: 16px;
              color: #fff;
              margin: 10px 0;
            }
            .signBgFourLogoImg {
              width: 134px;
              height: 134px;
              background: #fff;
              margin-bottom: 40px;
            }
          }
          .signBgFourproduct {
            width: calc(80% - 40px);
            height: 410px;
            overflow: auto;
            background: rgba($color: #fff, $alpha: 0.5);
            margin: 0 20px 20px;
            box-sizing: border-box;
            .signBgFourHeard {
              font-size: 20px;
              color: #fff;
              padding: 0 20px;
              box-sizing: border-box;
              margin: 20px 0;
            }
            .signBgFourproductList {
              width: 100%;
              padding: 0 20px;
              box-sizing: border-box;
              .brochureItem {
                display: flex;
                justify-content: space-between;
                margin-bottom: 10px;
                .brochureItemImg {
                  width: 162px;
                  background: #fff;
                }
                .brochureItemText {
                  width: calc(100% - 182px);
                  margin-left: 20px;
                  .brochureItemHead {
                    display: flex;
                    justify-content: space-between;
                    .brochureItemNum {
                      font-weight: bold;
                      margin-top: 30px;
                    }
                  }
                  .brochureItemmanual {
                    p {
                      font-size: 16px;
                      margin: 6px 0;
                    }
                    .label {
                      span {
                        display: inline-block;
                        width: 60px;
                        height: 24px;
                        text-align: center;
                        line-height: 24px;
                        margin-right: 4px;
                        background: rgba($color: #000000, $alpha: 0.2);
                        color: #fff;
                      }
                    }
                    .brochureintroduce {
                      width: 100%;
                      height: 64px;
                      background: rgba($color: #000000, $alpha: 0.2);
                      margin-top: 10px;
                    }
                  }
                }
              }
            }
          }
        }
        .signBgMainFoot {
          display: flex;
          justify-content: flex-end;
          width: 100%;
          padding: 0 20px;
          box-sizing: border-box;
          span:nth-child(1) {
            display: inline-block;
            width: 110px;
            height: 32px;
            line-height: 32px;
            text-align: center;
            background: #000;
            color: #fff;
            font-size: 10px;
          }
          span:nth-child(2) {
            display: inline-block;
            width: 85px;
            height: 32px;
            line-height: 32px;
            text-align: center;
            background: #000;
            color: #fff;
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>
