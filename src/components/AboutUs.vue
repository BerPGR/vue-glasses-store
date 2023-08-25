<template>
  <div class="about-container">
    <p :style="{ textAlign: 'center', fontSize: '32px'}">Sobre <br/><span :style="{color: colors.vinho, fontWeight: 'bold', fontSize: '48px'}">NÓS</span></p>

   <TestCarouselVue />
  </div>
</template>

<script>
import TestCarouselVue from './TestCarousel.vue';
import colors from '@/assets/colors/colors';
export default {
    name: 'AboutUs',
    components: {
        TestCarouselVue,
    },
    data: () => ({
        colors: colors,
        
    })
}
</script>

<style scoped>
.about-container {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>