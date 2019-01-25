<template>
  <div class="aboutList">
    <div class="aboutListTop">
      <div class="aboutListHead">产品册</div>
      <div class="aboutTopList">
        <div class="aboutTopItem" v-for="(item, index) in aboutTopData" :key="index">
          <div class="brochureItemImg">
            <img :src="item.coverUrl" alt>
          </div>
          <div class="brochureItemText">
            <div class="brochureItemmanual">
              <div class="brochureItemmanualHead">
                <p>{{item.title}}</p>
                <div class="label">
                  <span
                    v-for="(item, num) in item.label.split(',')"
                    :key="num"
                    v-show="item"
                  >{{item}}</span>
                </div>
              </div>
              <div class="brochureintroduce">
                <p>阅读量{{item.readVolume}}</p>
                <p>{{item.createDate}}</p>
              </div>
            </div>
            <div class="brochuremover">
              <span>谁读过</span>
              <span>了解更多</span>
            </div>
            <div class="brochureReadLsit">
              <p v-if=" item.users.length === 0">暂无数据</p>
              <div v-for="(item, index) in item.users" :key="index"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="Seemover" @click="toMover">查看所有产品册</div>
    </div>
    <div class="aboutListMiddle">
      <div class="aboutListHead">
        <span>合作伙伴</span>
        <span>更多</span>
      </div>
      <div class="aboutListMiddleNav">
        <span :class="{act: indexType === 1}" @click="_getPartner(1)">主要顾客</span>
        <span :class="{act: indexType === 2}" @click="_getPartner(2)">主要供应商</span>
        <span :class="{act: indexType === 3}" @click="_getPartner(3)">主要第三方服务</span>
      </div>
      <div class="aboutListMiddlelist">
        <div v-for="(item, index) in cooperationData" :key="index">
          <div class="enterpriseItem" v-if="item.user">
            <div class="enterpriseItemLeft">
              <div class="enterpriseItemHead">
                <img :src="`http://47.101.165.134${item.user.logoUrl}`" alt>
              </div>
              <div class="enterpriseItemLeftTitle">
                <p v-if="item.user">{{item.user.name}}</p>
                <p v-if="item.user">{{item.user.fansNumber}}位关注者</p>
                <p v-if="item.user">{{item.user.industryName}}</p>
              </div>
            </div>
            <div class="enterpriseItemRight">
              <div class="InterestListshare">分享</div>
              <div class="InterestListSee">查看产品手册</div>
            </div>
          </div>
          <div class="already" v-if="item.exhibitions">
            <div class="alreadyHead">
              <span>已参加</span>
              <p>HOUSE VISION 2018 BEIJING EXHIBITION
                <br>探索家——未来生活大展
              </p>
            </div>
            <div class="alreadyTime">2018年9月21日</div>
          </div>
        </div>
      </div>
    </div>
    <div class="aboutListBootm">
      <div class="aboutListHead">
        <span>相似企业</span>
        <span @click="_getSimilarityCompany()">换一批</span>
      </div>
      <div class="aboutListMiddlelist">
        <div v-for="(item, index) in SimilarityCompanyData" :key="index">
          <div class="aboutListMiddleItem">
            <div class="enterpriseItem">
              <div class="enterpriseItemLeft">
                <div class="enterpriseItemHead">
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
                <div class="InterestListSee">查看产品手册</div>
              </div>
            </div>
          </div>
          <div class="already" v-if="item.exhibitions.length !== 0">
            <div class="alreadyHead">
              <span>已参加</span>
              <p>HOUSE VISION 2018 BEIJING EXHIBITION
                <br>探索家——未来生活大展
              </p>
            </div>
            <div class="alreadyTime">2018年9月21日</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getPartner, getSimilarityCompany } from "@/api/api.js";
export default {
  name: "aboutList",
  data() {
    return {
      aboutTopData: this.$store.state.userData.products,
      cooperationData: [],
      SimilarityCompanyData: [],
      indexType: 1,
      ID: ""
    };
  },
  created() {
    this._getPartner(1);
    this._getSimilarityCompany();
  },
  methods: {
    _getSimilarityCompany(id) {
      if (id) {
        this.ID = id;
      } else {
        this.ID = this.$store.state.user.UserID;
      }
      getSimilarityCompany(this.ID).then(res => {
        if (res.data.code === 0) {
          this.SimilarityCompanyData = res.data.data;
          console.log(res.data.data);
        }
      });
    },
    _getPartner(type) {
      this.indexType = type;
      console.log(type);
      getPartner(this.$store.state.user.UserID, type).then(res => {
        if (res.data.code === 0) {
          this.cooperationData = res.data.data;
          console.log(res.data.data);
        }
      });
    },
    toMover() {
      this.$router.push({
        path: `/productList`
      });
    }
  }
};
</script>

<style lang="scss">
.aboutList {
  width: 100%;
  .aboutListMiddleItem {
    padding: 0 10px 0 20px;
    box-sizing: border-box;
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
          width: 66px;
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
        }
        .InterestListSee {
          width: 90px;
          height: 30px;
          text-align: center;
          line-height: 30px;
          color: #fff;
          background: #326b90;
          font-size: 10px;
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
    margin: 20px 0;
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
      color: #000;
      width: 100px;
    }
  }
  .aboutListHead {
    font-size: 18px;
    font-weight: bold;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    span {
      font-size: 18px;
      font-weight: bold;
      display: inline-block;
    }
    span:nth-child(2) {
      background: #000;
      color: #fff;
      width: 50px;
      height: 20px;
      font-size: 10px;
      text-align: center;
      line-height: 20px;
      cursor: pointer;
    }
  }
  .aboutListTop {
    padding: 10px;
    box-sizing: border-box;
    background: rgba($color: #d6d6d6, $alpha: 0.5);
    margin-bottom: 10px;
    .aboutTopList {
      width: 100%;
      box-sizing: border-box;
      .aboutTopItem {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        .brochureItemImg {
          width: 120px;
          background: #fff;
        }
        .brochureItemText {
          width: calc(100% - 120px);
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
            display: flex;
            justify-content: space-between;
            align-items: center;
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
              p {
                font-size: 10px;
                text-align: right;
              }
            }
          }
          .brochuremover {
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            margin: 10px 0;
          }
          .brochureReadLsit {
            display: flex;
            flex-wrap: wrap;
            div {
              width: 18%;
              margin: 0 1%;
              height: 40px;
              background: #fff;
            }
          }
        }
      }
    }
    .Seemover {
      width: 85%;
      height: 42px;
      text-align: center;
      line-height: 42px;
      background: rgba($color: #648aa2, $alpha: 0.5);
      margin: 20px auto 0;
      cursor: pointer;
    }
  }
  .aboutListMiddle {
    padding: 10px;
    box-sizing: border-box;
    background: rgba($color: #d6d6d6, $alpha: 0.5);
    margin-bottom: 10px;
    .aboutListMiddleNav {
      display: flex;
      padding: 10px;
      justify-content: space-between;
      margin-bottom: 20px;
      span {
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        padding: 6px 0;
        &.act {
          border-bottom: 2px solid #000;
        }
      }
    }
  }
  .aboutListBootm {
    padding: 10px;
    box-sizing: border-box;
    background: rgba($color: #d6d6d6, $alpha: 0.5);
    margin-bottom: 10px;
  }
}
</style>
