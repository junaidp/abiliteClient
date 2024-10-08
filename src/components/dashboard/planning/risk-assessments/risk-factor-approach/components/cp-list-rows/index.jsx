import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setupDeleteRiskFactor } from "../../../../../../../global-redux/reducers/planing/risk-assessment/slice";

const CPListRows = ({
  cpItem,
  handleChangeCpList,
  handleChangeCpListComments,
  performRiskAssessmentObject,
  index,
  data,
  riskAssessmentId,
}) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state?.auth);
  const { loading } = useSelector((state) => state?.planningRiskAssessment);
  return (
    <tr>
      <td>{index + 1}</td>
      <td className="w-400">{cpItem?.description || ""}</td>
      <td>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={cpItem?.inadequate}
            id="flexCheckDefault"
            name="inadequate"
            onChange={(event) => handleChangeCpList(event, cpItem?.id)}
            disabled={
              performRiskAssessmentObject?.riskAssessments?.locked === true ||
              (performRiskAssessmentObject?.riskAssessments?.complete ===
                true &&
                performRiskAssessmentObject?.riskAssessments?.locked ===
                  false &&
                user[0]?.userId?.employeeid?.userHierarchy !== "IAH")
                ? true
                : false
            }
          />
          <label
            className="form-check-label"
            htmlFor="flexCheckDefault"
          ></label>
        </div>
      </td>
      <td>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={cpItem?.needsImprovement}
            id="flexCheckDefault"
            onChange={(event) => handleChangeCpList(event, cpItem?.id)}
            name="needsImprovement"
            disabled={
              performRiskAssessmentObject?.riskAssessments?.locked === true ||
              (performRiskAssessmentObject?.riskAssessments?.complete ===
                true &&
                performRiskAssessmentObject?.riskAssessments?.locked ===
                  false &&
                user[0]?.userId?.employeeid?.userHierarchy !== "IAH")
                ? true
                : false
            }
          />
          <label
            className="form-check-label"
            htmlFor="flexCheckDefault"
          ></label>
        </div>
      </td>
      <td>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={cpItem?.adequate}
            id="flexCheckDefault"
            name="adequate"
            onChange={(event) => handleChangeCpList(event, cpItem?.id)}
            disabled={
              performRiskAssessmentObject?.riskAssessments?.locked === true ||
              (performRiskAssessmentObject?.riskAssessments?.complete ===
                true &&
                performRiskAssessmentObject?.riskAssessments?.locked ===
                  false &&
                user[0]?.userId?.employeeid?.userHierarchy !== "IAH")
                ? true
                : false
            }
          />
          <label
            className="form-check-label"
            htmlFor="flexCheckDefault"
          ></label>
        </div>
      </td>
      <td className="w-300">
        <textarea
          className="form-control"
          placeholder="Enter Reason"
          id="exampleFormCont"
          rows="3"
          value={cpItem?.comments || ""}
          onChange={(event) => handleChangeCpListComments(event, cpItem?.id)}
          name="comments"
          disabled={
            performRiskAssessmentObject?.riskAssessments?.locked === true ||
            (performRiskAssessmentObject?.riskAssessments?.complete === true &&
              performRiskAssessmentObject?.riskAssessments?.locked === false &&
              user[0]?.userId?.employeeid?.userHierarchy !== "IAH")
              ? true
              : false
          }
          maxLength="500"
        ></textarea>
        <p className="word-limit-info label-text mb-2">
          Maximum 500 characters
        </p>
      </td>
      {performRiskAssessmentObject?.riskAssessments?.complete === false &&
        data?.riskAsssessmentCriteriaForRiskManagementCPList &&
        data?.riskAsssessmentCriteriaForRiskManagementCPList?.length > 1 && (
          <td>
            <i
              className="fa fa-trash text-danger f-18 cursor-pointer"
              onClick={() => {
                !loading &&
                  dispatch(
                    setupDeleteRiskFactor({
                      riskAssessmentsId: Number(riskAssessmentId),
                      riskAsssessmentCriteriaForRiskManagementCPId: cpItem?.id,
                    })
                  );
              }}
            ></i>
          </td>
        )}
    </tr>
  );
};

export default CPListRows;
