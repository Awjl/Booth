<template>
  <div class="homeList">
    <div class="homleListItem" v-for="(item, index) in dataList" :key="index">
      <div class="homeListHead">
        <div class="homeListImg">
          <div @click="toOthercore(item.user.id)">
            <img :src="`${item.user.logoUrl}`" alt>
          </div>
          <div class="follow" v-if="item.isConcerned === 2" @click="followId(item.user.id)">+ 关注</div>
          <div
            class="follow"
            v-if="item.isConcerned === 1"
            @click="cancelfollowId(item.user.id)"
          >+ 已关注</div>
        </div>
        <div class="homeListTitle">
          <div class="name">{{item.user.name}}</div>
          <div class="nameEN">{{item.user.fansNumber}}关注者</div>
          <p class="industry">{{item.user.industryName}}</p>
          <div
            class="exhibition"
            v-if="item.participation !== null"
            @click="toExt(item.participation.id)"
          >
            <div class="exhibitionItem">
              <div class="exhibitionCan">
                <span>已参与</span>
                <div class="exhibitionName">
                  {{item.participation.nameEng}}
                  <br>
                  {{item.participation.name}}
                </div>
              </div>
              <div class="exhibitionTime">
                <span>{{item.participation.date}}</span>
                <div class="exhibitionDetali">
                  <i class="icon iconTo"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="enterpriseItemRight">
          <div class="InterestListshare">分享</div>
          <div class="InterestListSee" @click="toMover(item.user.id)">查看产品手册</div>
        </div>
      </div>
      <div class="hometext">{{item.user.summary}}</div>
      <div class="moveBtn" @click="toOthercore(item.user.id)">更多</div>
      <div class="homeItemImg">
        <img :src="`${item.user.introductionUrl}`" alt>
      </div>
    </div>
  </div>
</template>

<script>
import { getRecommendCompany, focus, cancelFocus, ERR_OK } from "@/api/api.js";

export default {
  name: "homeList",
  data() {
    return {
      followData: {
        userId: "",
        concernedId: ""
      },
      upList: {
        firstIndustryId: "",
        secondIndustryId: "",
        id: ""
      },
      dataList: []
    };
  },
  created() {
    // console.log(this.$store.state.userData);
    if (this.$store.state.user.UserID) {
      this.upList.secondIndustryId = this.$store.state.userData.twoIndustry;
      this.upList.id = this.$store.state.user.UserID;
      this._getRecommendCompany();
    } else {
      this.upList.firstIndustryId = this.$store.state.userData.oneIndustry;
      this._getRecommendCompany();
    }
  },
  methods: {
    _getRecommendCompany() {
      getRecommendCompany(this.upList).then(res => {
        if (res.status === ERR_OK) {
          this.dataList = res.data.data;
        }
      });
    },
    _focus() {
      focus(this.followData).then(res => {
        if (res.status === ERR_OK) {
          this._getRecommendCompany();
        }
      });
    },
    _cancelFocus() {
      cancelFocus(this.followData).then(res => {
        if (res.status === ERR_OK) {
          this._getRecommendCompany();
        }
      });
    },
    toOthercore(id) {
      this.$router.push({
        path: `/othercore`,
        query: { id: id }
      });
    },
    toExt(id) {
      this.$router.push({
        path: `/exhibitionDetails`,
        query: { id: id }
      });
    },
    followId(id) {
      if (this.$store.state.user.UserID) {
        this.followData.userId = this.$store.state.user.UserID;
        this.followData.concernedId = id;
        this._focus();
      } else {
        alert("请登录");
      }
    },
    cancelfollowId(id) {
      if (this.$store.state.user.UserID) {
        this.followData.userId = this.$store.state.user.UserID;
        this.followData.concernedId = id;
        this._cancelFocus();
      } else {
        alert("请登录");
      }
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
.homeList {
  width: 100%;
  background: #fff;
  padding: 20px;
  box-sizing: border-box;
  .homleListItem {
    width: 100%;
    margin-bottom: 60px;
    .homeListHead {
      display: flex;
      justify-content: space-between;
      border-bottom: 2px solid #707070;
      padding-bottom: 30px;
      .homeListImg {
        width: 66px;
        img {
          width: 100%;
          cursor: pointer;
        }
        .follow {
          width: 60px;
          height: 20px;
          text-align: center;
          line-height: 20px;
          background: #000;
          color: #fff;
          font-size: 10px;
          margin-top: 10px;
          cursor: pointer;
        }
      }
      .homeListTitle {
        width: calc(100% - 186px);
        margin: 0 10px;
        .name {
          font-size: 24px;
        }
        .nameEN {
          margin: 4px 0;
        }
        .industry {
          color: #326b90;
          font-weight: bold;
          font-size: 12px;
        }
        .exhibition {
          width: 80%;
          min-width: 356px;
          height: 52px;
          background: #fff;
          margin-top: 20px;
          cursor: pointer;
          .exhibitionItem {
            width: 100%;
            height: 100%;
            background: rgba($color: #c8d3db, $alpha: 0.32);
            display: flex;
            justify-content: space-between;
            .exhibitionCan {
              display: flex;
              span {
                display: block;
                width: 60px;
                height: 52px;
                background: #326b90;
                color: #fff;
                text-align: center;
                line-height: 52px;
              }
              .exhibitionName {
                margin-top: 4px;
                margin-left: 10px;
                line-height: 20px;
                font-size: 12px;
              }
            }
            .exhibitionTime {
              display: flex;
              height: 56px;
              align-items: center;
              margin-right: 10px;
              span {
                display: flex;
                text-align: right;
                align-items: center;
                width: 90px;
                height: 52px;
                font-weight: bold;
                font-size: 12px;
              }
              .exhibitionDetali {
                width: 26px;
                height: 26px;
                display: flex;
                justify-content: center;
                align-items: center;
                box-sizing: border-box;
                background: #fff;
                border: 2px solid #707070;
                border-radius: 50%;
              }
            }
          }
        }
      }
      .enterpriseItemRight {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: 100px;
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
          margin-top: 5px;
          cursor: pointer;
        }
      }
    }
    .hometext {
      margin: 10px 0;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 1px;
    }
    .moveBtn {
      font-weight: bold;
      font-size: 16px;
      letter-spacing: 1px;
      cursor: pointer;
    }
    .homeItemImg {
      width: 100%;
      margin-top: 10px;
      img {
        width: 100%;
      }
    }
  }
}
</style>
