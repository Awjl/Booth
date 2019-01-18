<template>
  <div class="core">
    <div class="coreHeard">
      <div class="coreHeardLogo">
        <img
          :src="this.$store.state.userData.logoPicUrl"
          alt=""
        >
      </div>
      <div class="coreHeardName">
        <div class="coreHeardNameTop">
          <div class="coreName">
            <p>{{this.$store.state.userData.name}}</p>
            <p>{{this.$store.state.userData.fansNumber}}位关注者</p>
            <p>{{this.$store.state.userData.oneIndustryname}}</p>
          </div>
        </div>
        <div class="coreHeardNameBottom">
          <div class="follow">关注</div>
          <div class="over">
            <p>企业资料完成度70%</p>
            <div class="overBox">
              <div
                class="overBoxItem"
                style="width:70%;"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div @click="toInfo">修改资料</div>
    </div>
    <div class="coreMain">
      <div class="coreAbout">
        <div class="coreAboutTop">
          <div class="coreAboutintroduction">
            <div class="coreAboutHead">关于我们</div>
            <div class="coreAboutText">{{this.$store.state.userData.summary}}</div>
            <div class="coreAboutHead">公司详情</div>
            <!-- <div class="coreAboutTtile">公司网址</div>
            <div class="coreAboutlist">wwwbaidu.com</div> -->
            <div class="coreAboutTtile">公司总部</div>
            <div class="coreAboutlist">{{this.$store.state.userData.address}}</div>
            <div class="coreAboutTtile">创立年份</div>
            <div class="coreAboutlist">2019</div>
            <div class="coreAboutTtile">公司规模</div>
            <div class="coreAboutlist">11-50</div>
            <div class="coreAboutTtile">专注领域</div>
            <div class="coreAboutlist">
              <span
                v-for="(item, index) in main"
                :key="index"
              >{{item}}</span>
            </div>
          </div>
          <div class="coreAboutintroductionImg">
            <div class="ItemImg" v-for="(item, index) in this.$store.state.userData.imgListUrl" :key="index">
              <img :src="item.url" alt="">
            </div>
          </div>
        </div>
        <div class="coreAboutBottom">
          <div class="coreAboutBottomItem">
            <div class="homeListHead">
              <div class="homeListImg">
                <div>
                  <img
                    src="../../assets/images/home/head2.png"
                    alt
                  >
                </div>
                <div class="follow">+ 关注</div>
              </div>
              <div class="homeListTitle">
                <div class="name">基准方中建筑设计有限公司</div>
                <div class="nameEN">Sichuan，Chengdu 856关注者</div>
                <p class="industry">建筑设计行业</p>
                <div class="exhibition">
                  <div class="exhibitionItem">
                    <div class="exhibitionCan">
                      <span>已参与</span>
                      <div class="exhibitionName">HOUSE VISION 2018 BEIJING EXHIBITION
                        <br>探索家——未来生活大展
                      </div>
                    </div>
                    <div class="exhibitionTime">
                      <span>2018年9月21日
                        <br>11月6日
                      </span>
                      <div class="exhibitionDetali">
                        <i class="icon iconTo"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="enterpriseItemRight">
                <div class="InterestListshare">分享</div>
                <div class="InterestListSee">查看产品手册</div>
              </div>
            </div>
            <div class="hometext">11月30日下午，由巴适成都联合报花探店、成都生活君、成都那些事儿、触摸成都等成都生活方式类新媒体账号举办的“传媒新势力·2018成都UP榜”在蔚来中心拉开序幕。会上发布了2018年成都UP榜单，基准方中荣获“成都UP榜</div>
            <div class="moveBtn">更多</div>
            <div class="homeItemImg">
              <img
                src="../../assets/images/home/item1.png"
                alt
              >
            </div>
          </div>
        </div>
      </div>
      <div class="coreAboutLeft">
        <AboutList></AboutList>
      </div>
    </div>
  </div>
</template>

<script>
import AboutList from "@/components/aboutList/aboutList.vue";
// import {  } from "@/api/api.js";

export default {
  name: "core",
  data() {
    return {
      main: [],
      listMain: this.$store.state.userData.mainProcess
    };
  },
  mounted() {
    this.arr()
  },
  methods: {
    toInfo() {
      this.$router.push({
        name: `infoOne`,
        params: { "id": this.$store.state.user.UserID }
      });
    },
    arr() {
      let _this = this
      let arr = []
      JSON.parse(this.listMain).forEach((e) => {
        // _this.mian = e.key
        // console.log(e)
        if (e.key != '点击输入') {
          arr.push(e.key)
        }
        _this.main = arr
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
          padding-left: 30px;
          box-sizing: border-box;
          p:nth-child(1) {
            font-size: 28px;
            font-weight: bold;
          }
          p:nth-child(3) {
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
          line-height: 30px;
          text-align: center;
          background: #000;
          color: #fff;
          cursor: pointer;
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
                text-align: center;
                line-height: 20px;
                background: #000;
                color: #fff;
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
      }
      .coreAboutlist {
        font-size: 16px;
        line-height: 26px;
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
}
</style>
