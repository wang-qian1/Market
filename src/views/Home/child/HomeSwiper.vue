<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners" :key="item.index">
        <a :href="item.link">
          <img :src="item.image" alt="image">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {
    Swiper,
    SwiperItem
  } from 'components/common/swiper/index.js'
  export default {
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      banners: {
        type: Array,
        default () {
          return []
        }
      }
    }
  }

</script>
<style scoped>
  /* @import url(); 引入css类 */

</style>
