import axios from "axios";
import { Resource } from "../../../modal/Resource";

export const getResources = async (): Promise<Resource> => {
  try {
    const resp = await axios({
      method: "GET",
      url: "http://dummy.restapiexample.com/api/v1/employee/1",
    });
    if (resp.status !== 200) {
      throw new Error("An Error Occured");
    }
    const data: Resource = resp.data;
    return data;
  } catch (error) {
    throw error;
  }
};
