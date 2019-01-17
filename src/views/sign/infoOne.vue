<template>
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
          <div class="signBgMainList ListAct">基础信息</div>
          <div class="signBgMainList">行业及商业伙伴</div>
          <div class="signBgMainList">其他信息</div>
          <div class="signBgMainList">形象展示</div>
          <div class="signBgMainList">信息核对</div>
        </div>
        <div class="signBgMainRight">
          <div class="signBgMainList">
            <div class="signBgMainRightItem">
              <p>企业中文全称</p>
              <input
                type="text"
                v-model="userData.name"
              >
            </div>
            <div class="signBgMainRightItem">
              <p>企业英文全称</p>
              <input
                type="text"
                v-model="userData.nameEng"
              >
            </div>
            <div class="signBgMainRightItem">
              <p>人数规模（勾选）</p>
              <select v-model="userData.member">
                <option value="1">10-50</option>
                <option value="2">50-100</option>
                <option value="3">100-200</option>
                <option value="4">200-500</option>
                <option value="5">500以上</option>
              </select>
            </div>
            <div class="signBgMainRightItem">
              <p>企业所在地</p>
              <input
                type="text"
                v-model="userData.address"
              >
            </div>
            <div class="signBgMainRightItem">
              <p>联系人</p>
              <input
                type="text"
                v-model="userData.linkman"
              >
            </div>
            <div class="signBgMainRightItem">
              <p>联系人职位（勾选）</p>
              <select v-model="userData.position">
                <option value="1">销售</option>
                <option value="2">采购</option>
                <option value="3">经理</option>
              </select>
            </div>
            <div class="signBgMainRightItem">
              <p>联系人手机号码</p>
              <input
                type="text"
                v-model="userData.mobile"
              >
            </div>
            <div class="signBgMainRightItem">
              <p>联系人邮件</p>
              <input
                type="text"
                v-model="userData.linkmanEmail"
              >
            </div>
          </div>
          <div class="signBgMainFoot">
            <span @click="preservation">保存并返回到首页</span>
            <span @click="toNext">下一页</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { addUserInfo, ERR_OK } from "@/api/api.js";
import { getUser, setUser } from "@/utils/auth.js";
import { mapGetters } from "vuex";

export default {
  name: "sign",
  data() {
    return {
      formData: new FormData(),
      userData: {
        name: "",
        nameEng: "",
        member: "1",
        address: "", // 地点
        linkman: "",
        position: "1",
        mobile: "",
        linkmanEmail: ""
      }
    };
  },
  computed: {
    ...mapGetters(["UserID"])
  },
  created() {
    // console.log(this.UserID);
    // console.log(getUser());
    // setUser("17");
    this.userData = this.$store.state.userData;
    console.log(this.$store.state.user.UserID);
  },
  methods: {
    _addUserInfo() {
      addUserInfo(this.formData).then(res => {
        if (res.data.code === 0) {
          this.$router.push({
            path: `/home`
          });
        }
      });
    },
    preservation() {
      this.$store.commit("SET_NAME", this.userData.name);
      this.$store.commit("SET_NAMEENG", this.userData.nameEng);
      this.$store.commit("SET_MEMBER", this.userData.member);
      this.$store.commit("SET_ADDRESS", this.userData.address);
      this.$store.commit("SET_LINKMAN", this.userData.linkman);
      this.$store.commit("SET_POSITION", this.userData.position);
      this.$store.commit("SET_MOBILE", this.userData.mobile);
      this.$store.commit("SET_LINKMANEMAIL", this.userData.linkmanEmail);

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
        "competitor",
        JSON.stringify(this.$store.state.userData.competitor)
      );
      this.formData.append(
        "keywords",
        JSON.stringify(this.$store.state.userData.keywords)
      );
      this.formData.append(
        "mainProcess",
        JSON.stringify(this.$store.state.userData.mainProcess)
      );
      this.formData.append(
        "facilitator",
        JSON.stringify(this.$store.state.userData.facilitator)
      );
      this.formData.append("summary", this.$store.state.userData.summary);
      this.formData.append(
        "exhibitions",
        JSON.stringify(this.$store.state.userData.exhibitions)
      );
      this.formData.append(
        "customer",
        JSON.stringify(this.$store.state.userData.customer)
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
        "supplier",
        JSON.stringify(this.$store.state.userData.supplier)
      );
      this._addUserInfo();
    },
    toNext() {
      this.$store.commit("SET_NAME", this.userData.name);
      this.$store.commit("SET_NAMEENG", this.userData.nameEng);
      this.$store.commit("SET_MEMBER", this.userData.member);
      this.$store.commit("SET_ADDRESS", this.userData.address);
      this.$store.commit("SET_LINKMAN", this.userData.linkman);
      this.$store.commit("SET_POSITION", this.userData.position);
      this.$store.commit("SET_MOBILE", this.userData.mobile);
      this.$store.commit("SET_LINKMANEMAIL", this.userData.linkmanEmail);

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
        .signBgMainList {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
        }
        .signBgMainRightItem {
          width: 50%;
          padding: 0 20px;
          margin-bottom: 30px;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          box-sizing: border-box;
          p {
            font-size: 16px;
            color: #fff;
            margin: 6px 0;
            width: 100%;
          }
          input {
            padding: 0 10px;
            box-sizing: border-box;
            width: 100%;
            height: 32px;
            outline: none;
            background: rgba($color: #fff, $alpha: 0.5);
          }
          select {
            padding: 0 10px;
            box-sizing: border-box;
            width: 100%;
            height: 32px;
            outline: none;
            background: rgba($color: #fff, $alpha: 0.5);
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
            cursor: pointer;
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
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
