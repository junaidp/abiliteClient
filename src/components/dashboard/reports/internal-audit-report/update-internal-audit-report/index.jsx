import React from "react";
import {
  changeActiveLink,
  InitialLoadSidebarActiveLink,
} from "../../../../../global-redux/reducers/common/slice";
import {
  setupGetSingleInternalAuditReport,
  handleResetData,
  setupGetSingleInternalAuditReportAfterReportSave,
  setupSaveInternalAuditReport,
  resetInternalAuditReportAddSuccess,
  resetFileUploadAddSuccess,
} from "../../../../../global-redux/reducers/reports/internal-audit-report/slice";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import InternalAuditReportBody from "./components/InternalAuditReportBody";
import Header from "./components/Header";
import { decryptString } from "../../../../../config/helper";
import { useParams } from "react-router-dom";

const UpdateInternalAuditReport = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const reportId = decryptString(id);
  const navigate = useNavigate();
  const { user } = useSelector((state) => state?.auth);
  const {
    loading,
    internalAuditReportAddSuccess,
    addReportLoading,
    internalAuditReportExtraFieldsObject,
    singleInternalAuditReport,
    iahFileUploadSuccess,
  } = useSelector((state) => state?.internalAuditReport);
  const [reportObject, setReportObject] = React.useState({});
  const [deleteFileId, setDeleteFileId] = React.useState("");

  function handleChangeReportObject(event) {
    setReportObject((pre) => {
      return {
        ...pre,
        [event?.target?.name]: event?.target?.value,
      };
    });
  }

  function handleChangeExtraFields(event, id) {
    setReportObject((pre) => {
      return {
        ...pre,
        intAuditExtraFieldsList: pre?.intAuditExtraFieldsList?.map(
          (keyObject) =>
            Number(keyObject?.id) === Number(id)
              ? { ...keyObject, [event?.target?.name]: event?.target?.value }
              : keyObject
        ),
      };
    });
  }

  function handleChangeExcutiveSummary(value) {
    setReportObject((pre) => {
      return {
        ...pre,
        executiveSummary: value,
      };
    });
  }

  function handleChangeAuditPurpose(value) {
    setReportObject((pre) => {
      return {
        ...pre,
        auditPurpose: value,
      };
    });
  }
  function handleChangeAnnexure(value) {
    setReportObject((pre) => {
      return {
        ...pre,
        annexure: value,
      };
    });
  }

  function handleSaveInternalAuditReport() {
    if (!addReportLoading) {
      dispatch(setupSaveInternalAuditReport(reportObject));
    }
  }

  React.useEffect(() => {
    if (internalAuditReportAddSuccess) {
      dispatch(resetInternalAuditReportAddSuccess());
      if (reportId) {
        dispatch(
          setupGetSingleInternalAuditReportAfterReportSave(
            `?reportId=${Number(reportId)}`
          )
        );
      }
    }
  }, [internalAuditReportAddSuccess]);

  React.useEffect(() => {
    let isNotNull =
      Object.keys(singleInternalAuditReport).length !== 0 &&
      singleInternalAuditReport.constructor === Object;
    if (isNotNull) {
      setReportObject(singleInternalAuditReport);
    }
  }, [singleInternalAuditReport]);

  React.useEffect(() => {
    if (iahFileUploadSuccess) {
      dispatch(resetFileUploadAddSuccess());
      dispatch(
        setupSaveInternalAuditReport({
          ...reportObject,
          annexureUploads: reportObject?.annexureUploads?.filter(
            (singleFileItem) => singleFileItem?.id !== deleteFileId
          ),
        })
      );
      setDeleteFileId("");
    }
  }, [iahFileUploadSuccess]);

  React.useEffect(() => {
    let isNotNull =
      Object.keys(internalAuditReportExtraFieldsObject).length !== 0 &&
      internalAuditReportExtraFieldsObject.constructor === Object;
    if (isNotNull) {
      setReportObject((pre) => {
        return {
          ...internalAuditReportExtraFieldsObject,
          reportName: pre?.reportName,
          reportDate: pre?.reportDate,
          executiveSummary: pre?.executiveSummary,
          auditPurpose: pre?.auditPurpose,
          annexure: pre?.annexure,
          keyFindingsList: pre?.keyFindingsList,
          reportingAndFollowUp: pre?.reportingAndFollowUp,
          annexureUploads: pre?.annexureUploads,
        };
      });
    }
  }, [internalAuditReportExtraFieldsObject]);

  React.useEffect(() => {
    if (!reportId) {
      navigate("/audit/internal-audit-report");
    }
  }, [reportId]);

  React.useEffect(() => {
    if (user[0]?.token && reportId) {
      dispatch(
        setupGetSingleInternalAuditReport(`?reportId=${Number(reportId)}`)
      );
    }
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(changeActiveLink("li-internal-audit-report"));
    dispatch(InitialLoadSidebarActiveLink("li-reports"));
    return () => {
      dispatch(handleResetData());
    };
  }, []);

  return (
    <div className="overflow-y-hidden">
      {loading ? (
        <CircularProgress />
      ) : singleInternalAuditReport[0]?.error === "Not Found" ||
        (Object.keys(singleInternalAuditReport).length === 0 &&
          singleInternalAuditReport.constructor === Object) ? (
        "Interal Audit Report Not Found"
      ) : (
        <div className="mb-4">
          <Header />
          <InternalAuditReportBody
            reportObject={reportObject}
            handleChangeReportObject={handleChangeReportObject}
            handleChangeExcutiveSummary={handleChangeExcutiveSummary}
            handleChangeAuditPurpose={handleChangeAuditPurpose}
            handleSaveInternalAuditReport={handleSaveInternalAuditReport}
            addReportLoading={addReportLoading}
            handleChangeExtraFields={handleChangeExtraFields}
            handleChangeAnnexure={handleChangeAnnexure}
            setDeleteFileId={setDeleteFileId}
          />
        </div>
      )}
    </div>
  );
};

export default UpdateInternalAuditReport;
