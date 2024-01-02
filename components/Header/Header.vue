<template>
    <div class="parent">
        <div>LaPizza</div>
        <div class="lg-view">
            <ul class="list">
                <li class="listComponent">HOME</li>
                <li class="listComponent">ABOUT US</li>
                <li class="listComponent">MENU</li>
                <li class="listComponent">CONTACT</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    .parent{
        @apply flex flex-row justify-between my-3;
    }
    .list{
        @apply flex flex-row;
    }
    .listComponent{
        @apply mr-6
    }
    .lg-view{
        @apply sm:hidden md:block
    }
</style>