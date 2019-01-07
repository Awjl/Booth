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
              <div class="overBoxItem" style="width:70%;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="coreMain">
      <div class="coreAbout"></div>
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
            color: #648AA2;
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
            color: #2C73A1;
            margin-bottom: 20px;
          }
          .overBox {
            width: 500px;
            height: 12px;
            background: #fff;
            .overBoxItem {
              height: 12px;
              background: #326B90;
            }
          }
        }
      }
    }
  }
}
</style>
