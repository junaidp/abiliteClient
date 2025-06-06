import React from "react";
import ReportFirstLayout from "./ReportFirstLayout";
import RichTextEditor from "./RichText";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  setupCreateExtraFields,
  resetInternalAuditReportExtraFieldsAddSuccess,
  setupUpdateExtraField,
} from "../../../../../../global-redux/reducers/reports/consolidation-report/slice";
import { v4 as uuidv4 } from "uuid";
import KeyFindings from "./KeyFindings";
import ExtraFields from "./ExtraFields";
import FileUpload from "../components/FileUpload";
import ConsolidatedObservations from "../components/ConsolidatedObservataion";

const InternalAuditReportBody = ({
  reportObject,
  handleChangeReportObject,
  handleChangeExcutiveSummary,
  handleChangeAuditPurpose,
  handleSaveInternalAuditReport,
  addReportLoading,
  handleChangeExtraFields,
  handleChangeAnnexure,
  setDeleteFileId,
  consolidatedObservations,
}) => {
  const dispatch = useDispatch();
  const [extraFieldsArray, setExtraFieldsArray] = React.useState([]);
  const { createExtraFieldsLoading, internalAuditReportExtraFieldsAddSuccess } =
    useSelector((state) => state?.consolidationReport);

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
            consolidatedInternalAuditReportId: reportObject?.id,
            extraFieldsArray: extraFieldsArray.map((item) => {
              return {
                data: item?.data,
                heading: item?.heading,
              };
            }),
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
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-lg-12">
            <label>Audit Purpose</label>
            <RichTextEditor
              initialValue={reportObject?.auditPurpose}
              handleChangeAuditPurpose={handleChangeAuditPurpose}
            />
          </div>
        </div>
      </div>
      {/* Editors Ends */}

      {/* Findings Start */}
      <KeyFindings reportObject={reportObject} />

      {/* Findings Ends */}
      {consolidatedObservations && consolidatedObservations?.length !== 0 && (
        <ConsolidatedObservations
          consolidatedObservations={consolidatedObservations}
          reportObject={reportObject}
        />
      )}
      {/* Extra Field Starts */}
      <ExtraFields
        reportObject={reportObject}
        handleChangeExtraFields={handleChangeExtraFields}
        handleUpdateExtraField={handleUpdateExtraField}
        createExtraFieldsLoading={createExtraFieldsLoading}
        handleAddExtraFieldInArray={handleAddExtraFieldInArray}
        extraFieldsArray={extraFieldsArray}
        handleChangeExtraField={handleChangeExtraField}
        handleDeleteExtraField={handleDeleteExtraField}
        handleAddExtraField={handleAddExtraField}
      />
      {/* Extra Fields Ends */}
      <div className="row mb-3">
        <div className="col-lg-12">
          <label>Annexure</label>
          <RichTextEditor
            initialValue={reportObject?.annexure}
            handleChangeAnnexure={handleChangeAnnexure}
          />
        </div>
      </div>
      <div className="mt-4">
        <FileUpload item={reportObject} setDeleteFileId={setDeleteFileId} />
      </div>

      <div className="row my-3">
        <div className="col-lg-12 d-flex justify-content-between">
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
    </div>
  );
};

export default InternalAuditReportBody;
