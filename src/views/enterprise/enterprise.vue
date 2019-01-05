<template>
  <div class="enterprise">
    <div class="enterpriseNav">
      <div class="enterpriseNavSeach">
        <span>筛选器/行业分类列表</span>
        <input type="text" placeholder="搜索企业" />
      </div>
      <div class="enterpriseMian">
        <div class="enterpriseMianOne">一级分类</div>
        <div class="enterpriseMiantwo">二级分类</div>
        <div class="enterpriseMianthree">三级分类</div>
      </div>
      <div class="enterpriseList">
        <div class="enterpriseItem ItemAct" @click="toEnterprise">发现</div>
        <div class="enterpriseItem" @click="toHistory">历史记录</div>
        <div class="enterpriseItem" @click="toCollection">收藏</div>
      </div>
    </div>
    <div class="enterpriseBox"></div>
  </div>
</template>

<script>
export default {
  name: "enterprise",
  methods: {
    toEnterprise() {
      this.$router.push({
        path: `/enterprise`
      });
    },
    toHistory() {
      this.$router.push({
        path: `/history`
      });
    },
    toCollection() {
      this.$router.push({
        path: `/collection`
      });
    }
  }
};
</script>

<style lang="scss">
.enterprise {
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  .enterpriseNav {
    width: 240px;
    padding: 0 10px;
    box-sizing: border-box;
    border-right: 1px dashed #707070;
    .enterpriseNavSeach {
      display: flex;
      justify-content: space-between;
      font-size: 10px;
      span {
        height: 20px;
        line-height: 20px;
      }
      input {
        width: 100px;
        height: 20px;
        line-height: 20px;
        padding: 0 10px;
        box-sizing: border-box;
        border: 1px solid #707070;
      }
    }
    .enterpriseMian {
      height: 360px;
      width: 100%;
      margin-top: 20px;
      background: rgba($color: #326b90, $alpha: 0.1);
      .enterpriseMianOne {
        width: 100%;
        height: 36px;
        line-height: 36px;
        padding: 0 10px;
        box-sizing: border-box;
        background: #326b90;
        font-size: 14px;
      }
      .enterpriseMiantwo {
        width: 100%;
        height: 36px;
        line-height: 36px;
        padding: 0 28px;
        box-sizing: border-box;
        background: rgba($color: #326b90, $alpha: 0.6);
        font-size: 10px;
      }
      .enterpriseMianthree {
        width: 100%;
        height: 36px;
        line-height: 36px;
        padding: 0 42px;
        box-sizing: border-box;
        font-size: 10px;
      }
    }
    .enterpriseList {
      margin-top: 80px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      .enterpriseItem {
        width: 100px;
        height: 24px;
        line-height: 24px;
        text-align: center;
        font-size: 18px;
        cursor: pointer;
      }
      .ItemAct {
        font-weight: bold;
      }
    }
  }
  .enterpriseBox {
    width: calc(100% - 240px);
    height: 100px;
    background: #000;
  }
}
</style>
