<template>
  <div class="about-container">
    <p :style="{ textAlign: 'center', fontSize: '32px'}">Sobre <br/><span :style="{color: colors.vinho, fontWeight: 'bold', fontSize: '48px'}">NÓS</span></p>

   <Carousel />
  </div>
</template>

<script>
import Carousel from './Carousel.vue';
import colors from '@/assets/colors/colors';
export default {
    name: 'AboutUs',
    components: {
        Carousel,
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