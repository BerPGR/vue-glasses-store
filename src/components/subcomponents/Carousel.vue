<template>
    <div class="carousel">
        <i :style="{ cursor: 'pointer', fontSize: '30px'}" class="fa fa-chevron-left" @click="prevSlide"></i>
        <div class="slide-container">
            <transition name="slide" mode="out-in">
                <div :style="{textAlign: 'center'}" :key="currentSlideIndex" class="slide-content">
                    <h1 :style="{color: colors.vinho}">{{  currentSlide.title }}</h1>
                    <p :style="{marginTop: '20px'}">{{  currentSlide.text }}</p>
                </div>
            </transition>
        </div>
        <i :style="{ cursor: 'pointer', fontSize: '30px'}" class="fa fa-chevron-right" @click="nextSlide"></i>
    </div>
</template>

<script>
import colors from '@/assets/colors/colors';

export default {
    name: 'CarouselAbout',
    data() {
        return {
            colors: colors,
            slides: [
                {title: 'Quem somos', text: 'Na VisãoClara, acreditamos que os óculos são mais do que apenas uma correção visual, eles são uma expressão de seu estilo pessoal e uma declaração de sua individualidade. Nossa missão é proporcionar a você não apenas uma visão nítida, mas também a confiança para enfrentar o mundo com um olhar novo e empolgante.'},
                {title: 'Explorando Nossas Coleções', text: 'Descubra uma vasta gama de óculos cuidadosamente selecionados que capturam as últimas tendências da moda e atendem a diversas preferências. Nossa coleção é meticulosamente curada para garantir que você encontre algo que se adapte perfeitamente ao seu rosto, personalidade e estilo de vida.'},
                {title: 'Qualidade em Foco', text: 'Na VisãoClara, a qualidade é primordial. Trabalhamos em parceria com as principais marcas e designers para oferecer a você óculos que não apenas se destacam em termos de estilo, mas também são duráveis e feitos para durar. Acreditamos que a fusão entre moda e durabilidade é a chave para sua total satisfação visual.'},
                {title: 'Sua Experiência, Nossa Prioridade', text: 'Entendemos que escolher os óculos certos pode ser uma decisão importante e emocionante. Nossa equipe de especialistas em estilo e óptica está aqui para orientá-lo em cada etapa do caminho, assegurando que sua escolha final seja não apenas funcional, mas também uma expressão autêntica do seu estilo único.'},
                {title: 'Serviços Personalizados', text: 'Na VisãoClara, acreditamos que cada cliente é único. É por isso que oferecemos serviços personalizados para atender às suas necessidades específicas. Nossos optometristas experientes estão à disposição para realizar exames completos da visão, garantindo que suas lentes sejam perfeitamente ajustadas para oferecer o máximo conforto e clareza.'}
            ],
            currentSlideIndex: 0,
            intervalIndex: null
        };
    },
    created() {
        this.intervalIndex = setInterval(this.nextSlide, 10000)
    },
    destroyed() {
        clearInterval(this.intervalIndex)
    },
    computed: {
        currentSlide() {
            return this.slides[this.currentSlideIndex]
        }
    },
    methods: {
        prevSlide() {
            this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
        },
        nextSlide() {
            this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
        }
    }
};
</script>

<style scoped>
.carousel {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    padding: 50px 0
}

.slide-container {
    max-width: 1000px;
    width: 100%;
    max-height: 300px;
    height: 100%;
    padding-bottom: 20px;
    overflow: hidden;
    display: flex;
    align-items: center; /* Alinha verticalmente o conteúdo */
}

.slide-content {
    flex: 1; /* Ocupa o espaço disponível verticalmente */
    display: flex;
    flex-direction: column;
    justify-content: center;
}


.slide-enter-active, .slide-leave-active {
    transition: opacity 0.5s;
}

.slide-enter, .slide-leave-to {
    opacity: 0;
}
</style>
