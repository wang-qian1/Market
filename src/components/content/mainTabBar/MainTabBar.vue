<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="deepPink">
      <img slot="icon-active" src="~assets/imgs/tabbar/home_active.svg">
      <img slot="icon" src="~assets/imgs/tabbar/home.svg" alt="">
      <div slot="text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="deepPink">
      <img slot="icon-active" src="~assets/imgs/tabbar/category_active.svg">
      <img slot="icon" src="~assets/imgs/tabbar/category.svg" alt="">
      <div slot="text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shopcart" activeColor="deepPink">
      <img slot="icon-active" src="~assets/imgs/tabbar/shopcart_active.svg">
      <img slot="icon" src="~/assets/imgs/tabbar/shopcart.svg" alt="">
      <div slot="text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="deepPink">
      <img slot="icon-active" src="~assets/imgs/tabbar/profile_active.svg">
      <img slot="icon" src="~assets/imgs/tabbar/profile.svg" alt="">
      <div slot="text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/TabBar/TabBar'
  import TabBarItem from 'components/common/TabBar/TabBarItem'
  export default {
    data() {
      return {

      }
    },
    components: {
      TabBar,
      TabBarItem
    }
  }

</script>
<style scoped>
  /* @import url(); 引入css类 */

</style>
