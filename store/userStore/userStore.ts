import { defineStore } from "pinia";
import { storageKeys } from "~/constants/storageKeys";
import { retrieveDataFromLocalStorage } from "~/functions/localStorage/localStorage";

export interface userInfoInterface {
  userId: string | undefined;
  userEmail: string | undefined;
  userName: string | undefined;
  userGivenName: string | undefined;
  userFamilyName: string | undefined;
  userProfilePicture: string | undefined;
}

export const useUserInfo = defineStore("userInfo", {
  state: (): userInfoInterface => {
    return {
      userId: undefined,
      userEmail: undefined,
      userName: undefined,
      userGivenName: undefined,
      userFamilyName: undefined,
      userProfilePicture: undefined,
    };
  },
  actions: {
    async initializeUserinfo() {
      const userInfo: userInfoInterface | null =
        await retrieveDataFromLocalStorage<userInfoInterface>(
          storageKeys.userInfo
        );

      if (userInfo !== null) {
        this.$patch((state) => {
          state.userId = userInfo.userId;
          state.userEmail = userInfo.userEmail;
          state.userName = userInfo.userName;
          state.userGivenName = userInfo.userGivenName;
          state.userFamilyName = userInfo.userFamilyName;
          state.userProfilePicture = userInfo.userProfilePicture;

          return state;
        });
      }
    },
  },
  getters: {
    getUserInfo: (state) => state,
  },
});
