import {
  getAllRiskAssessments,
  updateRiskAssessment,
  submitRiskAssessment,
  performRiskAssessment,
  performInitialRiskAssessment,
  addRiskAssessment,
  deleteRiskFactor,
  deleteResidualRisk,
  getAllRiskFactors,
} from "./thunk";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  initialLoading: false,
  allRiskAssessments: [],
  riskAssessmentSuccess: false,
  performRiskAssessmentObject: {},
  totalNoOfRecords: 0,
  riskFactors: [],
};

export const setupGetAllRiskAssessments = createAsyncThunk(
  "riskAssessment/getAllRiskAssessments",
  async (data, thunkAPI) => {
    return getAllRiskAssessments(data, thunkAPI);
  }
);

export const setupUpdateRiskAssessment = createAsyncThunk(
  "riskAssessment/updateRiskAssessment",
  async (data, thunkAPI) => {
    return updateRiskAssessment(data, thunkAPI);
  }
);

export const setupSubmitRiskAssessment = createAsyncThunk(
  "riskAssessment/submitRiskAssessment",
  async (data, thunkAPI) => {
    return submitRiskAssessment(data, thunkAPI);
  }
);

export const setupPerformRiskAssessment = createAsyncThunk(
  "riskAssessment/performRiskAssessment",
  async (data, thunkAPI) => {
    return performRiskAssessment(data, thunkAPI);
  }
);

export const setupPerformInitialRiskAssessment = createAsyncThunk(
  "riskAssessment/performInitialRiskAssessment",
  async (data, thunkAPI) => {
    return performInitialRiskAssessment(data, thunkAPI);
  }
);

export const setupAddRiskAssessment = createAsyncThunk(
  "riskAssessment/addRiskAssessment",
  async (data, thunkAPI) => {
    return addRiskAssessment(data, thunkAPI);
  }
);

export const setupDeleteRiskFactor = createAsyncThunk(
  "riskAssessment/deleteRiskFactor",
  async (data, thunkAPI) => {
    return deleteRiskFactor(data, thunkAPI);
  }
);

export const setupDeleteResidualRisk = createAsyncThunk(
  "riskAssessment/deleteResidualRisk",
  async (data, thunkAPI) => {
    return deleteResidualRisk(data, thunkAPI);
  }
);

export const setupGetAllRiskFactors = createAsyncThunk(
  "riskAssessment/getAllRiskFactors",
  async (data, thunkAPI) => {
    return getAllRiskFactors(data, thunkAPI);
  }
);

export const slice = createSlice({
  name: "riskAssessment",
  initialState,
  reducers: {
    resetRiskAssessment: (state) => {
      state.riskAssessmentSuccess = false;
    },
    handleCleanUp: (state) => {
      state.loading = false;
      state.allRiskAssessments = [];
      state.riskAssessmentSuccess = false;
      state.performRiskAssessmentObject = {};
      state.totalNoOfRecords = 0;
      state.riskFactors = [];
    },
  },
  extraReducers: (builder) => {
    // Get All Risk Assessment
    builder
      .addCase(setupGetAllRiskAssessments.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupGetAllRiskAssessments.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.totalNoOfRecords = payload?.message;
        const sortedArray = payload?.data?.sort(
          (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
        );
        state.allRiskAssessments = sortedArray || [];
      })
      .addCase(setupGetAllRiskAssessments.rejected, (state, { payload }) => {
        state.loading = false;
        if (payload?.response?.data?.message) {
          toast.error(payload?.response?.data?.message);
        } else {
          toast.error("An Error has occurred");
        }
      });

    // Update Risk Assessment
    builder
      .addCase(setupUpdateRiskAssessment.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupUpdateRiskAssessment.fulfilled, (state) => {
        state.loading = false;
        state.riskAssessmentSuccess = true;
        toast.success("Risk Assessment Updated Successfully");
      })
      .addCase(setupUpdateRiskAssessment.rejected, (state, { payload }) => {
        state.loading = false;
        state.riskAssessmentSuccess = false;
        if (payload?.response?.data?.message) {
          toast.error(payload?.response?.data?.message);
        } else {
          toast.error("An Error has occurred");
        }
      });

    // Submit Risk Assessment
    builder
      .addCase(setupSubmitRiskAssessment.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupSubmitRiskAssessment.fulfilled, (state) => {
        state.loading = false;
        state.riskAssessmentSuccess = true;
        toast.success("Risk Assessment Submitted Successfully");
      })
      .addCase(setupSubmitRiskAssessment.rejected, (state, { payload }) => {
        state.loading = false;
        state.riskAssessmentSuccess = false;
        if (payload?.response?.data?.message) {
          toast.error(payload?.response?.data?.message);
        } else {
          toast.error("An Error has occurred");
        }
      });

    // Perform Risk Assessment
    builder
      .addCase(setupPerformRiskAssessment.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupPerformRiskAssessment.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.performRiskAssessmentObject = payload?.data || [];
      })
      .addCase(setupPerformRiskAssessment.rejected, (state, { payload }) => {
        state.loading = false;
        if (payload?.response?.data?.message) {
          toast.error(payload?.response?.data?.message);
        } else {
          toast.error("An Error has occurred");
        }
      });
    // Perform Initial Risk Assessment
    builder
      .addCase(setupPerformInitialRiskAssessment.pending, (state) => {
        state.initialLoading = true;
      })
      .addCase(
        setupPerformInitialRiskAssessment.fulfilled,
        (state, { payload }) => {
          state.initialLoading = false;
          state.performRiskAssessmentObject = payload?.data || [];
        }
      )
      .addCase(
        setupPerformInitialRiskAssessment.rejected,
        (state, { payload }) => {
          state.initialLoading = false;
          if (payload?.response?.data?.message) {
            toast.error(payload?.response?.data?.message);
          } else {
            toast.error("An Error has occurred");
          }
        }
      );

    // Add Risk Assessment
    builder
      .addCase(setupAddRiskAssessment.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupAddRiskAssessment.fulfilled, (state) => {
        state.loading = false;
        state.riskAssessmentSuccess = true;
      })
      .addCase(setupAddRiskAssessment.rejected, (state, { payload }) => {
        state.loading = false;
        if (payload?.response?.data?.message) {
          toast.error(payload?.response?.data?.message);
        } else {
          toast.error("An Error has occurred");
        }
      });
    // Delete Risk Factor
    builder
      .addCase(setupDeleteRiskFactor.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupDeleteRiskFactor.fulfilled, (state) => {
        state.loading = false;
        state.riskAssessmentSuccess = true;
        toast.success(
          "Criteria for Risk Management and Control Processes	 Deleted Successfully"
        );
      })
      .addCase(setupDeleteRiskFactor.rejected, (state, { payload }) => {
        state.loading = false;
        if (payload?.response?.data?.message) {
          toast.error(payload?.response?.data?.message);
        } else {
          toast.error("An Error has occurred");
        }
      });
    // Delete Residual Risk
    builder
      .addCase(setupDeleteResidualRisk.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupDeleteResidualRisk.fulfilled, (state) => {
        state.loading = false;
        state.riskAssessmentSuccess = true;
        toast.success("Specific Risk Deleted Successfully");
      })
      .addCase(setupDeleteResidualRisk.rejected, (state, { payload }) => {
        state.loading = false;
        if (payload?.response?.data?.message) {
          toast.error(payload?.response?.data?.message);
        } else {
          toast.error("An Error has occurred");
        }
      });
    // Get All Risk Fcators
    builder
      .addCase(setupGetAllRiskFactors.pending, (state) => {
        state.initialLoading = true;
      })
      .addCase(setupGetAllRiskFactors.fulfilled, (state, { payload }) => {
        state.initialLoading = false;
        state.riskFactors = payload?.data || [];
      })
      .addCase(setupGetAllRiskFactors.rejected, (state, { payload }) => {
        state.initialLoading = false;
        if (payload?.response?.data?.message) {
          toast.error(payload?.response?.data?.message);
        } else {
          toast.error("An Error has occurred");
        }
      });
  },
});

export const { resetRiskAssessment, handleCleanUp } = slice.actions;

export default slice.reducer;
