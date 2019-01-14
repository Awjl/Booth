<template>
  <div class="enterprise">
    <div class="enterpriseNav">
      <div class="enterpriseNavSeach">
        <span>筛选器/行业分类列表</span>
        <input
          type="text"
          placeholder="搜索企业"
        />
      </div>
      <div class="enterpriseNavBottom">
        <div class="enterpriseMian">
          <div class="enterpriseMianOne">一级分类</div>
          <div class="enterpriseMiantwo">二级分类</div>
          <div class="enterpriseMianthree">三级分类</div>
        </div>
        <div class="enterpriseList">
          <div
            class="enterpriseItem ItemAct"
            @click="toEnterprise"
          >发现</div>
          <div
            class="enterpriseItem"
            @click="toHistory"
          >历史记录</div>
          <div
            class="enterpriseItem"
            @click="toCollection"
          >收藏</div>
        </div>
      </div>

    </div>
    <div class="enterpriseBox">
      <div class="enterpriseBoxList">
        <div class="enterpriseBoxItem">
          <div class="homeListHead">
            <div class="homeListImg">
              <div><img
                  src="../../assets/images/home/head2.png"
                  alt
                /></div>
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
                    <div class="exhibitionName">
                      HOUSE VISION 2018 BEIJING EXHIBITION
                      <br />探索家——未来生活大展
                    </div>
                  </div>
                  <div class="exhibitionTime">
                    <span>2018年9月21日<br />11月6日</span>
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
          <div class="hometext">
            11月30日下午，由巴适成都联合报花探店、成都生活君、成都那些事儿、触摸成都等成都生活方式类新媒体账号举办的“传媒新势力·2018成都UP榜”在蔚来中心拉开序幕。会上发布了2018年成都UP榜单，基准方中荣获“成都UP榜
          </div>
          <div class="moveBtn">更多</div>
          <div class="homeItemImg">
            <img
              src="../../assets/images/home/item1.png"
              alt
            />
          </div>
        </div>
      </div>
      <div class="enterpriseBoxBaner">
        <div class="homeRight">
          <img
            src="../../assets/images/home/banner1.png"
            alt
          />
          <div class="homeTitle">
            <img
              src="../../assets/images/home/logo.png"
              alt
            />
            <img
              src="../../assets/images/home/logoText.png"
              alt
            />
          </div>
          <img
            src="../../assets/images/home/banner2.png"
            alt
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "enterprise",
  methods: {
    toEnterprise() {
      this.$router.push({
        path: `/enterprise`
      });
    },
    toHistory() {
      this.$router.push({
        path: `/history`
      });
    },
    toCollection() {
      this.$router.push({
        path: `/collection`
      });
    }
  }
};
</script>

<style lang="scss">
.enterprise {
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  .enterpriseNav {
    width: 240px;
    height: calc(100vh - 218px);
    padding: 0 10px;
    box-sizing: border-box;
    border-right: 1px dashed #707070;
    .enterpriseNavSeach {
      display: flex;
      justify-content: space-between;
      font-size: 10px;
      height: 30px;
      span {
        height: 20px;
        line-height: 20px;
      }
      input {
        width: 100px;
        height: 20px;
        line-height: 20px;
        padding: 0 10px;
        box-sizing: border-box;
        border: 1px solid #707070;
      }
    }
    .enterpriseNavBottom {
      height: calc(100% - 30px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .enterpriseMian {
      height: 360px;
      width: 100%;
      margin-top: 20px;
      background: rgba($color: #326b90, $alpha: 0.1);
      .enterpriseMianOne {
        width: 100%;
        height: 36px;
        line-height: 36px;
        padding: 0 10px;
        box-sizing: border-box;
        background: #326b90;
        font-size: 14px;
      }
      .enterpriseMiantwo {
        width: 100%;
        height: 36px;
        line-height: 36px;
        padding: 0 28px;
        box-sizing: border-box;
        background: rgba($color: #326b90, $alpha: 0.6);
        font-size: 10px;
      }
      .enterpriseMianthree {
        width: 100%;
        height: 36px;
        line-height: 36px;
        padding: 0 42px;
        box-sizing: border-box;
        font-size: 10px;
      }
    }
    .enterpriseList {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      .enterpriseItem {
        width: 100px;
        height: 24px;
        line-height: 24px;
        text-align: center;
        font-size: 18px;
        cursor: pointer;
      }
      .ItemAct {
        font-weight: bold;
      }
    }
  }
  .enterpriseBox {
    width: calc(100% - 240px);
    display: flex;
    .enterpriseBoxList {
      width: calc(100% - 306px);
      padding: 0 30px;
      box-sizing: border-box;
      .enterpriseBoxItem {
        width: 100%;
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
          img {
            width: 100%;
          }
        }
      }
    }
    .enterpriseBoxBaner {
      width: 100%;
      max-width: 306px;
      .homeRight {
        background: #2c73a1;
        padding: 14px 14px 24px;
        box-sizing: border-box;
        .homeTitle {
          margin: 14px 34px 24px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          border-bottom: 2px solid #fff;
          padding-bottom: 10px;
          img:nth-child(2) {
            margin: 0 0 10px 10px;
          }
        }
      }
    }
  }
}
</style>
