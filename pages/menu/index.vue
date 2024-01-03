<template>
    <AppSkeleton>
        <Header/>
        <div class="menu-title">
            <h1>OUR MENU</h1>
        </div>
        <Menu/>
    </AppSkeleton>
</template>

<style scoped>
    .menu-title{
        @apply pt-5
    }
    .menu-title h1{
        @apply text-center text-3xl mb-10 underline underline-offset-8 decoration-[#F2C94C];
    }
</style>