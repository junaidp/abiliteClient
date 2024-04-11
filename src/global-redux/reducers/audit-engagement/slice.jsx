import {
  getAllAuditEngagement,
  getSingleAuditEngagement,
  getInitialSingleAuditEngagement,
  saveAuditNotification,
  saveRiskControlMatrixObjective,
  updateRiskControlMatrixObjective,
  saveRiskControlMatrixRating,
  updateRiskControlMatrixRating,
  saveRiskControlMatrixControl,
  updateRiskControlMatrixControl,
  addAuditProgram,
  updateAuditProgram,
  updateAuditSteps,
  addAuditStepObservation,
  updateAuditStepObservation,
  updateComplianceCheckList,
  updateRiskControlMatrixApproval,
  updateAuditProgramApproval,
  updateAuditStepApproval,
  uploadAuditStepFile,
  auditStepProcedureFileUpload,
  auditStepProcedureFileDelete,
  auditStepProcedureFileUpdate,
  auditStepSamplingFileUpload,
  auditStepSamplingFileDelete,
  auditStepSamplingFileUpdate,
  auditStepObservationDelete,
  deleteAuditStepFile,
  updateAuditStepFile,
  uploadAuditStepCheckListFile,
  deleteAuditStepCheckListFile,
  updateAuditStepCheckListFile,
} from "./thunk";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  loading: false,
  initialLoading: false,
  auditEngagementAddSuccess: false,
  singleAuditEngagementObject: {},
  auditEngagementObservationAddSuccess: false,
  allAuditEngagement: [],
};

export const setupGetAllAuditEngagement = createAsyncThunk(
  "auditEngagement/getAllAuditEngagement",
  async (data, thunkAPI) => {
    return getAllAuditEngagement(data, thunkAPI);
  }
);

export const setupGetSingleAuditEngagement = createAsyncThunk(
  "auditEngagement/getSingleAuditEngagement",
  async (data, thunkAPI) => {
    return getSingleAuditEngagement(data, thunkAPI);
  }
);

export const setupGetInitialSingleAuditEngagement = createAsyncThunk(
  "auditEngagement/getInitialSingleAuditEngagement",
  async (data, thunkAPI) => {
    return getInitialSingleAuditEngagement(data, thunkAPI);
  }
);

export const setupSaveAuditNotification = createAsyncThunk(
  "auditEngagement/saveAuditNotification",
  async (data, thunkAPI) => {
    return saveAuditNotification(data, thunkAPI);
  }
);

export const setupSaveRiskControlMatrixObjective = createAsyncThunk(
  "auditEngagement/saveRiskControlMatrixObjective",
  async (data, thunkAPI) => {
    return saveRiskControlMatrixObjective(data, thunkAPI);
  }
);

export const setupUpdateRiskControlMatrixObjective = createAsyncThunk(
  "auditEngagement/updateRiskControlMatrixObjective",
  async (data, thunkAPI) => {
    return updateRiskControlMatrixObjective(data, thunkAPI);
  }
);

export const setupSaveRiskControlMatrixRating = createAsyncThunk(
  "auditEngagement/saveRiskControlMatrixRating",
  async (data, thunkAPI) => {
    return saveRiskControlMatrixRating(data, thunkAPI);
  }
);
export const setupUpdateRiskControlMatrixRating = createAsyncThunk(
  "auditEngagement/updateRiskControlMatrixRating",
  async (data, thunkAPI) => {
    return updateRiskControlMatrixRating(data, thunkAPI);
  }
);

export const setupSaveRiskControlMatrixControl = createAsyncThunk(
  "auditEngagement/saveRiskControlMatrixControl",
  async (data, thunkAPI) => {
    return saveRiskControlMatrixControl(data, thunkAPI);
  }
);

export const setupUpdateRiskControlMatrixControl = createAsyncThunk(
  "auditEngagement/updateRiskControlMatrixControl",
  async (data, thunkAPI) => {
    return updateRiskControlMatrixControl(data, thunkAPI);
  }
);

export const setupAddAuditProgram = createAsyncThunk(
  "auditEngagement/addAuditProgram",
  async (data, thunkAPI) => {
    return addAuditProgram(data, thunkAPI);
  }
);

export const setupUpdateAuditProgram = createAsyncThunk(
  "auditEngagement/updateAuditProgram",
  async (data, thunkAPI) => {
    return updateAuditProgram(data, thunkAPI);
  }
);

export const setupUpdateAuditSteps = createAsyncThunk(
  "auditEngagement/updateAuditSteps",
  async (data, thunkAPI) => {
    return updateAuditSteps(data, thunkAPI);
  }
);

export const setupAddAuditStepObservation = createAsyncThunk(
  "auditEngagement/addAuditStepObservation",
  async (data, thunkAPI) => {
    return addAuditStepObservation(data, thunkAPI);
  }
);
export const setupUpdateAuditStepObservation = createAsyncThunk(
  "auditEngagement/updateAuditStepObservation",
  async (data, thunkAPI) => {
    return updateAuditStepObservation(data, thunkAPI);
  }
);

export const setupUpdateComplianceCheckList = createAsyncThunk(
  "auditEngagement/updateComplianceCheckList",
  async (data, thunkAPI) => {
    return updateComplianceCheckList(data, thunkAPI);
  }
);

export const setupUpdateRiskControlMatrixApproval = createAsyncThunk(
  "auditEngagement/updateRiskControlMatrixApproval",
  async (data, thunkAPI) => {
    return updateRiskControlMatrixApproval(data, thunkAPI);
  }
);

export const setupUpdateAuditProgramApproval = createAsyncThunk(
  "auditEngagement/updateAuditProgramApproval",
  async (data, thunkAPI) => {
    return updateAuditProgramApproval(data, thunkAPI);
  }
);

export const setupUpdateAuditStepApproval = createAsyncThunk(
  "auditEngagement/updateAuditStepApproval",
  async (data, thunkAPI) => {
    return updateAuditStepApproval(data, thunkAPI);
  }
);
export const setupUploadAuditStepFile = createAsyncThunk(
  "auditEngagement/uploadAuditStepFile",
  async (data, thunkAPI) => {
    return uploadAuditStepFile(data, thunkAPI);
  }
);
export const setupAuditStepProcedureFileUpload = createAsyncThunk(
  "auditEngagement/auditStepProcedureFileUpload",
  async (data, thunkAPI) => {
    return auditStepProcedureFileUpload(data, thunkAPI);
  }
);
export const setupAuditStepProcedureFileDelete = createAsyncThunk(
  "auditEngagement/auditStepProcedureFileDelete",
  async (data, thunkAPI) => {
    return auditStepProcedureFileDelete(data, thunkAPI);
  }
);

export const setupAuditStepProcedureFileUpdate = createAsyncThunk(
  "auditEngagement/auditStepProcedureFileUpdate",
  async (data, thunkAPI) => {
    return auditStepProcedureFileUpdate(data, thunkAPI);
  }
);

//
export const setupAuditStepSamplingFileUpload = createAsyncThunk(
  "auditEngagement/auditStepSamplingFileUpload",
  async (data, thunkAPI) => {
    return auditStepSamplingFileUpload(data, thunkAPI);
  }
);
export const setupAuditStepSamplingFileDelete = createAsyncThunk(
  "auditEngagement/auditStepSamplingFileDelete",
  async (data, thunkAPI) => {
    return auditStepSamplingFileDelete(data, thunkAPI);
  }
);
export const setupAuditStepSamplingFileUpdate = createAsyncThunk(
  "auditEngagement/auditStepSamplingFileUpdate",
  async (data, thunkAPI) => {
    return auditStepSamplingFileUpdate(data, thunkAPI);
  }
);
export const setupAuditStepObservationDelete = createAsyncThunk(
  "auditEngagement/auditStepObservationDelete",
  async (data, thunkAPI) => {
    return auditStepObservationDelete(data, thunkAPI);
  }
);
export const setupDeleteAuditStepFile = createAsyncThunk(
  "auditEngagement/deleteAuditStepFile",
  async (data, thunkAPI) => {
    return deleteAuditStepFile(data, thunkAPI);
  }
);
export const setupUpdateAuditStepFile = createAsyncThunk(
  "auditEngagement/updateAuditStepFile",
  async (data, thunkAPI) => {
    return updateAuditStepFile(data, thunkAPI);
  }
);
export const setupUploadAuditStepCheckListFile = createAsyncThunk(
  "auditEngagement/uploadAuditStepCheckListFile",
  async (data, thunkAPI) => {
    return uploadAuditStepCheckListFile(data, thunkAPI);
  }
);
export const setupDeleteAuditStepCheckListFile = createAsyncThunk(
  "auditEngagement/deleteAuditStepCheckListFile",
  async (data, thunkAPI) => {
    return deleteAuditStepCheckListFile(data, thunkAPI);
  }
);
export const setupUpdateAuditStepCheckListFile = createAsyncThunk(
  "auditEngagement/updateAuditStepCheckListFile",
  async (data, thunkAPI) => {
    return updateAuditStepCheckListFile(data, thunkAPI);
  }
);

export const slice = createSlice({
  name: "auditEngagement",
  initialState,
  reducers: {
    resetAuditEngagementAddSuccess: (state, action) => {
      state.auditEngagementAddSuccess = false;
    },
    resetAuditEngagementObservationAddSuccess: (state, action) => {
      state.auditEngagementObservationAddSuccess = false;
    },
    handleCleanUp: (state) => {
      (state.loading = false),
        (state.auditEngagementAddSuccess = false),
        (state.auditEngagementObservationAddSuccess = false),
        (state.singleAuditEngagementObject = {}),
        (state.allAuditEngagement = []);
    },
  },
  // Get all Audit Engagements
  extraReducers: (builder) => {
    builder
      .addCase(setupGetAllAuditEngagement.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupGetAllAuditEngagement.fulfilled, (state, { payload }) => {
        state.loading = false;
        const sortedArray = payload?.data?.sort(
          (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
        );
        state.allAuditEngagement = sortedArray || [];
      })
      .addCase(setupGetAllAuditEngagement.rejected, (state, action) => {
        state.loading = false;
        if (action.payload?.response?.data?.message) {
          toast.error(action.payload.response.data.message);
        } else {
          toast.error("An Error has occurred");
        }
      });
    // Get Single Audit Engagements
    builder
      .addCase(setupGetSingleAuditEngagement.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        setupGetSingleAuditEngagement.fulfilled,
        (state, { payload }) => {
          state.loading = false;
          state.singleAuditEngagementObject = payload?.data || [
            { error: "Not Found" },
          ];
        }
      )
      .addCase(setupGetSingleAuditEngagement.rejected, (state, action) => {
        state.loading = false;
        if (action.payload?.response?.data?.message) {
          toast.error(action.payload.response.data.message);
        } else {
          toast.error("An Error has occurred");
        }
      });
    // Get Initial Single Audit Engagements
    builder
      .addCase(setupGetInitialSingleAuditEngagement.pending, (state) => {
        state.initialLoading = true;
      })
      .addCase(
        setupGetInitialSingleAuditEngagement.fulfilled,
        (state, { payload }) => {
          state.initialLoading = false;
          state.singleAuditEngagementObject = payload?.data || [
            { error: "Not Found" },
          ];
        }
      )
      .addCase(
        setupGetInitialSingleAuditEngagement.rejected,
        (state, action) => {
          state.initialLoading = false;
          if (action.payload?.response?.data?.message) {
            toast.error(action.payload.response.data.message);
          } else {
            toast.error("An Error has occurred");
          }
        }
      );
    // Save audit notification
    builder
      .addCase(setupSaveAuditNotification.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupSaveAuditNotification.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.auditEngagementAddSuccess = true;
        toast.success("Audit notification saved successfully");
      })
      .addCase(setupSaveAuditNotification.rejected, (state, action) => {
        state.loading = false;
        if (action.payload?.response?.data?.message) {
          toast.error(action.payload.response.data.message);
        } else {
          toast.error("An Error has occurred");
        }
      });
    // Save Risk Control Matrix Objective
    builder
      .addCase(setupSaveRiskControlMatrixObjective.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupSaveRiskControlMatrixObjective.fulfilled, (state) => {
        state.loading = false;
        state.auditEngagementAddSuccess = true;
        toast.success("Risk Control Matrix Objective Saved Successfully");
      })
      .addCase(
        setupSaveRiskControlMatrixObjective.rejected,
        (state, action) => {
          state.loading = false;
          if (action.payload?.response?.data?.message) {
            toast.error(action.payload.response.data.message);
          } else {
            toast.error("An Error has occurred");
          }
        }
      );
    // Update  Risk Control Matrix Objective
    builder
      .addCase(setupUpdateRiskControlMatrixObjective.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupUpdateRiskControlMatrixObjective.fulfilled, (state) => {
        state.loading = false;
        state.auditEngagementAddSuccess = true;
        toast.success("Risk Control Matrix Objective Updated Successfully");
      })
      .addCase(
        setupUpdateRiskControlMatrixObjective.rejected,
        (state, action) => {
          state.loading = false;
          if (action.payload?.response?.data?.message) {
            toast.error(action.payload.response.data.message);
          } else {
            toast.error("An Error has occurred");
          }
        }
      );
    // Save Risk Control Matrix Rating
    builder
      .addCase(setupSaveRiskControlMatrixRating.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupSaveRiskControlMatrixRating.fulfilled, (state) => {
        state.loading = false;
        state.auditEngagementAddSuccess = true;
        toast.success("Risk Control Matrix Rating Saved Successfully");
      })
      .addCase(setupSaveRiskControlMatrixRating.rejected, (state, action) => {
        state.loading = false;
        if (action.payload?.response?.data?.message) {
          toast.error(action.payload.response.data.message);
        } else {
          toast.error("An Error has occurred");
        }
      });
    // Update Risk Control Matrix Rating
    builder
      .addCase(setupUpdateRiskControlMatrixRating.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupUpdateRiskControlMatrixRating.fulfilled, (state) => {
        state.loading = false;
        state.auditEngagementAddSuccess = true;
        toast.success("Risk Control Matrix Rating Updated Successfully");
      })
      .addCase(setupUpdateRiskControlMatrixRating.rejected, (state, action) => {
        state.loading = false;
        if (action.payload?.response?.data?.message) {
          toast.error(action.payload.response.data.message);
        } else {
          toast.error("An Error has occurred");
        }
      });
    // Save Risk Control Matrix Control
    builder
      .addCase(setupSaveRiskControlMatrixControl.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupSaveRiskControlMatrixControl.fulfilled, (state) => {
        state.loading = false;
        state.auditEngagementAddSuccess = true;
        toast.success("Risk Control Matrix Control Saved Successfully");
      })
      .addCase(setupSaveRiskControlMatrixControl.rejected, (state, action) => {
        state.loading = false;
        if (action.payload?.response?.data?.message) {
          toast.error(action.payload.response.data.message);
        } else {
          toast.error("An Error has occurred");
        }
      });
    // Update Risk Control Matrix Control
    builder
      .addCase(setupUpdateRiskControlMatrixControl.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupUpdateRiskControlMatrixControl.fulfilled, (state) => {
        state.loading = false;
        state.auditEngagementAddSuccess = true;
        toast.success("Risk Control Matrix Control Updated Successfully");
      })
      .addCase(
        setupUpdateRiskControlMatrixControl.rejected,
        (state, action) => {
          state.loading = false;
          if (action.payload?.response?.data?.message) {
            toast.error(action.payload.response.data.message);
          } else {
            toast.error("An Error has occurred");
          }
        }
      );

    // Add Audit Program
    builder
      .addCase(setupAddAuditProgram.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupAddAuditProgram.fulfilled, (state) => {
        state.loading = false;
        state.auditEngagementAddSuccess = true;
        toast.success("Audit Program Added Successfully");
      })
      .addCase(setupAddAuditProgram.rejected, (state, action) => {
        state.loading = false;
        if (action.payload?.response?.data?.message) {
          toast.error(action.payload.response.data.message);
        } else {
          toast.error("An Error has occurred");
        }
      });
    // Update Audit Program
    builder
      .addCase(setupUpdateAuditProgram.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupUpdateAuditProgram.fulfilled, (state) => {
        state.loading = false;
        state.auditEngagementAddSuccess = true;
        toast.success("Audit Program Updated Successfully");
      })
      .addCase(setupUpdateAuditProgram.rejected, (state, action) => {
        state.loading = false;
        if (action.payload?.response?.data?.message) {
          toast.error(action.payload.response.data.message);
        } else {
          toast.error("An Error has occurred");
        }
      });
    // Update Audit Steps
    builder
      .addCase(setupUpdateAuditSteps.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupUpdateAuditSteps.fulfilled, (state) => {
        state.loading = false;
        state.auditEngagementAddSuccess = true;
        toast.success("Audit Steps Updated Successfully");
      })
      .addCase(setupUpdateAuditSteps.rejected, (state, action) => {
        state.loading = false;
        if (action.payload?.response?.data?.message) {
          toast.error(action.payload.response.data.message);
        } else {
          toast.error("An Error has occurred");
        }
      });
    // Add Audit Step Observation
    builder
      .addCase(setupAddAuditStepObservation.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupAddAuditStepObservation.fulfilled, (state) => {
        state.loading = false;
        state.auditEngagementObservationAddSuccess = true;
        toast.success("Audit Steps Observation Added Successfully");
      })
      .addCase(setupAddAuditStepObservation.rejected, (state, action) => {
        state.loading = false;
        if (action.payload?.response?.data?.message) {
          toast.error(action.payload.response.data.message);
        } else {
          toast.error("An Error has occurred");
        }
      });
    // Update Audit Step Observation
    builder
      .addCase(setupUpdateAuditStepObservation.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupUpdateAuditStepObservation.fulfilled, (state) => {
        state.loading = false;
        state.auditEngagementObservationAddSuccess = true;
        toast.success("Audit Steps Observation Updated Successfully");
      })
      .addCase(setupUpdateAuditStepObservation.rejected, (state, action) => {
        state.loading = false;
        if (action.payload?.response?.data?.message) {
          toast.error(action.payload.response.data.message);
        } else {
          toast.error("An Error has occurred");
        }
      });
    // Update Compliance CheckList
    builder
      .addCase(setupUpdateComplianceCheckList.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupUpdateComplianceCheckList.fulfilled, (state) => {
        state.loading = false;
        state.auditEngagementAddSuccess = true;
        toast.success("Compliance Check List Updated Successfully");
      })
      .addCase(setupUpdateComplianceCheckList.rejected, (state, action) => {
        state.loading = false;
        if (action.payload?.response?.data?.message) {
          toast.error(action.payload.response.data.message);
        } else {
          toast.error("An Error has occurred");
        }
      });
    // Update Risk Control Matrix Approval
    builder
      .addCase(setupUpdateRiskControlMatrixApproval.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupUpdateRiskControlMatrixApproval.fulfilled, (state) => {
        state.loading = false;
        state.auditEngagementAddSuccess = true;
        toast.success("Risk Control Matrix Updated Successfully");
      })
      .addCase(
        setupUpdateRiskControlMatrixApproval.rejected,
        (state, action) => {
          state.loading = false;
          if (action.payload?.response?.data?.message) {
            toast.error(action.payload.response.data.message);
          } else {
            toast.error("An Error has occurred");
          }
        }
      );
    // Update Audit Program Approval
    builder
      .addCase(setupUpdateAuditProgramApproval.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupUpdateAuditProgramApproval.fulfilled, (state) => {
        state.loading = false;
        state.auditEngagementAddSuccess = true;
        toast.success("Audit Program Updated Successfully");
      })
      .addCase(setupUpdateAuditProgramApproval.rejected, (state, action) => {
        state.loading = false;
        if (action.payload?.response?.data?.message) {
          toast.error(action.payload.response.data.message);
        } else {
          toast.error("An Error has occurred");
        }
      });
    // Update Audit Step
    builder
      .addCase(setupUpdateAuditStepApproval.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupUpdateAuditStepApproval.fulfilled, (state) => {
        state.loading = false;
        state.auditEngagementAddSuccess = true;
        toast.success("Audit Step Updated Successfully");
      })
      .addCase(setupUpdateAuditStepApproval.rejected, (state, action) => {
        state.loading = false;
        if (action.payload?.response?.data?.message) {
          toast.error(action.payload.response.data.message);
        } else {
          toast.error("An Error has occurred");
        }
      });
    // Audit Step Upload File
    builder
      .addCase(setupUploadAuditStepFile.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupUploadAuditStepFile.fulfilled, (state) => {
        state.loading = false;
        state.auditEngagementObservationAddSuccess = true;
        toast.success("Audit Step File Uploaded Successfully");
      })
      .addCase(setupUploadAuditStepFile.rejected, (state, action) => {
        state.loading = false;
        if (action.payload?.response?.data?.message) {
          toast.error(action.payload.response.data.message);
        } else {
          toast.error("An Error has occurred");
        }
      });
    // Audit Step Procedure Upload File
    builder
      .addCase(setupAuditStepProcedureFileUpload.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupAuditStepProcedureFileUpload.fulfilled, (state) => {
        state.loading = false;
        state.auditEngagementObservationAddSuccess = true;
        toast.success("Audit Step Procedure File Uploaded Successfully");
      })
      .addCase(setupAuditStepProcedureFileUpload.rejected, (state, action) => {
        state.loading = false;
        if (action.payload?.response?.data?.message) {
          toast.error(action.payload.response.data.message);
        } else {
          toast.error("An Error has occurred");
        }
      });
    // Audit Step Procedure  File Delete
    builder
      .addCase(setupAuditStepProcedureFileDelete.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupAuditStepProcedureFileDelete.fulfilled, (state) => {
        state.loading = false;
        state.auditEngagementObservationAddSuccess = true;
        toast.success("Audit Step Procedure File Deleted Successfully");
      })
      .addCase(setupAuditStepProcedureFileDelete.rejected, (state, action) => {
        state.loading = false;
        if (action.payload?.response?.data?.message) {
          toast.error(action.payload.response.data.message);
        } else {
          toast.error("An Error has occurred");
        }
      });
    // Audit Step Procedure  File Update
    builder
      .addCase(setupAuditStepProcedureFileUpdate.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupAuditStepProcedureFileUpdate.fulfilled, (state) => {
        state.loading = false;
        state.auditEngagementObservationAddSuccess = true;
        toast.success("Audit Step Procedure File Updated Successfully");
      })
      .addCase(setupAuditStepProcedureFileUpdate.rejected, (state, action) => {
        state.loading = false;
        if (action.payload?.response?.data?.message) {
          toast.error(action.payload.response.data.message);
        } else {
          toast.error("An Error has occurred");
        }
      });
    // Audit Step Sampling File Upload
    builder
      .addCase(setupAuditStepSamplingFileUpload.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupAuditStepSamplingFileUpload.fulfilled, (state) => {
        state.loading = false;
        state.auditEngagementObservationAddSuccess = true;
        toast.success("Audit Step Sampling File Uploaded Successfully");
      })
      .addCase(setupAuditStepSamplingFileUpload.rejected, (state, action) => {
        state.loading = false;
        if (action.payload?.response?.data?.message) {
          toast.error(action.payload.response.data.message);
        } else {
          toast.error("An Error has occurred");
        }
      });
    // Audit Step Sampling File Delete
    builder
      .addCase(setupAuditStepSamplingFileDelete.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupAuditStepSamplingFileDelete.fulfilled, (state) => {
        state.loading = false;
        state.auditEngagementObservationAddSuccess = true;
        toast.success("Audit Step Sampling File Deleted Successfully");
      })
      .addCase(setupAuditStepSamplingFileDelete.rejected, (state, action) => {
        state.loading = false;
        if (action.payload?.response?.data?.message) {
          toast.error(action.payload.response.data.message);
        } else {
          toast.error("An Error has occurred");
        }
      });
    // Audit Step Sampling File Update
    builder
      .addCase(setupAuditStepSamplingFileUpdate.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupAuditStepSamplingFileUpdate.fulfilled, (state) => {
        state.loading = false;
        state.auditEngagementObservationAddSuccess = true;
        toast.success("Audit Step Sampling File Updated Successfully");
      })
      .addCase(setupAuditStepSamplingFileUpdate.rejected, (state, action) => {
        state.loading = false;
        if (action.payload?.response?.data?.message) {
          toast.error(action.payload.response.data.message);
        } else {
          toast.error("An Error has occurred");
        }
      });
    // Audit Step Observation Delete
    builder
      .addCase(setupAuditStepObservationDelete.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupAuditStepObservationDelete.fulfilled, (state) => {
        state.loading = false;
        state.auditEngagementObservationAddSuccess = true;
        toast.success("Audit Step Observation Deleted Successfully");
      })
      .addCase(setupAuditStepObservationDelete.rejected, (state, action) => {
        state.loading = false;
        if (action.payload?.response?.data?.message) {
          toast.error(action.payload.response.data.message);
        } else {
          toast.error("An Error has occurred");
        }
      });
    // Audit Step Observation File Delete
    builder
      .addCase(setupDeleteAuditStepFile.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupDeleteAuditStepFile.fulfilled, (state) => {
        state.loading = false;
        state.auditEngagementObservationAddSuccess = true;
        toast.success("Audit Step Observation File Deleted Successfully");
      })
      .addCase(setupDeleteAuditStepFile.rejected, (state, action) => {
        state.loading = false;
        if (action.payload?.response?.data?.message) {
          toast.error(action.payload.response.data.message);
        } else {
          toast.error("An Error has occurred");
        }
      });
    // Audit Step Observation File Update
    builder
      .addCase(setupUpdateAuditStepFile.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupUpdateAuditStepFile.fulfilled, (state) => {
        state.loading = false;
        state.auditEngagementObservationAddSuccess = true;
        toast.success("Audit Step Observation File Updated Successfully");
      })
      .addCase(setupUpdateAuditStepFile.rejected, (state, action) => {
        state.loading = false;
        if (action.payload?.response?.data?.message) {
          toast.error(action.payload.response.data.message);
        } else {
          toast.error("An Error has occurred");
        }
      });
    // Audit Step Observation Checklist File Upload
    builder
      .addCase(setupUploadAuditStepCheckListFile.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupUploadAuditStepCheckListFile.fulfilled, (state) => {
        state.loading = false;
        state.auditEngagementObservationAddSuccess = true;
        toast.success("Audit Step CheckList File Uploaded Successfully");
      })
      .addCase(setupUploadAuditStepCheckListFile.rejected, (state, action) => {
        state.loading = false;
        if (action.payload?.response?.data?.message) {
          toast.error(action.payload.response.data.message);
        } else {
          toast.error("An Error has occurred");
        }
      });
    // Audit Step Observation Checklist File Delete
    builder
      .addCase(setupDeleteAuditStepCheckListFile.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupDeleteAuditStepCheckListFile.fulfilled, (state) => {
        state.loading = false;
        state.auditEngagementObservationAddSuccess = true;
        toast.success("Audit Step CheckList File Deleted Successfully");
      })
      .addCase(setupDeleteAuditStepCheckListFile.rejected, (state, action) => {
        state.loading = false;
        if (action.payload?.response?.data?.message) {
          toast.error(action.payload.response.data.message);
        } else {
          toast.error("An Error has occurred");
        }
      });
    // Audit Step Observation Checklist File Updated
    builder
      .addCase(setupUpdateAuditStepCheckListFile.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupUpdateAuditStepCheckListFile.fulfilled, (state) => {
        state.loading = false;
        state.auditEngagementObservationAddSuccess = true;
        toast.success("Audit Step CheckList File Updated Successfully");
      })
      .addCase(setupUpdateAuditStepCheckListFile.rejected, (state, action) => {
        state.loading = false;
        if (action.payload?.response?.data?.message) {
          toast.error(action.payload.response.data.message);
        } else {
          toast.error("An Error has occurred");
        }
      });
  },
});

export const {
  resetAuditEngagementAddSuccess,
  resetAuditEngagementObservationAddSuccess,
  handleCleanUp,
} = slice.actions;

export default slice.reducer;
