<template>
  <div class="history">
    <div class="historyNav">
      <div class="historyList">
        <div class="historyItem" @click="toEnterprise">发现</div>
        <div class="historyItem ItemAct" @click="toHistory">历史记录</div>
        <div class="historyItem" @click="toCollection">收藏</div>
      </div>
    </div>
    <div class="historyBox">
      <div class="HBoxOne">
        <div class="historyItemName">企业</div>
        <div class="historyItem">
          <div class="historyItemA">
            <div class="historyItemAItem">
              <div class="historyItemHead">
                <img src="../../assets/images/home/TSNHCG_1_.png" alt />
              </div>
              <div class="historyItemLeftTitle">
                <p>altiuma</p>
                <p>5,246 位关注者</p>
                <p>建筑行业</p>
              </div>
            </div>
            <div class="historyItemAItem">
              <div class="historyItemHead">
                <img src="../../assets/images/home/TSNHCG_1_.png" alt />
              </div>
              <div class="historyItemLeftTitle">
                <p>altiuma</p>
                <p>5,246 位关注者</p>
                <p>建筑行业</p>
              </div>
            </div>
            <div class="historyItemAItem">
              <div class="historyItemHead">
                <img src="../../assets/images/home/TSNHCG_1_.png" alt />
              </div>
              <div class="historyItemLeftTitle">
                <p>altiuma</p>
                <p>5,246 位关注者</p>
                <p>建筑行业</p>
              </div>
            </div>
            <div class="historyItemAItem">
              <div class="historyItemHead">
                <img src="../../assets/images/home/TSNHCG_1_.png" alt />
              </div>
              <div class="historyItemLeftTitle">
                <p>altiuma</p>
                <p>5,246 位关注者</p>
                <p>建筑行业</p>
              </div>
            </div>
            <div class="historyItemAItem">
              <div class="historyItemHead">
                <img src="../../assets/images/home/TSNHCG_1_.png" alt />
              </div>
              <div class="historyItemLeftTitle">
                <p>altiuma</p>
                <p>5,246 位关注者</p>
                <p>建筑行业</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="HBoxTwo">
        <div class="historyItemName">产品册</div>
        <div class="historyItem">
          <div class="historyItemB">
            <div class="historyItemBItem">
              <div class="brochureItemImg"></div>
              <div class="brochureItemText">
                <div class="brochureItemHead">
                  <div class="brochureItemName">
                    <div class="brochureItemLogo">
                      <img src="../../assets/images/home/head2.png" alt />
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
            <div class="historyItemBItem">
              <div class="brochureItemImg"></div>
              <div class="brochureItemText">
                <div class="brochureItemHead">
                  <div class="brochureItemName">
                    <div class="brochureItemLogo">
                      <img src="../../assets/images/home/head2.png" alt />
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
      <div class="HBoxThree">
        <div class="historyItemName">图片</div>
        <div class="historyItem">
          <div class="historyItemImg"></div>
          <div class="historyItemImg"></div>
          <div class="historyItemImg"></div>
          <div class="historyItemImg"></div>
          <div class="historyItemImg"></div>
          <div class="historyItemImg"></div>
          <div class="historyItemImg"></div>
          <div class="historyItemImg"></div>
          <div class="historyItemImg"></div>
          <div class="historyItemImg"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "history",
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
.history {
  padding: 20px;
  height: calc(100vh - 218px);
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  .historyNav {
    width: 140px;
    height: 100%;
    padding: 0 10px;
    box-sizing: border-box;
    border-right: 1px dashed #707070;
    display: flex;
    align-items: flex-end;
    .historyList {
      margin-top: 80px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      .historyItem {
        width: 80px;
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
  .historyBox {
    width: calc(100% - 140px);
    height: 100%;
    display: flex;
    .historyItemName {
      font-size: 18px;
      font-weight: bold;
      padding: 0 10px;
      margin-bottom: 20px;
    }
    .historyItem {
      width: 100%;
      .historyItemA {
        width: 100%;
        height: 100%;
        .historyItemAItem {
          display: flex;
          height: 100%;
          margin-bottom: 10px;
          .historyItemLeftTitle {
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
      }
      .historyItemB {
        width: 100%;
        height: 100%;
        margin-bottom: 10px;
        .historyItemBItem {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
        }
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
      .historyItemImg {
        width: 80px;
        height: 80px;
        background: #fff;
        margin: 0 10px 10px 0;
        float: left;
      }
    }
    .HBoxOne {
      width: 20%;
      height: 100%;
      padding: 0 10px;
      overflow: auto;
      box-sizing: border-box;
    }
    .HBoxTwo {
      width: 50%;
      height: 100%;
      padding: 0 10px;
      overflow: auto;
      box-sizing: border-box;
      border-right: 1px dashed #707070;
      border-left: 1px dashed #707070;
    }
    .HBoxThree {
      width: 30%;
      height: 100%;
      padding: 0 10px;
      overflow: auto;
      box-sizing: border-box;
    }
  }
}
</style>
