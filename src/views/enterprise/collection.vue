<template>
  <div class="collection">
    <div class="collectionNav">
      <div class="collectionNavSeach">
        <span>筛选器/行业分类列表</span>
        <input
          type="text"
          placeholder="搜索企业"
        >
      </div>
      <div class="collectionNavBottom">
        <div class="collectionMian">
          <div class="collectionMianOne">一级分类</div>
          <div class="collectionMiantwo">二级分类</div>
          <div class="collectionMianthree">三级分类</div>
        </div>
        <div class="collectionList">
          <div
            class="collectionItem"
            @click="toEnterprise"
          >发现</div>
          <div
            class="collectionItem"
            @click="toHistory"
          >历史记录</div>
          <div
            class="collectionItem ItemAct"
            @click="toCollection"
          >收藏</div>
        </div>
      </div>
    </div>
    <div class="collectionBox">
      <div class="collectionBoxLeft">
        <div class="collectHead">
          <span>产品册</span>
        </div>
        <div class="leftList">
          <div
            class="leftListItem"
            v-for="(item, index) in dataList.products"
            :key="index"
          >
            <div class="brochureItemImg">
              <img
                :src="`${item.coverUrl}`"
                alt
              />
            </div>
            <div class="brochureItemText">
              <div class="brochureItemHead">
                <div class="brochureItemName">
                  <div class="brochureItemLogo">
                    <img
                      :src="`http://47.101.165.134${item.logoUrl}`"
                      alt
                    />
                  </div>
                  <div class="brochureLogoName">
                    <p>{{item.name}}</p>
                    <p>{{item.fansNumber}}关注者</p>
                    <p>{{item.industryName}}</p>
                  </div>
                </div>
                <div class="brochureItemNum">阅读量 {{item.readVolume}}</div>
              </div>
              <div class="brochureItemmanual">
                <p>{{item.title}}</p>
                <div class="label">
                  <span
                    v-for="(item, num) in item.label.split(',')"
                    :key="num"
                    v-show="item"
                  >{{item}}</span>
                </div>
                <div class="brochureintroduce">
                  {{item.summary}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="collectionBoxRight">
        <div class="collectHead">
          <span>图片</span>
        </div>
        <div class="rightimgList">
          <div
            class="rightImgItem"
            v-for="(item, index) in dataList.pictures"
            :key="index"
          >
            <img
              :src="item.url"
              alt=""
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCollectionRecord, ERR_OK } from "@/api/api.js";

export default {
  name: "collection",
  data() {
    return {
      dataList: {
        pictures: [],
        products: [],
      },
      infoData: {
        id: this.$store.state.user.UserID,
        name: "",
        firstIndustryId: "",
        secondIndustryId: ""
      },
    }
  },
  created() {
    this._getCollectionRecord()
  },
  methods: {
    _getCollectionRecord() {
      getCollectionRecord(this.infoData).then(res => {
        if (res.data.code === 0) {
          console.log('收藏列表-------------------------------------')
          console.log(res.data.data)
          this.dataList = res.data.data
        }
      })
    },
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
.collection {
  height: calc(100vh - 218px);
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  .collectionNav {
    height: 100%;
    width: 240px;
    padding: 0 10px;
    box-sizing: border-box;
    border-right: 1px dashed #707070;
    .collectionNavSeach {
      display: flex;
      justify-content: space-between;
      font-size: 10px;
      height: 30px;
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
    .collectionNavBottom {
      height: calc(100% - 30px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .collectionMian {
      height: 360px;
      width: 100%;
      margin-top: 20px;
      background: rgba($color: #326b90, $alpha: 0.1);
      .collectionMianOne {
        width: 100%;
        height: 36px;
        line-height: 36px;
        padding: 0 10px;
        box-sizing: border-box;
        background: #326b90;
        font-size: 14px;
      }
      .collectionMiantwo {
        width: 100%;
        height: 36px;
        line-height: 36px;
        padding: 0 28px;
        box-sizing: border-box;
        background: rgba($color: #326b90, $alpha: 0.6);
        font-size: 10px;
      }
      .collectionMianthree {
        width: 100%;
        height: 36px;
        line-height: 36px;
        padding: 0 42px;
        box-sizing: border-box;
        font-size: 10px;
      }
    }
    .collectionList {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      .collectionItem {
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
  .collectionBox {
    width: calc(100% - 240px);
    height: calc(100vh - 218px);
    display: flex;
    .collectHead {
      font-size: 20px;
      height: 30px;
      span {
        font-weight: bold;
      }
      input {
        width: 100px;
        height: 20px;
        line-height: 20px;
        padding: 0 10px;
        box-sizing: border-box;
        border: 1px solid #707070;
        margin-left: 30px;
      }
    }
    .collectionBoxLeft {
      width: 60%;
      height: calc(100vh - 248px);
      padding: 0 20px;
      box-sizing: border-box;
      border-right: 1px dashed #707070;
      .leftList {
        height: calc(100vh - 288px);
        overflow: auto;
        .leftListItem {
          width: 100%;
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          margin: 10px 0;
          .brochureItemImg {
            width: 162px;
            background: #fff;
          }
          .brochureItemText {
            width: calc(100% - 182px);
            margin-left: 20px;
            .brochureItemName {
              display: flex;
              .brochureItemLogo {
                width: 88px;
              }
              .brochureLogoName {
                margin-left: 10px;
                p:nth-child(1) {
                  margin-top: 4px;
                  font-size: 16px;
                  font-weight: bold;
                }
                p:nth-child(2) {
                  margin-top: 6px;
                }
                p:nth-child(3) {
                  color: #326b90;
                  font-weight: bold;
                  font-size: 12px;
                  margin-top: 6px;
                }
              }
            }
            .brochureItemHead {
              display: flex;
              justify-content: space-between;
              .brochureItemNum {
                font-weight: bold;
                margin-top: 30px;
              }
            }
            .brochureItemmanual {
              p {
                font-size: 16px;
                margin: 6px 0;
              }
              .label {
                span {
                  display: inline-block;
                  width: 60px;
                  height: 24px;
                  text-align: center;
                  line-height: 24px;
                  margin-right: 4px;
                  background: rgba($color: #000000, $alpha: 0.2);
                  color: #fff;
                }
              }
              .brochureintroduce {
                width: 100%;
                height: 64px;
                background: rgba($color: #000000, $alpha: 0.2);
                margin-top: 10px;
              }
            }
          }
        }
      }
    }
    .collectionBoxRight {
      width: 40%;
      height: 100%;
      padding: 0 20px;
      box-sizing: border-box;
      .rightimgList {
        height: 520px;
        overflow: auto;
        .rightImgItem {
          width: 80px;
          height: 80px;
          margin-right: 10px;
          background: #fff;
          float: left;
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
