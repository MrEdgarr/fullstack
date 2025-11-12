<template>
    <swiper
        :spaceBetween="20"
        :pagination="true"
        :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
        }"
        :speed="2000"
        :loop="true"
        :modules="modules"
        class="rounded-xl md:rounded-4xl"
    >
        <swiper-slide v-for="value in HERO_BANNER" :key="value.id">
            <img
                :src="value.image"
                :alt="value.name"
                class="rounded-xl md:rounded-4xl md:block hidden"
            />
            <img
                :src="value.image_md"
                :alt="value.name"
                class="rounded-xl md:rounded-4xl md:hidden block"
            />
        </swiper-slide>
    </swiper>
</template>
<script setup>
import { ref } from 'vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css/pagination'
// import required modules
import { Pagination, Autoplay } from 'swiper/modules'

import { HERO_BANNER } from '@/constants/heroBanner'

const modules = ref([Pagination, Autoplay])
</script>
<style lang="scss">
.swiper-pagination-bullet {
    background-color: #fff !important;
    border-radius: 10px;
    transition: all 0.5s;
    height: 0.25rem;
    width: 0.25rem;
    &-active {
        width: 1.5rem;
    }
    @media (width >= 48rem) {
        height: 0.5rem;
        width: 0.5rem;
        &-active {
            width: 2rem;
        }
    }
}
</style>
