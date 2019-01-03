<template>
  <div class="searchPag">
    <div class="searchNav">
      <div class="searchList">
        <div class="searchItem">
          <div>
            <span>企业</span>
            <span>300个</span>
          </div>
        </div>
        <div class="searchItem">
          <div>
            <span>展会</span>
            <span>300个</span>
          </div>
        </div>
        <div class="searchItem">
          <div>
            <span>企业动态</span>
            <span>300个</span>
          </div>
        </div>
        <div class="searchItem">
          <div>
            <span>产品手册</span>
            <span>300个</span>
          </div>
        </div>
        <div class="searchItem">
          <div>
            <span>产品图片</span>
            <span>300个</span>
          </div>
        </div>
      </div>
      <div class="searchText">
        <p>“金融圈xxxx”</p>
        <p>相关搜索结果</p>
      </div>
    </div>
    <div class="searchDetails">
      <div class="searchTitle">
        <span>
          企业 company
          <span>20个</span>
        </span>
        <div class="Back" @click="toBack">返回搜索页</div>
      </div>
      <div class="CoDetailsList">
        <div class="CoDetailsItem">
          <div class="enterpriseItemLeft">
            <div class="enterpriseItemHead">
              <img src="../../assets/images/home/TSNHCG_1_.png" alt>
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
        <div class="CoDetailsItem">
          <div class="enterpriseItemLeft">
            <div class="enterpriseItemHead">
              <img src="../../assets/images/home/TSNHCG_1_.png" alt>
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
        <div class="CoDetailsItem">
          <div class="enterpriseItemLeft">
            <div class="enterpriseItemHead">
              <img src="../../assets/images/home/TSNHCG_1_.png" alt>
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
        <div class="CoDetailsItem">
          <div class="enterpriseItemLeft">
            <div class="enterpriseItemHead">
              <img src="../../assets/images/home/TSNHCG_1_.png" alt>
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
        <div class="CoDetailsItem">
          <div class="enterpriseItemLeft">
            <div class="enterpriseItemHead">
              <img src="../../assets/images/home/TSNHCG_1_.png" alt>
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
        <div class="CoDetailsItem">
          <div class="enterpriseItemLeft">
            <div class="enterpriseItemHead">
              <img src="../../assets/images/home/TSNHCG_1_.png" alt>
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
  </div>
</template>

<script>
export default {
  name: "searchPag",
  methods: {
    toBack() {
      console.log("123");
      this.$router.push({
        path: `/search`
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
  .searchDetails {
    width: calc(100% - 194px);
    height: 100%;
    margin-left: 10px;
    background: #f2f2f2;
    padding: 14px 14px 0;
    box-sizing: border-box;
    overflow: auto;
    .searchTitle {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      span {
        font-size: 18px;
        font-weight: bold;
        span {
          font-weight: normal;
          margin-left: 20px;
          font-size: 24px;
        }
      }
      .Back {
        cursor: pointer;
      }
    }
    .CoDetailsList {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      .CoDetailsItem {
        width: 31%;
        margin: 0 1% 20px;

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
}
</style>
