
<script setup lang="ts">
import {
  GoogleSignInButton,
  type CredentialResponse,
} from "vue3-google-signin";
import { storageKeys } from "~/constants/storageKeys";
import { saveDataToLocalStorage } from "~/functions/localStorage/localStorage";
import { useUserInfo } from "~/store/userStore/userStore";

async function verifyUser(credential:string):Promise<void>{
    const {userInfo} = await $fetch('/api/auth/verifyUser',{
        method:'post',
        body:{
            authCredential:credential
        }
    });
    
    const userinfoStore = useUserInfo()

    userinfoStore.$patch((state)=>{

      state.userId = userInfo.userId;
      state.userEmail = userInfo.userEmail;
      state.userName = userInfo.userName;
      state.userGivenName = userInfo.userGivenName;
      state.userFamilyName = userInfo.userFamilyName;
      state.userProfilePicture = userInfo.userProfilePicture;

      return state;
    })

    saveDataToLocalStorage(storageKeys.userInfo,userInfo)

    
}
// handle success event
const handleLoginSuccess = (response: CredentialResponse) => {
  const { credential } = response;

  verifyUser(credential as string)
};

// handle an error event
const handleLoginError = () => {
  console.error("Login failed");
};
</script>

<template>
  <GoogleSignInButton
    @success="handleLoginSuccess"
    @error="handleLoginError"
  ></GoogleSignInButton>
</template>
