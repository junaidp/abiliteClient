import React from "react";
import Headers from "./components/header/index";
import { useSearchParams } from "react-router-dom";
import {
  handleCleanUp,
  setupGetSingleReport,
  resetReportAddSuccess,
  setupUpdateSingleReport,
  setupGetSingleUpdatedReport,
} from "../../../../../global-redux/reducers/reports/planing-report/slice";
import {
  changeActiveLink,
  InitialLoadSidebarActiveLink,
} from "../../../../../global-redux/reducers/common/slice";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress } from "@mui/material";
import Editors from "./components/editors/index";
import HeadingTable from "./components/heading-table";
import PlanningReportFileUpload from "./components/file-upload";

const UpdatePlanningReport = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const reportId = searchParams.get("reportId");
  const { user } = useSelector((state) => state?.auth);
  const { loading, updateLoading, singleReportObject, reportAddSuccess } =
    useSelector((state) => state?.planningReport);

  const [values, setValues] = React.useState({
    summary: "",
    methodology: "",
    riskAssesmentSummary: "",
    orgnizationStrategy: "",
    summaryRisk: "",
  });

  function handleEditorContentChange(name, value) {
    setValues((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  }

  function handleUpdate() {
    if (!updateLoading) {
      dispatch(
        setupUpdateSingleReport({
          ...singleReportObject,
          ...values,
        })
      );
    }
  }

  React.useEffect(() => {
    if (singleReportObject) {
      setValues({
        summary: singleReportObject?.summary || "",
        methodology: singleReportObject?.methodology || "",
        riskAssesmentSummary: singleReportObject?.riskAssesmentSummary || "",
        orgnizationStrategy: singleReportObject?.orgnizationStrategy || "",
        summaryRisk: singleReportObject?.summaryRisk || "",
      });
    }
  }, [singleReportObject]);

  React.useEffect(() => {
    if (reportAddSuccess) {
      dispatch(resetReportAddSuccess());
      dispatch(setupGetSingleUpdatedReport(Number(reportId)));
    }
  }, [reportAddSuccess]);

  React.useEffect(() => {
    if (!reportId) {
      navigate("/audit/planning-report");
    }
  }, [reportId]);

  React.useEffect(() => {
    if (user[0]?.token && reportId) {
      dispatch(setupGetSingleReport(Number(reportId)));
    }
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(changeActiveLink("li-internal-audit-planing-report"));
    dispatch(InitialLoadSidebarActiveLink("li-reports"));
    return () => {
      dispatch(handleCleanUp());
    };
  }, []);

  return (
    <div>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <Headers data={singleReportObject} />
          <Editors
            handleEditorContentChange={handleEditorContentChange}
            data={singleReportObject}
          />
          <div className="d-flex justify-end">
            <button
              className={`btn btn-outline-primary  my-4 ${
                updateLoading && "disabled"
              }`}
              onClick={handleUpdate}
            >
              {updateLoading ? "Loading..." : "Save Report"}
            </button>
          </div>
          <hr />
          <HeadingTable data={singleReportObject} reportId={reportId} />
          <PlanningReportFileUpload
            reportId={reportId}
            item={singleReportObject}
          />
        </>
      )}
    </div>
  );
};

export default UpdatePlanningReport;
