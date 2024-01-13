<script setup lang="ts">
import { type userInfoInterface, useUserInfo } from "~/store/userStore/userStore";
import { onMounted,computed } from 'vue'

const userStore = useUserInfo();

const loggedIn : Ref<boolean> = ref(false)

const userInfoRef : Ref<userInfoInterface> = ref(userStore.getUserInfo)

onMounted(()=>{
    userStore.initializeUserinfo();

    //get stored userInfo
    const userInfo = userStore.getUserInfo

    //if userInfo includes undefined ID
    if(userInfo.userId !== undefined){
        loggedIn.value = true;
    }

    //subscribe to check for changes in the userInfo
    userStore.$subscribe((mutation,state)=>{
        if(state.userId!==undefined){
            loggedIn.value = true

            userInfoRef.value = state;
        }
    })
})


</script>
<template>
    <div class="parent">
        <div><a href="/">LAPIZZA</a></div>
        <div class="lg-view">
            <ul class="list">
                <li class="listComponent">HOME</li>
                <li class="listComponent">ABOUT US</li>
                <li class="listComponent">MENU</li>
                <li class="listComponent">CONTACT</li>
                <li v-if="!loggedIn" class="listComponent"><GoogleSignIn/></li>
                <li :v-if="userInfoRef.userId!==undefined"><img class="profile-image" :src="userInfoRef.userProfilePicture"/></li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    .parent{
        @apply flex flex-row justify-between my-3 items-center;
    }
    .list{
        @apply flex flex-row content-center items-center;
    }
    .listComponent{
        @apply mr-6
    }
    .lg-view{
        @apply sm:hidden md:block
    }
    .profile-image{
        @apply w-[40%] aspect-square rounded-full
    }
</style>
