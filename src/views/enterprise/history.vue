<template>
  <div class="enterpriseH">
    <div class="enterpriseHNav">
      <div class="enterpriseList">
        <div class="enterpriseItem" @click="toEnterprise">发现</div>
        <div class="enterpriseItem ItemAct" @click="toHistory">历史记录</div>
        <div class="enterpriseItem" @click="toCollection">收藏</div>
      </div>
    </div>
    <div class="enterpriseHBox">
      <div class="HBoxOne">
        <div class="enterpriseHItemName">企业</div>
        <div class="enterpriseHItem">
          <div class="enterpriseHItemA">
            <div class="enterpriseHItemAItem">
              <div class="enterpriseItemHead">
                <img src="../../assets/images/home/TSNHCG_1_.png" alt="" />
              </div>
              <div class="enterpriseItemLeftTitle">
                <p>altiuma</p>
                <p>5,246 位关注者</p>
                <p>建筑行业</p>
              </div>
            </div>
            <div class="enterpriseHItemAItem">
              <div class="enterpriseItemHead">
                <img src="../../assets/images/home/TSNHCG_1_.png" alt="" />
              </div>
              <div class="enterpriseItemLeftTitle">
                <p>altiuma</p>
                <p>5,246 位关注者</p>
                <p>建筑行业</p>
              </div>
            </div>
            <div class="enterpriseHItemAItem">
              <div class="enterpriseItemHead">
                <img src="../../assets/images/home/TSNHCG_1_.png" alt="" />
              </div>
              <div class="enterpriseItemLeftTitle">
                <p>altiuma</p>
                <p>5,246 位关注者</p>
                <p>建筑行业</p>
              </div>
            </div>
            <div class="enterpriseHItemAItem">
              <div class="enterpriseItemHead">
                <img src="../../assets/images/home/TSNHCG_1_.png" alt="" />
              </div>
              <div class="enterpriseItemLeftTitle">
                <p>altiuma</p>
                <p>5,246 位关注者</p>
                <p>建筑行业</p>
              </div>
            </div>
            <div class="enterpriseHItemAItem">
              <div class="enterpriseItemHead">
                <img src="../../assets/images/home/TSNHCG_1_.png" alt="" />
              </div>
              <div class="enterpriseItemLeftTitle">
                <p>altiuma</p>
                <p>5,246 位关注者</p>
                <p>建筑行业</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="HBoxTwo">
        <div class="enterpriseHItemName">产品册</div>
        <div class="enterpriseHItem">
          <div class="enterpriseHItemB">
          </div>
        </div>
      </div>
      <div class=" HBoxThree">
        <div class="enterpriseHItemName">图片</div>
        <div class="enterpriseHItem"></div>
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
.enterpriseH {
  padding: 20px;
  height: calc(100vh - 218px);
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  .enterpriseHNav {
    width: 140px;
    height: 100%;
    padding: 0 10px;
    box-sizing: border-box;
    border-right: 1px dashed #707070;
    display: flex;
    align-items: flex-end;
    .enterpriseList {
      margin-top: 80px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      .enterpriseItem {
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
  .enterpriseHBox {
    width: calc(100% - 140px);
    height: 100%;
    display: flex;
    .enterpriseHItemName {
      font-size: 18px;
      font-weight: bold;
      padding: 0 10px;
      margin-bottom: 20px;
    }
    .enterpriseHItem {
      width: 100%;
      .enterpriseHItemA {
        width: 100%;
        height: 100%;
        .enterpriseHItemAItem {
          display: flex;
          height: 100%;
          margin-bottom: 10px;
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
