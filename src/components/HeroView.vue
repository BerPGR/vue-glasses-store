<template>
  <div class="hero-section">
    <div class="bg-image">
        <img src="../assets/heroBG.jpg" :style="{ objectFit: 'cover', width: '100%' }" alt="">
        <h1 class="first-text" :style="{ color: colors.white }">Vista o Mundo <br/>com Estilo!</h1>
        <h1 class="secondt-text" :style="{ color: colors.white }">Veja e Seja Visto <br/>com Nossos <br/>Óculos Exclusivos!</h1>
    </div>
    <div :style="{ backgroundColor: colors.black, width: '100%', height: '2px', marginTop: '60px'}"></div>
  </div>
</template>

<script>
import colors from '@/assets/colors/colors'
export default {
    name: 'HeroComponent',
    data: () => ({
        colors: colors
    })
}
</script>

<style scoped>
@import "~font-awesome/css/font-awesome.min.css";

.bg-image {
    position: relative;
    padding-top: 82px;
}

.first-text {
    position: absolute;
    top: 180px;
    left: 9%;
    font-size: 48px;
}

.secondt-text {
    position: absolute;
    right: 8%;
    bottom: 10%;
    font-size: 48px;
}
</style>