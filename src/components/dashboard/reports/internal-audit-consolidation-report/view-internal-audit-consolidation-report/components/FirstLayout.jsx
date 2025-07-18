import React from "react";
import moment from "moment";
import Chip from "@mui/material/Chip";

const ReportFirstLayout = ({ singleInternalAuditReport }) => {
  return (
    <div>
      <div className="row  ">
        <div className="col-md-12">
          <div className="sub-heading ps-2  fw-bold">
            {singleInternalAuditReport?.jobName || "No name provided"}
          </div>
          <hr />
        </div>
      </div>
      <div className="border px-3 py-2 rounded">
        <div className="row mb-3">
          <div className="col-lg-6">
            <div>
              <label className="me-3">Report Name:</label>
              <input
                className="form-control w-100"
                name="reportName"
                value={singleInternalAuditReport?.reportName || ""}
                disabled
                readOnly
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div>
              <label className="me-3">Report Date:</label>
              <input
                className="form-control w-100"
                placeholder="Select Date"
                type="date"
                name="reportDate"
                value={moment
                  .utc(singleInternalAuditReport?.reportDate)
                  .format("YYYY-MM-DD")}
                disabled
                readOnly
              />
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-lg-6">
            <div>
              <label className="me-3">Planned Start Date:</label>
              <input
                className="form-control w-100"
                placeholder="Select Date"
                type="date"
                disabled
                value={moment
                  .utc(singleInternalAuditReport?.plannedStartDate)
                  .format("YYYY-MM-DD")}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div>
              <label className="me-3">Planned End Date:</label>
              <input
                className="form-control w-100"
                placeholder="Select Date"
                type="date"
                disabled
                value={moment
                  .utc(singleInternalAuditReport?.plannedEndDate)
                  .format("YYYY-MM-DD")}
              />
            </div>
          </div>
        </div>


        <div className="row mb-3">
          <div className="col-lg-6">
            <div>
              <label className="me-3   ">Risk Approach:</label>
              <input
                className="form-control w-100"
                placeholder="Enter Risk Approach"
                type="text"
                value={
                  singleInternalAuditReport?.riskApproach ||
                  "No Risk Approach Provided"
                }
                disabled
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div>
              <label className="me-3">Planned Hours:</label>
              <input
                className="form-control w-100"
                placeholder="Enter planned Hours"
                type="text"
                disabled
                value={singleInternalAuditReport?.plannedHours}
              />
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-lg-6">
            <div>
              <div className="row mb-3 f-13">
                <div className="col-lg-6 px-3 d-flex justify-content-between">
                  <label className="mt-2">Location:</label>
                  <div>
                    {!singleInternalAuditReport?.subLocationList ||
                      singleInternalAuditReport?.subLocationList?.length === 0 ? (
                      <p className="mt-2">No Location To Show</p>
                    ) : (
                      [
                        ...new Set(
                          singleInternalAuditReport?.subLocationList?.map(
                            (item) => item?.locationid?.description
                          )
                        ),
                      ]?.map((locationItem, index) => {
                        return (
                          <Chip label={locationItem} key={index} className="mx-2 mb-2" />
                        );
                      })
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 px-3 d-flex justify-content-between">
            <label className="mt-2">Sub-Location:</label>
            <div className="">
              {!singleInternalAuditReport?.subLocationList ||
                singleInternalAuditReport?.subLocationList?.length === 0 ? (
                <p className="mt-2">No Sub Location To Show</p>
              ) : (
                singleInternalAuditReport?.subLocationList?.map((item, index) => {
                  return (
                    <Chip label={item?.description} className="mx-2 mb-2" key={index} />
                  );
                })
              )}
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-6">
            <div>
              <div className="row mb-3 f-13">
                <div className="col-lg-6 px-3 d-flex justify-content-between">
                  <label className="mt-2">Department:</label>
                  <div>
                    {!singleInternalAuditReport?.subDepartmentDTOList ||
                      singleInternalAuditReport?.subDepartmentDTOList?.length === 0 ? (
                      <p className="mt-2">No Department To Show</p>
                    ) : (
                      [
                        ...new Set(
                          singleInternalAuditReport?.subDepartmentDTOList?.map(
                            (item) => item?.department?.description
                          )
                        ),
                      ]?.map((departmentItem, index) => {
                        return (
                          <Chip label={departmentItem} key={index} className="mx-2 mb-2" />
                        );
                      })
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 px-3 d-flex justify-content-between">
            <label className="mt-2">Sub-Department:</label>
            <div className="">
              {!singleInternalAuditReport?.subDepartmentDTOList ||
                singleInternalAuditReport?.subDepartmentDTOList?.length === 0 ? (
                <p className="mt-2">No Sub Department To Show</p>
              ) : (
                singleInternalAuditReport?.subDepartmentDTOList?.map((item, index) => {
                  return (
                    <Chip label={item?.description} className="mx-2 mb-2" key={index} />
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportFirstLayout;
