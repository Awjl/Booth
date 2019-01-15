<template>
  <div class="signDetails">
    <div class="signBgTwo">
      <div class="signBgInfoLog">
        <div class="infoLog" @click="tohome">
          <img src="../../assets/images/home/logo.png" alt>
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
              <div class="UpimgList">
                <label for="upTop">+</label>
                <input @change="upImg" type="file" id="upTop" value="图片上传预览" multiple>
              </div>
              <div class="imgList">
                <div class="imgListItem" v-for="(item, index) in imgList" :key="index">
                  <img :src="item" alt>
                </div>
              </div>
            </div>
          </div>
          <div class="signBgMainFootTwo">
            <span>上一页</span>
            <div>
              <span>保存并返回到首页</span>
              <span @click="toNext">下一页</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { addUserInfo } from "@/api/api.js";

export default {
  name: "sign",
  data() {
    return {
      imgList: [],
      upImgList: [],
      imgType: {
        type: "image/jpeg, image/png, image/jpg"
      }
    };
  },
  created() {
    console.log(this.$store.state.userData.imgList);
    this.upImgList = this.$store.state.userData.imgList;
    let _this = this;
    this.$store.state.userData.imgList.forEach(function(e) {
      // _this.imgList
      const reader = new FileReader();
      reader.readAsDataURL(e);
      reader.onload = function(e) {
        _this.imgList.push(e.target.result);
      };
    });
  },
  methods: {
    _addUserInfo() {
      console.log(this.formData);
      addUserInfo(this.formData).then(res => {
        if (res.status === ERR_OK) {
          console.log("保存成功");
        }
      });
    },
    toNext() {
      this.$router.push({
        path: `/infoFour`
      });
      this.$store.commit("SET_imgList", this.upImgList);
    },
    upImg(e) {
      var avatarImg = e.target.files;
      for (var i = 0; i < avatarImg.length; i++) {
        var Img = e.target.files[i];
        var avatarImgsize = Img.size;
        var avatarImgtype = Img.type;
        if (this.imgType.type.indexOf(avatarImgtype) === -1) {
          this.$message.error("格式不正确");
          return false;
        } else {
          const _this = this;
          if (!e || !window.FileReader) return;
          const reader = new FileReader();
          reader.readAsDataURL(Img);
          reader.onload = function(e) {
            _this.imgList.push(e.target.result);
          };
          this.upImgList.push(Img);
        }
      }
    },
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
        .signBgThreeMainList {
          width: 100%;
          padding: 0 20px;
          box-sizing: border-box;
          p {
            font-size: 16px;
            color: #fff;
          }
          .UpImg {
            display: flex;
            margin: 50px 0;
            .UpimgList {
              width: 132px;
              height: 132px;
              background: #fff;
              overflow: hidden;
              position: relative;
              margin-right: 20px;
              label {
                position: absolute;
                top: 0;
                left: 0;
                display: block;
                width: 100%;
                height: 100%;
                // text-align: center;
                z-index: 999;
                font-size: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
              }
              input {
                opacity: 0;
              }
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
        .signBgMainFootTwo {
          display: flex;
          justify-content: space-between;
          width: 100%;
          padding: 0 20px;
          box-sizing: border-box;
          span {
            display: inline-block;
            width: 85px;
            height: 32px;
            line-height: 32px;
            text-align: center;
            background: #000;
            color: #fff;
            cursor: pointer;
          }
          div {
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
}
</style>
