import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setupApproveAuditPlanSummary } from "../../../../../global-redux/reducers/planing/audit-plan-summary/slice";

const ApproveAuditPlanSummaryDialog = ({
  setShowApproveDialog,
  currentApproveItem,
}) => {
  const dispatch = useDispatch();
  const { loading, auditPlanSummaryAddSuccess } = useSelector(
    (state) => state?.planningAuditPlanSummary
  );

  function handleApproveAuditPlanSummary() {
    if (!loading) {
      dispatch(
        setupApproveAuditPlanSummary({
          ...currentApproveItem,
          approved: true,
          locked: true,
        })
      );
    }
  }

  React.useEffect(() => {
    if (auditPlanSummaryAddSuccess) {
      setShowApproveDialog(false);
    }
  }, [auditPlanSummaryAddSuccess]);
  return (
    <div className="px-4 py-4">
      <div>
        <p>Are You Sure You Want To Approve Audit Plan Summary?</p>
      </div>
      <div className="d-flex justify-content-between">
        <button
          type="submit"
          className={`btn btn-secondary float-start ${loading && "disabled"} `}
          onClick={handleApproveAuditPlanSummary}
        >
          {loading ? "Loading..." : "Approve"}
        </button>
        <button
          type="button"
          className="btn btn-danger float-end"
          onClick={() => setShowApproveDialog(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ApproveAuditPlanSummaryDialog;
