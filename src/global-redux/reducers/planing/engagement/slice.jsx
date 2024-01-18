import {
  getAllEngagements,
  addNewEngagement,
  editSingleEngagement,
  saveBusinessObjective,
  saveSpecialProjectAudit,
  saveCheckListObjective,
  getSingleEngagementObject,
  updateBusinessObjective,
  saveMapProcessBusinessObjective,
  getSingleCheckListObjective,
} from "./thunk";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  allEngagements: [],
  engagementAddSuccess: false,
  selectedSingleEngagementItem: {},
  planingEngagementSingleObject: {},
};

export const setupGetAllEngagements = createAsyncThunk(
  "engagement/getAllEngagements",
  async (data, thunkAPI) => {
    return getAllEngagements(data, thunkAPI);
  }
);
export const setupAddNewEngagement = createAsyncThunk(
  "engagement/addNewEngagement",
  async (data, thunkAPI) => {
    return addNewEngagement(data, thunkAPI);
  }
);

export const setupEditSingleEngagement = createAsyncThunk(
  "engagement/editSingleEngagement",
  async (data, thunkAPI) => {
    return editSingleEngagement(data, thunkAPI);
  }
);

export const setupSaveBusinessObjective = createAsyncThunk(
  "engagement/saveBusinessObjective",
  async (data, thunkAPI) => {
    return saveBusinessObjective(data, thunkAPI);
  }
);
export const setupSaveSpecialProjectAudit = createAsyncThunk(
  "engagement/saveSpecialProjectAudit",
  async (data, thunkAPI) => {
    return saveSpecialProjectAudit(data, thunkAPI);
  }
);

export const setupSaveCheckListObjective = createAsyncThunk(
  "engagement/saveCheckListObjective",
  async (data, thunkAPI) => {
    return saveCheckListObjective(data, thunkAPI);
  }
);

export const setupGetSingleEngagementObject = createAsyncThunk(
  "engagement/getSingleEngagementObject",
  async (data, thunkAPI) => {
    return getSingleEngagementObject(data, thunkAPI);
  }
);
export const setupUpdateBusinessObjective = createAsyncThunk(
  "engagement/updateBusinessObjective",
  async (data, thunkAPI) => {
    return updateBusinessObjective(data, thunkAPI);
  }
);
export const setupSaveMapProcessBusinessObjective = createAsyncThunk(
  "engagement/saveMapProcessBusinessObjective",
  async (data, thunkAPI) => {
    return saveMapProcessBusinessObjective(data, thunkAPI);
  }
);
export const setupGetSingleCheckListObjective = createAsyncThunk(
  "engagement/getSingleCheckListObjective",
  async (data, thunkAPI) => {
    return getSingleCheckListObjective(data, thunkAPI);
  }
);

export const slice = createSlice({
  name: "engagement",
  initialState,
  reducers: {
    resetAddEngagementSuccess: (state) => {
      state.engagementAddSuccess = false;
    },
    changeSelectedEngagementDialog: (state, action) => {
      state.selectedSingleEngagementItem = action.payload;
    },
  },
  extraReducers: {
    // Get All Engagements
    [setupGetAllEngagements.pending]: (state) => {
      state.loading = true;
    },
    [setupGetAllEngagements.fulfilled]: (state, { payload }) => {
      state.allEngagements = payload.data;
      state.loading = false;
    },
    [setupGetAllEngagements.rejected]: (state, { payload }) => {
      state.loading = false;
    },
    // Add New Engagements
    [setupAddNewEngagement.pending]: (state) => {
      state.loading = true;
    },
    [setupAddNewEngagement.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.engagementAddSuccess = true;
      state.planingEngagementSingleObject = payload?.data;
      toast.success("Engagement Added Successfully");
    },
    [setupAddNewEngagement.rejected]: (state, { payload }) => {
      state.loading = false;
      state.engagementAddSuccess = false;
      if (payload?.response?.data?.message) {
        toast.error(payload?.response?.data?.message);
      } else {
        toast.error("An Error has accoured");
      }
    },
    // Edit Single Engagements
    [setupEditSingleEngagement.pending]: (state) => {
      state.loading = true;
    },
    [setupEditSingleEngagement.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.engagementAddSuccess = true;
      toast.success("Engagement Edited Successfully");
    },
    [setupEditSingleEngagement.rejected]: (state, { payload }) => {
      state.loading = false;
      state.engagementAddSuccess = false;
      if (payload?.response?.data?.message) {
        toast.error(payload?.response?.data?.message);
      } else {
        toast.error("An Error has accoured");
      }
    },
    // Setup Save Business Objective
    [setupSaveBusinessObjective.pending]: (state) => {
      state.loading = true;
    },
    [setupSaveBusinessObjective.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.engagementAddSuccess = true;
      toast.success("Business Objective Edited Successfully");
    },
    [setupSaveBusinessObjective.rejected]: (state, { payload }) => {
      state.loading = false;
      state.engagementAddSuccess = false;
      if (payload?.response?.data?.message) {
        toast.error(payload?.response?.data?.message);
      } else {
        toast.error("An Error has accoured");
      }
    },
    // Setup Save Special Audit
    [setupSaveSpecialProjectAudit.pending]: (state) => {
      state.loading = true;
    },
    [setupSaveSpecialProjectAudit.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.engagementAddSuccess = true;
      toast.success("Special Project Audit Edited Successfully");
    },
    [setupSaveSpecialProjectAudit.rejected]: (state, { payload }) => {
      state.loading = false;
      state.engagementAddSuccess = false;
      if (payload?.response?.data?.message) {
        toast.error(payload?.response?.data?.message);
      } else {
        toast.error("An Error has accoured");
      }
    },
    // Setup Save CheckList Objective
    [setupSaveCheckListObjective.pending]: (state) => {
      state.loading = true;
    },
    [setupSaveCheckListObjective.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.engagementAddSuccess = true;
      toast.success("Special Project Audit Edited Successfully");
    },
    [setupSaveCheckListObjective.rejected]: (state, { payload }) => {
      state.loading = false;
      state.engagementAddSuccess = false;
      if (payload?.response?.data?.message) {
        toast.error(payload?.response?.data?.message);
      } else {
        toast.error("An Error has accoured");
      }
    },
    // Setup Get Single Engagement Object
    [setupGetSingleEngagementObject.pending]: (state) => {
      state.loading = true;
    },
    [setupGetSingleEngagementObject.fulfilled]: (state, { payload }) => {
      state.planingEngagementSingleObject = payload?.data;
      state.loading = false;
      // state.engagementAddSuccess = true;
    },
    [setupGetSingleEngagementObject.rejected]: (state, { payload }) => {
      state.loading = false;
      state.engagementAddSuccess = false;
      if (payload?.response?.data?.message) {
        toast.error(payload?.response?.data?.message);
      } else {
        toast.error("An Error has accoured");
      }
    },
    // Update Business Objective
    [setupUpdateBusinessObjective.pending]: (state) => {
      state.loading = true;
    },
    [setupUpdateBusinessObjective.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.engagementAddSuccess = true;
      toast.success("Business Objective Updated Successfully");
    },
    [setupUpdateBusinessObjective.rejected]: (state, { payload }) => {
      state.loading = false;
      state.engagementAddSuccess = false;
      if (payload?.response?.data?.message) {
        toast.error(payload?.response?.data?.message);
      } else {
        toast.error("An Error has accoured");
      }
    },
    // Update Business Objective Map Process
    [setupSaveMapProcessBusinessObjective.pending]: (state) => {
      state.loading = true;
    },
    [setupSaveMapProcessBusinessObjective.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.engagementAddSuccess = true;
      toast.success("Business Objective Map Process Updated Successfully");
    },
    [setupSaveMapProcessBusinessObjective.rejected]: (state, { payload }) => {
      state.loading = false;
      state.engagementAddSuccess = false;
      if (payload?.response?.data?.message) {
        toast.error(payload?.response?.data?.message);
      } else {
        toast.error("An Error has accoured");
      }
    },
    // Get Single CheckList Objective
    [setupGetSingleCheckListObjective.pending]: (state) => {
      state.loading = true;
    },
    [setupGetSingleCheckListObjective.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.planingEngagementSingleObject = payload?.data;
    },
    [setupGetSingleCheckListObjective.rejected]: (state, { payload }) => {
      state.loading = false;
      if (payload?.response?.data?.message) {
        toast.error(payload?.response?.data?.message);
      } else {
        toast.error("An Error has accoured");
      }
    },
  },
});

export const { resetAddEngagementSuccess, changeSelectedEngagementDialog } =
  slice.actions;

export default slice.reducer;
