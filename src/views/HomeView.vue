<template>
  <div class="home" :style="{ backgroundColor: colors.white }">
    <HeroView />
  </div>
</template>

<script>
import colors from '@/assets/colors/colors'
import HeroView from '@/components/HeroView.vue';
// @ is an alias to /src
export default {
  name: 'HomeView',
  components: {
    HeroView,
  },
  data: () => ({
    colors: colors
  })
}
</script>

<style>
.home {
  min-height: 100vh;
}
</style>
