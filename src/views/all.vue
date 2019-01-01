<template>
  <div class="all">
    <Tab></Tab>
    <router-view></router-view>
    <Food></Food>
  </div>
</template>

<script>
import Tab from "@/components/tab/tab.vue";
import Food from "@/components/food/food.vue";

export default {
  name: "all",
  components: {
    Tab,
    Food
  }
};
</script>

<style lang="scss">
.all {
}
</style>
