import React from "react";
import moment from "moment";
import Chip from "@mui/material/Chip";
const JobName = ({ currentAuditEngagement }) => {
  return (
    <div className="accordion-item">
      <div className="accordion-body">
        <div className="container">
          <div className="row mb-3 f-13">
            {currentAuditEngagement?.auditStepChecklistList === null ||
              (currentAuditEngagement?.auditStepChecklistList?.length === 0 && (
                <div className="col-lg-6 px-3 d-flex justify-content-between">
                  <div className="fw-bold">Planned Start Date:</div>
                  <div className="">
                    {moment(currentAuditEngagement?.plannedStartDate).format(
                      "DD-MM-YYYY"
                    ) || "null"}
                  </div>
                </div>
              ))}
            {currentAuditEngagement?.jobType !== "Compliance Checklist" && (
              <div className="col-lg-6 px-3 d-flex justify-content-between">
                <div className="fw-bold">Process:</div>
                <div className="">
                  {currentAuditEngagement?.process?.description}
                </div>
              </div>
            )}
          </div>
          <div className="row mb-3 f-13">
            {currentAuditEngagement?.auditStepChecklistList === null ||
              (currentAuditEngagement?.auditStepChecklistList?.length === 0 && (
                <div className="col-lg-6 px-3 d-flex justify-content-between">
                  <div className="fw-bold">Planned End Date:</div>
                  <div className="">
                    {moment(currentAuditEngagement?.plannedEndDate).format(
                      "DD-MM-YYYY"
                    ) || "null"}
                  </div>
                </div>
              ))}
            {currentAuditEngagement?.jobType !== "Compliance Checklist" && (
              <div className="col-lg-6 px-3 d-flex justify-content-between">
                <div className="fw-bold">Sub Process:</div>
                <div className="">
                  {currentAuditEngagement?.subProcess?.description}
                </div>
              </div>
            )}
          </div>

          {currentAuditEngagement?.auditStepChecklistList === null ||
            (currentAuditEngagement?.auditStepChecklistList?.length === 0 && (
              <div className="row mb-3 f-13">
                <div className="col-lg-6 px-3 d-flex justify-content-between">
                  <div className="fw-bold">Job Type:</div>
                  <div className="">
                    {currentAuditEngagement?.jobType || "null"}
                  </div>
                </div>
              </div>
            ))}

          <div className="row mb-3 f-13">
            <div className="col-lg-12 px-3 d-flex justify-content-between">
              <div className="fw-bold">Location:</div>
              <div className="">
                {[
                  ...new Set(
                    currentAuditEngagement?.subLocationList?.map(
                      (item) => item?.locationid?.description
                    )
                  ),
                ]?.map((locationItem) => {
                  return <Chip label={locationItem} className="mx-2 mb-2" />;
                })}
                {currentAuditEngagement?.subLocation?.locationid?.description}
              </div>
            </div>
          </div>

          <div className="row mb-3 f-13">
            <div className="col-lg-12 px-3 d-flex justify-content-between">
              <div className="fw-bold mt-2">Sub-Location:</div>
              <div className="">
                {currentAuditEngagement?.subLocationList?.map((item) => {
                  return (
                    <Chip label={item?.description} className="mx-2 mb-2" />
                  );
                })}
              </div>
            </div>
          </div>

          {currentAuditEngagement?.jobType === "Compliance Checklist" && (
            <div className="row mb-3 f-13">
              <div className="col-lg-4 px-3 d-flex justify-content-between">
                <div className="fw-bold">Head Of Internal Audit:</div>
                <div className="">
                  {currentAuditEngagement?.resourceAllocation
                    ?.headOfInternalAudit?.name || "null"}
                </div>
              </div>
              <div className="col-lg-4 px-3 d-flex justify-content-between">
                <div className="fw-bold">Backup Head Of InternalAudit:</div>
                <div className="">
                  {currentAuditEngagement?.resourceAllocation
                    ?.backupHeadOfInternalAudit?.name ||
                    "No Backup Head Of InternalAudit Assigned "}
                </div>
              </div>
              <div className="col-lg-4 px-3 d-flex justify-content-between">
                <div className="fw-bold">Proposed Job Approver:</div>
                <div className="">
                  {currentAuditEngagement?.resourceAllocation
                    ?.proposedJobApprover?.name ||
                    "No Proposed Job Approver Assigned "}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobName;
