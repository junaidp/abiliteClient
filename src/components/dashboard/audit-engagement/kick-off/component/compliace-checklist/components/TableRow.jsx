import React from "react";

const TableRow = ({
  mainItem,
  setComplianceCheckListMainId,
  setShowComplianceCheckListDialog,
  checkStaus,
  downloadLoading,
  downloadFileId,
  user,
  loading,
  currentButtonId,
  handleSubmit,
  handleApprove,
  handleDownload,
  setCurrentButtonId,
  currentAuditEngagement,
}) => {
  return (
    <tr>
      <td>{mainItem?.id}</td>
      <td>
        <a
          className="fw-bold  text-primary  px-3 py-1 f-10"
          onClick={() => {
            if (mainItem?.approved !== true) {
              setComplianceCheckListMainId(mainItem?.id);
              setShowComplianceCheckListDialog(true);
            }
          }}
        >
          {mainItem?.subLocation?.locationid?.description ||
            "No Location Provided"}
        </a>
      </td>
      <td>
        <a
          className="fw-bold  text-primary  px-3 py-1 f-10"
          onClick={() => {
            if (mainItem?.approved !== true) {
              setComplianceCheckListMainId(mainItem?.id);
              setShowComplianceCheckListDialog(true);
            }
          }}
        >
          {mainItem?.subLocation?.description || "No Sub Location Provided"}
        </a>
      </td>
      <td>null</td>
      <td>null</td>
      <td>
        {checkStaus(mainItem) ? (
          <i className="fa fa-check-circle text-success f-18"></i>
        ) : (
          <i className="fa fa-check-circle text-danger  f-18"></i>
        )}
      </td>
      <td>
        <div className="mb-2">
          <button
            className={`btn btn-labeled btn-secondary px-3  shadow ${
              downloadLoading &&
              Number(mainItem?.id) === Number(downloadFileId) &&
              "disabled"
            }`}
            onClick={() => handleDownload(mainItem?.id)}
          >
            {downloadLoading && Number(mainItem?.id) === Number(downloadFileId)
              ? "Downloading..."
              : "Offline Download"}
          </button>
        </div>

        {mainItem?.approved === true && (
          <button
            className={`btn btn-labeled btn-primary px-3  shadow disabled`}
          >
            Approved
          </button>
        )}

        <div className="mb-2">
          {checkStaus(mainItem) && mainItem?.submitted === false && (
            <button
              className={`btn btn-labeled btn-primary px-3  shadow ${
                loading &&
                Number(mainItem?.id) === Number(currentButtonId) &&
                "disabled"
              }`}
              onClick={() => {
                setCurrentButtonId(mainItem?.id);
                handleSubmit(mainItem);
              }}
            >
              {loading && Number(mainItem?.id) === Number(currentButtonId)
                ? "Loading..."
                : "Submit"}
            </button>
          )}
        </div>
        <div className="mb-2">
          {checkStaus(mainItem) &&
            mainItem?.submitted === true &&
            mainItem?.approved === false &&
            (user[0]?.userId?.employeeid?.userHierarchy === "IAH" ||
              Number(user[0]?.userId?.id) ===
                Number(
                  currentAuditEngagement?.resourceAllocation
                    ?.backupHeadOfInternalAudit?.id
                ) ||
              Number(user[0]?.userId?.id) ===
                Number(
                  currentAuditEngagement?.resourceAllocation
                    ?.proposedJobApprover?.id
                )) && (
              <button
                className={`btn btn-labeled btn-primary px-3  shadow ${
                  loading &&
                  Number(mainItem?.id) === Number(currentButtonId) &&
                  "disabled"
                }`}
                onClick={() => {
                  setCurrentButtonId(mainItem?.id);
                  handleApprove(mainItem);
                }}
              >
                {loading && Number(mainItem?.id) === Number(currentButtonId)
                  ? "Loading..."
                  : "Approve"}
              </button>
            )}
        </div>
      </td>
    </tr>
  );
};

export default TableRow;