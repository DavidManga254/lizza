<script setup lang="ts">
defineProps<{
    name:String
    imageUrl:String
    price:String
    description:String
}>()
</script>

<template>
    <div class="menu-item">
        <div class="menu-image">
            <img :src="imageUrl"/>
        </div>
        <div class="menu-info">
            <div>
                <h2 class="menu-name">{{ name.toUpperCase() }}</h2>
                <h2>Ksh{{ price }}</h2>
            </div>
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<style scoped>
    .menu-item{
        @apply flex flex-row justify-between w-[65%] my-6 p-0 bg-[#cdcccc];
    }
    .menu-image{
        @apply w-[50%] mr-3;
    }
    .menu-image img{
        @apply w-full aspect-square;
    }
    .menu-info{
        @apply w-[45%]
    }
    .menu-info div{
        @apply flex flex-row justify-between mb-3
    }
    .menu-info p{
        @apply text-lg 
    }
    .menu-name{
        @apply underline underline-offset-8 decoration-[#F2C94C] text-[#F2C94C] font-semibold
    }
    h2{
        @apply text-[#F2C94C]
    }
</style>
