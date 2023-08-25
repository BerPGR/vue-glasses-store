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

.titulo {
    margin-left: 20px;
}

.toggle-sidebar {
    cursor: pointer;
}
</style>