import axios from "axios";
import { baseUrl } from "../../../../config/constants";

export const uploadFile = async (data, thunkAPI) => {
  try {
    const { user } = thunkAPI.getState().auth;
    let props = await axios.post(
      `${baseUrl}/abiliteconfig/supporting/doc/upload`,
      data,
      {
        headers: {
          Authorization: `Bearer ${user[0]?.token}`,
        },
      }
    );
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};
export const updateFile = async (data, thunkAPI) => {
  try {
    const { user } = thunkAPI.getState().auth;
    let props = await axios.post(
      `${baseUrl}/abiliteconfig/supporting/doc/update`,
      data,
      {
        headers: {
          Authorization: `Bearer ${user[0]?.token}`,
        },
      }
    );
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};
export const getAllFiles = async (data, thunkAPI) => {
  try {
    const { user } = thunkAPI.getState().auth;
    let props = await axios.post(
      `${baseUrl}/abiliteconfig/supporting/doc/getall${data}`,
      null,
      {
        headers: {
          Authorization: `Bearer ${user[0]?.token}`,
        },
      }
    );
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};

export const deleteFile = async (data, thunkAPI) => {
  try {
    const { user } = thunkAPI.getState().auth;
    let props = await axios.delete(
      `${baseUrl}/abiliteconfig/supporting/doc/delete/${data}`,
      {
        headers: {
          Authorization: `Bearer ${user[0]?.token}`,
        },
      }
    );
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};
