<template>
  <div class="homeLogin">
    <div class="LoginMen">
      <div class="LoginItem">
        <div class="sign">
          <img src="../../assets/images/home/signUp.png" alt />
          <div class="signIcon">
            <img src="../../assets/images/icon/man.png" alt />
          </div>
        </div>
        <div class="signBtn">加入booth</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeLogin"
};
</script>

<style lang="scss">
.homeLogin {
  width: 100%;
  .LoginMen {
    width: 100%;
    height: 260px;
    background: #ebebeb;
    .LoginItem {
      width: 100%;
      height: 100%;
      padding: 30px 46px;
      box-sizing: border-box;
      background: rgba($color: #2c73a1, $alpha: 0.3);
      .sign {
        width: 100%;
        height: 78px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .signIcon {
          width: 78px;
          height: 78px;
          background: #fff;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .signBtn {
        width: 146px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        background: #000;
        color: #ffffff;
        font-size: 22px;
        margin: 70px auto 0;
        cursor: pointer;
      }
    }
  }
}
</style>
