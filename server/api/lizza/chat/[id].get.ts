import { axiosApiInstance } from "~/functions/api/axios";

export default defineEventHandler(async (event) => {
  if (event.context.params !== undefined) {
    const userId: number = parseInt(event.context.params.id) as number;

    // get user greeting
    const response = await axiosApiInstance(`/chats/${userId}`, {
      method: "get",
    });

    const apiResponse = response.data;
    return { apiResponse };
  }
});
