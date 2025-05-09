import { CircularProgress } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "@mui/material/Pagination";
import { toast } from "react-toastify";
import {
  setupCreateRiskFactor,
  setupUpdateRiskFactor,
  setupGetAllRiskFactors,
  resetRiskFactorAddSuccess,
} from "../../../../../global-redux/reducers/settings/risk-factor/slice";
import DeleteRiskFactorDialog from "./DeleteDialog";

const RiskFactor = ({ userHierarchy, userRole, currentSettingOption }) => {
  const dispatch = useDispatch();
  const { loading, allRiskFactors, riskFactorAddSuccess } = useSelector(
    (state) => state?.settingsRiskFactor
  );
  const [currentRiskFactorId, setCurrentRiskFactorId] = React.useState("");
  const [showDeleteRiskFactorDialog, setShowDeleteRiskFactorDialog] =
    React.useState(false);
  const { company } = useSelector((state) => state?.common);
  const { user } = useSelector((state) => state?.auth);
  const [riskFactorList, setRiskFactorList] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [description, setDescription] = React.useState("");
  const handleChange = (_, value) => {
    setPage(value);
  };

  function handleSave() {
    if (!loading) {
      if (description.trim() === "") {
        toast.error("Provide description");
      } else {
        let companyId = user[0]?.company.find(
          (all) => all?.companyName === company
        )?.id;
        if (companyId) {
          dispatch(
            setupCreateRiskFactor(
              `?description=${description}&Company_Id=${companyId}`
            )
          );
        }
      }
    }
  }

  function handleUpdate(id) {
    if (!loading) {
      const currentRiskFactor = riskFactorList.find((all) => all?.id === id);
      if (currentRiskFactor.description.trim() === "") {
        toast.error("Provide description")
        return
      }
      dispatch(setupUpdateRiskFactor(currentRiskFactor));
    }
  }

  function handleChangeDescription(event, id) {
    setRiskFactorList((pre) =>
      pre?.map((item) =>
        item?.id === id ? { ...item, description: event?.target?.value } : item
      )
    );
  }

  React.useEffect(() => {
    if (riskFactorAddSuccess) {
      let companyId = user[0]?.company.find(
        (all) => all?.companyName === company
      )?.id;
      setDescription("");
      dispatch(setupGetAllRiskFactors(`?company_id=${companyId}`));
      dispatch(resetRiskFactorAddSuccess());
      setPage(1);
    }
  }, [riskFactorAddSuccess]);

  React.useEffect(() => {
    if (allRiskFactors?.length !== 0) {
      setRiskFactorList(allRiskFactors);
    }
  }, [allRiskFactors]);

  React.useEffect(() => {
    if (currentSettingOption) {
      setPage(1);
      setCurrentRiskFactorId("");
      setDescription("");
    }
  }, [currentSettingOption]);
  return (
    <div
      className="tab-pane fade"
      id="nav-risk-factor"
      role="tabpanel"
      aria-labelledby="nav-risk-factor-tab"
    >
      {showDeleteRiskFactorDialog && (
        <div className="model-parent d-flex items-center">
          <div className="model-wrap">
            <DeleteRiskFactorDialog
              setShowDeleteRiskFactorDialog={setShowDeleteRiskFactorDialog}
              currentRiskFactorId={currentRiskFactorId}
            />
          </div>
        </div>
      )}
      <div className="row">
        <div className="col-lg-12">
          <div className="sub-heading  fw-bold">Risk Factor</div>
          <label className="fw-light">
            Define list of Risk factors here for Risk Factor approach at
            Universe Level Risk Assessment
          </label>
        </div>
      </div>
      {(userRole === "ADMIN" || userHierarchy === "IAH") && (
        <div className="mt-3 d-flex flex-wrap gap-4">
          <div className="flex-1 w-100">
            <label className="w-100">Add Risk Factor:</label>
            <input
              className="form-control w-100"
              placeholder="Enter"
              type="text"
              value={description}
              onChange={(event) => setDescription(event?.target?.value)}
            />
          </div>
          <div className="col-lg-6 text-end float-end align-self-end">
            <div
              className={`btn btn-labeled btn-primary px-3 shadow ${loading && "disabled"
                }`}
              onClick={handleSave}
            >
              <span className="btn-label me-2">
                <i className="fa fa-plus"></i>
              </span>
              {loading ? "Loading..." : "Add"}
            </div>
          </div>
        </div>
      )}

      <div className="row mt-3">
        <div className="col-lg-12">
          <div className="table-responsive">
            {loading ? (
              <CircularProgress />
            ) : allRiskFactors?.length === 0 ? (
              <p>No Risk Factors To Show.</p>
            ) : (
              <table className="table table-bordered  table-hover rounded">
                <thead className="bg-secondary text-white">
                  <tr>
                    <th className="w-80">Sr No.</th>
                    <th>Risk Factor</th>
                    {(userRole === "ADMIN" || userHierarchy === "IAH") && (
                      <th>Action</th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {riskFactorList
                    ?.slice((page - 1) * 10, page * 10)
                    ?.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{(page - 1) * 10 + index + 1}</td>
                          <td>
                            <textarea
                              placeholder="Enter Reason"
                              id="exampleFormControlTextarea1"
                              rows="3"
                              value={item?.description || ""}
                              onChange={(event) =>
                                handleChangeDescription(event, item?.id)
                              }
                              maxLength="500"
                              className={`form-control ${item?.description?.length >= 500 &&
                                "error-border"
                                }`}
                            ></textarea>
                            <label className="word-limit-info label-text">
                              Maximum 500 characters
                            </label>
                          </td>
                          {(userRole === "ADMIN" ||
                            userHierarchy === "IAH") && (
                              <td>
                                <div className="d-flex flex-wrap gap-4">
                                  <div
                                    className={`btn btn-labeled btn-primary shadow `}
                                    onClick={() => handleUpdate(item?.id)}
                                  >
                                    <span className="btn-label me-2">
                                      <i className="fa fa-check-circle"></i>
                                    </span>
                                    Save
                                  </div>

                                  <div
                                    className={`btn btn-labeled btn-danger shadow `}
                                    onClick={() => {
                                      setCurrentRiskFactorId(item?.id);
                                      setShowDeleteRiskFactorDialog(true);
                                    }}
                                  >
                                    <span className="btn-label me-2">
                                      <i className="fa fa-check-circle f-18"></i>
                                    </span>
                                    Delete
                                  </div>
                                </div>
                              </td>
                            )}
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            )}
            {allRiskFactors && allRiskFactors?.length > 0 && (
              <Pagination
                count={Math.ceil(allRiskFactors?.length / 10)}
                page={page}
                onChange={handleChange}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskFactor;
