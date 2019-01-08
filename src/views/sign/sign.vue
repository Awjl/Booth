<template>
  <div class="signDetails">
    <div class="signBg">
      <div class="signBgName">
        <p>入驻booth</p>
        <p>目前只开放企业用户注册</p>
      </div>
      <div class="signBgList">
        <div class="LoginInput">
          <div class="inpList">
            <input type="text" placeholder="企业名称" />
            <p class="Err">错误</p>
          </div>
          <div class="inpList">
            <input type="password" placeholder="密码" />
            <p class="Err">错误</p>
          </div>
          <div class="inpList">
            <input type="text" placeholder="邮箱" />
            <p class="Err">错误</p>
          </div>
          <div class="LoginBtn" @click="toSign"><span>立即注册</span></div>
        </div>
      </div>
      <div class="signBgLogo">
        <img src="../../assets/images/home/logo.png" alt />
        <p>博商供应链</p>
        <div class="foot">Shanghai maiyu technology co.LTD</div>
      </div>
    </div>
    <div class="signBox" v-if="successbox">
      <div class="signBoxTrue">验证成功</div>
      <div class="signBoxTrue">验证失败，重新验证</div>
      <div class="signBoxTrue">未收到邮箱</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sign",
  data() {
    return {
      successbox: false
    };
  },
  methods: {
    toSign() {
      this.$router.push({
        path: `/infoOne`
      });
    }
  }
};
</script>

<style lang="scss">
.signDetails {
  width: 100vw;
  height: 100vh;
  background: #2c73a1;
  overflow: auto;
  .signBg {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .signBgName {
      color: #fff;
      text-align: center;
      p:nth-child(1) {
        font-size: 50px;
      }
      p:nth-child(2) {
        font-size: 20px;
      }
    }
    .signBgList {
      width: 300px;
      height: 300px;
      margin-top: 50px;
      .LoginInput {
        width: 100%;
        margin-top: 26px;
        .inpList {
          width: 100%;
          height: 40px;
          border: 1px solid #000;
          margin-bottom: 20px;
          position: relative;
          box-sizing: border-box;
          .Err {
            position: absolute;
            top: 44px;
            right: 0;
            color: red;
            font-size: 12px;
          }
          .inpText {
            position: absolute;
            bottom: 40px;
            left: 0;
            font-size: 10px;
          }
          input {
            width: 100%;
            height: 100%;
            background: initial;
            outline: none;
            padding: 0 10px;
            box-sizing: border-box;
            &::-webkit-input-placeholder {
              color: #000;
            }
          }
        }
        .forgetPass {
          text-align: right;
          font-size: 12px;
          font-weight: bold;
          margin-top: 4px;
          span {
            cursor: pointer;
          }
        }
        .LoginBtn {
          text-align: center;
          span {
            background: #000;
            padding: 6px 26px;
            color: #fff;
            cursor: pointer;
          }
        }
      }
    }
    .signBgLogo {
      text-align: center;
      p {
        color: #fff;
        letter-spacing: 6px;
      }
      .foot {
        margin-top: 50px;
      }
    }
  }
  .signBox {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 330px;
    height: 200px;
    margin: auto;
    background: rgba($color: #000000, $alpha: 0.5);
    padding: 20px;
    box-sizing: border-box;
    .signBoxTrue {
      height: 54px;
      line-height: 54px;
      width: 100%;
      color: #fff;
      text-align: center;
      font-size: 20px;
      border-bottom: 1px solid #fff;
    }
    div:nth-child(3) {
      border: none;
    }
  }
}
</style>
