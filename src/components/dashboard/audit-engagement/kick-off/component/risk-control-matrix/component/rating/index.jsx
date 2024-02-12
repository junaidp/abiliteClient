import React from "react";
import { useDispatch } from "react-redux";
import { setupUpdateRiskControlMatrixRating } from "../../../../../../../../global-redux/reducers/audit-engagement/slice";
import { toast } from "react-toastify";

const Rating = ({
  setShowKickOffRatingDialog,
  currentAuditEngagement,
  loading,
  setCurrentAuditEngagement,
}) => {
  const dispatch = useDispatch();
  function handleChangeRating(event, objectiveId, riskId) {
    setCurrentAuditEngagement((pre) => {
      return {
        ...pre,
        riskControlMatrix: {
          ...pre?.riskControlMatrix,
          objectives: pre?.riskControlMatrix?.objectives?.map(
            (singleObjective) =>
              Number(singleObjective?.id) === Number(objectiveId)
                ? {
                    ...singleObjective,
                    riskRatingList: singleObjective?.riskRatingList?.map(
                      (singleRisk) =>
                        Number(singleRisk?.id) === Number(riskId)
                          ? {
                              ...singleRisk,
                              [event?.target?.name]: event?.target?.value,
                            }
                          : singleRisk
                    ),
                  }
                : singleObjective
          ),
        },
      };
    });
  }

  function handleSave(risk) {
    if (!loading) {
      if (risk?.description === "" || risk?.rating === "") {
        toast.error("Provide all values");
      } else {
        dispatch(
          setupUpdateRiskControlMatrixRating({
            id: risk?.id,
            rcmLibraryRiskRating_id: risk?.rcmLibraryRiskRating_id,
            description: risk?.description,
            rating: risk?.rating,
            controlRiskList: risk?.controlRiskList,
          })
        );
      }
    }
  }
  return (
    <div className="col-lg-4">
      <p className="px-3 py-1 bg-secondary d-flex align-items-center rounded justify-content-between text-white">
        <span>Risk</span>
        <a
          onClick={() => setShowKickOffRatingDialog(true)}
          className="text-white add-btn"
        >
          <span className="float-end f-10">
            <i className="fa fa-plus me-2"></i>Add Risk
          </span>
        </a>
      </p>

      {currentAuditEngagement?.riskControlMatrix?.objectives?.map((objective) =>
        objective?.riskRatingList?.map((risk, index) => {
          return (
            <div className="card p-3 mb-3 w-100 shadow-sm border" key={index}>
              <div className="d-flex mb-2 justify-content-between align-items-center">
                <span className="fw-bold">Risk Rating</span>
                <div className="d-flex align-items-center">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    value={risk?.rating}
                    name="rating"
                    onChange={(event) =>
                      handleChangeRating(event, objective?.id, risk?.id)
                    }
                  >
                    <option value="">Select One</option>
                    <option value={1}>High</option>
                    <option value={2}>Medium</option>
                    <option value={3}>Low</option>
                  </select>
                </div>
              </div>
              <div className="my-2">
                <p>
                  {`${objective?.description.slice(
                    0,
                    12
                  )} --> ${risk?.description.slice(0, 12)}`}
                </p>
              </div>
              <textarea
                className="form-control"
                placeholder="Enter Reason"
                id="exampleFormControlTextarea222"
                value={risk?.description || ""}
                onChange={(event) =>
                  handleChangeRating(event, objective?.id, risk?.id)
                }
                name="description"
              ></textarea>
              <label className="word-limit-info label-text">
                Maximum 1500 words
              </label>
              <button
                className={`btn btn-labeled btn-primary px-3 mt-3 shadow ${
                  loading && "disabled"
                }`}
                onClick={() => handleSave(risk)}
              >
                Update
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Rating;
