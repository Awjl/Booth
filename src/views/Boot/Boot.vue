<template>
  <div class="boot">
    <div class="bootLogo"><div class="logo"></div></div>
    <div class="bootBg"><Choice></Choice></div>
    <div class="bootFoot">
      <div class="footImg">
        <img src="../../assets/images/guide/item1.png" alt="" />
        <img src="../../assets/images/guide/item2.png" alt="" />
        <img src="../../assets/images/guide/item3.png" alt="" />
        <img src="../../assets/images/guide/item4.png" alt="" />
        <img src="../../assets/images/guide/item5.png" alt="" />
        <img src="../../assets/images/guide/item6.png" alt="" />
        <img src="../../assets/images/guide/item7.png" alt="" />
        <img src="../../assets/images/guide/item8.png" alt="" />
        <img src="../../assets/images/guide/item9.png" alt="" />
      </div>
      <div class="footText">Shanghai maiyu technology co.LTD</div>
    </div>
  </div>
</template>

<script>
import Choice from "@/components/choice/choice.vue";

export default {
  name: "boot",
  components: {
    Choice
  }
};
</script>

<style lang="scss">
.boot {
  width: 100vw;
  height: 100vh;
  .bootLogo {
    width: 100vw;
    height: 134px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .bootBg {
    height: calc(100vh - 263px);
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .bootFoot {
    height: 129px;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #326b90;
    .footImg {
      img {
        margin: 0 10px;
      }
    }
    .footText {
      font-size: 12px;
      margin-top: 20px;
    }
  }
}
</style>
