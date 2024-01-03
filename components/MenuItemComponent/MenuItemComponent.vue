<script setup lang="ts">
defineProps<{
    name:String
    imageUrl:String
    price:String
}>()
</script>

<template>
    <div class="menu-item">
        <div class="menu-image">
            <img src="~assets/images/wood.png"/>
        </div>
        <div class="menu-info">
            <div>
                <h2 class="menu-name">{{ name.toUpperCase() }}</h2>
                <h2>Ksh{{ price }}</h2>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui.</p>
        </div>
    </div>
</template>

<style scoped>
    .menu-item{
        @apply flex flex-row justify-between w-[45%] my-6 p-2 mx-7;
    }
    .menu-image{
        @apply w-[50%] mr-3;
    }
    .menu-image img{
        @apply w-full;
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