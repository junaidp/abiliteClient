import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  resetReportAddSuccess,
  setupSaveReports,
  setupUpdateSingleReport,
  handleCleanUp,
  setupGetInitialSingleReport,
} from "../../../../../global-redux/reducers/reports/slice";
import {
  changeActiveLink,
  InitialLoadSidebarActiveLink,
} from "../../../../../global-redux/reducers/common/slice";
import AuditableUnits from "./components/auditable-units";
import RiskScores from "./components/risk-scores";
import RiskFactorApproach from "./components/risk-factor-approach";
import AttachFiles from "./components/attach-files/index";
import Editors from "./components/editors";
import Header from "./components/header";
import HeadingTable from "./components/heading-table";
import Buttons from "./components/buttons";
import GeneratePlaningReportDialog from "../../../../modals/generate-planing-report-dialog";
import EditGeneratePlaningReportDialog from "../../../../modals/edit-generate-planing-report-dialog";
import { CircularProgress } from "@mui/material";

const GeneratePlanningReport = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const editable = searchParams.get("editable");
  const reportId = searchParams.get("reportId");
  const { loading, reportAddSuccess, singleReportObject, initialLoading } =
    useSelector((state) => state?.reports);
  const { user } = useSelector((state) => state?.auth);
  const { company } = useSelector((state) => state?.common);
  const [pdfLoading, setPdfLoading] = React.useState(false);
  const [generatePlaningReportDialog, setGeneratePlaningReportDialog] =
    React.useState(false);
  const [editGeneratePlaningReportDialog, setEditGeneratePlaningReportDialog] =
    React.useState(false);
  const [editGeneratePlaningId, setEditGeneratePlaningId] = React.useState("");
  const [data, setData] = React.useState({
    reportName: "",
    summary: "",
    methodology: "",
    riskAssesmentSummary: "",
    orgnizationStrategy: "",
    summaryRisk: "",
    newHeading: [],
  });

  const handleEditorContentChange = (name, newContent) => {
    setData((pre) => {
      return {
        ...pre,
        [name]: newContent,
      };
    });
  };

  function handleDeleteHeading(id) {
    setData((pre) => {
      return {
        ...pre,
        newHeading: pre?.newHeading?.filter((all) => all.id !== id),
      };
    });
  }

  function handleSaveReport() {
    if (!loading) {
      const companyId = user[0]?.company?.find(
        (item) => item?.companyName === company
      )?.id;
      if (
        data?.reportName === "" ||
        data?.summary === "" ||
        data?.methodology === "" ||
        data?.riskAssesmentSummary === "" ||
        data?.orgnizationStrategy === "" ||
        data?.summaryRisk === ""
      ) {
        toast.error("Please Provide all the fields");
      } else {
        dispatch(
          setupSaveReports({
            ...data,
            newHeading: data?.newHeading?.map((item) => {
              return {
                heading: item?.heading,
                description: item?.description,
              };
            }),
            storedHtml: "<p>Dummy String By Now</p>",
            reportStatus: "draft",
            createdBy: user[0]?.userId?.id,
            reportingTo: user[0]?.userId?.employeeid?.reportingTo?.id || null,
            reportShareWith: null,
            companyId: companyId,
          })
        );
      }
    }
  }

  function handleEditReport() {
    if (!loading) {
      if (
        data?.reportName === "" ||
        data?.summary === "" ||
        data?.methodology === "" ||
        data?.riskAssesmentSummary === "" ||
        data?.orgnizationStrategy === "" ||
        data?.summaryRisk === ""
      ) {
        toast.error("Please Provide all the fields");
      } else {
        const details = singleReportObject;
        dispatch(
          setupUpdateSingleReport({
            ...data,
            newHeading: data?.newHeading?.map((item) => {
              return {
                heading: item?.heading,
                description: item?.description,
              };
            }),
            storedHtml: "<p>Dummy String By Now</p>",
            reportStatus: details?.reportStatus,
            reportShareWith: details?.reportShareWith?.id || null,
            reportingTo: details?.reportingTo?.id || null,
            createdBy: details?.createdBy?.id,
            updatedBy: user[0]?.userId?.id,
            id: Number(reportId),
          })
        );
      }
    }
  }

  React.useEffect(() => {
    if (reportAddSuccess) {
      dispatch(resetReportAddSuccess());
      setData({
        reportName: "",
        summary: "",
        methodology: "",
        riskAssesmentSummary: "",
        orgnizationStrategy: "",
        summaryRisk: "",
        newHeading: [],
      });
      navigate("/audit/planning-report");
    }
  }, [reportAddSuccess]);

  React.useEffect(() => {
    const isEmptyObject =
      Object.keys(singleReportObject).length === 0 &&
      singleReportObject.constructor === Object;
    if ((editable === "false" || editable === "true") && !isEmptyObject) {
      setData({
        reportName: singleReportObject?.reportName,
        summary: singleReportObject?.summary,
        methodology: singleReportObject?.methodology,
        riskAssesmentSummary: singleReportObject?.riskAssesmentSummary,
        orgnizationStrategy: singleReportObject?.orgnizationStrategy,
        summaryRisk: singleReportObject?.summaryRisk,
        newHeading: singleReportObject?.newHeading || [],
      });
    }
  }, [editable, singleReportObject]);

  React.useEffect(() => {
    if (!editable) {
      navigate("/audit/planning-report");
    }
    if (editable === "true" || editable === "false") {
      if (!reportId) {
        navigate("/audit/planning-report");
      }
    }
  }, [editable]);

  React.useEffect(() => {
    if (user[0]?.token && editable !== "notApplicable") {
      dispatch(setupGetInitialSingleReport(reportId));
    }
  }, [user, editable]);

  React.useEffect(() => {
    dispatch(changeActiveLink("li-internal-audit-planing-report"));
    dispatch(InitialLoadSidebarActiveLink("li-reports"));
    return () => {
      dispatch(handleCleanUp());
    };
  }, []);

  return (
    <div id="reportsPage">
      {initialLoading ? (
        <div className="my-3">
          <CircularProgress />
        </div>
      ) : singleReportObject[0]?.error === "Not Found" ? (
        "Report Not Found"
      ) : (
        <>
          {generatePlaningReportDialog && (
            <div className="audit-settings-modal">
              <div className="model-wrap">
                <GeneratePlaningReportDialog
                  setGeneratePlaningReportDialog={
                    setGeneratePlaningReportDialog
                  }
                  setData={setData}
                />
              </div>
            </div>
          )}
          {editGeneratePlaningReportDialog && (
            <div className="audit-settings-modal">
              <div className="model-wrap">
                <EditGeneratePlaningReportDialog
                  setEditGeneratePlaningReportDialog={
                    setEditGeneratePlaningReportDialog
                  }
                  data={data}
                  setData={setData}
                  editGeneratePlaningId={editGeneratePlaningId}
                  setEditGeneratePlaningId={setEditGeneratePlaningId}
                />
              </div>
            </div>
          )}

          <Header
            navigate={navigate}
            setGeneratePlaningReportDialog={setGeneratePlaningReportDialog}
            data={data}
            setData={setData}
            editable={editable}
          />

          <Editors
            handleEditorContentChange={handleEditorContentChange}
            data={data}
            editable={editable}
          />

          <HeadingTable
            editable={editable}
            data={data}
            handleDeleteHeading={handleDeleteHeading}
            setEditGeneratePlaningId={setEditGeneratePlaningId}
            setEditGeneratePlaningReportDialog={
              setEditGeneratePlaningReportDialog
            }
          />
          <AuditableUnits />
          <RiskScores />
          <RiskFactorApproach />
          <AttachFiles />
          <Buttons
            pdfLoading={pdfLoading}
            editable={editable}
            loading={loading}
            handleSaveReport={handleSaveReport}
            handleEditReport={handleEditReport}
          />
        </>
      )}
    </div>
  );
};

export default GeneratePlanningReport;
