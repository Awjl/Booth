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
          <div class="signBgMainList ListAct" @click="toThree">其他信息</div>
          <div class="signBgMainList" @click="toFour">形象展示</div>
          <div class="signBgMainList" @click="toFive">信息核对</div>
        </div>
        <div class="signBgMainRight">
          <div class="signBgThreeMainList">
            <p>您可以上传相关素材支撑您的企业资质</p>
            <p>例如：主要产品、专利证书、制造车间、企业文化相关照片、视频等</p>
            <div class="UpImg">
              <div class="Upimg"></div>
              <div class="imgList">
                <div class="imgListItem"></div>
                <div class="imgListItem"></div>
                <div class="imgListItem"></div>
                <div class="imgListItem"></div>
                <div class="imgListItem"></div>
                <div class="imgListItem"></div>
                <div class="imgListItem"></div>
                <div class="imgListItem"></div>
                <div class="imgListItem"></div>
                <div class="imgListItem"></div>
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
      padding: 10px;
      width: 100%;
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
      display: flex;
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
      .signBgMainRight {
        width: calc(100% - 246px);
        padding: 0 80px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: auto;
        .signBgThreeMainList {
          p {
            font-size: 16px;
            color: #fff;
          }
          .UpImg {
            display: flex;
            margin: 50px 0;
            .Upimg {
              width: 132px;
              height: 132px;
              background: #fff;
              margin-right: 20px;
            }
          }
          .imgList {
            height: 284px;
            width: 608px;
            overflow: auto;
            display: flex;
            flex-wrap: wrap;
            .imgListItem {
              width: 132px;
              height: 132px;
              background: #fff;
              margin-right: 14px;
              margin-bottom: 14px;
            }
          }
        }
        .signBgMainFoot {
          display: flex;
          justify-content: flex-end;
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
