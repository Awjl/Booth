<template>
  <div class="tab">
    <div class="tabLogo">
      <img src="../../assets/images/home/logo.png" alt @click="toHome">
      <div class="tabSearch">
        <input
          type="text"
          placeholder="搜索你感兴趣的企业/展会"
          v-model="searchData"
          @keyup.enter="toSearch"
          @focus="searchstate = true"
        >
        <i class="icon iconSearch" @click="toSearch"></i>
        <div class="Searchbox tabSearchleft" v-if="searchstate">
          <div class="tabSearchboxleft">
            <div
              v-for="(items, index) in industryData"
              :key="index"
              :class="{ act: index == typeindex }"
              @mouseenter="mouseOver(index, items)"
              @click.stop="TabClick()"
            >{{items.industryName}}</div>
          </div>
        </div>
        <div class="Searchbox tabSearchright" v-if="searchstate">
          <div class="tabSearchbox">
            <div
              v-for="(items, index) in items"
              :class="{ actTwo: index == typeindexTwo }"
              :key="index"
              @click.stop="TabClick()"
              @mouseenter="mouseOverTwo(index,items)"
            >{{items.industryName}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="tabLoging">
      <div @click="toHome">首页</div>
      <div @click="toExhibition">展会</div>
      <div @click="toEnterprise">企业</div>
      <div @click="toNews">消息</div>
      <div @click="toSign" v-if="!this.$store.state.user.UserID">注册</div>
      <div @click="ShowLogin" v-if="!this.$store.state.user.UserID">登陆</div>
      <div class="HeadImg HeadImgLogo" v-if="!this.$store.state.user.UserID" @click="ShowLogin">
        <img src="../../assets/images/icon/man.png" alt>
      </div>
      <div class="HeadImg" @click="toCore" v-if="this.$store.state.user.UserID">
        <img :src="`${this.$store.state.userData.logoPicUrl}`" alt>
      </div>
    </div>
    <div class="boxLoing" v-if="showBox">
      <p>您还未登陆，是否去登陆？</p>
      <div>
        <span @click="quxiao">取消</span>
        <span @click="tologinList">去登陆</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getIndustry, ERR_OK } from "@/api/api.js";
import { setOne, setTwo, getOne, getTwo } from "@/utils/auth.js";

export default {
  name: "tab",
  data() {
    return {
      showBox: false,
      LoginState: true,
      SignState: true,
      industryData: [],
      typeindex: 0,
      typeindexTwo: 0,
      items: [],
      searchData: "",
      One: getOne(),
      Two: getTwo(),
      searchstate: false
    };
  },
  created() {
    this._getIndustry();
    console.log(this.One, this.Two);
  },
  methods: {
    _getIndustry() {
      getIndustry().then(res => {
        if (res.status === ERR_OK) {
          this.industryData = res.data.data;
          this.items = this.industryData[this.One - 1].secondIndustries;
        }
      });
    },
    mouseOver(index, data) {
      this.typeindex = index;
      this.items = data.secondIndustries;
      this.One = data.id;
      this.Two = data.secondIndustries[0].id;
      this.typeindexTwo = 0;
    },
    mouseOverTwo(index, data) {
      this.typeindexTwo = index;
      this.Two = data.id;
    },
    TabClick() {
      this.searchstate = false;
      this.$router.go(0);
      setOne(this.One);
      setTwo(this.Two);
    },
    toExhibition() {
      this.$router.push({
        path: `/exhibition`
      });
    },
    toSign() {
      this.$emit("ShowSign", this.SignState);
    },
    toHome() {
      this.$router.push({
        path: `/home`
      });
    },
    ShowLogin() {
      this.$emit("ShowLogin", this.LoginState);
    },
    toSearch() {
      this.searchstate = false;
      this.$router.push({
        path: `/search`,
        query: { center: this.searchData }
      });
    },
    toNews() {
      if (!this.$store.state.user.UserID) {
        this.$emit("ShowLogin", this.LoginState);
      } else {
        this.$router.push({
          path: `/News`
        });
      }
    },
    toEnterprise() {
      if (!this.$store.state.user.UserID) {
        this.$emit("ShowLogin", this.LoginState);
      } else {
        this.$router.push({
          path: `/enterprise`
        });
      }
    },
    toCore() {
      this.$router.push({
        path: `/core`
      });
    },
    tologinList() {
      this.$router.push({
        name: `loginList`
      });
    },
    quxiao() {
      this.showBox = false;
    }
  }
};
</script>

<style lang="scss">
.tab {
  width: 100%;
  height: 60px;
  background: #326b90;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  box-sizing: border-box;
  .boxLoing {
    position: fixed;
    width: 350px;
    height: 100px;
    background: #fff;
    top: 100px;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 9999999999;
    box-shadow: 2px 0px 10px #333333;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    div {
      margin-top: 20px;
      span {
        padding: 4px 10px;
        background: #000;
        color: #fff;
        font-size: 10px;
        margin-right: 10px;
        cursor: pointer;
      }
    }
  }
  .tabLogo {
    display: flex;
    align-items: center;
    img {
      width: 95px;
    }
    select {
      width: 100px;
      height: 32px;
      border: 1px solid #fff;
      background: initial;
      outline: none;
      margin-left: 10px;
    }
    .TabBtn {
      margin-left: 10px;
      padding: 4px 10px;
      background: #000;
      color: #fff;
      font-size: 10px;
      cursor: pointer;
    }
    img {
      cursor: pointer;
    }
    .tabSearch {
      width: 246px;
      height: 30px;
      border: 1px solid #fff;
      padding: 0 16px;
      margin-left: 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      .Searchbox {
        position: absolute;
        top: 30px;
        width: 50%;
        z-index: 9999;
        height: 170px;
        background: #fff;
        > div {
          height: 100%;
          width: 100%;
          overflow: auto;
          &.tabSearchbox {
            background: rgba($color: #326b90, $alpha: 0.2);
          }
          > div {
            padding: 4px 10px;
            cursor: pointer;
            font-size: 10px;
          }
        }
      }
      .tabSearchleft {
        left: 0;
        .tabSearchboxleft {
          > div {
            &.act {
              background: rgba($color: #326b90, $alpha: 0.2);
            }
          }
        }
      }
      .tabSearchright {
        right: 0;
        .tabSearchbox {
          background: rgba($color: #326b90, $alpha: 0.2);
          > div {
            padding: 4px 0;
            margin: 4px 10px;
            border-bottom: 1px solid #707070;
            &:last-child {
              border-bottom: none;
            }
            &.actTwo {
              color: #fff;
            }
          }
        }
      }
      .iconSearch {
        cursor: pointer;
      }
      input {
        background: initial;
        outline: none;
        color: #fff;
        width: 200px;
        font-size: 12px;
        &::-webkit-input-placeholder {
          color: #fff;
          font-size: 12px;
        }
      }
    }
  }
  .tabLoging {
    display: flex;
    align-items: center;
    div {
      cursor: pointer;
      margin-left: 36px;
      color: #fff;
      &.HeadImg {
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        border-radius: 50%;
        overflow: hidden;
      }
      &.HeadImgLogo img {
        width: 20px;
      }
    }
  }
}
</style>
