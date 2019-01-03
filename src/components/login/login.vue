<template>
  <div class="login">
    <div class="LoginBox">
      <div class="close" @click="closeLogin">
        <i class="icon iconClose"></i>
      </div>
      <div class="LoginImg">
        <img src="../../assets/images/home/signUp.png" alt />
        <div class="LoginIcon">
          <img src="../../assets/images/icon/man.png" alt />
        </div>
      </div>
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
          <p class="inpText">验证码已发送您注册的邮箱中</p>
          <input type="text" placeholder="验证码" />
          <p class="Err">错误</p>
        </div>
        <div class="forgetPass"><span>忘记密码？</span></div>
        <div class="LoginBtn"><span>确认</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      close: false
    };
  },
  methods: {
    closeLogin() {
      this.$emit("closeLogin", this.close);
    }
  }
};
</script>

<style lang="scss">
.login {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($color: #000, $alpha: 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  .LoginBox {
    width: 400px;
    background: #2c73a1;
    padding: 24px 36px;
    box-sizing: border-box;
    position: relative;
    .close {
      position: absolute;
      left: -15px;
      top: -15px;
      width: 30px;
      height: 30px;
      background: #000;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      cursor: pointer;
    }
    .LoginImg {
      width: 100%;
      height: 78px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .LoginIcon {
        width: 78px;
        height: 78px;
        background: #fff;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .LoginInput {
      width: 100%;
      margin-top: 26px;
      .inpList {
        width: 100%;
        height: 40px;
        border: 2px solid #000;
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
          padding: 6px 35px;
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
