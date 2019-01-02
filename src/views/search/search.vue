<template>
  <div class="searchPag">
    <div class="searchNav">
      <div class="searchList">
        <div class="searchItem">
          <div><span>企业</span><span>300个</span></div>
        </div>
        <div class="searchItem">
          <div><span>展会</span><span>300个</span></div>
        </div>
        <div class="searchItem">
          <div><span>企业动态</span><span>300个</span></div>
        </div>
        <div class="searchItem">
          <div><span>产品手册</span><span>300个</span></div>
        </div>
        <div class="searchItem">
          <div><span>产品图片</span><span>300个</span></div>
        </div>
      </div>
      <div class="searchText">
        <p>“金融圈xxxx”</p>
        <p>相关搜索结果</p>
      </div>
    </div>
    <div class="searchAll">
      <div class="searchMine">
        <div class="searchMineTop"></div>
        <div class="searchMineBottom"></div>
      </div>
      <div class="searchRight">
        <div class="searchRightTop"></div>
        <div class="searchRightmian"></div>
        <div class="searchRightBottom"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "searchPag"
};
</script>

<style lang="scss">
.searchPag {
  width: 100%;
  height: calc(100vh - 218px);
  background: #fff;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  .searchNav {
    width: 184px;
    height: 100%;
    .searchItem {
      width: 100%;
      height: 54px;
      background: #fff;
      margin-bottom: 6px;
      div {
        width: 100%;
        height: 100%;
        background: rgba($color: #326b90, $alpha: 0.2);
        font-size: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        box-sizing: border-box;
      }
    }
    .searchText {
      margin-top: 140px;
      text-align: center;
    }
  }
  .searchAll {
    width: calc(100% - 184px);
    height: 100%;
    display: flex;
    .searchMine {
      width: calc(50% - 10px);
      height: 100%;
      margin-left: 10px;
      .searchMineTop {
        width: 100%;
        height: calc(45% - 10px);
        background: #f2f2f2;
        margin-bottom: 10px;
        overflow: auto;
      }
      .searchMineBottom {
        width: 100%;
        height: 55%;
        background: #f2f2f2;
        overflow: auto;
      }
    }
    .searchRight {
      width: calc(50% - 10px);
      height: 100%;
      margin-left: 10px;
      .searchRightTop {
        width: 100%;
        height: calc(35% - 10px);
        background: #f2f2f2;
        margin-bottom: 10px;
        overflow: auto;
      }
      .searchRightmian {
        width: 100%;
        height: calc(40% - 10px);
        background: #f2f2f2;
        margin-bottom: 10px;
        overflow: auto;
      }
      .searchRightBottom {
        width: 100%;
        height: 25%;
        background: #f2f2f2;
        overflow: auto;
      }
    }
  }
}
</style>
