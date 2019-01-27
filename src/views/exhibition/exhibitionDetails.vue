<template>
  <div class="exhibitionDetails">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(item, index) in detailsData.bannerUrl.split(',')"
          :key="index"
        >
          <img :src="`${item}`" alt>
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    <div class="signUp" @click="showBox">参加报名</div>
    <div class="exhibitionTitle">
      <div class="exhibitionLeft">
        <p>{{detailsData.nameEng}}</p>
        <p>{{detailsData.name}}</p>
        <div>主题：{{detailsData.title}}</div>
        <div>时间：{{detailsData.date}}</div>
        <div>地点：{{detailsData.location}}</div>
        <div>简述：{{detailsData.summary}}</div>
      </div>
      <div class="exhibitionRight">
        <img :src="`${detailsData.summaryPicture}`" alt>
      </div>
    </div>
    <div class="TitleHead">展会地图</div>
    <div class="Map">
      <img :src="`${detailsData.mapUrl}`" alt>
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
      <P>{{detailsData.date}}</P>
      <p>{{detailsData.dateEng}}</p>
    </div>
    <div class="Map1">
      <img :src="`${detailsData.trafficUrl}`" alt>
    </div>
    <div class="signUpBox" v-if="show">
      <div class="signUpBoxItem">
        <div class="signUpBoxhead">参观报名</div>
        <div class="signUpBoxMove">
          <p @click="showBox">取消</p>
          <div @click="addMan">添加人员</div>
        </div>
        <div class="signUpBoxList">
          <div class="signUpBoxListItem" v-for="(item, index) in signUp" :key="index">
            <div class="signUpBoxListItemOne">
              <p>姓名</p>
              <input type="text" v-model="item.name">
            </div>
            <div class="signUpBoxListItemOne">
              <p>职务</p>
              <input type="text" v-model="item.position">
            </div>
            <div class="signUpBoxListItemTwo">
              <p>联系方式</p>
              <input type="text" v-model="item.mobile">
            </div>
            <div class="signUpBoxListItemTwo">
              <p>到场时间</p>
              <input type="text" v-model="item.precentDate">
            </div>
          </div>
        </div>
        <div class="signUpBoxBtn" @click="UpList">确认报名</div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import {
  getExhibitionInfoById,
  enrollExhibition,
  getAllExhibitiors,
  getAllVisitors,
  ERR_OK
} from "@/api/api.js";
import { getUser } from "@/utils/auth.js";

export default {
  data() {
    return {
      show: false,
      signUp: [
        {
          exhibitionId: this.$route.query.id,
          userId: getUser(),
          name: "",
          mobile: "",
          precentDate: "",
          position: ""
        }
      ],
      detailsData: {
        bannerUrl: "", //
        date: "", //
        dateEng: "", //
        id: "", //
        isUpper: "", //
        mapUrl: "", //
        summary: "", //
        summaryPicture: "", //
        titleEng: "", //
        trafficUrl: "", //,
        nameEng: "",
        name: "",
        location: ""
      },
      AllExh: {
        exhibitionId: this.$route.query.id,
        userId: this.$store.state.user.UserID,
        content: ""
      },
      AllVis: {
        exhibitionId: this.$route.query.id,
        userId: this.$store.state.user.UserID,
        content: ""
      }
    };
  },
  created() {
    this._getExhibitionInfoById(this.$route.query.id);
    this._getAllExhibitiors();
    this._getAllVisitors();
  },
  updated() {
    let _this = this;
    var swiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  },
  methods: {
    _getAllExhibitiors() {
      getAllExhibitiors(this.AllExh).then(res => {
        if (res.data.code === 0) {
          console.log("获取参展商-------")
          console.log(res.data.data);
        }
      });
    },
    _getAllVisitors() {
      getAllVisitors(this.AllVis).then(res => {
        if (res.data.code === 0) {
          console.log("获取到访商-------")
          console.log(res.data.data);
        }
      });
    },
    _enrollExhibition() {
      enrollExhibition(this.signUp).then(res => {
        if (res.data.code === 0) {
          console.log("报名成功");
          this.show = false;
        }
      });
    },
    _getExhibitionInfoById(id) {
      getExhibitionInfoById(id).then(res => {
        console.log(res);
        if (res.data.code === 0) {
          this.detailsData = res.data.data;
        }
      });
    },
    UpList() {
      this._enrollExhibition();
    },
    addMan() {
      let arr = {
        exhibitionId: this.$route.query.id,
        userId: getUser(),
        name: "",
        mobile: "",
        precentDate: "",
        position: ""
      };
      this.signUp.push(arr);
    },
    showBox() {
      this.show = !this.show;
    }
  }
};
</script>

<style lang="scss">
.exhibitionDetails {
  background: #fff;
  .swiper-container {
    width: 100%;
    height: 472px;
    margin-left: auto;
    margin-right: auto;
  }
  .swiper-slide {
    width: 100%;
    height: 100%;
  }
  .swiper-slide > img {
    width: 100%;
    height: 100%;
  }
}
.signUpBox {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba($color: #000000, $alpha: 0.2);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999999;
  .signUpBoxItem {
    max-width: 638px;
    max-height: 80vh;
    background: #fff;
    padding: 0 20px;
    box-sizing: border-box;
    overflow: auto;
    .signUpBoxhead {
      text-align: center;
      font-size: 24px;
      margin: 10px 0;
    }
    .signUpBoxMove {
      width: 100%;
      text-align: right;
      overflow: hidden;
      font-size: 10px;
      margin: -20px 0 0px;
      p {
        margin-bottom: 10px;
        cursor: pointer;
      }
      div {
        width: 56px;
        height: 22px;
        background: #000;
        color: #fff;
        text-align: center;
        line-height: 22px;
        float: right;
        cursor: pointer;
      }
    }
    .signUpBoxList {
      display: flex;
      flex-wrap: wrap;
      margin-top: 10px;
      .signUpBoxListItem {
        width: 268px;
        height: 178px;
        background: #e0e8ec;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin: 10px;
        p {
          font-size: 10px;
          margin: 6px 0;
        }
        input {
          width: 100%;
          height: 20px;
        }
        .signUpBoxListItemOne {
          width: 50%;
          padding: 0 20px;
          box-sizing: border-box;
        }
        .signUpBoxListItemTwo {
          width: 100%;
          padding: 0 20px;
          box-sizing: border-box;
        }
      }
    }
    .signUpBoxBtn {
      width: 56px;
      height: 22px;
      background: #326b90;
      color: #fff;
      text-align: center;
      line-height: 22px;
      margin: 20px auto;
      font-size: 10px;
      cursor: pointer;
    }
  }
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
    display: flex;
    justify-content: center;
    align-items: center;
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
