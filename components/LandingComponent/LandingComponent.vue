<template>
    <div>
        <div class="landing">
            <div class="land-child">
                <div class="title-parent">
                    <h1>LAPIZZA</h1>
                    <h3>Dive into Flavorful Delight: Where Every Bite is a Pizza Celebration! Join us on a Culinary Adventure, Where Happiness is Baked into Every Slice. Your Perfect Pizza Experience Starts Here!</h3>
                </div>
                <div class="lower-image">
                    <img class="image" src="~assets/images/pizza.png"/>
                </div>
            </div>
        </div>
        <div class="about">
            <div class="about-info">
                <h2>ABOUT US</h2>
                <p>Welcome to [Your Pizza Platform Name], where we blend passion and pizza into an unforgettable experience. Born from a shared love for the art of pizza-making, our platform is a celebration of exceptional taste and quality. Our team of culinary enthusiasts and pizza artisans is dedicated to crafting each pizza with care, using the finest, freshest ingredients. At [Your Platform Name], we believe in the power of a perfect pizza to bring people together and create lasting memories. Join us on this delicious journey, where every slice is a moment to savor and share.</p>
            </div>
            <img src="~assets/images/restaurant.png"/>
        </div>
    </div>
    
</template>

<style scoped>
    .landing{
        background-image:linear-gradient(to bottom, transparent 10%, rgba(0, 0, 0 ) 100%),url("../../assets/images/wood.png");
        @apply h-[90vh];
        background-size: 100% 100%;
    }
    .land-child{
        @apply w-full h-full bg-black bg-opacity-40  relative flex flex-row justify-center;
        
    }
    .lower-image{
        @apply bottom-0 absolute flex flex-row justify-center w-full;
    }
    .image{
        @apply w-[60%];
        font-family: Inter;
    }
    .title-parent{
        @apply px-10 w-1/2 pt-16;
    }
    .title-parent h1{
        @apply text-center text-5xl mb-10 underline underline-offset-8 decoration-[#F2C94C];
    }
    .title-parent h3{
        @apply text-center text-2xl;
    }
    .about{
        @apply flex flex-row justify-between pt-16 px-20
    }
    .about-info{
        @apply w-[40%]
    }
    .about-info h2{
        @apply text-5xl mb-10 underline underline-offset-8 decoration-[#F2C94C];
    }
    .about-info p{
        @apply text-xl font-light w-[80%]
    }
    .about img{
        @apply w-[35%]
    }
</style>