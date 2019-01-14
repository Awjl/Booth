<template>
  <div class="homeList">
    <div class="homleListItem" v-for="(item, index) in dataList" :key="index">
      <div class="homeListHead">
        <div class="homeListImg">
          <div><img
              src="../../assets/images/home/head2.png"
              alt=""
            /></div>
          <div class="follow" v-if="item.isConcerned === 2">+ 关注</div>
          <div class="follow" v-if="item.isConcerned === 1">+ 已关注</div>
        </div>
        <div class="homeListTitle">
          <div class="name">{{item.user.name}}</div>
          <div class="nameEN">Sichuan，Chengdu {{item.user.fansNumber}}关注者</div>
          <p class="industry">{{item.user.industryName}}</p>
          <div class="exhibition">
            <div class="exhibitionItem">
              <div class="exhibitionCan">
                <span>已参与</span>
                <div class="exhibitionName">
                  {{item.participation.titleEng}} <br />
                  {{item.participation.title}}
                </div>
              </div>
              <div class="exhibitionTime">
                <span>{{item.participation.date}}</span>
                <div class="exhibitionDetali"><i class="icon iconTo"></i></div>
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
        {{item.user.summary}}
      </div>
      <div class="moveBtn">更多</div>
      <div class="homeItemImg">
        <img
          src="../../assets/images/home/item1.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import { getRecommendCompany, ERR_OK } from "@/api/api.js";
import { getOne, getTwo } from "@/utils/auth.js";

export default {
  name: "homeList",
  data() {
    return {
      upList: {
        secondIndustryId: getTwo(),
        id: '1'
      },
      dataList: [
        {
          isConcerned: 1, //  1关注，2没关注
          participation: {
            date: "2018-08-01至09-01",
            id: 0,
            title: "探索家——未来生活大展",
            titleEng: "HOUSE VISION 2018 BEIJING EXHIBITION",
          },
          user: {
            id: 1,
            name: '基准方中建筑设计有限公司',
            logoUrl: '',
            fansNumber: '856',
            industryName: '建筑设计行业',
            summary: "11月30日下午，由巴适成都联合报花探店、成都生活君、成都那些事儿、触摸成都等成都生活方式类新媒体账号举办的“传媒新势力·2018成都UP榜”在蔚来中心拉开序幕。会上发布了2018年成都UP榜单，基准方中荣获“成都UP榜",
            introductionUrl:''
          }
        }
      ]
    };
  },
  created() {
    this._getRecommendCompany()
  },
  methods: {
    _getRecommendCompany() {
      getRecommendCompany(this.upList).then((res) => {
        if (res.status === ERR_OK) {
          console.log("查看公司首页-------------------")
          console.log(res.data)
          // this.dataList = res.data.data
        }
      })
    }
  }
};
</script>

<style lang="scss">
.homeList {
  width: 100%;
  background: #fff;
  padding: 20px;
  box-sizing: border-box;
  .homleListItem {
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
          width: 60px;
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
          cursor: pointer;
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
      img {
        width: 100%;
      }
    }
  }
}
</style>
