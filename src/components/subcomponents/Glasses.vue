<template>
  <div class="glass-container">
    <p :style="{ color: colors.black, fontSize: '32px'}">{{ collectionName }}</p>
    <img :src="this.glassImg" alt="">
  </div>
</template>

<script>
import colors from '@/assets/colors/colors';
export default {
    name: 'GlassComponent',
    props: {
        collectionName: {
            type: String,
            required: true
        },

        glassImg: {
            type: String,
            required: true
        }
    },
    data: () => ({
        colors: colors
    })
}
</script>

<style scoped>
.glass-container {
    margin: 0 30px 60px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
}

.glass-container:hover {
    text-decoration: underline;
}


.glass-container p:hover {
    text-decoration: solid;
}
</style>