import React from "react";
import "./index.css";
import {
  setupGetAllAuditPlanSummary,
  setupUpdateAuditPlanSummary,
  resetAuditPlanSummarySuccess,
  setupGetInitialAllAuditPlanSummary,
} from "../../../../global-redux/reducers/planing/audit-plan-summary/slice";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Table from "./component/Table";
import DeletePlanSummaryDialog from "./component/DeleteDialog";
import FeedBackDialog from "./component/FeedBackDialog";
import ViewFeedBackDialog from "./component/ViewFeedBack";
import ApproveAuditPlanSummaryDialog from "./component/ApproveDialog";

const AuditPlanSummary = () => {
  const {
    loading,
    allAuditPlanSummary,
    auditPlanSummaryAddSuccess,
    initialLoading,
  } = useSelector((state) => state?.planingAuditPlanSummary);
  const [feedBackDialog, setFeedBackDialog] = React.useState(false);
  const [viewFeedBackDialog, setViewFeedBackDialog] = React.useState(false);

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state?.auth);
  const [currentId, setCurrentId] = React.useState("");
  const { company, year } = useSelector((state) => state?.common);
  const [showApproveDialog, setShowApproveDialog] = React.useState(false);
  const [currentApproveItem, setCurrentApproveItem] = React.useState({});
  const [deletePlanSummaryDialog, setDeletePlanSummaryDialog] =
    React.useState(false);
  const [currentPlanSummaryId, setCurrentPlanSummaryId] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [data, setData] = React.useState([]);
  const [totals, setTotals] = React.useState({
    serviceProvider: 0,
    iaa: 0,
    total: 0,
    q1: 0,
    q2: 0,
    q3: 0,
    q4: 0,
  });

  const handleChange = (event, value) => {
    setPage(value);
  };

  function handleChangePriority(event, id) {
    setData((pre) =>
      pre?.map((item) =>
        Number(item?.id) === Number(id)
          ? { ...item, priority: event?.target?.value }
          : item
      )
    );
  }

  function handleChangeYear(event, id) {
    setData((pre) =>
      pre.map((item) =>
        Number(item?.id) === Number(id)
          ? {
              ...item,
              threeYearsAgo: false,
              twoYearsAgo: false,
              lastYear: false,
              [event?.target?.name]: event?.target?.checked,
            }
          : item
      )
    );
  }

  function handleEdit(item) {
    if (!loading) {
      setCurrentId(item?.id);
      dispatch(setupUpdateAuditPlanSummary(item));
    }
  }

  function handleSubmit(item) {
    if (!loading) {
      setCurrentId(item?.id);
      dispatch(
        setupUpdateAuditPlanSummary({
          ...item,
          submitted: true,
          completed: true,
        })
      );
    }
  }

  function handleApprove(item) {
    setCurrentApproveItem(item);
    setShowApproveDialog(true);
  }

  function handleEditEditable(item) {
    setData((pre) =>
      pre.map((singleItem) =>
        singleItem?.id === item?.id
          ? { ...singleItem, editable: true }
          : singleItem
      )
    );
  }

  React.useEffect(() => {
    if (allAuditPlanSummary?.length !== 0) {
      setData(
        allAuditPlanSummary?.map((item) => {
          return {
            ...item,
            editable: false,
          };
        })
      );
    }
  }, [allAuditPlanSummary]);

  React.useEffect(() => {
    if (allAuditPlanSummary?.length !== 0) {
      let dummyData = {
        serviceProvider: 0,
        iaa: 0,
        total: 0,
        q1: 0,
        q2: 0,
        q3: 0,
        q4: 0,
      };
      allAuditPlanSummary?.forEach((element) => {
        dummyData = {
          serviceProvider:
            Number(dummyData.serviceProvider) + Number(element.serviceProvider),
          iaa: Number(dummyData.iaa) + Number(element.iaa),
          total: Number(dummyData.total) + Number(element.total),
          q1: Number(dummyData.q1) + Number(element.q1),
          q2: Number(dummyData.q2) + Number(element.q2),
          q3: Number(dummyData.q3) + Number(element.q3),
          q4: Number(dummyData.q4) + Number(element.q4),
        };
      });
      setTotals(dummyData);
    }
  }, [allAuditPlanSummary]);

  React.useEffect(() => {
    if (auditPlanSummaryAddSuccess) {
      const companyId = user[0]?.company?.find(
        (item) => item?.companyName === company
      )?.id;
      if (companyId) {
        dispatch(
          setupGetAllAuditPlanSummary(`?companyId=${companyId}&year=${year}`)
        );
      }
      dispatch(resetAuditPlanSummarySuccess());
    }
  }, [auditPlanSummaryAddSuccess]);

  React.useEffect(() => {
    const companyId = user[0]?.company?.find(
      (item) => item?.companyName === company
    )?.id;
    if (companyId) {
      dispatch(
        setupGetInitialAllAuditPlanSummary(
          `?companyId=${companyId}&year=${Number(year)}`
        )
      );
    }
  }, [user, year, company]);

  return (
    <div>
      {initialLoading ? (
        <div className="my-3">
          <CircularProgress />
        </div>
      ) : (
        <div>
          {deletePlanSummaryDialog && (
            <div className="modal-objective">
              <div className="model-wrap">
                <DeletePlanSummaryDialog
                  setDeletePlanSummaryDialog={setDeletePlanSummaryDialog}
                  currentPlanSummaryId={currentPlanSummaryId}
                />
              </div>
            </div>
          )}
          {feedBackDialog && (
            <div className="modal-objective">
              <div className="model-wrap">
                <FeedBackDialog
                  setFeedBackDialog={setFeedBackDialog}
                  currentPlanSummaryId={currentPlanSummaryId}
                />
              </div>
            </div>
          )}
          {viewFeedBackDialog && (
            <div className="modal-objective">
              <div className="model-wrap">
                <ViewFeedBackDialog
                  setViewFeedBackDialog={setViewFeedBackDialog}
                  currentPlanSummaryId={currentPlanSummaryId}
                />
              </div>
            </div>
          )}
          {showApproveDialog && (
            <div className="modal-objective">
              <div className="model-wrap">
                <ApproveAuditPlanSummaryDialog
                  setShowApproveDialog={setShowApproveDialog}
                  currentApproveItem={currentApproveItem}
                />
              </div>
            </div>
          )}
          <header className="section-header my-3  text-start d-flex align-items-center justify-content-between">
            <div className="mb-0 heading">Audit Plan Summary</div>
          </header>

          <div className="row">
            <div className="col-lg-12">
              <div className="table-responsive">
                {data?.length === 0 ? (
                  <p>No data to show!</p>
                ) : (
                  <table className="table table-bordered table-hover rounded equal-columns">
                    <thead>
                      <tr>
                        <th className="text-center" colSpan="4">
                          Current Risk Assessment
                        </th>
                        <th className="text-center" colSpan="3">
                          Year of Recent Reviews
                        </th>
                        <th className="text-center" colSpan="3">
                          Proposed Staff Hours Current Year
                        </th>
                        <th className="text-center" colSpan="4">
                          Proposed schedule current year
                        </th>
                        <th>Total Annual Effort</th>
                        <th>Actions</th>
                      </tr>
                    </thead>

                    <thead>
                      <tr className="bg-white">
                        <th className="bg-white">Rank</th>
                        <th className="bg-white">Auditable Unit</th>
                        <th className="bg-white ">Residual Risk Rating</th>
                        <th className="bg-white">Priority</th>
                        <th className="bg-white">Three Years Ago</th>
                        <th className="bg-white">Two Years Ago</th>
                        <th className="bg-white">Last Year</th>
                        <th className="bg-white">Service Provider</th>
                        <th className="bg-white">IAA</th>
                        <th className="bg-white">Total</th>
                        <th className="bg-white">Q1</th>
                        <th className="bg-white">Q2</th>
                        <th className="bg-white">Q3</th>
                        <th className="bg-white">Q4</th>
                        <th className="bg-white"></th>
                      </tr>
                    </thead>
                    {data
                      ?.slice((page - 1) * 10, page * 10)
                      ?.map((item, index) => {
                        return (
                          <Table
                            key={index}
                            index={index}
                            item={item}
                            handleChangePriority={handleChangePriority}
                            handleChangeYear={handleChangeYear}
                            handleEditEditable={handleEditEditable}
                            handleEdit={handleEdit}
                            handleSubmit={handleSubmit}
                            handleApprove={handleApprove}
                            allAuditPlanSummary={allAuditPlanSummary}
                            user={user}
                            currentId={currentId}
                            loading={loading}
                            setDeletePlanSummaryDialog={
                              setDeletePlanSummaryDialog
                            }
                            setCurrentPlanSummaryId={setCurrentPlanSummaryId}
                            setFeedBackDialog={setFeedBackDialog}
                            setViewFeedBackDialog={setViewFeedBackDialog}
                          />
                        );
                      })}
                    <tbody>
                      <tr>
                        <td colSpan="7"></td>
                        <td className="fw-bold">{totals?.serviceProvider}</td>
                        <td className="fw-bold">{totals?.iaa}</td>
                        <td className="fw-bold">{totals?.total}</td>
                        <td className="fw-bold">{totals?.q1}</td>
                        <td className="fw-bold">{totals?.q2}</td>
                        <td className="fw-bold">{totals?.q3}</td>
                        <td className="fw-bold">{totals?.q4}</td>
                        <td className="fw-bold">
                          {totals?.q1 + totals?.q2 + totals?.q3 + totals?.q4}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                )}
                <div className="mb-4">
                  <Pagination
                    count={Math.ceil(allAuditPlanSummary?.length / 10)}
                    page={page}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuditPlanSummary;
