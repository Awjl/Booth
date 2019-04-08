<template>
  <div class="signDetails">
    <div class="signBg">
      <div class="signBgName">
        <p>登陆booth</p>
      </div>
      <div class="LoginInput">
        <div class="inpList">
          <input type="text" placeholder="邮箱/手机号/企业简称" v-model="UserData.username">
          <p class="Err">{{usernameERR}}</p>
        </div>
        <div class="inpList">
          <input type="password" placeholder="密码" v-model="UserData.password">
          <p class="Err">{{passwordERR}}</p>
        </div>
        <div class="inpList">
          <p class="inpText">验证码发送至您注册的邮箱中</p>
          <input type="text" placeholder="验证码" v-model="UserData.code">
          <div class="Listbtn" @click="_sendCode">发送</div>
          <p class="Err">{{codeERR}}</p>
        </div>
        <div class="forgetPass">
          <span @click="Toforget">忘记密码？</span>
          <span @click="ToSign">去注册</span>
        </div>
        <div class="LoginBtn">
          <span @click="_login">确认</span>
        </div>
      </div>
      <div class="signBgLogo">
        <img src="../../assets/images/home/logo.png" alt>
        <p>博商供应链</p>
        <div class="foot">上海麦屿信息科技有限公司</div>
      </div>
    </div>
  </div>
</template>

<script>
import { login, sendCode, ERR_OK } from "@/api/api.js";
import { setUser, setOne, setTwo } from "@/utils/auth.js";
export default {
  name: "sign",
  data() {
    return {
      close: false,
      usernameERR: "",
      passwordERR: "",
      codeERR: "",
      UserData: {
        username: "",
        password: "",
        code: ""
      }
    };
  },
  created() {},
  methods: {
    _login() {
      if (!this.UserData.username) {
        this.usernameERR = "请输入用户名";
      } else {
        this.usernameERR = "";
      }
      if (!this.UserData.password) {
        this.passwordERR = "请输入密码";
      } else {
        this.passwordERR = "";
      }
      if (!this.UserData.code) {
        this.codeERR = "请输入验证码";
      } else {
        this.codeERR = "";
      }
      if (
        this.UserData.username &&
        this.UserData.password &&
        this.UserData.code
      ) {
        login(this.UserData).then(res => {
          if (res.data.code === 500505) {
            this.codeERR = res.data.msg;
          }
          if (res.data.code === 500500) {
            this.passwordERR = res.data.msg;
          }
          if (res.data.code === 0) {
            this.closeLogin();
            if (res.data.data.isRegister === 2) {
              setUser(res.data.data.id);
              setOne(res.data.data.oneIndustryid);
              setTwo(res.data.data.twoIndustryid);
              this.$router.push({
                name: `home`
              });
            } else {
              this.$router.push({
                name: `infoOne`,
                params: { id: res.data.data.id }
              });
            }
          }
        });
      }
    },
    _sendCode() {
      sendCode(this.UserData.username).then(res => {
        if (res.data.code === 500504) {
          this.usernameERR = res.data.msg;
        }
      });
    },
    ToSign() {
      this.$router.push({
        path: `/sign`
      });
    },
    Toforget() {
      this.$router.push({
        path: `/forgetPass`
      });
    },
    closeLogin() {
      this.$emit("closeLogin", this.close);
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
    .LoginInput {
      width: 300px;
      margin: 26px 0;
      .inpList {
        width: 100%;
        height: 40px;
        border: 2px solid #000;
        margin-bottom: 20px;
        position: relative;
        box-sizing: border-box;
        .Listbtn {
          position: absolute;
          top: 0px;
          right: 0px;
          height: 24px;
          line-height: 24px;
          width: 30px;
          text-align: center;
          background: #000;
          padding: 6px 35px;
          color: #fff;
          cursor: pointer;
        }
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
        text-align: center;
        font-size: 12px;
        font-weight: bold;
        margin-top: -10px;
        span {
          cursor: pointer;
          margin: 0 10px;
        }
      }
      .LoginBtn {
        text-align: center;
        margin-top: 50px;
        span {
          background: #000;
          padding: 6px 35px;
          color: #fff;
          cursor: pointer;
        }
      }
    }
    .signBgLogo {
      margin-top: 20px;
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
      cursor: pointer;
    }
    div:nth-child(3) {
      border: none;
    }
  }
}
</style>
