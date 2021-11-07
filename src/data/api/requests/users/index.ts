import axios from "axios";
import { User } from "../../../modal/User";

export const getUsers = async (): Promise<User> => {
  try {
    const resp = await axios({
      method: "GET",
      url: "https://randomuser.me/api/",
    });
    if (resp.status !== 200) {
      throw new Error("An Error Occured");
    }
    const data: User = resp.data;
    return data;
  } catch (error) {
    throw error;
  }
};
