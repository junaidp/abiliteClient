import axios from "axios";
import { baseUrl } from "../../../../constants/index";

export const getAllEngagements = async (data, thunkAPI) => {
  try {
    let props = await axios.get(
      `${baseUrl}/auditPlanningAndScheduling/engagments/getAllEngagement?companyId=${data}`
    );
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};

export const addNewEngagement = async (data, thunkAPI) => {
  try {
    let props = await axios.post(
      `${baseUrl}/auditPlanningAndScheduling/engagments/addNewEngagement`,
      data
    );
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};

export const editSingleEngagement = async (data, thunkAPI) => {
  try {
    let props = await axios.post(
      `${baseUrl}/auditPlanningAndScheduling/engagments/updateEngagement`,
      data
    );
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};

export const saveBusinessObjective = async (data, thunkAPI) => {
  try {
    let props = await axios.post(
      `${baseUrl}/auditPlanningAndScheduling/engagments/saveOrupdateBusinessObjectiveAndMapProcessBusinessObjective`,
      data
    );
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};

export const saveSpecialProjectAudit = async (data, thunkAPI) => {
  try {
    let props = await axios.post(
      `${baseUrl}/auditPlanningAndScheduling/engagments/saveOrupdateBusinessObjectiveAndMapProcessSpecialProjectOrAudit`,
      data
    );
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};
export const saveCheckListObjective = async (data, thunkAPI) => {
  try {
    let props = await axios.post(
      `${baseUrl}/auditPlanningAndScheduling/engagments/updateChecklistObjective`,
      data
    );
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};

export const getSingleEngagementObject = async (data, thunkAPI) => {
  try {
    let props = await axios.get(
      `${baseUrl}/auditPlanningAndScheduling/engagments/getBusinessObjective?engagementId=${data}`
    );
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};

export const updateBusinessObjective = async (data, thunkAPI) => {
  try {
    let props = await axios.post(
      `${baseUrl}/auditPlanningAndScheduling/engagments/updateBusinessObjective`,
      data
    );
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};

export const saveMapProcessBusinessObjective = async (data, thunkAPI) => {
  try {
    let props = await axios.post(
      `${baseUrl}/auditPlanningAndScheduling/engagments/saveOrupdateBusinessObjectiveAndMapProcessBusinessObjective`,
      data
    );
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};

export const getSingleCheckListObjective = async (data, thunkAPI) => {
  try {
    let props = await axios.get(
      `${baseUrl}/auditPlanningAndScheduling/engagments/getChecklistObjective?engagementId=${data}`
    );
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};
