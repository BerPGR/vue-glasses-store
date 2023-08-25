<template>
    <div class="badge-container" :style="{ backgroundColor: colors.vinho}">
        <p v-if="this.items > 9" :style="{ fontSize: '12px'}">+9</p>
        <p v-else>{{ this.items }}</p>
    </div>
</template>

<script>
import colors from '@/assets/colors/colors';

export default {
    name: 'BadgeComponent',
    props: ['items'],
    data: () => ({
        colors: colors,
    })
}
</script>

<style scoped>
    .badge-container{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 22px;
        height: 22px;
        position: absolute;
        top: 13px;
        right: 55px;
        border-radius: 50%;
        color: #f1f1f1;
        border: 1px solid #1f1f1f;
    }
</style>