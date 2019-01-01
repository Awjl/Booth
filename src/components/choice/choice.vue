<template>
  <div class="choice">
    <div class="searchBox">
      <input type="text" placeholder="搜索你感兴趣的企业/展会" />
      <i class="icon iconSearch"></i>
    </div>
    <div class="choiceBox" @click="choiceShow()">
      选择你的所属行业 Selected list item
      <div class="choiceList" v-if="choiceBoxshow">
        <div
          class="choiceItem"
          v-for="(items, index) in items"
          :key="index"
          :class="{ choiceItemHover: index == typeindex }"
          @mouseenter="mouseOver(index)"
        >
          {{ items }}
        </div>
      </div>
      <div class="choiceList" style="left:170px;" v-if="choiceBoxshow">
        <div class="choiceListChildren">
          <div class="choiceItem">基金/证券/期货/投资</div>
          <div class="choiceItem">保险</div>
          <div class="choiceItem">银行</div>
          <div class="choiceItem">信托/担保/拍卖/典当</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "choice",
  data() {
    return {
      choiceBoxshow: false,
      typeindex: 0,
      items: [
        "IT|通信|电子|互联网",
        "金融业",
        "房地产|建筑业",
        "商业服务",
        "贸易|批发|零售|租凭业",
        "文体教育|工艺美术",
        "生产|加工|制造"
      ]
    };
  },
  methods: {
    choiceShow() {
      this.choiceBoxshow = !this.choiceBoxshow;
      this.typeindex = 0;
    },
    mouseOver(index) {
      console.log(index);
      this.typeindex = index;
    }
  }
};
</script>

<style lang="scss">
.choice {
  margin-bottom: 50px;
  .searchBox {
    width: 246px;
    height: 30px;
    border: 1px dashed #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    .iconSearch {
      cursor: pointer;
    }
    input {
      background: initial;
      outline: none;
      color: #fff;
      width: 190px;
      margin-right: 10px;
      font-size: 12px;
      &::-webkit-input-placeholder {
        color: #fff;
        font-size: 12px;
      }
    }
  }
  .choiceBox {
    width: 248px;
    height: 40px;
    line-height: 40px;
    margin-top: 10px;
    background: #fff;
    text-align: center;
    font-size: 14px;
    color: #326b90;
    cursor: pointer;
    position: relative;
    .choiceList {
      position: absolute;
      top: 45px;
      left: 0;
      width: 174px;
      height: 189px;
      background: #fff;
      box-sizing: border-box;
      overflow: auto;
      .choiceItemHover {
        background: rgba($color: #326b90, $alpha: 0.2);
      }
      .choiceItem {
        text-align: left;
        width: 100%;
        height: 24px;
        line-height: 24px;
        padding: 0 15px;
        box-sizing: border-box;
        color: #000;
        &:nth-child(1) {
          margin-top: 10px;
        }
        &:last-child {
          margin-bottom: 10px;
        }
      }
      .choiceListChildren {
        height: 100%;
        width: 100%;
        padding: 10px 15px;
        box-sizing: border-box;
        // border-left: 1px solid #000;
        background: rgba($color: #326b90, $alpha: 0.2);
        .choiceItem {
          // margin: 0 10px;
          padding: 0;
          border-bottom: 1px solid #707070;
          &:nth-child(1) {
            margin-top: 0px;
          }
          &:last-child {
            margin-bottom: 0px;
          }
          &:hover {
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
