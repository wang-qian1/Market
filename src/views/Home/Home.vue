<template>
  <div id="home">
    <nav-bar class="nav-home">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners='banners'></home-swiper>
    <home-recommends :recommends='recommends'></home-recommends>
    <feature-view :recommends='recommends'></feature-view>
    <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
    <goods-list :goodslist="getGoodsList"></goods-list>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import HomeSwiper from './child/HomeSwiper'
  import HomeRecommends from './child/RecommendView'
  import FeatureView from './child/FeatureView'

  import TabControl from 'components/content/tabControl/TabControl.vue'
  import GoodsList from 'components/content/goods/GoodsList.vue'

  import {
    homeMultidata,
    homeGoods
  } from 'network/home.js'
  export default {
    name: 'Home',
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommends,
      FeatureView,
      TabControl,
      GoodsList
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {
            page: 0,
            list: []
          },
          'new': {
            page: 0,
            list: []
          },
          'sell': {
            page: 0,
            list: []
          }
        },
        currentType: 'pop'
      }
    },
    computed: {
      getGoodsList() {
        return this.goods[this.currentType].list
      }
    },
    created() {
      this.getHomeMultidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods: {
      /**
       * 事件监听相关代码
       */
      tabClick(index) {
        this.currentType = Object.keys(this.goods)[index]
      },
      /**
       * 网络请求相关代码
       */
      getHomeMultidata() {
        homeMultidata().then(res => {
          this.banners = res.data.data.banner.list
          this.recommends = res.data.data.recommend.list
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        homeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.data.list)
          this.goods[type].page + 1
        })
      }
    }
  }

</script>
<style scoped>
  #home {
    position: relative;
    padding-top: 44px;
  }

  .nav-home {
    color: #fff;
    background-color: var(--color-tint);
    position: fixed;
    z-index: 10;
    left: 0;
    right: 0;
    top: 0;
  }

  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }

</style>
