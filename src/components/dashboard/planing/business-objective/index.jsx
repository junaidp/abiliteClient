import React, { useEffect } from "react";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import BusinessObjectiveModal from "../../../modals/add-engagement-audit-dialog/index";
import AddSingleEngagement from "../../../../components/modals/add-single-engagement-dialog";
import EditSingleEngagementDialog from "../../../modals/edit-single-engagement-dialog";
import {
  changeSelectedEngagementDialog,
} from "../../../../global-redux/reducers/planing/engagement/slice";
import { useNavigate } from "react-router-dom";
import Pagination from "@mui/material/Pagination";

const BusinessObjective = () => {
  const { allEngagements, loading } = useSelector(
    (state) => state.planingEngagements
  );
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const [businessObjectiveDialog, setBusinessObjectiveDialog] =
    React.useState(false);
  const navigate = useNavigate();
  const [showAddSingleEngagement, setShowAddSingleEngagement] =
    React.useState(false);
  const [editSingleEngagementDialog, setShowEditSingleEngagementDialog] =
    React.useState(false);
  let dispatch = useDispatch();

  function handleEditEngagement(item) {
    setShowEditSingleEngagementDialog(true);
    dispatch(changeSelectedEngagementDialog(item));
  }

  function handleClickEngagement(id, name) {
    if (name === "Business Objective") {
      navigate(`/audit/business-objectives-redirect?engagementId=${id}`);
      dispatch(changeCurrentEngagementId(id));
    }
    if (name === "Special Project/Audit") {
      navigate(`/audit/special-project-audit?engagementId=${id}`);
      dispatch(changeCurrentEngagementId(id));
    }
    if (name === "Compliance Checklist") {
      navigate(`/audit/compliance-checklist-card?engagementId=${id}`);
      dispatch(changeCurrentEngagementId(id));
    }
  }

  return (
    <div>
      {businessObjectiveDialog && (
        <div className="modal-objective">
          <div className="model-wrap">
            <BusinessObjectiveModal
              setBusinessObjectiveDialog={setBusinessObjectiveDialog}
            />
          </div>
        </div>
      )}
      {showAddSingleEngagement && (
        <div className="modal-objective">
          <div className="model-wrap">
            <AddSingleEngagement
              setShowAddSingleEngagement={setShowAddSingleEngagement}
            />
          </div>
        </div>
      )}
      {editSingleEngagementDialog && (
        <div className="modal-objective">
          <div className="model-wrap">
            <EditSingleEngagementDialog
              setShowEditSingleEngagementDialog={
                setShowEditSingleEngagementDialog
              }
            />
          </div>
        </div>
      )}

      <div>
        <section className="faq-section ">
          <div data-aos="fade-up">
            <header className="section-header my-3  text-start d-flex align-items-center justify-content-between">
              <div className="mb-0 heading">Business Objective</div>
              <div className="">
                <div
                  className="btn btn-labeled btn-primary px-3 shadow"
                  // onClick={() => handleClickEngagement(item?.id)}
                  onClick={() => setBusinessObjectiveDialog(true)}
                  // onClick={() => dispatch(setShowAddSingleEngagement(true))}
                >
                  <span className="btn-label me-2">
                    <i className="fa fa-plus-circle"></i>
                  </span>
                  Add Engagement
                </div>
                <i
                  className="fa fa-info-circle ps-3 text-secondary cursor-pointer"
                  title="Info"
                ></i>
              </div>
            </header>

            <div className="row">
              <div className="col-lg-12">
                <div className="table-responsive">
                  <table className="table table-bordered  table-hover rounded">
                    <thead className="bg-secondary text-white">
                      <tr>
                        <th className="w-80">Sr No.</th>
                        <th>Engagement Name</th>
                        <th>Nature Through</th>
                        <th>Initiated By</th>
                        {/* <th>Actions</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {loading ? (
                        <p className="p-2">Loading...</p>
                      ) : allEngagements?.length == 0 ? (
                        <p>No Engagement To Show</p>
                      ) : (
                        allEngagements
                          ?.slice((page - 1) * 5, page * 5)
                          .map((item, index) => {
                            return (
                              <tr key={index}>
                                <td>{index + 1}</td>
                                <td
                                  onClick={() =>
                                    handleClickEngagement(
                                      item?.id,
                                      item?.natureThrough
                                    )
                                  }
                                  className="cursor-pointer"
                                >
                                  {item?.engagementName}
                                </td>
                                <td
                                  onClick={() =>
                                    handleClickEngagement(
                                      item?.id,
                                      item?.natureThrough
                                    )
                                  }
                                  className="cursor-pointer"
                                >
                                  {" "}
                                  {item?.natureThrough}
                                </td>
                                <td
                                  onClick={() =>
                                    handleClickEngagement(
                                      item?.id,
                                      item?.natureThrough
                                    )
                                  }
                                  className="cursor-pointer"
                                >
                                  {item?.initiatedBy?.name}
                                </td>
                              </tr>
                            );
                          })
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <Pagination
              count={Math.ceil(allEngagements?.length / 5)}
              page={page}
              onChange={handleChange}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default BusinessObjective;
