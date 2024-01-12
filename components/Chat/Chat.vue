<script setup lang="ts">
import {ref,onMounted} from 'vue'
import type { pizzaInterface } from '~/server/api/orders/getPizza.get';
import { useUserInfo } from '~/store/userStore/userStore';
interface messageInterace{
    sender:String
    message:String
    data?:pizzaInterface[]
}
interface lizzaInterface{
    text:String
}

const userStore = useUserInfo()
let userMessage:string = ""

const messages:Ref<messageInterace[]> =ref([])

async function sendMessage(){
    const chatData:messageInterace = {
        sender:'user',
        message:userMessage
    }

    messages.value.push(chatData)

    useFetch(`/api/lizza/chat/${userStore.getUserInfo.userDatabaseID}`,{
        method:'POST',
        body:{
            message:userMessage
        }
    }).then((apiResponse)=>{
        const chatDataResponse:messageInterace = {
            sender:'lizza',
            message:apiResponse.data.value.apiResponse.text,
        }

        const apiData = apiResponse.data.value.apiResponse.data;
        console.log("here is apiData",apiData)

        if(apiData !==null){
            if(Array.isArray(apiData)){
                chatDataResponse.data = apiData
            } else {
                chatDataResponse.data = [apiData]
            }

            if(apiData.hasOwnProperty('user')){
                chatDataResponse.data = apiData
            }
        }
        messages.value.push(chatDataResponse)
        // console.log('here is front',apiResponse.data.value.apiResponse)
    })

    userMessage=""
}

onMounted(()=>{
    if(messages.value.length===0){
        (async()=>{
            const {apiResponse} = await $fetch(`/api/lizza/chat/${userStore.getUserInfo.userDatabaseID}`)
            
            let chatData:messageInterace = {
                sender:'lizza',
                message : apiResponse.text
            }

            messages.value.push(chatData)
        })()
    }
})
function calculateTotal(list:[]):number{
    let total = 0;

    list.forEach((element)=>{
        total = total + element.price
    })

    return total
}
</script>

<template>
    <div class="chat">
        <div class="header">
            <img src="~/assets/images/dj.jpg"/>
            <h2>LIZZA</h2>
        </div>
        <div class="chat-section">
            <div class="scroll-chat" v-if="messages.length !== 0">
                <div v-for="message in messages">
                    <div :class="{ 'liza': message.sender === 'lizza', 'user': message.sender === 'user' }">
                        <div>
                            {{ message.message }}
                        </div>
                    </div>
                    <div v-if="Array.isArray(message.data)">
                        <ChatMenuComponent v-for="menuItem in message.data" :name="menuItem.name" :imageUrl="menuItem.imageUrl" :price="menuItem.price"/>
                    </div>
                    <div v-if="(typeof message.data === 'object')">
                        <div class="receipt">
                            <h1>LAPIZZA RESTAURANT</h1>
                            <h1>2344, lOCHO STREET NAIROBI</h1>
                            <h1>888-888-888</h1><br>

                            <h1>SALE</h1>
                            <div class="pizza-list" v-for="pizza in message.data.pizzas">
                                <div>
                                    {{ `${pizza.name.toUpperCase()} PIZZA` }}
                                </div>
                                <div>
                                    {{`Ksh ${ pizza.price}` }}
                                </div>
                                 
                            </div><br>
                            <div class="pizza-list" v-for="pizza in message.data.pizzas">
                                <div>
                                    TOTAL
                                </div>
                                <div>
                                    {{`Ksh ${calculateTotal(message.data.pizzas)}` }}
                                </div>
                                 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="message-section">
            <form @submit.prevent="sendMessage">
                <input required v-model="userMessage" type="text" placeholder="type message">
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
        @apply max-w-[80%] bg-red-500 rounded-lg p-1 text-white bg-[#daa405] my-1
    }
    .user{
        @apply justify-end
    }
    .user div{
        @apply max-w-[80%] bg-red-500 rounded-lg p-1 text-white bg-blue-500 my-1
    }
    .chat-section{
        @apply overflow-y-scroll h-[90%] pb-10
    }
    .message-section{
        @apply bg-white
    }
    .receipt{
        @apply max-w-[80%] bg-red-500 rounded-lg p-3 text-white bg-[#daa405] my-1
    }
    .pizza-list{ 
        @apply flex flex-row justify-between w-full
    }
    
</style>