<template>
  <div class="colections-container">
    <p :style="{ fontSize: '32px'}">Dá uma olhada nas <br/><span :style="{color: colors.vinho, fontWeight: 'bold', fontSize: '48px'}">NOSSAS COLEÇÕES</span></p>
    <div class="glass-box">
        <Glasses v-for="(glass, i) in glasses" :key="i" :collectionName="glass.name" :glassImg="glass.img"/>
    </div>
  </div>
</template>

<script>
import colors from '@/assets/colors/colors';
import Glasses from './subcomponents/Glasses.vue';
export default {
    name: 'ColectionsView',
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
    components: { Glasses }
}
</script>

<style scoped>
    .colections-container {
        margin-top: 60px;
        display: flex;
        flex-direction: column;
        padding: 0 80px;
    }

    .glass-box {
        margin-top: 60px;
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>