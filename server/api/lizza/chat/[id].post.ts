import { axiosApiInstance } from "~/functions/api/axios";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  if (event.context.params !== undefined) {
    const userId: number = parseInt(event.context.params.id) as number;

    const formData = new FormData();
    formData.append("text", body.message);

    console.log("here is user id", userId);

    // send user message
    const response = await axiosApiInstance(`/chats/1`, {
      method: "post",
      data: formData,
    });

    const apiResponse = response.data;

    // console.log("here is apiresponse", apiResponse);
    console.log("\u001b[" + 32 + "m" + "\u001b[0m", apiResponse);
    return { apiResponse };
  }
});
