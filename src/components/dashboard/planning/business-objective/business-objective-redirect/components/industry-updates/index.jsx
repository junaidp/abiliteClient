import React from "react";
import { useSelector } from "react-redux";

const CompanyUpdates = ({
  handleUpdateBusinessObjective,
  handleChange,
  object,
  planingEngagementSingleObject,
  loading,
}) => {
  const { user } = useSelector((state) => state?.auth);
  const { companyAndIndustryUpdates } = useSelector(
    (state) => state?.planningEngagement
  );
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseOne"
          aria-expanded="false"
          aria-controls="flush-collapseOne"
        >
          {companyAndIndustryUpdates?.industryUpdates && (
            <i className="fa fa-check-circle fs-3 text-success pe-3"></i>
          )}
          Industry Updates
        </button>
      </h2>
      <div
        id="flush-collapseOne"
        className="accordion-collapse collapse"
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body pb-55">
          <div className="container">
            <div className="d-flex justify-content-between">
              <label className="mb-2">Industry Update</label>
            </div>
            <textarea
              placeholder="Enter update"
              type="textarea"
              name="industryUpdates"
              value={object?.industryUpdates}
              onChange={handleChange}
              disabled={
                planingEngagementSingleObject?.locked === true ||
                (planingEngagementSingleObject?.complete === true &&
                  planingEngagementSingleObject?.locked === false &&
                  user[0]?.userId?.employeeid?.userHierarchy !== "IAH")
                  ? true
                  : false
              }
              className={`form-control w-100 min-height-100 ${
                object?.industryUpdates?.length >= 2000 && "error-border"
              }`}
              maxLength="2000"
            ></textarea>
            <p className="word-limit-info label-text">
              Maximum 2000 characters
            </p>
            {(planingEngagementSingleObject?.complete === false ||
              (planingEngagementSingleObject?.complete === true &&
                planingEngagementSingleObject?.locked === false &&
                user[0]?.userId?.employeeid?.userHierarchy === "IAH")) && (
              <button
                className={`btn btn-labeled btn-primary px-3 mb-2  shadow float-start ${
                  loading && "disabled"
                }`}
                onClick={handleUpdateBusinessObjective}
              >
                <span className="btn-label me-2">
                  <i className="fa fa-check-circle"></i>
                </span>
                {loading ? "loading..." : "Save"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyUpdates;
