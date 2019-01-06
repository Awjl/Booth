<template>
  <div class="sign">
    <div class="signBg">
      <div class="signBgInfoLog">
        <div class="infoLog">
          <img src="../../assets/images/home/logo.png" alt />
        </div>
        <div class="infoLog">
          <p>入驻booth</p>
          <p>目前只开放企业用户注册</p>
        </div>
      </div>
      <div class="signBgMain">
        <div class="signBgMainLeft">
          <div class="signBgMainList" @click="toOne">基础信息</div>
          <div class="signBgMainList ListAct" @click="toTwo">
            行业及商业伙伴
          </div>
          <div class="signBgMainList" @click="toThree">其他信息</div>
          <div class="signBgMainList" @click="toFour">形象展示</div>
          <div class="signBgMainList" @click="toFive">信息核对</div>
        </div>
        <div class="signBgMainRight">
          <div class="signBgMainList">
            <div class="signBgMainTRightItem">
              <p>行业类型（勾选）</p>
              <input type="text" />
            </div>
            <div class="signBgMainTRightItem">
              <p>主要竞争对手（上限5个）</p>
              <div class="ItemText">
                <span>标签</span><span>标签</span><span>标签</span>
              </div>
            </div>
            <div class="signBgMainTRightItem">
              <p>行业关键词录入（上限5个）</p>
              <div class="ItemText">
                <span>标签</span><span>标签</span><span>标签</span>
              </div>
            </div>
            <div class="signBgMainTRightItem">
              <p>主要供应商（上限5个）</p>
              <div class="ItemText">
                <span>标签</span><span>标签</span><span>标签</span>
              </div>
            </div>
            <div class="signBgMainTRightItem">
              <p>主要工艺（上限5个）</p>
              <div class="ItemText">
                <span>标签</span><span>标签</span><span>标签</span>
              </div>
            </div>
            <div class="signBgMainTRightItem">
              <p>主要客户（上限5个）</p>
              <div class="ItemText">
                <span>标签</span><span>标签</span><span>标签</span>
              </div>
            </div>
            <div class="signBgMainTRightItem">
              <p>第三方服务商（上限5个）</p>
              <div class="ItemText">
                <span>标签</span><span>标签</span><span>标签</span>
              </div>
            </div>
            <div class="signBgMainTRightItem">
              <p>简介（最多200字）</p>
              <textarea class="ItemText"></textarea>
            </div>
          </div>
          <div class="signExhibition">
            <div><span>你所感兴趣的展会</span> <span>+</span></div>
            <div class=""></div>
          </div>
          <div class="signBgMainFoot">
            <span>保存并返回到首页</span><span>下一页</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sign",
  methods: {
    toOne() {
      this.$router.push({
        path: `/infoOne`
      });
    },
    toTwo() {
      this.$router.push({
        path: `/infoTwo`
      });
    },
    toThree() {
      this.$router.push({
        path: `/infoThree`
      });
    },
    toFour() {
      this.$router.push({
        path: `/infoFour`
      });
    },
    toFive() {
      this.$router.push({
        path: `/infoFive`
      });
    }
  }
};
</script>

<style lang="scss">
.sign {
  width: 100vw;
  height: 100vh;
  background: #2c73a1;
  overflow: auto;
  .signBg {
    height: 100%;
    width: 100%;
    .signBgInfoLog {
      padding: 10px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      .infoLog {
        color: #fff;
        text-align: center;
        p:nth-child(1) {
          font-size: 50px;
        }
        p:nth-child(2) {
          font-size: 20px;
        }
      }
    }
    .signBgMain {
      height: 496px;
      width: 100%;
      padding: 0 30px;
      box-sizing: border-box;
      display: flex;
      .signBgMainLeft {
        height: 100%;
        width: 246px;
        padding: 0 20px;
        border-right: 1px dashed #fff;
        .signBgMainList {
          width: 100%;
          text-align: right;
          font-size: 16px;
          color: #ddd;
          margin-bottom: 20px;
          cursor: pointer;
        }
        .ListAct {
          color: #fff;
          font-weight: bold;
        }
      }
      .signBgMainRight {
        width: calc(100% - 246px);
        padding: 0 80px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: auto;
        // align-items: center;
        .signBgMainList {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
        }
        .signBgMainTRightItem {
          width: 50%;
          height: 98px;
          margin-bottom: 10px;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          p {
            font-size: 16px;
            color: #fff;
            margin: 6px 0;
            width: 344px;
          }
          input {
            padding: 0 10px;
            box-sizing: border-box;
            width: 344px;
            height: 32px;
            outline: none;
            background: rgba($color: #fff, $alpha: 0.5);
          }
          .ItemText {
            padding: 0 10px;
            box-sizing: border-box;
            width: 344px;
            height: 70px;
            outline: none;
            background: rgba($color: #fff, $alpha: 0.5);
            span {
              display: inline-block;
              padding: 4px 10px;
              background: rgba($color: #000, $alpha: 0.3);
              margin: 10px;
            }
          }
        }
        .signBgMainFoot {
          display: flex;
          justify-content: flex-end;
          span:nth-child(1) {
            display: inline-block;
            width: 110px;
            height: 32px;
            line-height: 32px;
            text-align: center;
            background: #000;
            color: #fff;
            font-size: 10px;
          }
          span:nth-child(2) {
            display: inline-block;
            width: 85px;
            height: 32px;
            line-height: 32px;
            text-align: center;
            background: #000;
            color: #fff;
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>
