import axios from "axios";
import { baseUrl } from "../../../../config/constants";

export const getAllEngagements = async (data, thunkAPI) => {
  try {
    const { user } = thunkAPI.getState().auth;
    let props = await axios.get(
      `${baseUrl}/auditPlanningAndScheduling/engagments/getAllByCompanyId?companyId=${data?.companyId}&pageNo=${data?.page}&noOfRecords=${data?.itemsPerPage}`,
      {
        headers: {
          "Content-Type": "application/json",
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
          "Content-Type": "application/json",
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
    const { user } = thunkAPI.getState().auth;
    let props = await axios.post(
      `${baseUrl}/auditPlanningAndScheduling/engagments/checklistObjective/update`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user[0]?.token}`,
        },
      }
    );
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};

export const getSingleEngagementObject = async (data, thunkAPI) => {
  try {
    const { user } = thunkAPI.getState().auth;
    let props = await axios.get(
      `${baseUrl}/auditPlanningAndScheduling/engagments/businessObjective/getByEngagementId?engagementId=${data}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user[0]?.token}`,
        },
      }
    );
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};

export const getInitialSingleEngagementObject = async (data, thunkAPI) => {
  try {
    const { user } = thunkAPI.getState().auth;
    let props = await axios.get(
      `${baseUrl}/auditPlanningAndScheduling/engagments/businessObjective/getByEngagementId?engagementId=${data}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user[0]?.token}`,
        },
      }
    );
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};

export const submitBusinessObjective = async (data, thunkAPI) => {
  try {
    const { user } = thunkAPI.getState().auth;
    let props = await axios.post(
      `${baseUrl}/auditPlanningAndScheduling/engagments/businessObjective/update`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user[0]?.token}`,
        },
      }
    );
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};

export const saveMapProcessBusinessObjective = async (data, thunkAPI) => {
  try {
    const { user } = thunkAPI.getState().auth;
    let props = await axios.post(
      `${baseUrl}/auditPlanningAndScheduling/engagments/businessObjective/saveOrupdateBusinessObjectiveAndMapProcess`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user[0]?.token}`,
        },
      }
    );
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};

export const getInitialSingleCheckListObjective = async (data, thunkAPI) => {
  try {
    const { user } = thunkAPI.getState().auth;
    let props = await axios.get(
      `${baseUrl}/auditPlanningAndScheduling/engagments/checklistObjective/getByEngagementId?engagementId=${data}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user[0]?.token}`,
        },
      }
    );
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};

export const getSingleSpecialProjectAuditObjective = async (data, thunkAPI) => {
  try {
    const { user } = thunkAPI.getState().auth;
    let props = await axios.get(
      `${baseUrl}/auditPlanningAndScheduling/engagments/specialProjectOrAudit/getByEngagementId?engagementId=${data}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user[0]?.token}`,
        },
      }
    );
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};

export const getInitialSingleSpecialProjectAuditObjective = async (
  data,
  thunkAPI
) => {
  try {
    const { user } = thunkAPI.getState().auth;
    let props = await axios.get(
      `${baseUrl}/auditPlanningAndScheduling/engagments/specialProjectOrAudit/getByEngagementId?engagementId=${data}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user[0]?.token}`,
        },
      }
    );
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};

export const updateSpecialProjectAudit = async (data, thunkAPI) => {
  try {
    const { user } = thunkAPI.getState().auth;
    let props = await axios.post(
      `${baseUrl}/auditPlanningAndScheduling/engagments/specialProjectOrAudit/update`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user[0]?.token}`,
        },
      }
    );
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};

export const submitSpecialProjectAudit = async (data, thunkAPI) => {
  try {
    const { user } = thunkAPI.getState().auth;
    let props = await axios.post(
      `${baseUrl}/auditPlanningAndScheduling/engagments/specialProjectOrAudit/update`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user[0]?.token}`,
        },
      }
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
    const { user } = thunkAPI.getState().auth;
    let props = await axios.post(
      `${baseUrl}/auditPlanningAndScheduling/engagments/specialProjectOrAudit/saveOrupdateBusinessObjectiveAndMapProcess`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user[0]?.token}`,
        },
      }
    );
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};

export const getCheckListItems = async (data, thunkAPI) => {
  try {
    const { user } = thunkAPI.getState().auth;
    let props = await axios.get(
      `${baseUrl}/configurations/checklist/checklistitems/getAllChecklistItems${data}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user[0]?.token}`,
        },
      }
    );
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};

export const deleteEngagement = async (data, thunkAPI) => {
  try {
    const { user } = thunkAPI.getState().auth;
    let props = await axios.delete(
      `${baseUrl}/auditPlanningAndScheduling/engagments/delete?engagementId=${data}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user[0]?.token}`,
        },
      }
    );
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};

export const saveIndustryAndCompanyUpdates = async (data, thunkAPI) => {
  try {
    const { user } = thunkAPI.getState().auth;
    let props = await axios.post(
      `${baseUrl}/auditPlanningAndScheduling/engagments/businessObjective/industryAndCompanyUpdates/save`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user[0]?.token}`,
        },
      }
    );
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};

export const getIndustryAndCompanyUpdates = async (data, thunkAPI) => {
  try {
    const { user } = thunkAPI.getState().auth;
    let props = await axios.get(
      `${baseUrl}/auditPlanningAndScheduling/engagments/businessObjective/industryAndCompanyUpdates/get?companyId=${data?.companyId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user[0]?.token}`,
        },
      }
    );
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};
