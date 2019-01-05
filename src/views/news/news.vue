<template>
  <div class="news">
    <div class="newsList">
      <div class="newLogo">
        <img src="../../assets/images/new/logo.png" alt="" />
        <p>最新消息推送！</p>
      </div>
      <div class="newsItem" @click="showDetails">
        <span>您的注册信息已经完成。</span><span>未读</span>
      </div>
      <div class="newsItem">
        <span>您的注册信息已经完成。</span><span>未读</span>
      </div>
      <div class="newsItem">
        <span>您的注册信息已经完成。</span><span>未读</span>
      </div>
      <div class="newsItem">
        <span>您的注册信息已经完成。</span><span>未读</span>
      </div>
      <div class="newsItem">
        <span>您的注册信息已经完成。</span><span>未读</span>
      </div>
      <div class="newsItem">
        <span>您的注册信息已经完成。</span><span>未读</span>
      </div>
    </div>
    <div class="newsDetailsBox" v-if="showBox" @click="hidebox">
      <div class="newBox">
        <div class="newBoxHead">
          <div><img src="../../assets/images/new/logo.png" alt="" /></div>
          <div>
            <p>
              Basics contains components and complex blocks which can easily be
              integrated
            </p>
            <p>into almost any design.</p>
          </div>
        </div>
        <div class="newBoxTitle"><span>您的注册信息已经完成。</span></div>
        <div class="newBoxMian">
          11月30日下午，由巴适成都联合报花探店、成都生活君、成都那些事儿、触摸成都等成都生活方式类新媒体账号举办的“传媒新势力·2018成都UP榜”在蔚来中心拉开序幕。会上发布了2018年成都UP榜单，基准方中荣获“成都UP榜
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "news",
  data() {
    return {
      showBox: false
    };
  },
  methods: {
    showDetails() {
      this.showBox = true;
    },
    hidebox() {
      this.showBox = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.news {
  width: 100%;
  height: calc(100vh - 218px);
  padding: 26px;
  box-sizing: border-box;
  display: flex;
  .newsList {
    width: 100%;
    height: 100%;
    overflow: auto;
    background: #fff;
    padding-bottom: 20px;
    box-sizing: border-box;
    .newLogo {
      text-align: center;
      margin: 40px 0 10px;
      p {
        font-size: 24px;
        color: #326b90;
        margin-top: 20px;
      }
    }
    .newsItem {
      margin: 0 50px;
      border-bottom: 1px dashed #707070;
      height: 80px;
      line-height: 80px;
      display: flex;
      justify-content: space-between;
      font-size: 18px;
      cursor: pointer;
    }
  }
  .newsDetailsBox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba($color: #000000, $alpha: 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    .newBox {
      width: 50%;
      height: 66%;
      background: #fff;
      padding: 30px;
      box-sizing: border-box;
      overflow: auto;
      .newBoxHead {
        display: flex;
        justify-content: space-between;
        p {
          text-align: right;
          height: 24px;
          line-height: 24px;
          color: #326b90;
          font-size: 10px;
        }
      }
      .newBoxTitle {
        margin-top: 80px;
        font-size: 18px;
        span {
          font-weight: bold;
        }
      }
      .newBoxMian {
        font-size: 16px;
        line-height: 22px;
        margin-top: 50px;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
