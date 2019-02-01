<template>
  <div class="othercore">
    <div class="othercoreHeard">
      <div class="othercoreHeardLogo">
        <img :src="`${datalist.user.logoUrl}`" alt>
      </div>
      <p class="name">{{datalist.user.name}}</p>
      <p class="fans">{{datalist.user.fansNumber}}关注者</p>
      <p class="industryName">{{datalist.user.industryName}}</p>
      <div class="btn" v-if="datalist.isConcerned === 2" @click="followId(datalist.user.id)">+ 关注</div>
      <div
        class="btn"
        v-if="datalist.isConcerned === 1"
        @click="cancelfollowId(datalist.user.id)"
      >+ 已关注</div>
    </div>
    <div class="othercoreMain">
      <div class="othercoreAbout">
        <div class="othercoreAboutTop">
          <div class="othercoreAboutintroduction">
            <div class="othercoreAboutHead">关于我们</div>
            <div class="othercoreAboutText">{{datalist.user.summary}}</div>
            <div class="othercoreAboutHead">公司详情</div>
            <div class="othercoreAboutTtile">公司总部</div>
            <div class="othercoreAboutlist">{{datalist.user.address}}</div>
            <div class="othercoreAboutTtile">公司规模</div>
            <div class="othercoreAboutlist">
              <span v-if="datalist.user.member == 1">10-50</span>
              <span v-if="datalist.user.member == 2">50-100</span>
              <span v-if="datalist.user.member == 3">100-200</span>
              <span v-if="datalist.user.member == 4">200-500</span>
              <span v-if="datalist.user.member == 5">500以上</span>
            </div>
            <div class="othercoreAboutTtile">专注领域</div>
            <div class="othercoreAboutlist">
              <span
                v-for="(item, index) in datalist.user.mainProcess"
                :key="index"
                v-show="item.key != '点击输入'"
              >{{item.key}}</span>
            </div>
            <div class="othercoreAboutTtile">联系人</div>
            <div class="othercoreAboutlist">{{datalist.user.linkman}}</div>
            <div class="othercoreAboutTtile">职位</div>
            <div class="othercoreAboutlist">
              <span v-if="datalist.user.member == 1">市场及销售</span>
              <span v-if="datalist.user.member == 2">采购</span>
              <span v-if="datalist.user.member == 3">管理</span>
              <span v-if="datalist.user.member == 4">技术</span>
              <span v-if="datalist.user.member == 5">生产及运营</span>
              <span v-if="datalist.user.member == 6">其他</span>
            </div>
            <div class="othercoreAboutTtile">联系电话</div>
            <div class="othercoreAboutlist">{{datalist.user.linkmanMobile}}</div>
            <div class="othercoreAboutTtile">联系邮箱</div>
            <div class="othercoreAboutlist">{{datalist.user.linkmanEmail}}</div>
          </div>
          <div class="othercoreAboutintroductionImg">
            <div
              class="ItemImg"
              v-for="(item, index) in datalist.pictures"
              :key="index"
              @click="lookImg(item.picture.url, item.picture.id, item.isCollected)"
            >
              <img :src="`${item.picture.url}`" alt>
            </div>
          </div>
        </div>
        <div class="othercoreAboutBottom">
          <div class="othercoreAboutBottomItem">
            <div class="homeListHead">
              <div class="homeListImg">
                <div>
                  <img :src="`${datalist.user.logoUrl}`" alt>
                </div>
                <div
                  class="follow"
                  v-if="datalist.isConcerned === 2"
                  @click="followId(datalist.user.id)"
                >+ 关注</div>
                <div
                  class="follow"
                  v-if="datalist.isConcerned === 1"
                  @click="cancelfollowId(datalist.user.id)"
                >+ 已关注</div>
              </div>
              <div class="homeListTitle">
                <div class="name">{{datalist.user.name}}</div>
                <div class="nameEN">{{datalist.user.fansNumber}}位关注者</div>
                <p class="industry">{{datalist.user.industryName}}</p>
                <div
                  class="exhibition"
                  v-if="datalist.exhibition !== null"
                  @click="toExt(datalist.exhibition.id)"
                >
                  <div class="exhibitionItem">
                    <div class="exhibitionCan">
                      <span>已参与</span>
                      <div class="exhibitionName">
                        {{datalist.exhibition.nameEng}}
                        <br>
                        {{datalist.exhibition.name}}
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
      <div class="othercoreAboutLeft">
        <AboutItem
          :products="datalist.products"
          :id="this.$route.query.id"
          :interestedExhibitions="Exhibitions"
        ></AboutItem>
      </div>
    </div>
    <div class="ImgBox" v-if="imgBoxShow" @click="quxiao">
      <img :src="imgList" alt>
      <div v-if="isCollected == 1" @click.stop="_cancelCollection()">已收藏</div>
      <div v-if="isCollected == 2" @click.stop="_collection()">收藏</div>
    </div>
  </div>
</template>

<script>
import AboutItem from "@/components/aboutList/aboutItem.vue";
import {
  getCompanyInfo,
  focus,
  cancelFocus,
  viewPicture,
  collection,
  cancelCollection,
  ERR_OK
} from "@/api/api.js";

export default {
  name: "othercore",
  data() {
    return {
      imgBoxShow: false,
      imgList: "",
      isCollected: "",
      mian: [],
      followData: {
        userId: "",
        concernedId: ""
      },
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
          mainProcess: [],
          interestedExhibitions: ""
        }
      },
      Exhibitions: [],
      collectionData: {
        otherId: "",
        type: 2,
        userId: this.$store.state.user.UserID
      }
    };
  },
  created() {
    this._getCompanyInfo();
  },
  methods: {
    _collection() {
      collection(this.collectionData).then(res => {
        if (res.status === ERR_OK) {
          this.isCollected = 1;
          this._getCompanyInfo();
        }
      });
    },
    _cancelCollection() {
      console.log(this.collectionData);
      cancelCollection(this.collectionData).then(res => {
        if (res.status === ERR_OK) {
          this.isCollected = 2;
          this._getCompanyInfo();
        }
      });
    },
    _getCompanyInfo() {
      getCompanyInfo(this.$store.state.user.UserID, this.$route.query.id).then(
        res => {
          if (res.status === ERR_OK) {
            this.datalist = res.data.data;
            this.Exhibitions = JSON.parse(
              this.datalist.user.interestedExhibitions
            );
            this.datalist.user.mainProcess = JSON.parse(
              this.datalist.user.mainProcess
            );
          }
        }
      );
    },
    _focus() {
      focus(this.followData).then(res => {
        if (res.status === ERR_OK) {
          this._getCompanyInfo();
        }
      });
    },
    _cancelFocus() {
      cancelFocus(this.followData).then(res => {
        if (res.status === ERR_OK) {
          this._getCompanyInfo();
        }
      });
    },
    quxiao() {
      this.imgBoxShow = false;
    },
    lookImg(url, id, isCollected) {
      this.imgBoxShow = !this.imgBoxShow;
      this.imgList = url;
      this.isCollected = isCollected;
      this.collectionData.otherId = id;
      console.log(id);
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
    toMover(id) {
      this.$router.push({
        path: `/productList`,
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
    }
  },
  components: {
    AboutItem
  }
};
</script>

<style lang="scss" scoped>
.othercore {
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
    flex-direction: column;
    div {
      border: 1px solid red;
      color: red;
      margin-top: 30px;
      padding: 6px 30px;
      cursor: pointer;
    }
    img {
      width: 30%;
    }
  }
  .othercoreHeard {
    width: 100%;
    height: 256px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    .othercoreHeardLogo {
      width: 66px;
    }
    .name {
      font-size: 24px;
      font-weight: bold;
      margin: 20px 0 4px;
    }
    .fans {
      font-size: 12px;
      margin-bottom: 10px;
    }
    .industryName {
      font-size: 10px;
      margin-bottom: 20px;
    }
    .btn {
      width: 80px;
      height: 24px;
      background: #fff;
      color: #000;
      text-align: center;
      line-height: 24px;
      cursor: pointer;
    }
  }
  .othercoreMain {
    padding: 30px 20px;
    box-sizing: border-box;
    display: flex;
    width: 100%;
    margin-top: 80px;
    .othercoreAbout {
      width: 60%;
      .othercoreAboutTop {
        width: 100%;
        padding: 30px 40px;
        background: rgba($color: #648aa2, $alpha: 0.3);
        box-sizing: border-box;
      }
      .othercoreAboutBottom {
        width: 100%;
        .othercoreAboutBottomItem {
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
            height: auto;
            img {
              width: 100%;
            }
          }
        }
      }
      .othercoreAboutintroduction {
        width: 90%;
      }
      .othercoreAboutintroductionImg {
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
      .othercoreAboutHead {
        font-size: 26px;
        margin: 20px 0 30px;
      }
      .othercoreAboutText {
        font-size: 16px;
        line-height: 26px;
        margin: 10px 0;
      }
      .othercoreAboutTtile {
        font-size: 16px;
        line-height: 26px;
        font-weight: bold;
      }
      .othercoreAboutlist {
        font-size: 16px;
        line-height: 26px;
        margin: 4px 0;
        span {
          margin-right: 20px;
        }
      }
    }
    .othercoreAboutLeft {
      width: 40%;
      min-width: 463px;
      padding-left: 30px;
      box-sizing: border-box;
    }
  }
}
</style>
