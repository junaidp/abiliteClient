import React from "react";
import { toast } from "react-toastify";
import { setupReportingFeedBack } from "../../../../global-redux/reducers/reporting/slice";
import { useDispatch, useSelector } from "react-redux";

const FeedBackDialog = ({
  setFeedBackDialog,
  currentReportingAndFollowUpId,
}) => {
  const dispatch = useDispatch();
  const { loading, reportingAddSuccess } = useSelector(
    (state) => state?.reporting
  );
  const [description, setDescription] = React.useState("");

  function handleClose() {
    setFeedBackDialog(false);
    setDescription("");
  }

  function handleAdd() {
    if (!loading) {
      if (description === "") {
        toast.error("Provide description");
      } else {
        dispatch(
          setupReportingFeedBack({
            reportingId: Number(currentReportingAndFollowUpId),
            description: description,
          })
        );
      }
    }
  }

  React.useEffect(() => {
    if (reportingAddSuccess) {
      setDescription("");
      setFeedBackDialog(false);
    }
  }, [reportingAddSuccess]);
  return (
    <div className="px-4 py-4">
      <div className="row mb-2">
        <div className="col-lg-2 label-text">Description:</div>
        <div className="col-lg-8">
          <div className="form-group">
            <textarea
              type="text"
              id="fname"
              name="fname"
              placeholder="Add feed-back here"
              required="required"
              value={description}
              onChange={(event) => setDescription(event?.target?.value)}
              maxLength="2000"
              className={`form-control h-400  ${
                description?.length >= 2000 && "error-border"
              }`}
            ></textarea>
            <label className="word-limit-info label-text">
              Maximum 2000 characters
            </label>
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
