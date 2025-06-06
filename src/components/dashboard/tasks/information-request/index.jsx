import React from "react";
import AddInformationRequestDialog from "./components/add-information-request";
import UpdateInformationRequestDialog from "./components/update-information-request";
import ViewInformationRequestDialog from "./components/view-information-request";
import { useSelector, useDispatch } from "react-redux";
import {
  setupGetAllUsers,
  setupGetAllAuditEngagement,
  resetTaskAddSuccess,
  setupGetAllTasks,
  resetFileUploadSuccess,
} from "../../../../global-redux/reducers/tasks-management/slice";
import { CircularProgress } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import moment from "moment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const InformationRequest = () => {
  const dispatch = useDispatch();
  const {
    taskAddSuccess,
    allTasks,
    initialLoading,
    totalNoOfRecords,
    fileUploadSuccess,
    loading
  } = useSelector((state) => state?.tasksManagement);
  const { company } = useSelector((state) => state?.common);
  const { user } = useSelector((state) => state?.auth);
  const [showAddInformationRequestDialog, setShowAddInformationRequestDialog] =
    React.useState(false);
  const [
    showUpdateInformationRequestDialog,
    setShowUpdateInformationRequestDialog,
  ] = React.useState(false);
  const [
    showViewInformationRequestDialog,
    setShowViewInformationRequestDialog,
  ] = React.useState(false);

  const [page, setPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(10);
  const [updateTaskId, setUpdateTaskId] = React.useState("");

  const handleChange = (_, value) => {
    setPage(value);
  };

  function handleChangeItemsPerPage(event) {
    const companyId = user[0]?.company?.find(
      (item) => item?.companyName === company
    )?.id;
    if (companyId) {
      setPage(1);
      setItemsPerPage(Number(event.target.value));
      dispatch(
        setupGetAllTasks({
          companyId,
          page: 1,
          itemsPerPage: Number(event.target.value),
          isTask: false,
        })
      );
    }
  }

  React.useEffect(() => {
    const companyId = user[0]?.company?.find(
      (item) => item?.companyName === company
    )?.id;
    if (companyId && taskAddSuccess === true) {
      setPage(1);
      setItemsPerPage(10);
      dispatch(
        setupGetAllTasks({
          companyId,
          page: 1,
          itemsPerPage: 10,
          isTask: false,
        })
      );
      dispatch(resetTaskAddSuccess());
    }
  }, [taskAddSuccess]);

  React.useEffect(() => {
    const companyId = user[0]?.company?.find(
      (item) => item?.companyName === company
    )?.id;
    if (companyId) {
      dispatch(
        setupGetAllTasks({
          companyId,
          page,
          itemsPerPage,
          isTask: false,
        })
      );
    }
  }, [dispatch, page]);

  React.useEffect(() => {
    const companyId = user[0]?.company?.find(
      (item) => item?.companyName === company
    )?.id;
    if (companyId && fileUploadSuccess === true) {
      dispatch(
        setupGetAllTasks({
          companyId,
          page,
          itemsPerPage,
          isTask: false,
        })
      );
      dispatch(resetFileUploadSuccess());
    }
  }, [fileUploadSuccess]);

  React.useEffect(() => {
    const companyId = user[0]?.company?.find(
      (item) => item?.companyName === company
    )?.id;
    if (companyId) {
      setTimeout(() => {
        dispatch(
          setupGetAllAuditEngagement({
            companyId,
          })
        );
        setTimeout(() => {
          dispatch(setupGetAllUsers());
        }, 800);
      }, 1200);
    }
  }, [dispatch]);

  return (
    <div>
      {showAddInformationRequestDialog && (
        <div className="model-parent">
          <div className="model-wrap ">
            <AddInformationRequestDialog
              setShowAddInformationRequestDialog={
                setShowAddInformationRequestDialog
              }
            />
          </div>
        </div>
      )}
      {showUpdateInformationRequestDialog && (
        <div className="model-parent">
          <div className="model-wrap ">
            <UpdateInformationRequestDialog
              setShowUpdateInformationRequestDialog={
                setShowUpdateInformationRequestDialog
              }
              updateTaskId={updateTaskId}
            />
          </div>
        </div>
      )}
      {showViewInformationRequestDialog && (
        <div className="model-parent">
          <div className="model-wrap ">
            <ViewInformationRequestDialog
              setShowViewInformationRequestDialog={
                setShowViewInformationRequestDialog
              }
              updateTaskId={updateTaskId}
            />
          </div>
        </div>
      )}
      <header className="section-header my-3  text-start d-flex align-items-center justify-content-between">
        <div className="mb-0 heading">Information Request</div>
        <div className="">
          <div
            className={`${loading || initialLoading && "disabled"} btn btn-labeled btn-primary px-3 shadow`}
            onClick={() =>
              !initialLoading && !loading && setShowAddInformationRequestDialog(true)
            }
          >
            <span className="btn-label me-2">
              <i className="fa fa-plus-circle"></i>
            </span>
            {initialLoading || loading ? "Loading..." : "Add Information Request"}
          </div>
        </div>
      </header>
      <div className="row">
        <div className="col-lg-12">
          <div className="table-responsive">
            <table className="table table-bordered table-hover rounded equal-columns">
              <thead>
                <tr>
                  <th className="sr-col">Sr. #</th>
                  <th>Requirement</th>
                  <th>Due Date</th>
                  <th>Job Name</th>
                  <th>Assignee</th>
                  <th>Assigned by</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {initialLoading ? (
                  <tr>
                    <td>
                      <CircularProgress />
                    </td>
                  </tr>
                ) : allTasks?.length === 0 ? (
                  <tr>
                    <td className="w-300">No Information Requests To Show.</td>
                  </tr>
                ) : (
                  allTasks?.map((task, index) => {
                    return (
                      <tr key={index}>
                        <td>{(page - 1) * itemsPerPage + index + 1}</td>
                        <td>{task?.detailedRequirement}</td>
                        <td>{moment.utc(task?.dueDate).format("DD-MM-YY")}</td>
                        <td>{task?.aeTitle || ""}</td>
                        <td>{task?.assignee?.name}</td>
                        <td>{task?.assignedBy?.name}</td>
                        <td className="d-flex flex-wrap gap-4">
                          <i
                            className="fa fa-edit text-secondary f-18 cursor-pointer"
                            onClick={() => {
                              setUpdateTaskId(task?.id);
                              setShowUpdateInformationRequestDialog(true);
                            }}
                          ></i>
                          <i
                            className="fa-eye fa f-18 cursor-pointer"
                            onClick={() => {
                              setUpdateTaskId(task?.id);
                              setShowViewInformationRequestDialog(true);
                            }}
                          ></i>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
          {allTasks?.length > 0 && (
            <div className="row">
              <div className="col-lg-6 mb-4">
                <Pagination
                  count={Math.ceil(totalNoOfRecords / itemsPerPage)}
                  page={page}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-6 mb-4 d-flex justify-content-end">
                <div>
                  <FormControl sx={{ minWidth: 200 }} size="small">
                    <InputLabel id="demo-select-small-label">
                      Items Per Page
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      label="Age"
                      value={itemsPerPage}
                      onChange={(event) => handleChangeItemsPerPage(event)}
                    >
                      <MenuItem value={10}>10</MenuItem>
                      <MenuItem value={20}>20</MenuItem>
                      <MenuItem value={30}>30</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InformationRequest;
