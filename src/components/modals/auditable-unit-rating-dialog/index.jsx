import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  setupAddAuditableUnit,
  setupGetRiskAssessment,
} from "../../../global-redux/reducers/planing/auditable-units/slice";
import {
  setupGetAllProcess,
  setupGetAllSubProcess,
  resetAllValues,
} from "../../../global-redux/reducers/settings/process/slice";
import { CircularProgress } from "@mui/material";
import RiskAssessment from "./risk-assessment";

const AuditableUnitRatingDialog = ({
  setAuditableUnitRatingDialog,
  selectedAuditableUnitId,
}) => {
  const dispatch = useDispatch();
  const {
    loading,
    auditableUnitAddSuccess,
    allAuditableUnits,
    riskAssessments,
  } = useSelector((state) => state?.planningAuditableUnit);

  const {
    allProcess,
    allSubProcess,
    loading: processLoading,
  } = useSelector((state) => state?.settingsProcess);
  const { company } = useSelector((state) => state?.common);
  const { user } = useSelector((state) => state?.auth);
  const [processId, setProcessId] = React.useState("");
  const [subProcessId, setSubProcessId] = React.useState("");
  const [process, setProcess] = React.useState("");
  const [subProcess, setSubProcess] = React.useState("");
  const [auditableUnitName, setAuditableUnitName] = React.useState("");
  const [data, setData] = React.useState({
    reason: "",
    jobType: "",
  });
  const [risks, setRisks] = React.useState([]);

  function handleChange(event) {
    setData((pre) => {
      return {
        ...pre,
        [event?.target?.name]: event?.target?.value,
      };
    });
  }

  function handleSave() {
    if (
      data?.jobType === "" ||
      data?.reason === "" ||
      process === "" ||
      subProcess === "" ||
      processId === "" ||
      subProcessId === "" ||
      !risks ||
      !risks.length
    ) {
      toast.error(
        "Provide all required values and select a risk to create an audit job."
      );
    } else {
      if (!loading) {
        const selectedProcess = allProcess?.find(
          (all) => Number(all?.id) === Number(processId)
        );
        const selectedSubProcess = allSubProcess?.find(
          (all) => Number(all?.id) === Number(subProcessId)
        );
        dispatch(
          setupAddAuditableUnit({
            reason: data?.reason,
            jobType: data?.jobType,
            processid: selectedProcess,
            subProcessid: selectedSubProcess,
            auditableUnitid: selectedAuditableUnitId,
            riskAssesmentIds: risks,
          })
        );
      }
    }
  }

  function handleChangeProcess(event) {
    setProcess(event?.target?.value);
    const selectedProcess = allProcess?.find(
      (all) => all?.description === event?.target?.value
    );
    setProcessId(selectedProcess?.id);
    setSubProcess("");
    setSubProcessId("");
  }

  React.useEffect(() => {
    if (auditableUnitAddSuccess) {
      setData({
        jobType: "",
        reason: "",
      });
      setProcess("");
      setSubProcess("");
      setAuditableUnitRatingDialog(false);
      setProcessId("");
      setSubProcessId("");
      dispatch(resetAllValues());
    }
  }, [auditableUnitAddSuccess]);

  React.useEffect(() => {
    if (subProcess) {
      setSubProcessId(
        allSubProcess?.find((all) => all?.description === subProcess)?.id
      );
    }
  }, [subProcess]);

  React.useEffect(() => {
    if (processId) {
      dispatch(setupGetAllSubProcess(`?processId=${processId}`));
    }
  }, [processId]);

  React.useEffect(() => {
    const selectedItem = allAuditableUnits?.find(
      (all) => all?.id === selectedAuditableUnitId
    );
    setAuditableUnitName(selectedItem?.jobName);

    if (selectedItem?.natureThrough === "Compliance Checklist") {
      setData((pre) => {
        return {
          ...pre,
          jobType: "Compliance Checklist",
        };
      });
    }
    if (selectedItem?.natureThrough === "Special Project/Audit") {
      setData((pre) => {
        return {
          ...pre,
          jobType: "Special Audit",
        };
      });
    }
    const companyId = user[0]?.company?.find(
      (item) => item?.companyName === company
    )?.id;
    if (companyId) {
      dispatch(setupGetAllProcess(companyId));
      setTimeout(() => {
        dispatch(
          setupGetRiskAssessment({
            approach: "Risk Factor Approach",
            riskAssessmentsid: selectedItem?.riskAssessmentid,
          })
        );
      }, 900);
    }
  }, []);

  return (
    <div className="p-4">
      <div>
        <div className="row mb-4">
          <div className="col-lg-12">
            <div className="d-flex justify-content-between mb-4 w-100">
              <div className="heading">Business Objective</div>
              <button
                className="btn-close f-22"
                type="button"
                onClick={() => {
                  setAuditableUnitRatingDialog(false);
                  setData({ jobType: "", reason: "" });
                  setProcess("");
                  setSubProcess("");
                  setProcessId("");
                  setSubProcessId("");
                  dispatch(resetAllValues());
                }}
              ></button>
            </div>
            <div className="row mb-3">
              <div className="col-lg-9 sub-heading">{auditableUnitName}</div>
            </div>
            {processLoading ? (
              <CircularProgress />
            ) : allProcess?.length === 0 ? (
              "No Process Availble Right Now"
            ) : (
              <div>
                <div>
                  <div className="row my-3">
                    <div className="col-lg-12">
                      <label>Audit Job</label>
                      <textarea
                        placeholder="Enter Reason"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        name="reason"
                        value={data?.reason}
                        onChange={handleChange}
                        maxLength="500"
                        className={`form-control  ${
                          data?.reason?.length >= 500 && "error-border"
                        }`}
                      ></textarea>
                      <p className="word-limit-info label-text mb-2">
                        Maximum 500 characters
                      </p>
                    </div>
                  </div>
                  <div className="row mb-3">
                    {allAuditableUnits?.find(
                      (all) => all?.id === selectedAuditableUnitId
                    )?.natureThrough === "Compliance Checklist" && (
                      <div className="col-lg-12">
                        <label>Job Type</label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          name="jobType"
                          defaultValue={data?.jobType}
                        >
                          <option value="Compliance Checklist">
                            Compliance Checklist
                          </option>
                        </select>
                      </div>
                    )}
                    {allAuditableUnits?.find(
                      (all) => all?.id === selectedAuditableUnitId
                    )?.natureThrough === "Special Project/Audit" && (
                      <div className="col-lg-12">
                        <label>Job Type</label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          name="jobType"
                          defaultValue={data?.jobType}
                        >
                          <option value="Special Audit">Special Audit </option>
                        </select>
                      </div>
                    )}
                    {allAuditableUnits?.find(
                      (all) => all?.id === selectedAuditableUnitId
                    )?.natureThrough === "Business Objective" && (
                      <div className="col-lg-12">
                        <label>Job Type</label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          name="jobType"
                          value={data?.jobType}
                          onChange={handleChange}
                        >
                          <option value="">Select Option</option>
                          <option value="Review">Review</option>
                          <option value="Fraud & Investigation">
                            Fraud & Investigation
                          </option>
                          <option value="Assurance and Compiance">
                            Assurance and Compiance
                          </option>
                          <option value="Advisory and consulting">
                            Advisory and consulting
                          </option>
                        </select>
                      </div>
                    )}
                  </div>
                  <div className="row mb-3">
                    <div className="col-lg-6">
                      <label>Process</label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        value={process}
                        onChange={(event) => handleChangeProcess(event)}
                      >
                        <option value="">Select Process</option>
                        {allProcess?.map((item, index) => {
                          return (
                            <option value={item?.description} key={index}>
                              {item?.description}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <div className="col-lg-6">
                      <label>Sub-Process</label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        value={subProcess}
                        onChange={(event) => {
                          setSubProcess(event?.target?.value);
                        }}
                      >
                        <option value="">Select SubProcess</option>
                        {allSubProcess?.map((item, index) => {
                          return (
                            <option key={index} value={item?.description}>
                              {item?.description}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>
                <label className="mb-1">Select Risks</label>
                <RiskAssessment
                  riskAssessments={riskAssessments}
                  setRisks={setRisks}
                  risks={risks}
                />
              </div>
            )}
          </div>
        </div>
        <div className="pb-4">
          <button
            className={`btn btn-primary   float-end ${loading && "disabled"}`}
            onClick={handleSave}
          >
            {loading ? "Loading..." : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuditableUnitRatingDialog;
