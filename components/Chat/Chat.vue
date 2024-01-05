<script setup lang="ts">

</script>

<template>
    <div class="chat">
        <div class="header">
            <img src="~/assets/images/dj.jpg"/>
            <h2>LIZZA</h2>
        </div>
        <div class="chat-section">
            <div class="liza">
                <div>
                    <p>oe mse mi huwa na dem mwengine fiti wagwan mnhah hg fhfhfhgth hgfhfjbgfb hfhfhhfbb fgfhhhfgfgfbb</p>
                </div>
            </div>
            <div class="user">
                <div>
                    <p>oe mse mi huwa na dem mwengine fiti wagwan mnhah hg fhfhfhgth hgfhfjbgfb hfhfhhfbb fgfhhhfgfgfbb</p>
                </div>
            </div>
        </div>
        <div class="message-section">
            <form>
                <input required type="text" placeholder="type message">
                <img src="~/assets/images/send.png"/>
            </form>
        </div>
    </div>
</template>

<style scoped>
    .chat{
        @apply w-[50vw] bg-white text-black h-[80vh] p-1 relative
    }
    .header{
        @apply flex flex-row items-center border-b-4 pb-1
    }
    img{
        @apply w-[7%] rounded-full mr-3
    }
    .message-section{
        @apply absolute bottom-0 w-full
    }
    form{
        @apply flex flex-row p-1 justify-between w-full items-center
    }
    input{
        @apply border-solid border-2 rounded-lg w-[90%] p-1
    }
    img{
        @apply w-[5%]
    }
    .liza,.user{
        @apply flex flex-row
    }
    .liza{
        @apply justify-start
    }
    .liza div{
        @apply max-w-[80%] bg-red-500 rounded-lg p-1 text-white bg-[#daa405] my-3
    }
    .user{
        @apply justify-end
    }
    .user div{
        @apply max-w-[80%] bg-red-500 rounded-lg p-1 text-white bg-blue-500 my-3
    }
    
</style>