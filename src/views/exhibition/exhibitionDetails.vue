<template>
  <div class="exhibitionDetails">
    <Swiper></Swiper>
    <div class="signUp">参加报名</div>
    <div class="exhibitionTitle">
      <div class="exhibitionLeft">
        <p>HOUSE VISION 2018 BEIJING EXHIBITION</p>
        <p>探索家——未来生活大展</p>
        <div>主题：NEW GRAVITY</div>
        <div>时间：2018年9月21日—11月6日</div>
        <div>地点：北京・国家体育场(鸟巢)南广场</div>
        <div>简述：“CHINA HOUSE VISION探索家” 是一个思考中国未来生活形态的平 台，也是一个首次尝试将建筑、设 计、科技、制造等多个产业跨界合 作的项目。</div>
      </div>
      <div class="exhibitionRight"></div>
    </div>
    <div class="TitleHead">展会地图</div>
    <div class="Map">
      <img src="../../assets/images/new/map.png" alt>
    </div>
    <div class="exhibitionDetailsList">
      <div class="TitleHead">参展商列表</div>
      <div class="DetailsListBox">
        <div class="companyItem">
          <p>A201
            <br>展位
          </p>
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
        <div class="companyItem">
          <p>A201
            <br>展位
          </p>
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
        <div class="companyItem">
          <p>A201
            <br>展位
          </p>
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
        <div class="companyItem">
          <p>A201
            <br>展位
          </p>
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
        <div class="companyItem">
          <p>A201
            <br>展位
          </p>
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
        <div class="companyItem">
          <p>A201
            <br>展位
          </p>
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
      <div class="moverBtn">
        <div>展开</div>
        <i class="icon iconMover1"></i>
      </div>
    </div>
    <div class="timebox">
      <P>2018年11月5-10日</P>
      <p>November 5-10, 2018</p>
    </div>
    <div class="Map1">
      <img src="../../assets/images/new/mapbig2.png" alt>
    </div>
  </div>
</template>

<script>
import Swiper from "@/base/swiper/swiper.vue";

export default {
  components: {
    Swiper
  }
};
</script>

<style lang="scss">
.exhibitionDetails {
  background: #fff;
}
.signUp {
  height: 100px;
  line-height: 100px;
  width: 100%;
  text-align: center;
  font-size: 30px;
  cursor: pointer;
  background: rgba($color: #326b90, $alpha: 0.3);
}
.exhibitionTitle {
  display: flex;
  align-items: center;
  background: #eaeaea;
  padding: 80px;
  box-sizing: border-box;
  .exhibitionLeft {
    width: 50%;
    padding: 0 40px;
    box-sizing: border-box;
    font-size: 24px;
    p:nth-child(2) {
      margin-bottom: 20px;
    }
    div {
      margin-bottom: 10px;
      line-height: 30px;
    }
  }
  .exhibitionRight {
    width: 50%;
    height: 326px;
    background: #fff;
  }
}
.TitleHead {
  padding: 70px 70px 30px;
  font-size: 34px;
}
.Map {
  margin-top: 30px;
  text-align: center;
}
.Map1 img {
  width: 100%;
}
.exhibitionDetailsList {
  margin-top: 80px;
  background: #eaeaea;
  padding-bottom: 10px;
  .DetailsListBox {
    width: 100%;
    padding: 0 70px;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    .companyItem {
      width: 33.33%;
      padding: 0 10px;
      box-sizing: border-box;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
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
          margin-bottom: 4px;
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
  .moverBtn {
    width: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 30px auto;
    i {
      margin-top: 6px;
    }
  }
}
.timebox {
  padding: 86px 0 60px;
  text-align: center;
  font-size: 24px;
  line-height: 30px;
}
</style>
