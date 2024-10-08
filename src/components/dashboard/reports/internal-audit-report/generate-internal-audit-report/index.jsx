import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setupGetAllJobsForInternalAuditReport,
  setupCreateInternalAuditReportObject,
  handleResetData,
  setupSaveInternalAuditReport,
  resetInternalAuditReportAddSuccess,
  resetFileUploadAddSuccess,
  setupGetSingleInternalAuditReportAfterReportSave,
} from "../../../../../global-redux/reducers/reports/internal-audit-report/slice";
import {
  changeActiveLink,
  InitialLoadSidebarActiveLink,
} from "../../../../../global-redux/reducers/common/slice";
import InternalAuditReportBody from "./components/InternalAuditReportBody";
import Header from "./components/Header";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";
import SelectJob from "./components/SelectJob";

const GenerateInternalAuditReport = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state?.auth);
  const { company, year } = useSelector((state) => state?.common);
  const {
    jobsForInternalAuditReports,
    internalAuditReportObject,
    loading,
    internalAuditReportAddSuccess,
    addReportLoading,
    internalAuditReportExtraFieldsObject,
    iahFileUploadSuccess,
  } = useSelector((state) => state?.internalAuditReport);
  const [reportObject, setReportObject] = React.useState({});
  const [jobForInternalAuditReportId, setJobForInternalAuditReportId] =
    React.useState("");
  const [deleteFileId, setDeleteFileId] = React.useState("");

  const handleChange = (event) => {
    const selectedSubLocation = event.target.value;
    setJobForInternalAuditReportId(selectedSubLocation);
  };

  function handleGetInternalAuditReportObject() {
    if (!loading) {
      if (jobForInternalAuditReportId === "") {
        toast.error("Please Select Report");
      }
      if (jobForInternalAuditReportId !== "") {
        const reportingAndFollowUpId =
          jobForInternalAuditReportId?.split(" ")[0];
        const subLocationId = jobForInternalAuditReportId?.split(" ")[1];
        dispatch(
          setupCreateInternalAuditReportObject(
            `?reportingAndFollowUpId=${Number(
              reportingAndFollowUpId
            )}&subLocationId=${Number(subLocationId)}`
          )
        );
      }
    }
  }

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
      if (internalAuditReportObject?.id) {
        dispatch(
          setupGetSingleInternalAuditReportAfterReportSave(
            `?reportId=${Number(internalAuditReportObject?.id)}`
          )
        );
      }
    }
  }, [internalAuditReportAddSuccess]);

  React.useEffect(() => {
    const companyId = user[0]?.company?.find(
      (item) => item?.companyName === company
    )?.id;
    let isNull =
      Object.keys(internalAuditReportObject).length === 0 &&
      internalAuditReportObject.constructor === Object;
    if (companyId && isNull) {
      dispatch(
        setupGetAllJobsForInternalAuditReport(
          `?companyId=${companyId}&currentYear=${Number(year)}`
        )
      );
    }
  }, [dispatch, year]);

  React.useEffect(() => {
    let isNotNull =
      Object.keys(internalAuditReportObject).length !== 0 &&
      internalAuditReportObject.constructor === Object;
    if (isNotNull) {
      setReportObject(internalAuditReportObject);
    }
  }, [internalAuditReportObject]);

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
    dispatch(changeActiveLink("li-internal-audit-report"));
    dispatch(InitialLoadSidebarActiveLink("li-reports"));
    return () => {
      dispatch(handleResetData());
    };
  }, []);

  return (
    <div className="overflow-y-hidden">
      <Header />
      <SelectJob
        internalAuditReportObject={internalAuditReportObject}
        jobForInternalAuditReportId={jobForInternalAuditReportId}
        handleChange={handleChange}
        jobsForInternalAuditReports={jobsForInternalAuditReports}
        handleGetInternalAuditReportObject={handleGetInternalAuditReportObject}
        loading={loading}
      />
      {loading ? (
        <CircularProgress />
      ) : (
        Object.keys(internalAuditReportObject).length !== 0 &&
        internalAuditReportObject.constructor === Object && (
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
        )
      )}
    </div>
  );
};

export default GenerateInternalAuditReport;
