<template>
  <div class="home" :style="{ backgroundColor: colors.white }">
    <header>
      <div class="nav-superior">
        <div class="right-side">
          <i @click="toggleDrawer" class="fa fa-bars fa-lg toggle-sidebar"></i>
          <p class="titulo" :style="{ color: colors.vinho, fontSize: '40px', fontWeight: 'normal'}">{{ title }}</p>
          <img src="../assets/logo.png" :style="{height: '50px', marginLeft: '24px', objectFit: 'contain'}" alt="">
        </div>
        <img :style="{ cursor: 'pointer'}" src="../assets/shopping-bag.svg" class="cart-image" alt="">
      </div>
    </header>

    <div class="drawer" :class="{ open: isDrawerOpen }">
      <i @click="toggleDrawer" class="fa fa-close fa-lg" :style="{ padding: '8px 0 0 8px', cursor: 'pointer'}"></i>
      <h2 :style="{ color: colors.vinho, textAlign: 'center', paddingBottom: '10px', fontWeight: 'normal'}">{{ title }}</h2>
      <nav>
        <ul>
          <li>Início</li>
          <li @click="toggleColecoes">Coleções <i class="fa fa-chevron-down"></i></li>
          <ul :class="{ openul: isColecoesClosed }">
            <li>Óculos de sol</li>
            <li>Óculos de grau</li>
            <li>Óculos blue light</li>
            <li>Óculos esportivos</li>
            <li>Óculos de leitura</li>
            <li>Óculos infantis</li>
          </ul>
          <li>Guia de Estilo</li>
          <li>Novidades</li>
          <li>Minha Conta</li>
          <li>Sair</li>
        </ul>
      </nav>
    </div>

    <HeroView />
    <AboutUs />
  </div>
</template>

<script>
import colors from '@/assets/colors/colors'
import HeroView from '@/components/HeroView.vue';
import AboutUs from '@/components/AboutUs.vue';

export default {
  name: 'HomeView',
  components: {
    HeroView,
    AboutUs
  },
  data: () => ({
    colors: colors,
    title: 'VisãoClara',
    isDrawerOpen: false,
    isColecoesClosed: true,
  }),
  methods: {
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen;
    },
    toggleColecoes() {
      this.isColecoesClosed = !this.isColecoesClosed
    }
  }
}
</script>

<style>
@import "~font-awesome/css/font-awesome.min.css";

.home {
  min-height: 100vh;
}

header {
    position: relative;
}
.nav-superior {
    height: 82px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    z-index: 99;
    position: fixed;
    background-color: #f1f1f1
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

.drawer {
  position: fixed;
  z-index: 100;
  top: 0;
  left: -250px;
  width: 250px;
  height: 100%;
  background-color: #f0f0f0;
  transition: left 0.3s ease;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.2);
}

.drawer.open {
  left: 0;
}

nav ul {
  list-style: none;
  padding: 0;
  color: #1f1f1f;
}

nav ul ul {
  font-size: 12px;
  padding-left: 14px;
}

nav ul ul li {
  list-style: inside;
  color: #4C061D;
}

nav li {
  padding: 10px;
  cursor: pointer;
}

.openul {
  display: none;
  transition: bottom 0.3s ease;
}
</style>
