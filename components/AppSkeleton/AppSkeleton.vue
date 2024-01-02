<template>
    <div class="skeleton">
        <slot/>
    </div>
</template>

<style scoped>
    .skeleton{
        @apply bg-black p-2 text-white;
    }
</style>