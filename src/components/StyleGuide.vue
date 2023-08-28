<template>
  <div class="guide-container">
    <p :style="{ fontSize: '32px', paddingBottom: '60px'}">Tem dúvida do que 
        <br/>escolher? Olhe nosso 
        <br/><span :style="{color: colors.vinho, fontWeight: 'bold', fontSize: '48px'}">GUIA DE ESTILO</span></p>

    <StyleCarousel />
  </div>
</template>

<script>
import colors from '@/assets/colors/colors';
import StyleCarousel from './subcomponents/StyleCarousel.vue';
export default {
    name: 'StyleGuide',
    data: () => ({
        colors: colors,
    }),
    components: { StyleCarousel }
}
</script>

<style scoped>
    .guide-container {
        margin-top: 60px;
        display: flex;
        flex-direction: column;
        padding: 0 80px;
    }
</style>