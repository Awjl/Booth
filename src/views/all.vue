<template>
  <div class="all">
    <Tab></Tab>
    <router-view></router-view>
    <Food></Food>
    <Login></Login>
    <Sign></Sign>
  </div>
</template>

<script>
import Tab from "@/components/tab/tab.vue";
import Food from "@/components/food/food.vue";
import Login from "@/components/login/login.vue";
import Sign from "@/components/sign/sign.vue";

export default {
  name: "all",
  components: {
    Tab,
    Food,
    Login,
    Sign
  }
};
</script>
