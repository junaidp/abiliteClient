import React from "react";
import { toast } from "react-toastify";
import { setupReportFeedBack } from "../../../../../global-redux/reducers/reports/consolidation-report/slice";
import { useDispatch, useSelector } from "react-redux";
import RichText from "../../../../common/feed-back-rich-text/index";

const FeedBackDialog = ({ setFeedBackDialog, Id }) => {
  const dispatch = useDispatch();
  const { loading, internalAuditReportAddSuccess } = useSelector(
    (state) => state?.consolidationReports
  );
  const [description, setDescription] = React.useState("");

  function handleClose() {
    setFeedBackDialog(false);
    setDescription("");
  }

  function onContentChange(value) {
    setDescription(value);
  }

  function handleAdd() {
    if (!loading) {
      if (description === "") {
        toast.error("Provide description");
      } else {
        dispatch(
          setupReportFeedBack({
            consolidatedReportsId: Number(Id),
            description: description,
          })
        );
      }
    }
  }

  React.useEffect(() => {
    if (internalAuditReportAddSuccess) {
      setDescription("");
      setFeedBackDialog(false);
    }
  }, [internalAuditReportAddSuccess]);
  return (
    <div className="px-4 py-4">
      <div className="row mb-2">
        <div className="col-lg-2 label-text">Description:</div>
        <div className="col-lg-8">
          <div className="form-group">
            <RichText onContentChange={onContentChange} />
          </div>
        </div>
      </div>

      <div className="row py-3">
        <div className="col-lg-6 text-end">
          <button
            className={`btn btn-primary float-start ${loading && "disabled"}`}
            onClick={handleAdd}
          >
            {loading ? "Loading..." : "Add"}
          </button>
        </div>
        <div className="col-lg-6 text-end">
          <button className="btn btn-danger float-end" onClick={handleClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedBackDialog;
