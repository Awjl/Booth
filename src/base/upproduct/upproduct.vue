<template>
  <div class="upproduct">
    <div class="upproductHead">
      <span>产品册上传</span>
      <span @click="hide">取消</span>
    </div>
    <div class="upproductList">
      <div class="upproductItem">
        <p>产品册标题</p>
        <input type="text" v-model="dataList.title">
      </div>
      <div class="upproductItem">
        <p>本地上传</p>
        <div>
          <input type="file">
        </div>
      </div>
      <div class="upproductItem">
        <p>简介（最多200字）</p>
        <textarea v-model="dataList.summary"></textarea>
      </div>
      <div class="upproductItem">
        <p>添加标签（上限五个）</p>
        <div class="upproductLabel">
          <span>标签</span>
        </div>
      </div>
      <div class="upproductItem">
        <p>上传封面</p>
        <div class="upproductimg"></div>
      </div>
      <div class="upproductBtn">
        <span>确认发布</span>
      </div>
    </div>
  </div>
</template>

<script>
import { saveProduct, ERR_OK } from "@/api/api.js"
export default {
  data() {
    return {
      hideState: false,
      fromData: new fromData,
      dataList: {
        userId: this.$store.state.user.UserID,
        title: "",
        summary: "",
        label: "",
        pdfFile: "",
        coverPic: ""
      }
    }
  },
  methods: {
    _saveProduct() {
      saveProduct().then(res => {
        if (res.data.code === 0) {
          console.log("上传成功")
        }
      })
    },
    hide() {
      this.$emit("clicehide", this.hideState);
    }
  }
};
</script>

<style lang="scss">
.upproduct {
  height: 90vh;
  max-height: 616px;
  width: 428px;
  background: #fff;
  overflow: auto;
  padding: 20px;
  box-sizing: border-box;
  .upproductHead {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    span:nth-child(1) {
      font-size: 24px;
      font-weight: bold;
    }
  }
  .upproductList {
    width: 100%;
    .upproductItem {
      margin-bottom: 20px;
      p {
        font-size: 12px;
        margin: 4px 0;
      }
      input {
        height: 24px;
        width: 100%;
        background: #cfdae2;
        outline: none;
        // padding: 0 10px;
        box-sizing: border-box;
      }
      textarea {
        width: 100%;
        height: 78px;
        background: #cfdae2;
        outline: none;
        padding: 0 10px;
        box-sizing: border-box;
      }
      .upproductimg {
        width: 106px;
        height: 134px;
        background: #cfdae2;
        margin: 0 auto;
      }
      .upproductLabel {
        width: 100%;
        height: 56px;
        background: #cfdae2;
        span {
          display: inline-block;
          padding: 4px 10px;
          background: rgba($color: #000, $alpha: 0.3);
          margin: 10px;
          cursor: pointer;
        }
      }
    }
    .upproductBtn {
      width: 100%;
      span {
        float: right;
        width: 66px;
        text-align: center;
        line-height: 24px;
        color: #fff;
        height: 24px;
        background: #2c73a1;
        font-size: 10px;
        cursor: pointer;
      }
    }
  }
}
</style>
