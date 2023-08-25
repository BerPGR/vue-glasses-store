<template>
  <div class="hero-section">
    <nav class="nav-superior">
        <div class="right-side">
            <i class="fa fa-bars fa-lg toggle-sidebar"></i>
            <p class="titulo" :style="{ color: colors.vinho, fontSize: '40px', fontWeight: 'normal'}">{{ title }}</p>
            <img src="../assets/eye.svg" :style="{marginLeft: '20px', marginTop: '4px'}" alt="">
        </div>
        <img :style="{ cursor: 'pointer'}" src="../assets//shopping-bag.svg" class="cart-image" alt="">
    </nav>
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
        title: 'VisãoClara',
        colors: colors
    })
}
</script>

<style scoped>
@import "~font-awesome/css/font-awesome.min.css";

.nav-superior {
    height: 82px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px
}

.right-side {
    display: flex;
    align-items: center;
}

.toggle-sidebar {
    cursor: pointer;
}

.titulo {
    margin-left: 20px;
}

.bg-image {
    position: relative;
}

.first-text {
    position: absolute;
    top: 20%;
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