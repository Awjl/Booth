<template>
  <div class="success">
    <p v-if="success">激活成功</p>
    <p v-if="!success">激活失败</p>
    <p v-if="success">5秒后自动返回...</p>
  </div>
</template>

<script>
import { activate, ERR_OK } from "@/api/api.js";

export default {
  data() {
    return {
      success: "",
    };
  },
  created() {
    activate(window.location.href.split("=")[1]).then((res) => {
      if (res.status === ERR_OK) {
        console.log(res.data.data)
        // this.success = res.data
      }
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
