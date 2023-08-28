<template>
  <div class="guide-container">
    <p :style="{ fontSize: '32px'}">Tem dúvida do que 
        <br/>escolher? Olhe nosso 
        <br/><span :style="{color: colors.vinho, fontWeight: 'bold', fontSize: '48px'}">GUIA DE ESTILO</span></p>
  </div>
</template>

<script>
import colors from '@/assets/colors/colors';
export default {
    name: 'StyleGuide',
    data: () => ({
        colors: colors,
        glasses: [
            { name: 'Grau', img: require('@/assets/grau.png') },
            { name: 'Sol', img: require('@/assets/sol.png') },
            { name: 'Blue Light', img: require('@/assets/bluelight.png') },
            { name: 'Leitura', img: require('@/assets/leitura.png') },
            { name: 'Esportivo', img: require('@/assets/esportivo.png') },
            { name: 'Infantil', img: require('@/assets/infantil.png') }
        ]
    }),
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