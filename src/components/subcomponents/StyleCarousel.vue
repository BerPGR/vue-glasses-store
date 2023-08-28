<template>
    <div class="style-container">
        <i :style="{ cursor: 'pointer', fontSize: '30px'}" class="fa fa-chevron-left" @click="prevSlide"></i>
        <div class="slide-container">
            <transition name="slide" mode="out-in">
                <div :key="currentSlideIndex" class="content-container">
                    <div class="face-container">
                        <img :src="currentSlide.img" class="face-img" alt="">
                    </div>
                    <div class="text-content">
                        <h1 :style="{color: colors.vinho, fontSize: '36px'}">{{  currentSlide.name }}</h1>
                        <p :style="{marginTop: '40px', fontSize: '20px'}">{{  currentSlide.text }}</p>
                    </div>
                </div>
            </transition>
        </div>
        <i :style="{ cursor: 'pointer', fontSize: '30px'}" class="fa fa-chevron-right" @click="nextSlide"></i>
    </div>
</template>

<script>
import colors from '@/assets/colors/colors';
export default {
    name: 'StyleCarousel',
    data: () => ({
        colors: colors,
        currentSlideIndex: 0,
        styles: [
            { name: 'Oval', text: 'Com proporções equilibradas e linhas suaves, você tem a liberdade de experimentar várias formas de armações, desde retangulares até redondas.', img: require('@/assets/ovalface.png') },
            { name: 'Redondo', text: 'Armações retangulares, quadradas ou geométricas são excelentes escolhas, pois criam um contraste com a suavidade do rosto.', img: require('@/assets/roundface.png') },
            { name: 'Alongado', text: 'Óculos com armações largas e detalhes na parte superior, como aviadores ou cat-eye, podem equilibrar o comprimento do rosto.' , img: require('@/assets/oblongface.png') },
            { name: 'Coração', text: 'Armações leves e delicadas, como estilo gatinho, são ideais, assim como estilos que são mais largos na parte inferior, como aviadores ou retangulares. ', img: require('@/assets/heartface.png') },
            { name: 'Diamante', text: 'Armações ovais, cat-eye ou de estilo piloto (aviador) são ótimas opções, pois ajudam a equilibrar as proporções.', img: require('@/assets/diamondface.png') },
            { name: 'Quadrado', text: 'O rosto quadrado pede óculos que suavizem as linhas retas. Armações redondas, ovais ou estilos com bordas arredondadas podem adicionar equilíbrio.', img: require('@/assets/squareface.png') }
        ]
    }),
    computed: {
        currentSlide() {
            return this.styles[this.currentSlideIndex]
        }
    },
    methods: {
        prevSlide() {
            this.currentSlideIndex = (this.currentSlideIndex - 1 + this.styles.length) % this.styles.length;
        },
        nextSlide() {
            this.currentSlideIndex = (this.currentSlideIndex + 1) % this.styles.length;
        }
    }
}

</script>

<style scoped>
.style-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px 0
}

.slide-container {
    padding-bottom: 20px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center; /* Alinha verticalmente o conteúdo */
}

.content-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.face-container {
    height: 300px;
    width: 300px;
    border-radius: 50%;
    margin-right: 40px;
    background-color: transparent;
    border: 1px solid #1f1f1f;
    display: flex;
    align-items: center;
    justify-content: center;
}
.face-img {
    height: 200px;
    object-fit: contain;
}

.text-content {
    display: flex;
    flex-direction: column;
    width: 50%;
}


.slide-enter-active, .slide-leave-active {
    transition: opacity 0.5s;
}

.slide-enter, .slide-leave-to {
    opacity: 0;
}
</style>