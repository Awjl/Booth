<template>
  <div class="tab">
    <div class="tabLogo">
      <img src="../../assets/images/home/logo.png" alt @click="toHome">
      <div class="tabSearch">
        <input type="text" placeholder="搜索你感兴趣的企业/展会" v-model="searchData">
        <i class="icon iconSearch" @click="toSearch"></i>
      </div>
    </div>
    <div class="tabLoging">
      <div @click="toHome">首页</div>
      <div @click="toExhibition">展会</div>
      <div @click="toEnterprise">企业</div>
      <div @click="toNews">消息</div>
      <div @click="toSign" v-if="!this.$store.state.user.UserID">注册</div>
      <div @click="ShowLogin" v-if="!this.$store.state.user.UserID">登陆</div>
      <div class="HeadImg HeadImgLogo" v-if="!this.$store.state.user.UserID">
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
export default {
  name: "tab",
  data() {
    return {
      showBox: false,
      LoginState: true,
      SignState: true,
      searchData: ""
    };
  },
  methods: {
    toExhibition() {
      this.$router.push({
        path: `/exhibition`
      });
    },
    toSign() {
      this.$router.push({
        path: `/sign`
      });
    },
    toHome() {
      this.$router.push({
        path: `/home`
      });
    },
    ShowLogin() {
      this.$emit("ShowLogin", this.SignState);
    },
    toSearch() {
      this.$router.push({
        path: `/search`,
        query: { center: this.searchData }
      });
    },
    toNews() {
      if (!this.$store.state.user.UserID) {
        this.showBox = true;
      } else {
        this.$router.push({
          path: `/News`
        });
      }
    },
    toEnterprise() {
      if (!this.$store.state.user.UserID) {
        this.showBox = true;
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
