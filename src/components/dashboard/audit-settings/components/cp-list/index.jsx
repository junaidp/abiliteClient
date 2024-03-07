import { CircularProgress } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "@mui/material/Pagination";
import { toast } from "react-toastify";
import {
  setupAddCPList,
  setupUpdateCPList,
  setupGetAllCPList,
  resetCpListAddSuccess,
} from "../../../../../global-redux/reducers/settings/cp-list/slice";

const CPList = ({ userHierarchy, userRole }) => {
  const dispatch = useDispatch();
  const { loading, allCPList, cpListAddSuccess } = useSelector(
    (state) => state?.settingsCPList
  );
  const { company } = useSelector((state) => state?.common);
  const { user } = useSelector((state) => state?.auth);
  const [cpLists, setCPLists] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [description, setDescription] = React.useState("");
  const handleChange = (event, value) => {
    setPage(value);
  };

  function handleSave() {
    if (!loading) {
      if (description === "") {
        toast.error("Provide description");
      } else {
        let companyId = user[0]?.company.find(
          (all) => all?.companyName === company
        )?.id;
        if (companyId) {
          dispatch(
            setupAddCPList(`?companyId=${companyId}&description=${description}`)
          );
        }
      }
    }
  }

  function handleUpdate(id) {
    if (!loading) {
      const currentCpList = cpLists.find((all) => all?.id === id);
      dispatch(setupUpdateCPList(currentCpList));
    }
  }

  function handleChangeDescription(event, id) {
    setCPLists((pre) =>
      pre?.map((item) =>
        item?.id === id ? { ...item, description: event?.target?.value } : item
      )
    );
  }

  React.useEffect(() => {
    if (cpListAddSuccess) {
      let companyId = user[0]?.company.find(
        (all) => all?.companyName === company
      )?.id;
      setDescription("");
      dispatch(setupGetAllCPList(companyId));
      dispatch(resetCpListAddSuccess());
    }
  }, [cpListAddSuccess]);

  React.useEffect(() => {
    if (allCPList?.length !== 0) {
      setCPLists(allCPList);
    }
  }, [allCPList]);
  return (
    <div
      className="tab-pane fade"
      id="cp-list"
      role="tabpanel"
      aria-labelledby="cp-list-tab"
    >
      <div className="row">
        <div className="col-lg-12">
          <div className="sub-heading  fw-bold"> Residual Risk</div>
          <label className="fw-light">
            Define criteria for risk management and control process
          </label>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-lg-6">
          <label className="w-100">
            Add Criteria for Risk Management and Control Processes:
          </label>
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
            className={`btn btn-labeled btn-primary px-3 shadow ${
              loading && "disabled"
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

      <div className="row mt-3">
        <div className="col-lg-12">
          <div className="table-responsive">
            {loading ? (
              <CircularProgress />
            ) : cpLists?.length === 0 || cpLists[0]?.error === "Not Found" ? (
              <p>No CP List To Show</p>
            ) : (
              <table className="table table-bordered  table-hover rounded">
                <thead className="bg-secondary text-white">
                  <tr>
                    <th className="w-80">Sr No.</th>
                    <th>Criteria for Risk Management and Control Processes</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cpLists
                    ?.slice((page - 1) * 5, page * 5)
                    ?.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{item?.id}</td>
                          <td>
                            <textarea
                              className="form-control"
                              placeholder="Enter Reason"
                              id="exampleFormControlTextarea1"
                              rows="3"
                              value={item?.description || ""}
                              onChange={(event) =>
                                handleChangeDescription(event, item?.id)
                              }
                            ></textarea>
                          </td>
                          <td>
                            <div
                              className={`btn btn-labeled btn-primary px-3 shadow `}
                              onClick={() => handleUpdate(item?.id)}
                            >
                              <span className="btn-label me-2">
                                <i className="fa fa-check-circle"></i>
                              </span>
                              Save
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            )}
            <Pagination
              count={Math.ceil(allCPList?.length / 5)}
              page={page}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CPList;
