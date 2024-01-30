import React from "react";
import "./index.css";
import {
  setupGetAllJobPrioritization,
  setupUpdateJobPrioritization,
  resetJobPrioritizationSuccess,
} from "../../../../global-redux/reducers/planing/job-prioritization/slice";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress } from "@mui/material";
import Pagination from "@mui/material/Pagination";

const JobPrioritization = () => {
  const dispatch = useDispatch();
  const { loading, allJobPrioritization, jobPrioritizationAddSuccess } =
    useSelector((state) => state?.planingJobPrioritization);
  const [currentId, setCurrentId] = React.useState("");
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const handleChangePage = (event, value) => {
    setPage(value);
  };
  const { user } = useSelector((state) => state?.auth);
  const { company } = useSelector((state) => state?.common);

  function handleUpdate(id) {
    setCurrentId(id);
    let object = data?.find((item) => item?.id === id);
    // if (object?.selectedForAudit && object?.comments && object?.year) {
    //   object = { ...object, completed: true };
    // }
    // if (
    //   object?.selectedForAudit === null ||
    //   object?.comments === null ||
    //   object?.year === null
    // ) {
    //   object = { ...object, completed: false };
    // }

    if (!loading) {
      dispatch(setupUpdateJobPrioritization(object));
    }
  }

  function handleChangeValue(event, id) {
    setData((pre) =>
      pre?.map((item) =>
        item?.id === id
          ? { ...item, [event?.target?.name]: event?.target?.value }
          : item
      )
    );
  }
  function handleChangeCheckValue(event, id) {
    setData((pre) =>
      pre?.map((item) =>
        item?.id === id
          ? { ...item, [event?.target?.name]: event?.target?.checked }
          : item
      )
    );
  }

  React.useEffect(() => {
    const companyId = user[0]?.company?.find(
      (item) => item?.companyName === company
    )?.id;
    if (companyId) {
      dispatch(setupGetAllJobPrioritization(companyId));
    }
  }, [user]);

  React.useEffect(() => {
    if (jobPrioritizationAddSuccess) {
      const companyId = user[0]?.company?.find(
        (item) => item?.companyName === company
      )?.id;
      if (companyId) {
        dispatch(setupGetAllJobPrioritization(companyId));
      }
      dispatch(resetJobPrioritizationSuccess());
    }
  }, [jobPrioritizationAddSuccess]);

  React.useEffect(() => {
    setData(allJobPrioritization);
  }, [allJobPrioritization]);

  return (
    <div>
      <header className="section-header my-3 align-items-center justify-content-between text-start d-flex ">
        <div className="mb-0 heading">Job Prioritization</div>
        <div className="d-flex">
          <div className="d-flex me-3 align-items-center">
            <label className="me-2 label-text fw-bold">View:</label>
            <select className="form-select" aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="d-flex align-items-center">
            <label className="me-2 label-text fw-bold">Year:</label>
            <select className="form-select" aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
      </header>

      <div className="table-responsive overflow-x-hidden">
        {loading ? (
          <CircularProgress />
        ) : (
          <table className="table w-100 table-bordered table-hover rounded equal-columns">
            <thead>
              <tr>
                <th className="sr-col">Sr. #</th>
                <th>Auditable Unit:</th>
                <th>Business Objective</th>
                <th>Risk Rating</th>
                <th> for Audit</th>
                <th>Comments</th>
                <th>Year</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {allJobPrioritization?.length === 0 ? (
                <tr>
                  <td>No Job Prioritization to show</td>
                </tr>
              ) : (
                data?.slice((page - 1) * 5, page * 5)?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item?.id}</td>
                      <td className="w-200">{item?.auditableUnitTitle}</td>
                      <td className="w-200">{item?.businessObjectiveTitle}</td>
                      <td className="moderate">{item?.riskRating}</td>
                      <td className="w-120">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexCheckDefault"
                            checked={item?.selectedForAudit}
                            name="selectedForAudit"
                            onChange={(event) =>
                              handleChangeCheckValue(event, item?.id)
                            }
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <textarea
                          className="form-control"
                          placeholder="Enter Reason"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          value={item?.comments || ""}
                          onChange={(event) =>
                            handleChangeValue(event, item?.id)
                          }
                          name="comments"
                        ></textarea>
                        <label className="word-limit-info label-text">
                          Maximum 1500 words
                        </label>
                      </td>
                      <td className="width-100">
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          value={item?.year || new Date()}
                          onChange={(event) =>
                            handleChangeValue(event, item?.id)
                          }
                          name="year"
                        >
                          <option value={2023}>2023</option>
                          <option value={2024}>2024</option>
                          <option value={2025}>2025</option>
                          <option value={2026}>2026</option>
                        </select>
                      </td>
                      <td>
                        {" "}
                        <div
                          className={`btn btn-labeled btn-primary px-3 shadow ${
                            loading && currentId === item?.id && "disabled"
                          }`}
                          onClick={() => handleUpdate(item?.id)}
                        >
                          <span className="btn-label me-2">
                            <i className="fa fa-check-circle"></i>
                          </span>
                          {loading && currentId === item?.id
                            ? "Loading..."
                            : "Save"}
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        )}

        <Pagination
          count={Math.ceil(allJobPrioritization?.length / 5)}
          page={page}
          onChange={handleChangePage}
        />

        {/* <div className="row">
          <div className="col-2 d-flex align-items-center">
            <label className="me-2 label-text fw-bold">View Entries</label>
            <select
              className="form-select w-70"
              aria-label="Default select example"
            >
              <option>10</option>
              <option value="1">20</option>
              <option value="2">30</option>
              <option value="3">40</option>
            </select>
          </div>

          <div className="col-10 d-flex align-items-center justify-content-end">
            <a href="#" className="text-secondary">
              <i className="fa fa-print me-3 w-18"></i>
            </a>

            <nav aria-label="Page navigation example">
              <ul className="pagination mb-0 justify-content-center">
                <li className="page-item disabled">
                  <a className="page-link">Previous</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div> */}

        {/* <div className="row mt-3">
          <div className="col-lg-12 justify-content-end text-end">
            <div
              className={`btn btn-labeled btn-primary px-3 shadow ${
                loading && "disabled"
              }`}
              onClick={handleUpdate}
            >
              <span className="btn-label me-2">
                <i className="fa fa-check-circle"></i>
              </span>
              {loading ? "Loading..." : "Save"}
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default JobPrioritization;
