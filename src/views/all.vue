<template>
  <div class="all">
    <Tab
      v-on:ShowLogin="ShowLogin"
      v-on:ShowSign="ShowSign"
    ></Tab>
    <router-view></router-view>
    <Food></Food>
    <Login
      v-if="loginState"
      v-on:closeLogin="closeLogin"
    ></Login>
    <!-- <Sign v-if="signState" v-on:closeSign="closeSign"></Sign> -->
  </div>
</template>

<script>
import Tab from "@/components/tab/tab.vue";
import Food from "@/components/food/food.vue";
import Login from "@/components/login/login.vue";
// import Sign from "@/components/sign/sign.vue";
import { getCompanyInfo, ERR_OK } from "@/api/api.js"

export default {
  name: "all",
  data() {
    return {
      loginState: false,
      signState: false
    };
  },
  created() {
    this._getCompanyInfo()
  },
  methods: {
    _getCompanyInfo() {
      getCompanyInfo(this.$store.state.user.UserID, this.$store.state.user.UserID).then(res => {
        if (res.status === ERR_OK) {
          this.dataList = res.data.data
          console.log(res.data.data)
        }
      })
    },
    ShowLogin(LoginState) {
      this.loginState = LoginState;
      console.log(this.loginState);
    },
    ShowSign(SignState) {
      this.signState = SignState;
      console.log(this.signState);
    },
    closeLogin(closeLogin) {
      this.loginState = closeLogin;
    },
    closeSign(closeSign) {
      this.signState = closeSign;
    }
  },
  components: {
    Tab,
    Food,
    Login
    // Sign
  }
};
</script>
