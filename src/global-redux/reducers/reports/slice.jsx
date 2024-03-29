import { toast } from "react-toastify";
import {
  saveReports,
  getAllReports,
  getInitialSingleReport,
  getIAHReports,
  editSingleReport,
  deleteSingleReport,
  publishReport,
} from "./thunk";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  initialLoading: false,
  reportAddSuccess: false,
  singleReportObject: {},
  allReports: [],
};

export const setupSaveReports = createAsyncThunk(
  "reports/saveReports",
  async (data, thunkAPI) => {
    return saveReports(data, thunkAPI);
  }
);
export const setupGetAllReports = createAsyncThunk(
  "reports/getAllReports",
  async (data, thunkAPI) => {
    return getAllReports(data, thunkAPI);
  }
);

export const setupGetInitialSingleReport = createAsyncThunk(
  "reports/getInitialSingleReport",
  async (data, thunkAPI) => {
    return getInitialSingleReport(data, thunkAPI);
  }
);
export const setupGetIAHReports = createAsyncThunk(
  "reports/getIAHReports",
  async (data, thunkAPI) => {
    return getIAHReports(data, thunkAPI);
  }
);

export const setupUpdateSingleReport = createAsyncThunk(
  "reports/editSingleReport",
  async (data, thunkAPI) => {
    return editSingleReport(data, thunkAPI);
  }
);

export const setupDeleteSingleReport = createAsyncThunk(
  "reports/deleteSingleReport",
  async (data, thunkAPI) => {
    return deleteSingleReport(data, thunkAPI);
  }
);
export const setupPublishReport = createAsyncThunk(
  "reports/publishReport",
  async (data, thunkAPI) => {
    return publishReport(data, thunkAPI);
  }
);

export const slice = createSlice({
  name: "reports",
  initialState,
  reducers: {
    resetReportAddSuccess: (state, action) => {
      state.reportAddSuccess = false;
    },
    handleCleanUp: (state) => {
      (state.loading = false),
        (state.reportAddSuccess = false),
        (state.singleReportObject = {}),
        (state.allReports = []);
    },
  },
  extraReducers: (builder) => {
    // Save Reports
    builder
      .addCase(setupSaveReports.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupSaveReports.fulfilled, (state) => {
        state.loading = false;
        toast.success("Report Added Successfully");
        state.reportAddSuccess = true;
      })
      .addCase(setupSaveReports.rejected, (state, { payload }) => {
        state.loading = false;
        state.companyAddSuccess = false;
        if (payload?.response?.data?.message) {
          toast.error(payload?.response?.data?.message);
        } else {
          toast.error("An Error has occurred");
        }
      });

    // Get All Reports
    builder
      .addCase(setupGetAllReports.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupGetAllReports.fulfilled, (state, { payload }) => {
        const sortedArray = payload?.data?.sort(
          (a, b) => new Date(b.createdTime) - new Date(a.createdTime)
        );
        state.allReports = sortedArray || [];
        state.loading = false;
      })
      .addCase(setupGetAllReports.rejected, (state, { payload }) => {
        state.loading = false;
        if (payload?.response?.data?.message) {
          toast.error(payload?.response?.data?.message);
        } else {
          toast.error("An Error has occurred");
        }
      });
    // Get Initial Single Report
    builder
      .addCase(setupGetInitialSingleReport.pending, (state) => {
        state.initialLoading = true;
      })
      .addCase(setupGetInitialSingleReport.fulfilled, (state, { payload }) => {
        state.initialLoading = false;
        state.singleReportObject = payload?.data || [{ error: "Not Found" }];
      })
      .addCase(setupGetInitialSingleReport.rejected, (state, { payload }) => {
        state.initialLoading = false;
        if (payload?.response?.data?.message) {
          toast.error(payload?.response?.data?.message);
        } else {
          toast.error("An Error has occurred");
        }
      });
    // Get All IAH Reports
    builder
      .addCase(setupGetIAHReports.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupGetIAHReports.fulfilled, (state, { payload }) => {
        const sortedArray = payload?.data?.sort(
          (a, b) => new Date(b.createdTime) - new Date(a.createdTime)
        );
        state.allReports = sortedArray || [];
        state.loading = false;
      })
      .addCase(setupGetIAHReports.rejected, (state, { payload }) => {
        state.loading = false;
        if (payload?.response?.data?.message) {
          toast.error(payload?.response?.data?.message);
        } else {
          toast.error("An Error has occurred");
        }
      });

    // Update Single Report
    builder
      .addCase(setupUpdateSingleReport.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupUpdateSingleReport.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.reportAddSuccess = true;
        toast.success("Report Updated Successfully");
      })
      .addCase(setupUpdateSingleReport.rejected, (state, { payload }) => {
        state.loading = false;
        if (payload?.response?.data?.message) {
          toast.error(payload?.response?.data?.message);
        } else {
          toast.error("An Error has occurred");
        }
      });

    // Delete Report
    builder
      .addCase(setupDeleteSingleReport.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupDeleteSingleReport.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.reportAddSuccess = true;
        toast.success("Report Deleted Successfully");
      })
      .addCase(setupDeleteSingleReport.rejected, (state, { payload }) => {
        state.loading = false;
        if (payload?.response?.data?.message) {
          toast.error(payload?.response?.data?.message);
        } else {
          toast.error("An Error has occurred");
        }
      });

    // Publish Report
    builder
      .addCase(setupPublishReport.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupPublishReport.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.reportAddSuccess = true;
        toast.success("Report Published Successfully");
      })
      .addCase(setupPublishReport.rejected, (state, { payload }) => {
        state.loading = false;
        if (payload?.response?.data?.message) {
          toast.error(payload?.response?.data?.message);
        } else {
          toast.error("An Error has occurred");
        }
      });
  },
});

export const { resetReportAddSuccess, handleCleanUp } = slice.actions;

export default slice.reducer;
