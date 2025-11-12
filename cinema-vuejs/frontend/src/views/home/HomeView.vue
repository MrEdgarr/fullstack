<template>
    <section>
        <div class="container my-0 md:my-5">
            <HeroSection />
        </div>
    </section>
    <section>
        <div class="container">
            <MovieSection />
        </div>
    </section>
</template>
<script setup>
import HeroSection from '@/components/features/home/home-page/HeroSection.vue'
import MovieSection from '@/components/features/home/home-page/MovieSection.vue'
</script>
