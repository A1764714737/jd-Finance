<template lang="html">
  <div :class="$style.header">
    <span :class="$style.left">
          <em>注册</em>&nbsp; | &nbsp;<em>登录</em>
      <!--
        在真实的业务场景中需要用
        <router-link to="{name:""}"></router-link>
      -->
    </span>
    <btn :class="$style.btnDownload">App下载</btn>
  </div>
</template>
<script type="javascript">
import btn from "../Core/btn.vue";
export default {
  components: {
    btn
  }
};
</script>
<style lang="scss" module>
.header {
  color: #666;
  height: 100px; /*设计稿中 其实是 100 ，真实量的时候是 50 因为 设备像素比是 1:2*/
  line-height: 100px;

  position: fixed;
  top: 0;
  /*-----------*/
  left: 0;
  right: 0; /*（限于fixed布局）让 容器的宽度 等于 100% ，width:100% 是一样的效果*/
  /*------------*/
  font-size: 32px;
  background: #fff
    url(//m.jr.jd.com/spe/qyy/main/images/jr-logo.png)centercenterno-repeat;
  background-size: auto 50%; /*防止图片太大不符合尺寸，并且做到居中*/
  z-index: 100; /*吸顶效果，层级需要是最高的*/
  .left {
    font-size: 28px;
    height: 30px;
    line-height: 30px;
    margin: 17px 0 0 18px;
    /*float:left 因为它默认就在左边，所以不用*/
  }
  .btnDownload {
    float: right;
    font-size: 20px;
    border-width: 0;
    height: 56px;
    line-height: 56px;
    min-width: 120px;
    padding: 0;
    border-radius: 4px;
    margin: 28px 24px 0 0;
  }
}
</style>
