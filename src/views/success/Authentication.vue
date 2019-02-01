<template>
  <div class="signDetails">
    <div class="signBgTwo">
      <div class="signBgInfoLog">
        <div class="infoLog" @click="tohome">
          <img src="../../assets/images/home/logo.png" alt>
        </div>
        <div class="infoLog">
          <p>申请认证</p>
          <p>目前只开放企业用户注册</p>
        </div>
      </div>
      <div class="Authentication">
        <div class="Authenticationbox">
          <p class="Authenticationboxhead">{{name}}</p>
          <div class="Authenticationboxtext">
            <p>
              {{name}}已经您设置为其
              <span v-if="type == '1'">伙伴</span>
              <span v-if="type == '2'">主要供应商</span>
              <span v-if="type == '3'">第三方服务</span>，为了维持真实的合作伙伴关系网络，
            </p>
            <p>请贵公司及时对该企业这一行为进行认证。</p>
          </div>
          <div class="Authenticationboxbtn">
            <span @click="toTrue">通过</span>
            <span @click="toOver">拒绝</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isAgreeMsg } from "@/api/api.js";
import {
  gettoken,
  settoken,
  getname,
  setname,
  getway,
  setway,
  gettype,
  settype
} from "@/utils/auth.js";

export default {
  name: "sign",
  data() {
    return {
      overBoxone: false,
      token: "",
      name: "",
      way: "",
      type: "",
      id: ""
    };
  },
  created() {
    if (this.$route.query.token) {
      settoken(this.$route.query.token);
    }
    if (this.$route.query.name) {
      setname(this.$route.query.name);
    }
    if (this.$route.query.way) {
      setway(this.$route.query.way);
    }
    if (this.$route.query.type) {
      settype(this.$route.query.type);
    }
    this.token = gettoken();
    this.name = getname();
    this.way = getway();
    this.type = gettype();
  },
  methods: {
    toTrue() {
      if (this.way === 2) {
        isAgreeMsg(this.token, 1).then(res => {
          console.log(res);
        });
      } else {
        if (this.id) {
          isAgreeMsg(this.token, 1, id).then(res => {
            console.log(res);
          });
        } else {
          this.$router.push({
            path: `/sign`
          });
        }
      }
    },
    toOver() {
      if (this.way === 2) {
        isAgreeMsg(this.token, 2).then(res => {
          console.log(res);
        });
      } else {
        if (this.id) {
          isAgreeMsg(this.token, 2, id).then(res => {
            console.log(res);
          });
        } else {
          this.$router.push({
            path: `/sign`
          });
        }
      }
    },
    tohome() {
      this.$router.push({
        path: `/home`
      });
    }
  }
};
</script>

<style lang="scss">
.signDetails {
  width: 100vw;
  height: 100vh;
  background: #2c73a1;
  overflow: auto;
  .signBgTwo {
    height: 100%;
    width: 100%;
    .signBgInfoLog {
      height: 90px;
      padding: 10px;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .infoLog {
        color: #fff;
        text-align: center;
        img {
          cursor: pointer;
        }
        p:nth-child(1) {
          font-size: 50px;
        }
        p:nth-child(2) {
          font-size: 20px;
        }
      }
    }
    .Authentication {
      height: calc(100% - 90px);
      margin: 0 auto;
      max-width: 1200px;
      width: 100%;
      padding: 0 30px;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .Authenticationbox {
        width: 800px;
        .Authenticationboxhead {
          font-size: 50px;
          color: #fff;
          margin-bottom: 50px;
        }
        .Authenticationboxtext {
          font-size: 18px;
          color: #fff;
          line-height: 30px;
        }
        .Authenticationboxbtn {
          margin-top: 50px;
          span {
            padding: 6px 30px;
            background: #000;
            color: #fff;
            margin-right: 10px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
