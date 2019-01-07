<template>
  <div class="core">
    <div class="coreHeard">
      <div class="coreHeardLogo"></div>
      <div class="coreHeardName">
        <div class="coreHeardNameTop">
          <div class="coreName">
            <p>基准方中建筑设计有限公司</p>
            <p>Sichuan，Chengdu 856 位关注者</p>
            <p>建筑设计行业</p>
          </div>
        </div>
        <div class="coreHeardNameBottom">
          <div class="follow">关注</div>
          <div class="over">
            <p>企业资料完成度70% </p>
            <div class="overBox">
              <div
                class="overBoxItem"
                style="width:70%;"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="coreMain">
      <div class="coreAbout">
        <div class="coreAboutintroduction">
          <div class="coreAboutHead">关于我们</div>
          <div class="coreAboutText">We’re a Swedish creative agency based in Shanghai where 30 digital-natives create the cam- paigns of tomorrow for Converse, Burberry, Absolut, New Balance, Ballantine’s, Dynaudio, Jameson, Sam’s Club and Skullcandy. We believe in walking before tal</div>
          <div class="coreAboutText">We’re a Swedish creative agency based in Shanghai where 30 digital-natives create the cam- paigns of tomorrow for Converse, Burberry, Absolut, New Balance, Ballantine’s, Dynaudio, Jameson, Sam’s Club and Skullcandy. We believe in walking before tal</div>
          <div class="coreAboutText">We’re a Swedish creative agency based in Shanghai where 30 digital-natives create the cam- paigns of tomorrow for Converse, Burberry, Absolut, New Balance, Ballantine’s, Dynaudio, Jameson, Sam’s Club and Skullcandy. We believe in walking before tal</div>
          <div class="coreAboutText">We’re a Swedish creative agency based in Shanghai where 30 digital-natives create the cam- paigns of tomorrow for Converse, Burberry, Absolut, New Balance, Ballantine’s, Dynaudio, Jameson, Sam’s Club and Skullcandy. We believe in walking before tal</div>
          <div class="coreAboutHead">公司详情</div>
          <div class="">公司网址</div>
          <div class="">公司简介</div>
          <div class="">公司网址</div>
        </div>
      </div>
      <div class="coreAboutLeft">
        <AboutList></AboutList>
      </div>
    </div>
  </div>
</template>

<script>
import AboutList from "@/components/aboutList/aboutList.vue";
export default {
  name: "core",
  components: {
    AboutList
  }
};
</script>

<style lang="scss" scoped>
.core {
  padding: 30px 20px;
  box-sizing: border-box;
  .coreHeard {
    display: flex;
    .coreHeardLogo {
      width: 170px;
      height: 170px;
      background: #fff;
    }
    .coreHeardName {
      width: calc(100% - 170px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .coreHeardNameTop {
        display: flex;
        width: 100%;
        .coreName {
          padding-left: 30px;
          box-sizing: border-box;
          p:nth-child(1) {
            font-size: 28px;
            font-weight: bold;
          }
          p:nth-child(3) {
            margin-top: 10px;
            color: #648aa2;
          }
        }
      }
      .coreHeardNameBottom {
        padding-left: 30px;
        box-sizing: border-box;
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: flex-end;
        .follow {
          height: 30px;
          width: 60px;
          line-height: 30px;
          text-align: center;
          background: #000;
          color: #fff;
          cursor: pointer;
        }
        .over {
          p {
            width: 100%;
            text-align: right;
            font-size: 28px;
            color: #2c73a1;
            margin-bottom: 20px;
          }
          .overBox {
            width: 500px;
            height: 12px;
            background: #fff;
            .overBoxItem {
              height: 12px;
              background: #326b90;
            }
          }
        }
      }
    }
  }
  .coreMain {
    display: flex;
    width: 100%;
    margin-top: 80px;
    .coreAbout {
      width: 70%;
      padding: 30px 40px;
      background: rgba($color: #648aa2, $alpha: 0.3);
      .coreAboutHead {
        font-size: 26px;
        margin-bottom: 30px;
      }
      .coreAboutText {
        font-size: 16px;
        line-height: 26px;
        margin: 10px 0;
      }
    }
    .coreAboutLeft {
      width: 30%;
      padding-left: 30px;
      box-sizing: border-box;
    }
  }
}
</style>
