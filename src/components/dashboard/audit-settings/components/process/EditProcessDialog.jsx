import React from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setupEditProcess } from "../../../../../global-redux/reducers/settings/process/slice";

const EditProcessDialog = ({ setEditProcessDialog, processId }) => {
  const [processName, setProcessName] = React.useState("");
  const { loading, processAddSuccess, allProcess } = useSelector(
    (state) => state?.settingsProcess
  );
  const dispatch = useDispatch();

  function handleSubmit() {
    if (processName === "") {
      toast.error("Provide name");
    }
    if (processName && !loading) {
      const ProcessItem = allProcess?.find((item) => item?.id === processId);
      dispatch(setupEditProcess({ ...ProcessItem, description: processName }));
    }
  }

  React.useEffect(() => {
    if (processAddSuccess) {
      setProcessName("");
      setEditProcessDialog(false);
    }
  }, [processAddSuccess]);
  React.useEffect(() => {
    const { description } = allProcess?.find((item) => item?.id === processId);
    setProcessName(description);
  }, []);

  
  return (
    <div className="p-4 min-h-170">
      <h4 className="mb-4 heading">Update Process</h4>
      <div className="row mb-4 flex items-center">
        <div className="col-lg-12">
          <div className="form-group">
            <input
              type="description"
              id="description"
              name="description"
              className="form-control"
              value={processName}
              onChange={(e) => setProcessName(e?.target?.value)}
            />
          </div>
        </div>
      </div>
      <div>
        <button
          className={`btn btn-primary float-start ${loading && "disabled"}`}
          onClick={handleSubmit}
        >
          {loading ? "Loading..." : "Edit"}
        </button>
      </div>
      <div>
        <button
          className="btn btn-danger float-end"
          onClick={() => {
            setEditProcessDialog(false);
            setProcessName("");
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default EditProcessDialog;
