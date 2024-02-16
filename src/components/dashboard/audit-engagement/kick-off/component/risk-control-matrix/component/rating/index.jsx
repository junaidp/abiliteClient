import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setupUpdateRiskControlMatrixRating } from "../../../../../../../../global-redux/reducers/audit-engagement/slice";
import { toast } from "react-toastify";

const Rating = ({
  loading,
  setCurrentAuditEngagement,
  singleAuditEngagement,
}) => {
  const dispatch = useDispatch();
  const [currentButtonDescription, setCurrentButtonDescription] =
    React.useState("");
  const { auditEngagementAddSuccess } = useSelector(
    (state) => state?.auditEngagement
  );
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
      setCurrentButtonDescription(risk?.description);
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

  React.useEffect(() => {
    if (auditEngagementAddSuccess) {
      setCurrentButtonDescription("");
    }
  }, [auditEngagementAddSuccess]);
  return (
    <div>
      {singleAuditEngagement?.riskRatingList?.map((risk, index) => {
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
                    handleChangeRating(
                      event,
                      singleAuditEngagement?.id,
                      risk?.id
                    )
                  }
                >
                  <option value="">Select One</option>
                  <option value={1}>High</option>
                  <option value={2}>Medium</option>
                  <option value={3}>Low</option>
                </select>
              </div>
            </div>
           
            <textarea
              className="form-control"
              placeholder="Enter Reason"
              id="exampleFormControlTextarea222"
              value={risk?.description || ""}
              onChange={(event) =>
                handleChangeRating(event, singleAuditEngagement?.id, risk?.id)
              }
              name="description"
            ></textarea>
            <label className="word-limit-info label-text">
              Maximum 1500 words
            </label>
            <button
              className={`btn btn-labeled btn-primary px-3 mt-3 shadow ${
                loading &&
                risk?.description === currentButtonDescription &&
                "disabled"
              }`}
              onClick={() => handleSave(risk)}
            >
              {loading && risk?.description === currentButtonDescription
                ? "Loading..."
                : "Update"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Rating;
