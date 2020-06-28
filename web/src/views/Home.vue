<template>
  <div>
    <swiper ref="mySwiper"
            :options="swiperOptions">
      <swiper-slide>
        <img class="w-100"
             src="../assets/images/24b2bf535ba5c85d296af1815117e0be.jpeg"
             alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100"
             src="../assets/images/576084588a652830f331531c1118e86c.jpeg"
             alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100"
             src="../assets/images/b6f28cd9ced5cbc5e3d143a6e75d173b.jpeg"
             alt="">
      </swiper-slide>
      <div class="px-3 pb-2 swiper-pagination pagination-home text-right"
           slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.pagination-home'
        },
        // Some Swiper option/callback...
      }
    }
  },
  computed: {

  },
  mounted () {

  }

}
</script>
<style lang="scss">
@import "../assets/scss/variables";

.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: map-get($colors, "white");
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info");
    }
  }
}
</style>
