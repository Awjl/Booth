<template>
  <div class="choice">
    <div class="searchBox">
      <input type="text" placeholder="搜索你感兴趣的企业/展会" />
      <i class="icon iconSearch"></i>
    </div>
    <div class="choiceBox">选择你的所属行业 Selected list item</div>
  </div>
</template>

<script>
export default {
  name: "choice"
};
</script>

<style lang="scss">
.choice {
  margin-bottom: 50px;
  .searchBox {
    width: 246px;
    height: 30px;
    border: 1px dashed #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    input {
      background: initial;
      outline: none;
      color: #fff;
      width: 190px;
      margin-right: 10px;
      font-size: 12px;
      &::-webkit-input-placeholder {
        color: #fff;
        font-size: 12px;
      }
    }
  }
  .choiceBox {
    width: 248px;
    height: 40px;
    line-height: 40px;
    margin-top: 10px;
    background: #fff;
    text-align: center;
    font-size: 14px;
    color: #326b90;
  }
}
</style>
