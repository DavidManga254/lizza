
<script setup lang="ts">
import { onMounted,ref } from 'vue'

const menuList:Ref<pizzaInterface[]|[]> = ref([])

async function getPizzas(){
    const {data} = await $fetch("/api/orders/getPizza",{
        method:'get'
    })
    menuList.value = data
}

onMounted(()=>{
    getPizzas()
})
</script>

<template>
    <div>
        <div class="menu-cat">
            <ul>
                <li>ALL</li>
                <li>STARTERS</li>
                <li>MAIN</li>
                <li>DRINKS</li>
                <li>PROMOTION</li>
            </ul>
        </div>
        <div :v-if="menuList.length !== 0" class="menu-item">
            <MenuItemComponent v-for="item in menuList" :name="item.name" :imageUrl="item.imageUrl" :price="item.price"/>
        </div>
    </div>
</template>

<style scoped>
    .menu-cat{
        @apply flex flex-row justify-center
    }
    .menu-cat ul{
        @apply flex flex-row mb-5
    }
    li{
        @apply mx-4
    }
    .menu-item{
        @apply flex flex-row flex-wrap px-10 ;
    }
</style>