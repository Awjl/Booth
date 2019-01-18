res.data.data.<template>
  <div class="signDetails">
    <div class="signBgTwo">
      <div class="signBgInfoLog">
        <div
          class="infoLog"
          @click="tohome"
        >
          <img
            src="../../assets/images/home/logo.png"
            alt
          >
        </div>
        <div class="infoLog">
          <p>入驻booth</p>
          <p>目前只开放企业用户注册</p>
        </div>
      </div>
      <div class="signBgMain">
        <div class="signBgMainLeft">
          <div class="signBgMainList">基础信息</div>
          <div class="signBgMainList">行业及商业伙伴</div>
          <div class="signBgMainList ListAct">其他信息</div>
          <div class="signBgMainList">形象展示</div>
          <div class="signBgMainList">信息核对</div>
        </div>
        <div class="signBgMainRight">
          <div class="signBgThreeMainList">
            <p>您可以上传相关素材支撑您的企业资质</p>
            <p>例如：主要产品、专利证书、制造车间、企业文化相关照片、视频等</p>
            <div class="UpImg">
              <div class="UpimgList">
                <label for="upTop">+</label>
                <input
                  @change="upImg"
                  type="file"
                  id="upTop"
                  value="图片上传预览"
                  multiple
                >
              </div>
              <div class="imgList">
                <div
                  class="imgListItem"
                  v-for="(item, index) in imgList"
                  :key="index"
                >
                  <img
                    :src="item"
                    alt
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="signBgMainFootTwo">
            <span @click="toBack">上一页</span>
            <div>
              <span @click="preservation">保存并返回到首页</span>
              <span @click="toNext">下一页</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { addUserInfo, ERR_OK } from "@/api/api.js";
import { setUser } from "@/utils/auth.js";

export default {
  name: "sign",
  data() {
    return {
      imgList: [],
      upImgList: [],
      formData: new FormData(),
      imgType: {
        type: "image/jpeg, image/png, image/jpg"
      }
    };
  },
  created() {
    this.imgList = this.$store.state.userData.imgListUrl
  },
  methods: {
    _addUserInfo() {
      addUserInfo(this.formData).then(res => {
        if (res.data.code === 0) {
          setUser(this.$store.state.user.UserID)
          this.$router.push({
            path: `/home`
          });
        }
      });
    },
    preservation() {
      this.$store.commit("SET_imgList", this.upImgList);
      this.$store.commit("SET_imgListUrl", this.imgList);

      this.formData.append("id", this.$store.state.user.UserID);
      this.formData.append("name", this.$store.state.userData.name);
      this.formData.append("engName", this.$store.state.userData.nameEng);
      this.formData.append("member", this.$store.state.userData.member);
      this.formData.append("address", this.$store.state.userData.address);
      this.formData.append("linkman", this.$store.state.userData.linkman);
      this.formData.append("position", this.$store.state.userData.position);
      this.formData.append("mobile", this.$store.state.userData.mobile);
      this.formData.append(
        "linkmanEmail",
        this.$store.state.userData.linkmanEmail
      );
      this.formData.append(
        "oneIndustry",
        this.$store.state.userData.oneIndustry
      );
      this.formData.append(
        "twoIndustry",
        this.$store.state.userData.twoIndustry
      );
      this.formData.append(
        "competitor", this.$store.state.userData.competitor
      );
      this.formData.append(
        "keywords", this.$store.state.userData.keywords
      );
      this.formData.append(
        "mainProcess", this.$store.state.userData.mainProcess
      );
      this.formData.append(
        "facilitator", this.$store.state.userData.facilitator
      );
      this.formData.append("summary", this.$store.state.userData.summary);
      this.formData.append(
        "exhibitions", this.$store.state.userData.exhibitions
      );
      this.formData.append(
        "customer", this.$store.state.userData.customer
      );
      for (let i = 0; i <= this.$store.state.userData.imgList.length; i++) {
        this.formData.append("companyPics", this.$store.state.userData.imgList[i]);
      }
      this.formData.append("logoPic", this.$store.state.userData.logoPic);
      this.formData.append(
        "introductionPic",
        this.$store.state.userData.introductionPic
      );
      this.formData.append(
        "supplier", this.$store.state.userData.supplier
      );
      this._addUserInfo();
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
          reader.onload = function (e) {
            _this.imgList.push(e.target.result);
          };
          this.upImgList.push(Img);
        }
      }
    },

    toBack() {
      this.$router.push({
        path: `/infoTwo`
      });
    },
    tohome() {
      this.$router.push({
        path: `/home`
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
