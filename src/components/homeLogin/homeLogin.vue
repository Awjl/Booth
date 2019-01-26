<template>
  <div class="homeLogin">
    <div class="LoginMen">
      <!-- 无用户 -->
      <div class="LoginItem" v-if="!this.$store.state.user.UserID">
        <div class="sign">
          <img src="../../assets/images/home/signUp.png" alt>
          <div class="signIcon">
            <img src="../../assets/images/icon/man.png" alt>
          </div>
        </div>
        <div class="signBtn" @click="toSign">加入booth</div>
      </div>
      <!-- 有用户 -->
      <div class="LoginItem" v-else>
        <div class="LoginItemLogo">
          <img :src="`http://47.101.165.134/${this.$store.state.userData.logoPicUrl}`" alt>
        </div>
        <div class="LoginItemTitle">
          <p>{{this.$store.state.userData.name}}</p>
          <p>{{this.$store.state.userData.fansNumber}}位关注者</p>
          <p>{{this.$store.state.userData.oneIndustryname}}</p>
        </div>
        <div class="LoginItemUser">
          <p>谁看过我</p>
          <div class="LoginItemUserList">
            <p v-if="attentionUserList.attentionMe.length === 0">暂无数据</p>
            <div
              class="LoginItemUserImg"
              v-for="(item, index) in attentionUserList.attentionMe"
              :key="index"
              @click="toOthercore(item.id)"
            >
              <img :src="`http://47.101.165.134/${item.logoUrl}`" alt>
            </div>
          </div>
        </div>
        <div class="LoginItemUser">
          <p>我看过谁</p>
          <div class="LoginItemUserList">
            <p v-if="attentionUserList.attentionTo.length === 0">暂无数据</p>
            <div
              class="LoginItemUserImg"
              v-for="(item, index) in attentionUserList.attentionTo"
              :key="index"
              @click="toOthercore(item.id)"
            >
              <img :src="`http://47.101.165.134/${item.logoUrl}`" alt>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="Interest">
      <div class="InterestItem">
        <div class="InterestHead">
          <span>你可能感兴趣的</span>
          <span @click="toenterprise">了解更多</span>
        </div>
        <div class="InterestList" v-for="(item, index) in dataList" :key="index">
          <!-- <div class="InterestList" v-if="item.exhibition">
            <p class="boothNum">A2022</p>
          </div>-->
          <div class="enterpriseItem">
            <div class="enterpriseItemLeft">
              <div class="enterpriseItemHead" @click="toOthercore(item.user.id)">
                <img :src="`http://47.101.165.134${item.user.logoUrl}`" alt>
              </div>
              <div class="enterpriseItemLeftTitle">
                <p>{{item.user.name}}</p>
                <p>{{item.user.fansNumber}}位关注者</p>
                <p>{{item.user.industryName}}</p>
              </div>
            </div>
            <div class="enterpriseItemRight">
              <div class="InterestListshare">分享</div>
              <div class="InterestListSee" @click="toMover(item.user.id)">查看产品手册</div>
            </div>
          </div>
          <div class="already" v-if="item.exhibition">
            <div class="alreadyHead">
              <span>已参加</span>
              <p>
                {{item.exhibition.nameEng}}
                <br>
                {{item.exhibition.name}}
              </p>
            </div>
            <div class="alreadyTime">{{item.exhibition.date}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mayBeInterestedCompany, getAttention, ERR_OK } from "@/api/api.js";

export default {
  name: "homeLogin",
  data() {
    return {
      userData: {
        firstIndustryId: this.$store.state.userData.oneIndustry,
        secondIndustryId: this.$store.state.userData.twoIndustry,
        id: this.$store.state.user.UserID
      },
      dataList: [],
      attentionUserList: {
        attentionMe: [],
        attentionTo: []
      }
    };
  },
  created() {
    console.log(this.$store.state.user.UserID);
    console.log(this.userData);
    if (this.$store.state.user.UserID) {
      this._mayBeInterestedCompany();
      this._getAttention();
    } else {
      this.userData.secondIndustryId = "";
      this._mayBeInterestedCompany();
    }
  },
  methods: {
    _mayBeInterestedCompany() {
      console.log(this.userData);
      mayBeInterestedCompany(this.userData).then(res => {
        if (res.status === ERR_OK) {
          this.dataList = res.data.data;
          console.log(res.data.data);
        }
      });
    },
    _getAttention() {
      getAttention(this.$store.state.user.UserID).then(res => {
        if (res.data.code === 0) {
          console.log("谁看过谁-----------------------------------");
          this.attentionUserList = res.data.data;
          console.log(this.attentionUserList);
        }
      });
    },
    toOthercore(id) {
      this.$router.push({
        path: `/othercore`,
        query: { id: id }
      });
    },
    toenterprise() {
      if (this.$store.state.user.UserID) {
        this.$router.push({
          path: "/enterprise"
        });
      } else {
        alert("请登录");
      }
    },
    toSign() {
      this.$router.push({
        path: `/sign`
      });
    },
    toMover(id) {
      console.log(id);
      this.$router.push({
        name: `productList`,
        query: { id: id }
      });
    }
  }
};
</script>

<style lang="scss">
.he40 {
  height: 40px;
}
.homeLogin {
  width: 100%;
  .LoginMen {
    width: 100%;
    // height: 260px;
    background: #ebebeb;
    .LoginItem {
      width: 100%;
      height: 100%;
      padding: 30px 46px;
      box-sizing: border-box;
      background: rgba($color: #2c73a1, $alpha: 0.3);
      .sign {
        width: 100%;
        height: 78px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .signIcon {
          width: 78px;
          height: 78px;
          background: #fff;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .signBtn {
        width: 146px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        background: #000;
        color: #ffffff;
        font-size: 22px;
        margin: 70px auto 0;
        cursor: pointer;
      }
      .LoginItemLogo {
        width: 66px;
        height: 66px;
        margin: 0 auto;
      }
      .LoginItemTitle {
        text-align: center;
        p:nth-child(1) {
          font-size: 24px;
        }
        p:nth-child(2) {
          // font-size: 24px;
          margin: 10px 0 4px;
        }
        p:nth-child(3) {
          font-size: 10px;
          color: #2c73a1;
        }
      }
      .LoginItemUser {
        margin: 20px 0;
        p {
          font-size: 10px;
          height: 24px;
          line-height: 24px;
        }
        .LoginItemUserList {
          display: flex;
          flex-wrap: wrap;
          p {
            font-size: 10px;
          }
          .LoginItemUserImg {
            width: 18%;
            height: 50px;
            margin-right: 2%;
            background: #fff;
            margin-bottom: 10px;
            cursor: pointer;
          }
        }
      }
    }
  }
  .Interest {
    width: 100%;
    margin-top: 12px;
    background: #ebebeb;
    .InterestItem {
      width: 100%;
      height: 100%;
      padding: 15px;
      box-sizing: border-box;
      background: rgba($color: #2c73a1, $alpha: 0.3);
      .InterestHead {
        width: 100%;
        display: flex;
        justify-content: space-between;
        span:nth-child(1) {
          font-size: 18px;
        }
        span:nth-child(2) {
          font-size: 14px;
          font-weight: bold;
          cursor: pointer;
        }
      }
    }
    .InterestList {
      margin-top: 30px;
      .boothNum {
        font-size: 14px;
        font-weight: bold;
        height: 30px;
        line-height: 30px;
      }
      .InterestListMove {
        margin: 20px 0;
        display: flex;
        justify-content: center;
      }
      .enterpriseItem {
        height: 66px;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        .enterpriseItemLeft {
          display: flex;
          height: 100%;
          .enterpriseItemHead {
            img {
              width: 66px;
              height: 66px;
              cursor: pointer;
            }
          }
          .enterpriseItemLeftTitle {
            height: 100%;
            margin-left: 10px;
            p:nth-child(1) {
              font-size: 26px;
              font-weight: bold;
            }
            p:nth-child(2) {
              font-size: 14px;
              margin-top: 10px;
            }
            p:nth-child(3) {
              font-size: 12px;
              margin-top: 6px;
              color: #326b90;
            }
          }
        }
        .enterpriseItemRight {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: space-between;
          .InterestListshare {
            width: 50px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            color: #fff;
            background: #326b90;
            font-size: 10px;
            cursor: pointer;
          }
          .InterestListSee {
            width: 90px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            color: #fff;
            background: #326b90;
            font-size: 10px;
            cursor: pointer;
          }
        }
      }
    }
    .already {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      border-top: 2px solid #707070;
      .alreadyHead {
        width: 250px;
        display: flex;
        align-items: center;
        span {
          display: block;
          width: 66px;
          height: 34px;
          text-align: center;
          line-height: 34px;
          background: #000;
          color: #fff;
        }
        p {
          width: 160px;
          font-size: 10px;
          margin-left: 8px;
          // margin-top: 5px;
        }
      }
      .alreadyTime {
        font-size: 14px;
        color: #fff;
        width: 100px;
      }
    }
  }
}
</style>
