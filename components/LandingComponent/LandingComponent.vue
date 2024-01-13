<script setup lang="ts">
import {computed} from 'vue';

const year:ComputedRef<string> = computed(()=>{
    const date = new Date();

    const year = date.getFullYear().toString();

    return year
})

</script>


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
                <p>Welcome to Lapizza, where we blend passion and pizza into an unforgettable experience. Born from a shared love for the art of pizza-making, our platform is a celebration of exceptional taste and quality. Our team of culinary enthusiasts and pizza artisans is dedicated to crafting each pizza with care, using the finest, freshest ingredients. At Lapizza, we believe in the power of a perfect pizza to bring people together and create lasting memories. Join us on this delicious journey, where every slice is a moment to savor and share.</p>
            </div>
            <img src="~assets/images/restaurant.png"/>
        </div>
        <div class="find-us">
            <h1>FIND US</h1>
            <div class="find-us-child">
                <div class="find-location">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.33287322181!2d36.8049366!3d-1.273241!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1738049f49e3%3A0xbb1b3bf04c4f84d6!2sUniversity%20Of%20Nairobi%20-%20Chiromo%20Campus!5e0!3m2!1sen!2ske!4v1704203195944!5m2!1sen!2ske" width="600" height="450" style="border:0;" allowfullscreen='true' loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="find-info">
                    <p>Discover pizza bliss at Lapizza. Find us at N2344, lOCHO STREET NAIROBI. We can't wait to welcome you to our pizza haven</p>
                    <h2>ATTENDANCE</h2>
                    <P>Monday to Sunday 12:00pm to 8:00pm</P>
                    <h2>DELIVERY</h2>
                    <P>Monday to Sunday 12:00pm to 8:00pm</P>
                </div>
            </div>
            
        </div>
        <div class="our-menu">
            <h1>OUR MENU</h1>
            <p>Indulge your senses with our diverse and delectable menu at Lapizza, our carefully crafted selection caters to every palate. Dive into a world of flavor where each menu item is a culinary adventure waiting to be explored. Elevate your pizza experience with us, where variety meets excellence on every plate.</p>
            <div>
                <img src="~assets/images/worker.png"/>
                <img src="~assets/images/dough.png"/>
            </div>
            <div class="menu-button flex flex-row justify-center pt-10">
                <button>
                    <NuxtLink to="/menu">Menu</NuxtLink>
                </button>
            </div>
        </div>
        <div class="close-Landing">
            <div class="close-landing-image">
                <img class="image" src="~assets/images/pizza2.png"/>
            </div>
            <div>
                <h1>LAPIZZA</h1>
                <div class="social">
                    <img src="~assets/images/instagram.png"/>
                    <img src="~assets/images/facebook.png"/>
                    <img src="~assets/images/whatsapp.png"/>
                </div>
            </div>
        </div>
        <div class="rights">
            <p>ALL RIGHTS RESERVED &copy; LAPIZZA {{ year }}</p>
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
    .find-us{
        @apply pt-16 px-20
    }
    .find-us h1{
        @apply text-center text-5xl mb-10 underline underline-offset-8 decoration-[#F2C94C];
    }
    .find-us-child{
        @apply flex flex-row justify-between w-full items-center
    }
    .find-location{
        @apply w-[50%]
    }
    .find-location iframe{
        @apply w-full aspect-square
    }
    .find-info{
        @apply w-[40%]
    }
    .find-info p{
        @apply mb-10
    }
    .our-menu{
        @apply pt-16 px-20
    }
    .our-menu h1{
        @apply text-center text-5xl mb-10 underline underline-offset-8 decoration-[#F2C94C];
    }
    .our-menu p{
        @apply  text-center text-xl mb-10 
    }
    .our-menu div{
        @apply flex flex-row justify-between
    }
    .our-menu img{
        @apply w-[48%]
    }
    .menu-button button{
        @apply border-2 border-[#F2C94C] border-solid px-5 py-1 text-[#F2C94C] hover:cursor-pointer
    }
    .close-landing-image{
        @apply w-full flex flex-row justify-center
    }
    .close-Landing{
        @apply mt-16 px-20 h-[90vh];
        background-image:url("../../assets/images/wood.png");
    }
    .close-Landing h1{
        @apply text-center text-5xl mb-10 underline underline-offset-8 decoration-[#F2C94C];

    }
    .social{
        @apply flex flex-row justify-center
    }
    .social img{
        @apply w-[5%] aspect-square mx-1
    }
    .rights{
        @apply py-2
    }
    .rights p{
        @apply text-center text-xl
    }
</style>
