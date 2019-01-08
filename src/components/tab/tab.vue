<template>
  <div class="tab">
    <div class="tabLogo">
      <img src="../../assets/images/home/logo.png" alt @click="toHome"/>
      <div class="tabSearch">
        <input type="text" placeholder="搜索你感兴趣的企业/展会" />
        <i class="icon iconSearch" @click="toSearch"></i>
      </div>
    </div>
    <div class="tabLoging">
      <div @click="toHome">首页</div>
      <div @click="toExhibition">展会</div>
      <div @click="toEnterprise">企业</div>
      <div @click="toNews">消息</div>
      <div @click="toSign">注册</div>
      <div @click="ShowLogin">登陆</div>
      <div class="HeadImg" @click="toCore"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tab",
  data() {
    return {
      LoginState: true,
      SignState: true
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
        path: `/search`
      });
    },
    toNews() {
      this.$router.push({
        path: `/News`
      });
    },
    toEnterprise() {
      this.$router.push({
        path: `/enterprise`
      });
    },
    toCore() {
      this.$router.push({
        path: `/core`
      });
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
        background: #fff;
        border-radius: 50%;
        overflow: hidden;
      }
    }
  }
}
</style>
