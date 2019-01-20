<template>
  <div class="productList">
    <div class="productListHeard">
      <div class="productListHeardLogo">
        <img :src="this.$store.state.userData.logoPicUrl" alt>
      </div>
      <div class="productListHeardName">
        <div class="productListHeardNameTop">
          <div class="productListName">
            <p>{{this.$store.state.userData.name}}</p>
            <p>{{this.$store.state.userData.fansNumber}}位关注者</p>
            <p>{{this.$store.state.userData.oneIndustryname}}</p>
          </div>
        </div>
        <div class="productListHeardNameBottom">
          <div class="follow">关注</div>
        </div>
      </div>
    </div>
    <div class="productListTitle">产品册
      <div class="productListTitleBtn">
        +
        <span>更多</span>
      </div>
    </div>
    <div class="productListMain">
      <div class="aboutTopItem" v-for="(item, index) in AllProducts" :key="index">
        <div class="brochureItemImg">
          <img :src="item.coverUrl" alt>
        </div>
        <div class="brochureItemText">
          <div class="brochureItemmanual">
            <div class="brochureItemmanualHead">
              <p>{{item.title}}</p>
              <div class="label">
                <span v-for="(item, num) in item.label.split(',')" :key="num" v-show="item">{{item}}</span>
              </div>
            </div>
            <div class="brochureintroduce">
              <div>阅读量{{item.readVolume}}</div>
              <div>{{item.createDate}}</div>
            </div>
          </div>
          <div class="brochuremover">
            <span>谁读过</span>
          </div>
          <div class="brochureReadLsit">
            <p v-if=" item.users.length === 0">暂无数据</p>
            <div v-for="(item, index) in item.users" :key="index"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAllProducts, ERR_OK } from "@/api/api.js";
export default {
  name: "productList",
  data() {
    return {
      AllProducts: []
    };
  },
  created() {
    this._getAllProducts();
  },
  methods: {
    _getAllProducts() {
      getAllProducts(this.$store.state.user.UserID).then(res => {
        if (res.data.code === 0) {
          console.log(res.data.data);
          this.AllProducts = res.data.data;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.productList {
  box-sizing: border-box;
  .productListTitle {
    text-align: center;
    margin: 20px 0 50px;
    height: 30px;
    line-height: 30px;
    font-size: 20px;
    font-weight: bold;
    position: relative;
    .productListTitleBtn {
      position: absolute;
      right: 0;
      top: 6px;
      display: flex;
      align-items: center;
      padding: 0 20px;
      span {
        display: block;
        width: 60px;
        height: 20px;
        background: #000;
        color: #fff;
        text-align: center;
        line-height: 20px;
        font-size: 10px;
        margin-left: 4px;
        cursor: pointer;
      }
    }
  }
  .productListHeard {
    padding: 30px 20px;
    display: flex;
    .productListHeardLogo {
      width: 100px;
      height: 100px;
      background: #fff;
    }
    .productListHeardName {
      width: calc(100% - 66px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .productListHeardNameTop {
        display: flex;
        width: 100%;
        .productListName {
          padding-left: 30px;
          box-sizing: border-box;
          color: #fff;
          p:nth-child(1) {
            font-size: 28px;
            color: #fff;
          }
          p:nth-child(3) {
            margin-top: 10px;
            color: #648aa2;
          }
        }
      }
      .productListHeardNameBottom {
        padding-left: 30px;
        box-sizing: border-box;
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: flex-end;
        .follow {
          height: 24px;
          width: 50px;
          line-height: 24px;
          text-align: center;
          background: #fff;
          color: #000;
          cursor: pointer;
        }
      }
    }
  }
  .productListMain {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    margin: 30px;
    .aboutTopItem {
      width: 31%;
      display: flex;
      justify-content: space-between;
      padding: 10px;
      border-left: none;
      border-top: none;
      box-sizing: border-box;
      background: #fff;
      margin: 10px 1%;
      .brochureItemImg {
        width: 120px;
        background: #ddd;
      }
      .brochureItemText {
        width: calc(100% - 120px);
        margin-left: 20px;
        .brochureItemHead {
          display: flex;
          justify-content: space-between;
          .brochureItemNum {
            font-weight: bold;
            margin-top: 30px;
          }
        }
        .brochureItemmanual {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          p {
            font-size: 16px;
            margin: 6px 0 20px;
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
            position: absolute;
            top: 10px;
            right: 0;
            div {
              font-size: 10px;
              text-align: right;
              margin-bottom: 4px;
            }
          }
        }
        .brochuremover {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          margin: 10px 0;
        }
        .brochureReadLsit {
          display: flex;
          flex-wrap: wrap;
          div {
            width: 18%;
            margin: 0 1%;
            height: 40px;
            background: #ddd;
          }
        }
      }
    }
  }
}
</style>
