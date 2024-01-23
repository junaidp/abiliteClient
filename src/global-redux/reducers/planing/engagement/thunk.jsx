import axios from "axios";
import { baseUrl } from "../../../../constants/index";

export const getAllEngagements = async (data, thunkAPI) => {
  try {
    const { user } = thunkAPI.getState().auth;
    let props = await axios.get(
      `${baseUrl}/auditPlanningAndScheduling/engagments/getAllByCompanyId?companyId=${data}`,
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

export const addNewEngagement = async (data, thunkAPI) => {
  try {
    const { user } = thunkAPI.getState().auth;
    let props = await axios.post(
      `${baseUrl}/auditPlanningAndScheduling/engagments/addNew`,
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


export const saveCheckListObjective = async (data, thunkAPI) => {
  try {
    let props = await axios.post(
      `${baseUrl}/auditPlanningAndScheduling/engagments/checklistObjective/update`,
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
      `${baseUrl}/auditPlanningAndScheduling/engagments/businessObjective/getByEngagementId?engagementId=${data}`
    );
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};

export const updateBusinessObjective = async (data, thunkAPI) => {
  try {
    let props = await axios.post(
      `${baseUrl}/auditPlanningAndScheduling/engagments/businessObjective/update`,
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
      `${baseUrl}/auditPlanningAndScheduling/engagments/businessObjective/saveOrupdateBusinessObjectiveAndMapProcess`,
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
      `${baseUrl}/auditPlanningAndScheduling/engagments/checklistObjective/getByEngagementId?engagementId=${data}`
    );
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};

export const getSingleSpecialProjectAuditObjective = async (data, thunkAPI) => {
  try {
    let props = await axios.get(
      `${baseUrl}/auditPlanningAndScheduling/engagments/specialProjectOrAudit/getByEngagementId?engagementId=${data}`
    );
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};

export const updateBusinessMinuteMeeting = async (data, thunkAPI) => {
  try {
    let props = await axios.post(
      `${baseUrl}/auditPlanningAndScheduling/engagments/meetingScheduleAndMinutes/update`,
      data
    );
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};

export const updateSpecialProjectAudit = async (data, thunkAPI) => {
  try {
    let props = await axios.post(
      `${baseUrl}/auditPlanningAndScheduling/engagments/specialProjectOrAudit/update`,
      data
    );
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};

export const updateBusinessObjectiveAndMapProcessSpecialProjectOrAudit = async (
  data,
  thunkAPI
) => {
  try {
    let props = await axios.post(
      `${baseUrl}/auditPlanningAndScheduling/engagments/specialProjectOrAudit/saveOrupdateBusinessObjectiveAndMapProcess`,
      data
    );
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};
