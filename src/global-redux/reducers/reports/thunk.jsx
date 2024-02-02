import axios from "axios";
import { baseUrl } from "../../../constants/index";

export const saveReports = async (data, thunkAPI) => {
  try {
    const { user } = thunkAPI.getState().auth;
    let props = await axios.post(`${baseUrl}/planningreport/save`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user[0]?.token}`,
      },
    });
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};