import { axiosApiInstance } from "~/functions/api/axios";

export interface pizzaInterface {
  id: number;
  createdAt: String;
  upDatedAt: String;
  name: String;
  imageUrl: String;
  price: number;
  quantity: number;
  description: String;
}
export default defineEventHandler(async (event) => {
  try {
    const response = await axiosApiInstance("/pizzas", {
      method: "get",
    });
    let data: pizzaInterface[] = response.data;
    return { data };
  } catch (err) {
    console.error(err);
  }
});
