import React from "react";
import FollowUpItem from "./FollowUpItem";
import ReportFirstLayout from "./ReportFirstLayout";
import RichTextEditor from "./RichText";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  setupCreateExtraFields,
  resetInternalAuditReportExtraFieldsAddSuccess,
  setupUpdateExtraField,
} from "../../../../../../global-redux/reducers/reports/internal-audit-report/slice";
import { v4 as uuidv4 } from "uuid";
import KeyKindings from "./KeyFindings";
import ExtraFields from "./ExtraFields";
import { PDFViewer } from "@react-pdf/renderer";
import PDFGenerator from "./PDFGenerator";

const InternalAuditReportBody = ({
  reportObject,
  handleChangeReportObject,
  handleChangeExcutiveSummary,
  handleChangeAuditPurpose,
  handleChangeSummaryOfKeyFinding,
  handleSaveInternalAuditReport,
  addReportLoading,
  handleChangeExtraFields,
  handleChangeAnnexure,
}) => {
  const dispatch = useDispatch();
  const [extraFieldsArray, setExtraFieldsArray] = React.useState([]);
  const { createExtraFieldsLoading, internalAuditReportExtraFieldsAddSuccess } =
    useSelector((state) => state?.internalAuditReports);
  const [viewPdf, setViewPdf] = React.useState(false);

  function handleUpdateExtraField(item) {
    if (!createExtraFieldsLoading) {
      dispatch(setupUpdateExtraField(item));
    }
  }

  function handleDeleteExtraField(id) {
    setExtraFieldsArray((pre) => pre?.filter((all) => all?.id !== id));
  }

  function handleAddExtraFieldInArray() {
    setExtraFieldsArray((pre) => [
      ...pre,
      { id: uuidv4(), data: "data", heading: "heading" },
    ]);
  }

  function handleAddExtraField() {
    if (extraFieldsArray?.length === 0) {
      toast.error("Provide both values");
    }
    if (extraFieldsArray?.length !== 0) {
      if (!createExtraFieldsLoading) {
        dispatch(
          setupCreateExtraFields({
            reportId: reportObject?.id,
            extraFieldsArray: extraFieldsArray,
          })
        );
      }
    }
  }

  function handleChangeExtraField(event, id) {
    setExtraFieldsArray((pre) =>
      pre?.map((all) =>
        all?.id === id
          ? { ...all, [event?.target?.name]: event?.target?.value }
          : all
      )
    );
  }

  React.useEffect(() => {
    if (internalAuditReportExtraFieldsAddSuccess === true) {
      setExtraFieldsArray([]);
      dispatch(resetInternalAuditReportExtraFieldsAddSuccess());
    }
  }, [internalAuditReportExtraFieldsAddSuccess]);
  return (
    <div>
      <ReportFirstLayout
        reportObject={reportObject}
        handleChangeReportObject={handleChangeReportObject}
      />
      {/* Editors Start */}
      <div className="border px-3 py-2  mt-3 rounded">
        <div className="row mb-3">
          <div className="col-lg-12">
            <label>Executive summary</label>
            <RichTextEditor
              initialValue={reportObject?.executiveSummary}
              handleChangeExcutiveSummary={handleChangeExcutiveSummary}
            />
            <label className="word-limit-info label-text">
              Maximum 5000 words
            </label>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-lg-12">
            <label>Audit Purpose</label>
            <RichTextEditor
              initialValue={reportObject?.auditPurpose}
              handleChangeAuditPurpose={handleChangeAuditPurpose}
            />
            <label className="word-limit-info label-text">
              Maximum 5000 words
            </label>
          </div>
        </div>
      </div>
      {/* Editors Ends */}

      {/* Findings Start */}
      <KeyKindings
        reportObject={reportObject}
        handleChangeSummaryOfKeyFinding={handleChangeSummaryOfKeyFinding}
      />

      {/* Findings Ends */}
      {/* Reporting And Follow Up Starts */}
      <div className="row my-3">
        <div className="col-lg-12">
          <div className="sub-heading  fw-bold">Reporting & Follow Up</div>
        </div>
      </div>
      {reportObject?.reportingAndFollowUp?.reportingList?.map((item, index) => {
        return <FollowUpItem key={index} item={item} />;
      })}
      {/* Reporting And Follow Up Ends */}

      {/* Extra Fields Starts */}
      <ExtraFields
        reportObject={reportObject}
        handleChangeExtraFields={handleChangeExtraFields}
        createExtraFieldsLoading={createExtraFieldsLoading}
        handleUpdateExtraField={handleUpdateExtraField}
        handleAddExtraFieldInArray={handleAddExtraFieldInArray}
        extraFieldsArray={extraFieldsArray}
        handleDeleteExtraField={handleDeleteExtraField}
        handleChangeExtraField={handleChangeExtraField}
        handleAddExtraField={handleAddExtraField}
      />
      {/* Add Extra Fields */}

      {/* Extra Fields Ends */}
      <div className="row mb-3">
        <div className="col-lg-12">
          <label>Annexure</label>
          <RichTextEditor
            initialValue={reportObject?.annexure}
            handleChangeAnnexure={handleChangeAnnexure}
          />
          <label className="word-limit-info label-text">
            Maximum 5000 words
          </label>
        </div>
      </div>

      <div className="row my-3">
        <div className="col-lg-12 d-flex justify-content-between">
          <div
            className="btn btn-labeled btn-primary px-3 shadow fitContent"
            onClick={() => setViewPdf((pre) => !pre)}
          >
            {viewPdf ? "Remove Pdf View" : "View Pdf"}
          </div>
          <div
            className={`btn btn-labeled btn-primary px-3 shadow me-3 fitContent ${
              addReportLoading && "disabled"
            }`}
            onClick={handleSaveInternalAuditReport}
          >
            <span className="btn-label me-2">
              <i className="fa fa-check-circle f-18"></i>
            </span>
            {addReportLoading ? "Loading..." : "Save"}
          </div>
        </div>
      </div>
      {viewPdf && (
        <PDFViewer style={{ width: "100%", height: "500px" }}>
          <PDFGenerator reportObject={reportObject} />
        </PDFViewer>
      )}
    </div>
  );
};

export default InternalAuditReportBody;
