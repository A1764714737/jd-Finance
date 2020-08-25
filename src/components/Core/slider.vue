<template lang="html">
  <section :class="[cname]">
    <swiper :options="options" :not-next-tick="options.notNextTick">
      <swiper-slide v-for="item in items" :key="item.href">
        <router-link :to="{name:item.name}">
          <img :src="item.src">
        </router-link>
        <div v-if="options.pageination" class="swiper-pageination"></div>
      </swiper-slide>
    </swiper>  
  </section> 
</template>
<script type="javascript">
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    cname: {
      type: String,
      default: ""
    },
    items: {
      type: Array,
      default() {
        return [];
      }
    },
    options: {
      type: Object,
      default() {
        return {
          autoplay: true,
          loop: true,
          pagination: {
            el: ".swiper-pagination"
          },
          notNextTick: false
        };
      }
    }
  }
};
</script>
<!--
<style lang="scss">
</style>
-->

