<template>
  <div class="core">
    <div class="coreHeard">
      <div class="coreHeardLogo">
        <img :src="`${datalist.user.logoUrl}`" alt>
      </div>
      <div class="coreHeardName">
        <div class="coreHeardNameTop">
          <div class="coreName">
            <div class="coreNamehead">
              <span>{{datalist.user.name}}</span>
              <div>
                <p>普通会员</p>
                <p @click="toInfo">修改资料</p>
              </div>
            </div>
            <p>{{datalist.user.fansNumber}}位关注者</p>
            <p class="Industry">{{datalist.user.industryName}}</p>
          </div>
        </div>
        <div class="coreHeardNameBottom">
          <div class="follow"></div>
          <div class="over">
            <p>企业资料完成度{{this.$store.state.userData.Percent}}%</p>
            <div class="overBox">
              <div class="overBoxItem" :style="`width:${this.$store.state.userData.Percent}%;`"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="coreMain">
      <div class="coreAbout">
        <div class="coreAboutTop">
          <div class="coreAboutintroduction">
            <div class="coreAboutHead">关于我们</div>
            <div class="coreAboutText">{{datalist.user.summary}}</div>
            <div class="coreAboutHead">公司详情</div>
            <div class="coreAboutTtile">公司总部</div>
            <div class="coreAboutlist">{{datalist.user.address}}</div>
            <div class="coreAboutTtile">公司规模</div>
            <div class="coreAboutlist">
              <span v-if="datalist.user.member == 1">10-50</span>
              <span v-if="datalist.user.member == 2">50-100</span>
              <span v-if="datalist.user.member == 3">100-200</span>
              <span v-if="datalist.user.member == 4">200-500</span>
              <span v-if="datalist.user.member == 5">500以上</span>
            </div>
            <div class="coreAboutTtile">专注领域</div>
            <div class="coreAboutlist">
              <span
                v-for="(item, index) in datalist.user.mainProcess"
                :key="index"
                v-show="item.key != '点击输入'"
              >{{item.key}}</span>
            </div>
            <div class="coreAboutTtile">联系人</div>
            <div class="coreAboutlist">{{datalist.user.linkman}}</div>
            <div class="coreAboutTtile">职位</div>
            <div class="coreAboutlist">
              <span v-if="datalist.user.member == 1">市场及销售</span>
              <span v-if="datalist.user.member == 2">采购</span>
              <span v-if="datalist.user.member == 3">管理</span>
              <span v-if="datalist.user.member == 4">技术</span>
              <span v-if="datalist.user.member == 5">生产及运营</span>
              <span v-if="datalist.user.member == 6">其他</span>
            </div>
            <div class="coreAboutTtile">联系电话</div>
            <div class="coreAboutlist">{{datalist.user.linkmanMobile}}</div>
            <div class="coreAboutTtile">联系邮箱</div>
            <div class="coreAboutlist">{{datalist.user.linkmanEmail}}</div>
          </div>
          <div class="coreAboutintroductionImg">
            <div
              class="ItemImg"
              v-for="(item, index) in datalist.pictures"
              :key="index"
              @click="lookImg(item.picture.url, item.id)"
            >
              <img :src="`${item.picture.url}`" alt>
            </div>
          </div>
        </div>
        <div class="coreAboutBottom">
          <div class="coreAboutBottomItem">
            <div class="homeListHead">
              <div class="homeListImg">
                <div>
                  <img :src="`${datalist.user.logoUrl}`" alt>
                </div>
              </div>
              <div class="homeListTitle">
                <div class="name">{{datalist.user.name}}</div>
                <div class="nameEN">{{datalist.user.fansNumber}}位关注者</div>
                <p class="industry">{{datalist.user.industryName}}</p>
                <div
                  class="exhibition"
                  v-if="datalist.exhibition"
                  @click="toExt(datalist.exhibition.id)"
                >
                  <div class="exhibitionItem">
                    <div class="exhibitionCan">
                      <span>已参与</span>
                      <div class="exhibitionName">
                        {{datalist.exhibition.nameEng}}
                        <br>
                        {{this.$store.state.userData.exhibitionOne.name}}
                      </div>
                    </div>
                    <div class="exhibitionTime">
                      <span>{{datalist.exhibition.date}}</span>
                      <div class="exhibitionDetali">
                        <i class="icon iconTo"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="enterpriseItemRight">
                <div class="InterestListshare">分享</div>
                <div class="InterestListSee" @click="toMover(datalist.user.id)">查看产品手册</div>
              </div>
            </div>
            <div class="hometext">{{datalist.user.summary}}</div>
            <!-- <div class="moveBtn">更多</div> -->
            <div class="homeItemImg">
              <img :src="`${datalist.user.introductionUrl}`" alt>
            </div>
          </div>
        </div>
      </div>
      <div class="coreAboutLeft">
        <AboutList :products="datalist.products" :interestedExhibitions="Exhibitions"></AboutList>
      </div>
    </div>
    <div class="ImgBox" v-if="imgBoxShow" @click="lookImg() ">
      <img :src="imgList" alt>
    </div>
  </div>
</template>

<script>
import AboutList from "@/components/aboutList/aboutList.vue";
import {
  getCompanyInfo,
  viewPicture,
  getInfoPercent,
  ERR_OK
} from "@/api/api.js";

export default {
  name: "core",
  data() {
    return {
      imgBoxShow: false,
      imgList: "",
      mian: [],
      listMain: this.$store.state.userData.mainProcess,
      datalist: {
        exhibition: {
          id: "",
          name: "",
          nameEng: "",
          date: ""
        },
        isConcerned: "",
        pictures: [],
        products: [],
        user: {
          address: "",
          id: "",
          industryName: "",
          logoUrl: "",
          summary: "",
          introductionUrl: "",
          fansNumber: "",
          name: "",
          mainProcess: "",
          interestedExhibitions: ""
        }
      },
      Exhibitions: []
    };
  },
  created() {
    this._getCompanyInfo();
    getInfoPercent(this.$store.state.user.UserID).then(res => {
      if (res.status === ERR_OK) {
        console.log("获取百分比----------------------");
        this.$store.commit("SET_Percent", res.data.data);
      }
    });
  },
  methods: {
    _getCompanyInfo() {
      getCompanyInfo(
        this.$store.state.user.UserID,
        this.$store.state.user.UserID
      ).then(res => {
        if (res.status === ERR_OK) {
          this.datalist = res.data.data;
          this.datalist.user.mainProcess = JSON.parse(
            this.datalist.user.mainProcess
          );
          this.Exhibitions = JSON.parse(
            this.datalist.user.interestedExhibitions
          );
        }
      });
    },
    lookImg(url, id) {
      this.imgBoxShow = !this.imgBoxShow;
      this.imgList = url;
      viewPicture(id, this.$store.state.user.UserID).then(res => {
        if (res.data.code === 0) {
          console.log("查看成功");
        }
      });
    },
    toExt(id) {
      this.$router.push({
        path: `/exhibitionDetails`,
        query: { id: id }
      });
    },
    toInfo() {
      this.$router.push({
        name: `infoOne`,
        params: { id: this.$store.state.user.UserID }
      });
    }
  },
  components: {
    AboutList
  }
};
</script>

<style lang="scss" scoped>
.core {
  padding: 30px 20px;
  box-sizing: border-box;
  .coreHeard {
    display: flex;
    .coreHeardLogo {
      width: 170px;
      height: 170px;
      background: #fff;
      img {
        width: 100%;
      }
    }
    .coreHeardName {
      width: calc(100% - 170px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .coreHeardNameTop {
        display: flex;
        width: 100%;
        .coreName {
          width: 100%;
          padding-left: 30px;
          box-sizing: border-box;
          .coreNamehead {
            width: 100%;
            display: flex;
            justify-content: space-between;
            div {
              p {
                margin-top: 4px;
                color: #648aa2;
              }
              p:nth-child(2) {
                cursor: pointer;
              }
            }
            span {
              font-size: 28px;
              font-weight: bold;
            }
          }
          .Industry {
            margin-top: 10px;
            color: #648aa2;
          }
        }
      }
      .coreHeardNameBottom {
        padding-left: 30px;
        box-sizing: border-box;
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: flex-end;
        .follow {
          height: 30px;
          width: 60px;
          // line-height: 30px;
          // text-align: center;
          // background: #000;
          // color: #fff;
          // cursor: pointer;
        }
        .over {
          p {
            width: 100%;
            text-align: right;
            font-size: 28px;
            color: #2c73a1;
            margin-bottom: 20px;
          }
          .overBox {
            width: 500px;
            height: 12px;
            background: #fff;
            .overBoxItem {
              height: 12px;
              background: #326b90;
            }
          }
        }
      }
    }
  }
  .coreMain {
    display: flex;
    width: 100%;
    margin-top: 80px;
    .coreAbout {
      width: 60%;
      .coreAboutTop {
        width: 100%;
        padding: 30px 40px;
        background: rgba($color: #648aa2, $alpha: 0.3);
        box-sizing: border-box;
      }
      .coreAboutBottom {
        width: 100%;
        .coreAboutBottomItem {
          width: 100%;
          background: #fff;
          padding: 20px;
          margin: 10px 0;
          box-sizing: border-box;
          .homeListHead {
            display: flex;
            justify-content: space-between;
            border-bottom: 2px solid #707070;
            padding-bottom: 30px;
            .homeListImg {
              width: 66px;
              img {
                width: 100%;
              }
              .follow {
                width: 50px;
                height: 20px;
                // text-align: center;
                // line-height: 20px;
                // background: #000;
                // color: #fff;
                font-size: 10px;
                margin-top: 10px;
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
            height: auto;
            img {
              width: 100%;
            }
          }
        }
      }
      .coreAboutintroduction {
        width: 90%;
      }
      .coreAboutintroductionImg {
        width: 100%;
        margin-top: 40px;
        display: flex;
        flex-wrap: wrap;
        .ItemImg {
          width: 15%;
          padding: 6px;
          box-sizing: border-box;
          background: #fff;
          margin-left: 1%;
          margin-bottom: 10px;
        }
      }
      .coreAboutHead {
        font-size: 26px;
        margin: 20px 0 30px;
      }
      .coreAboutText {
        font-size: 16px;
        line-height: 26px;
        margin: 10px 0;
      }
      .coreAboutTtile {
        font-size: 16px;
        line-height: 26px;
        font-weight: bold;
      }
      .coreAboutlist {
        font-size: 16px;
        line-height: 26px;
        margin: 4px 0;
        span {
          margin-right: 20px;
        }
      }
    }
    .coreAboutLeft {
      width: 40%;
      min-width: 463px;
      padding-left: 30px;
      box-sizing: border-box;
    }
  }
  .ImgBox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba($color: #000000, $alpha: 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 30%;
    }
  }
}
</style>
