<template>
  <div class="searchPag">
    <div class="searchNav">
      <div class="searchList">
        <div class="searchItem">
          <div><span>企业</span><span>300个</span></div>
        </div>
        <div class="searchItem">
          <div><span>展会</span><span>300个</span></div>
        </div>
        <div class="searchItem">
          <div><span>企业动态</span><span>300个</span></div>
        </div>
        <div class="searchItem">
          <div><span>产品手册</span><span>300个</span></div>
        </div>
        <div class="searchItem">
          <div><span>产品图片</span><span>300个</span></div>
        </div>
      </div>
      <div class="searchText">
        <p>“金融圈xxxx”</p>
        <p>相关搜索结果</p>
      </div>
    </div>
    <div class="searchAll">
      <div class="searchMine">
        <div class="searchMineTop">
          <div class="searchTitle">
            <span>展会 exhibition</span>
            <div class="mover" @click="toExhibition">
              <i class="icon iconTo1"></i>
            </div>
          </div>
          <div class="exhibitionList">
            <div class="exhibitionItem">
              <div class="exhibitionItemImg">
                <img src="../../assets/images/search/one.png" alt="" />
              </div>
              <div class="exhibitionItemName">
                HOUSE VISION 2018 BEIJING EXHIBITION 探索家——未来生活大展
              </div>
            </div>
            <div class="exhibitionItem">
              <div class="exhibitionItemImg">
                <img src="../../assets/images/search/one.png" alt="" />
              </div>
              <div class="exhibitionItemName">
                HOUSE VISION 2018 BEIJING EXHIBITION 探索家——未来生活大展
              </div>
            </div>
            <div class="exhibitionItem">
              <div class="exhibitionItemImg">
                <img src="../../assets/images/search/one.png" alt="" />
              </div>
              <div class="exhibitionItemName">
                HOUSE VISION 2018 BEIJING EXHIBITION 探索家——未来生活大展
              </div>
            </div>
          </div>
        </div>
        <div class="searchMineBottom">
          <div class="searchTitle">
            <span>产品手册 brochure</span>
            <div class="mover" @click="toBrochure">
              <i class="icon iconTo1"></i>
            </div>
          </div>
          <div class="brochureList">
            <div class="brochureItem">
              <div class="brochureItemImg"></div>
              <div class="brochureItemText">
                <div class="brochureItemHead">
                  <div class="brochureItemName">
                    <div class="brochureItemLogo">
                      <img src="../../assets/images/home/head2.png" alt="" />
                    </div>
                    <div class="brochureLogoName">
                      <p>某某公司企业宣传手册</p>
                      <p>Sichuan，Chengdu 856关注者</p>
                      <p>建筑设计行业</p>
                    </div>
                  </div>
                  <div class="brochureItemNum">阅读量 3000+</div>
                </div>
                <div class="brochureItemmanual">
                  <p>某某公司企业宣传手册</p>
                  <div class="label">
                    <span>标签</span><span>标签</span><span>标签</span>
                  </div>
                  <div class="brochureintroduce"></div>
                </div>
              </div>
            </div>
            <div class="brochureItem">
              <div class="brochureItemImg"></div>
              <div class="brochureItemText">
                <div class="brochureItemHead">
                  <div class="brochureItemName">
                    <div class="brochureItemLogo">
                      <img src="../../assets/images/home/head2.png" alt="" />
                    </div>
                    <div class="brochureLogoName">
                      <p>某某公司企业宣传手册</p>
                      <p>Sichuan，Chengdu 856关注者</p>
                      <p>建筑设计行业</p>
                    </div>
                  </div>
                  <div class="brochureItemNum">阅读量 3000+</div>
                </div>
                <div class="brochureItemmanual">
                  <p>某某公司企业宣传手册</p>
                  <div class="label">
                    <span>标签</span><span>标签</span><span>标签</span>
                  </div>
                  <div class="brochureintroduce"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="searchRight">
        <div class="searchRightTop">
          <div class="searchTitle">
            <span>企业 company</span>
            <div class="mover" @click="toCompany">
              <i class="icon iconTo1"></i>
            </div>
          </div>
          <div class="companyList">
            <div class="companyItem">
              <div class="enterpriseItemLeft">
                <div class="enterpriseItemHead">
                  <img src="../../assets/images/home/TSNHCG_1_.png" alt="" />
                </div>
                <div class="enterpriseItemLeftTitle">
                  <p>altiuma</p>
                  <p>Roubaix 5,246 位关注者</p>
                  <p>建筑行业</p>
                </div>
              </div>
              <div class="enterpriseItemRight">
                <div class="InterestListshare">分享</div>
                <div class="InterestListSee">查看产品手册</div>
              </div>
            </div>
            <div class="companyItem">
              <div class="enterpriseItemLeft">
                <div class="enterpriseItemHead">
                  <img src="../../assets/images/home/TSNHCG_1_.png" alt="" />
                </div>
                <div class="enterpriseItemLeftTitle">
                  <p>altiuma</p>
                  <p>Roubaix 5,246 位关注者</p>
                  <p>建筑行业</p>
                </div>
              </div>
              <div class="enterpriseItemRight">
                <div class="InterestListshare">分享</div>
                <div class="InterestListSee">查看产品手册</div>
              </div>
            </div>
            <div class="companyItem">
              <div class="enterpriseItemLeft">
                <div class="enterpriseItemHead">
                  <img src="../../assets/images/home/TSNHCG_1_.png" alt="" />
                </div>
                <div class="enterpriseItemLeftTitle">
                  <p>altiuma</p>
                  <p>Roubaix 5,246 位关注者</p>
                  <p>建筑行业</p>
                </div>
              </div>
              <div class="enterpriseItemRight">
                <div class="InterestListshare">分享</div>
                <div class="InterestListSee">查看产品手册</div>
              </div>
            </div>
            <div class="companyItem">
              <div class="enterpriseItemLeft">
                <div class="enterpriseItemHead">
                  <img src="../../assets/images/home/TSNHCG_1_.png" alt="" />
                </div>
                <div class="enterpriseItemLeftTitle">
                  <p>altiuma</p>
                  <p>Roubaix 5,246 位关注者</p>
                  <p>建筑行业</p>
                </div>
              </div>
              <div class="enterpriseItemRight">
                <div class="InterestListshare">分享</div>
                <div class="InterestListSee">查看产品手册</div>
              </div>
            </div>
          </div>
        </div>
        <div class="searchRightmian">
          <div class="searchTitle">
            <span>产品图片 images</span>
            <div class="mover" @click="toImages">
              <i class="icon iconTo1"></i>
            </div>
          </div>
          <div class="searchimagesList">
            <div class="searchimagesItem"></div>
            <div class="searchimagesItem"></div>
            <div class="searchimagesItem"></div>
            <div class="searchimagesItem"></div>
            <div class="searchimagesItem"></div>
            <div class="searchimagesItem"></div>
            <div class="searchimagesItem"></div>
            <div class="searchimagesItem"></div>
            <div class="searchimagesItem"></div>
          </div>
        </div>
        <div class="searchRightBottom">
          <div class="searchTitle">
            <span>企业动态 event</span>
            <div class="mover" @click="toEvent">
              <i class="icon iconTo1"></i>
            </div>
          </div>
          <div class="eventList">
            <div class="eventItem">
              <div class="homeListHead">
                <div class="homeListImg">
                  <div>
                    <img src="../../assets/images/home/head2.png" alt="" />
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
                        <div class="exhibitionName">
                          HOUSE VISION 2018 BEIJING EXHIBITION <br />
                          探索家——未来生活大展
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
                <img src="../../assets/images/home/item1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "searchPag",
  methods: {
    toExhibition() {
      this.$router.push({
        path: `/searchExhibition`
      });
    },
    toBrochure() {
      this.$router.push({
        path: `/searchBrochure`
      });
    },
    toCompany() {
      this.$router.push({
        path: `/searchCompaby`
      });
    },
    toImages() {
      this.$router.push({
        path: `/searchImages`
      });
    },
    toEvent() {
      this.$router.push({
        path: `/searchEvent`
      });
    }
  }
};
</script>

<style lang="scss">
.searchPag {
  width: 100%;
  height: calc(100vh - 218px);
  background: #fff;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  .searchNav {
    width: 184px;
    height: 100%;
    .searchItem {
      width: 100%;
      height: 54px;
      background: #fff;
      margin-bottom: 6px;
      div {
        width: 100%;
        height: 100%;
        background: rgba($color: #326b90, $alpha: 0.2);
        font-size: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        box-sizing: border-box;
      }
    }
    .searchText {
      margin-top: 140px;
      text-align: center;
    }
  }
  .searchAll {
    width: calc(100% - 184px);
    height: 100%;
    display: flex;
    .searchTitle {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      span {
        font-size: 18px;
        font-weight: bold;
      }
      .mover {
        width: 24px;
        height: 24px;
        background: #326b90;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
    }
    .searchMine {
      width: calc(50% - 10px);
      height: 100%;
      margin-left: 10px;
      .searchMineTop {
        width: 100%;
        height: calc(45% - 10px);
        background: #f2f2f2;
        margin-bottom: 10px;
        padding: 16px 24px 0;
        box-sizing: border-box;
        overflow: auto;
        .exhibitionItem {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
          .exhibitionItemImg {
            width: 45%;
            img {
              width: 100%;
            }
          }
          .exhibitionItemName {
            width: 35%;
            line-height: 26px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 24px;
          }
        }
      }
      .searchMineBottom {
        width: 100%;
        height: 55%;
        background: #f2f2f2;
        padding: 16px 24px 0;
        box-sizing: border-box;
        overflow: auto;
        .brochureItem {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          .brochureItemImg {
            width: 162px;
            background: #fff;
          }
          .brochureItemText {
            width: calc(100% - 182px);
            margin-left: 20px;
            background: #f2f2f2;
            .brochureItemName {
              display: flex;
              .brochureLogoName {
                margin-left: 10px;
                p:nth-child(1) {
                  margin-top: 4px;
                  font-size: 16px;
                  font-weight: bold;
                }
                p:nth-child(2) {
                  margin-top: 6px;
                }
                p:nth-child(3) {
                  color: #326b90;
                  font-weight: bold;
                  font-size: 12px;
                  margin-top: 6px;
                }
              }
            }
            .brochureItemHead {
              display: flex;
              justify-content: space-between;
              .brochureItemNum {
                font-weight: bold;
                margin-top: 30px;
              }
            }
            .brochureItemmanual {
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
                width: 100%;
                height: 64px;
                background: rgba($color: #000000, $alpha: 0.2);
                margin-top: 10px;
              }
            }
          }
        }
      }
    }
    .searchRight {
      width: calc(50% - 10px);
      height: 100%;
      margin-left: 10px;
      .searchRightTop {
        width: 100%;
        height: calc(35% - 10px);
        background: #f2f2f2;
        margin-bottom: 10px;
        padding: 16px 24px 0;
        box-sizing: border-box;
        overflow: auto;
        .companyList {
          display: flex;
          flex-wrap: wrap;
          .companyItem {
            width: 48%;
            margin-right: 2%;
            height: 66px;
            margin-bottom: 20px;
            display: flex;
            justify-content: space-between;
            .enterpriseItemLeft {
              display: flex;
              height: 100%;
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
      }
      .searchRightmian {
        width: 100%;
        height: calc(40% - 10px);
        background: #f2f2f2;
        margin-bottom: 10px;
        padding: 16px 24px 0;
        box-sizing: border-box;
        overflow: auto;
        .searchimagesList {
          display: flex;
          flex-wrap: wrap;
          .searchimagesItem {
            width: 90px;
            height: 90px;
            background: #fff;
            margin-right: 10px;
            margin-bottom: 10px;
          }
        }
      }
      .searchRightBottom {
        width: 100%;
        height: 25%;
        background: #f2f2f2;
        padding: 16px 24px 0;
        box-sizing: border-box;
        overflow: auto;
        .eventList {
          .eventItem {
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
                  width: 100%;
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
                        width: 130px;
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
      }
    }
  }
}
</style>
