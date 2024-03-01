import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import MultiSelect from "./components/select/MultiSelect";
import {
  changeActiveLink,
  InitialLoadSidebarActiveLink,
} from "../../../../../global-redux/reducers/common/slice";
import { setupGetAllLocations } from "../../../../../global-redux/reducers/settings/location/slice";
import { setupGetAllUsers } from "../../../../../global-redux/reducers/settings/user-management/slice";
import {
  setupGetSingleJobScheduling,
  setupUpdateJobScheduling,
  resetJobSchedulingSuccess,
  handleCleanUp,
  setupGetInitialSingleJobScheduling,
} from "../../../../../global-redux/reducers/planing/job-scheduling/slice";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ResourcesRequired from "./components/resources-required";
import TimeAndDateAllocation from "./components/time-date-allocation";
import JobScheduleList from "./components/job-schedule-list";
import ResourceAllocation from "./components/resource-allocation";
import { CircularProgress } from "@mui/material";

const StartScheduling = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const jobSchedulingId = searchParams.get("jobScheduling");
  const {
    loading,
    jobSchedulingAddSuccess,
    singleJobSchedulingObject,
    initialLoading,
  } = useSelector((state) => state?.planingJobScheduling);
  const { allUsers } = useSelector((state) => state?.setttingsUserManagement);
  const { user } = useSelector((state) => state?.auth);
  const { company } = useSelector((state) => state?.common);
  const [initialLocationList, setInitialLocationList] = React.useState([]);
  const [initialSubLocationList, setInitialSubLocationList] = React.useState(
    []
  );
  const [initialUserList, setInitialUserList] = React.useState([]);
  const { allLocations } = useSelector((state) => state?.setttingsLocation);
  const [currentJobSchedulingObject, setCurrentJobScheduling] = React.useState(
    {}
  );
  const [allSubLocations, setAllSubLocations] = React.useState([]);

  function handleChangeNumberTextField(event, section) {
    if (section === "resourcesRequired") {
      setCurrentJobScheduling((pre) => {
        return {
          ...pre,
          numberOfResourcesRequired: {
            ...pre?.numberOfResourcesRequired,
            [event?.target?.name]: Number(event?.target?.value),
          },
        };
      });
    }
    if (section === "timeAllocation") {
      setCurrentJobScheduling((pre) => {
        return {
          ...pre,
          timeAndDateAllocation: {
            ...pre?.timeAndDateAllocation,
            [event?.target?.name]: Number(event?.target?.value),
          },
        };
      });
    }
  }

  function handleChangeJobSchedulingStringTextFields(event) {
    setCurrentJobScheduling((pre) => {
      return {
        ...pre,
        timeAndDateAllocation: {
          ...pre?.timeAndDateAllocation,
          [event?.target?.name]: event?.target?.value,
        },
      };
    });
  }

  function handleChangeJobSchedulingCheckFields(event, section) {
    if (section === "repeatJob") {
      setCurrentJobScheduling((pre) => {
        return {
          ...pre,
          timeAndDateAllocation: {
            ...pre?.timeAndDateAllocation,
            [event?.target?.name]: event?.target?.checked,
          },
        };
      });
    }
    if (section === "seprateJob") {
      setCurrentJobScheduling((pre) => {
        return {
          ...pre,
          [event?.target?.name]: event?.target?.checked,
        };
      });
    }
  }

  function handleSave() {
    if (!loading) {
      const filteredLocationArray = allLocations.filter((item) =>
        currentJobSchedulingObject?.locationList.includes(item?.description)
      );
      const filteredSubLocationArray = allSubLocations.filter((item) =>
        currentJobSchedulingObject?.subLocation.includes(item?.description)
      );
      let object;
      object = {
        ...currentJobSchedulingObject,
        locationList: filteredLocationArray.map((list) => {
          return {
            id: list?.id,
            description: list?.description,
            companyid: list?.companyid,
          };
        }),
        subLocation: filteredSubLocationArray,
      };
      const hasNullValue = Object.values(object).includes(null);
      if (
        hasNullValue ||
        object?.timeAndDateAllocation?.placeOfWork === null ||
        object?.timeAndDateAllocation?.frequency === null ||
        object?.resourceAllocation?.resourcesList === null ||
        object?.resourceAllocation?.headOfInternalAudit === null ||
        object?.resourceAllocation?.backupHeadOfInternalAudit === null ||
        object?.resourceAllocation?.proposedJobApprover === null
      ) {
        object = {
          ...object,
          complete: false,
        };
      } else {
        object = {
          ...object,
          complete: true,
        };
      }
      dispatch(setupUpdateJobScheduling(object));
    }
  }

  React.useEffect(() => {
    const isEmptyObject =
      Object.keys(singleJobSchedulingObject).length === 0 &&
      singleJobSchedulingObject.constructor === Object;
    if (!isEmptyObject) {
      setCurrentJobScheduling(singleJobSchedulingObject);
      if (singleJobSchedulingObject?.locationList !== null) {
        setInitialLocationList(
          singleJobSchedulingObject?.locationList?.map(
            (all) => all?.description
          )
        );
      }
      if (singleJobSchedulingObject?.subLocation !== null) {
        setInitialSubLocationList(
          singleJobSchedulingObject?.subLocation?.map((all) => all?.description)
        );
      }
      if (
        singleJobSchedulingObject?.resourceAllocation !== null &&
        singleJobSchedulingObject?.resourceAllocation?.resourcesList !== null
      ) {
        setInitialUserList(
          singleJobSchedulingObject?.resourceAllocation?.resourcesList?.map(
            (all) => all?.name
          )
        );
      }
    }
  }, [singleJobSchedulingObject]);

  React.useEffect(() => {
    const locationArray = allLocations.filter((item) =>
      currentJobSchedulingObject?.locationList?.includes(item?.description)
    );
    let allSubLocations = locationArray.reduce((acc, item) => {
      return acc.concat(item.subLocations);
    }, []);
    setAllSubLocations(allSubLocations);
  }, [currentJobSchedulingObject?.locationList]);

  React.useEffect(() => {
    if (jobSchedulingAddSuccess) {
      dispatch(setupGetSingleJobScheduling(jobSchedulingId));
      dispatch(resetJobSchedulingSuccess());
    }
  }, [jobSchedulingAddSuccess]);

  React.useEffect(() => {
    if (user[0]?.token && jobSchedulingId) {
      dispatch(setupGetInitialSingleJobScheduling(jobSchedulingId));
      dispatch(setupGetAllLocations());
      dispatch(setupGetAllUsers({ shareWith: true }));
    }
  }, [user, jobSchedulingId, company]);

  React.useEffect(() => {
    if (!jobSchedulingId) {
      navigate("/audit/job-scheduling");
    }
  }, [jobSchedulingId]);

  React.useEffect(() => {
    dispatch(changeActiveLink("li-job-scheduling"));
    dispatch(InitialLoadSidebarActiveLink("li-audit"));
    return () => {
      dispatch(handleCleanUp());
    };
  }, []);

  return (
    <div>
      {initialLoading ? (
        <div className="my-3">
          <CircularProgress />
        </div>
      ) : singleJobSchedulingObject[0]?.error === "Not Found" ? (
        "Job Scheduling Not Found"
      ) : (
        <form>
          <header className="section-header my-3  text-start d-flex align-items-center justify-content-between">
            <div className="mb-0 heading">
              <i
                onClick={() => navigate("/audit/job-scheduling")}
                className="fa fa-arrow-left text-primary fs-5 pe-3 cursor-pointer"
              ></i>
              <span className="me-3">
                {currentJobSchedulingObject?.jobPrioritization?.unit?.reason}
              </span>
            </div>
          </header>

          <div className="row mb-3">
            <div className="col-lg-5">
              <MultiSelect
                names={allLocations?.map((all) => all?.description)}
                title="Location"
                initialPersonalArray={initialLocationList}
                name="locationList"
                setCurrentJobScheduling={setCurrentJobScheduling}
              />
            </div>
            <div className="col-lg-5">
              <MultiSelect
                title="SubLocation"
                names={allSubLocations?.map((all) => all?.description)}
                initialPersonalArray={initialSubLocationList}
                name="subLocation"
                setCurrentJobScheduling={setCurrentJobScheduling}
              />
            </div>
            <div className="col-lg-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  name="separateJob"
                  checked={currentJobSchedulingObject?.separateJob}
                  onChange={(event) =>
                    handleChangeJobSchedulingCheckFields(event, "seprateJob")
                  }
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Seprate job
                </label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="accordion" id="accordionFlushExample">
                <ResourcesRequired
                  currentJobSchedulingObject={currentJobSchedulingObject}
                  handleChangeNumberTextField={handleChangeNumberTextField}
                />
                <TimeAndDateAllocation
                  currentJobSchedulingObject={currentJobSchedulingObject}
                  handleChangeJobSchedulingCheckFields={
                    handleChangeJobSchedulingCheckFields
                  }
                  handleChangeJobSchedulingStringTextFields={
                    handleChangeJobSchedulingStringTextFields
                  }
                  handleChangeNumberTextField={handleChangeNumberTextField}
                />

                <JobScheduleList
                  currentJobSchedulingObject={currentJobSchedulingObject}
                />

                <ResourceAllocation
                  currentJobSchedulingObject={currentJobSchedulingObject}
                  allUsers={allUsers}
                  setCurrentJobScheduling={setCurrentJobScheduling}
                  initialUserList={initialUserList}
                />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-lg-12 justify-content-end text-end">
              <div
                className={`btn btn-labeled btn-primary px-3 shadow ${
                  loading && "disabled"
                }`}
                onClick={handleSave}
              >
                <span className="btn-label me-2">
                  <i className="fa fa-check-circle"></i>
                </span>
                {loading ? "Loading..." : "Save"}
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default StartScheduling;
