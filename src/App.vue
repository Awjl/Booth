<template>
  <div id="app">
    <router-view v-wechat-title="$route.meta.title"></router-view>
  </div>
</template>
<script>
import { getCompanyInfo, ERR_OK } from "@/api/api.js";

export default {
  created() {
    if (this.$store.state.user.UserID) {
      this._getCompanyInfo()
    }
  },
  methods: {
    _getCompanyInfo() {
      getCompanyInfo(this.$store.state.user.UserID, this.$store.state.user.UserID).then(res => {
        if (res.status === ERR_OK) {
          console.log(res.data.data)
          this.$store.commit("SET_NAME", res.data.data.user.name);
          this.$store.commit("SET_NAMEENG", res.data.data.user.nameEng);
          this.$store.commit("SET_MEMBER", res.data.data.user.member);
          this.$store.commit("SET_ADDRESS", res.data.data.user.address);
          this.$store.commit("SET_LINKMAN", res.data.data.user.linkman);
          this.$store.commit("SET_POSITION", res.data.data.user.linkmanPosition);
          this.$store.commit("SET_MOBILE", res.data.data.user.linkmanMobile);
          this.$store.commit("SET_LINKMANEMAIL", res.data.data.user.linkmanEmail);
          this.$store.commit("SET_oneIndustryname", res.data.data.user.industryName);
          this.$store.commit("SET_oneIndustry", res.data.data.user.oneIndustryid);
          this.$store.commit("SET_twoIndustry", res.data.data.user.twoIndustryid);
          this.$store.commit("SET_competitor", res.data.data.user.competitor);
          this.$store.commit("SET_keywords", res.data.data.user.keywords);
          this.$store.commit("SET_supplier", res.data.data.user.supplier);
          this.$store.commit("SET_mainProcess", res.data.data.user.mainProcess);
          this.$store.commit("SET_facilitator", res.data.data.user.facilitator);
          this.$store.commit("SET_summary", res.data.data.user.summary);
          this.$store.commit("SET_exhibitions", res.data.data.user.interestedExhibitions);
          this.$store.commit("SET_customer", res.data.data.user.customer);
          console.log(res.data.data.pictures)
          this.$store.commit("SET_imgListUrl", res.data.data.pictures);
          this.$store.commit("SET_logoPicUrl", res.data.data.user.logoUrl);
          this.$store.commit("SET_introductionPicUrl", res.data.data.user.introductionUrl);
          this.$store.commit("SET_products", res.data.data.products);
          this.$store.commit("SET_fansNumber", res.data.data.user.fansNumber);
        }
      })
    }
  },
}
</script>

<style lang="scss"></style>
