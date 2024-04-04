import React from "react";
import { useSelector } from "react-redux";

const CPListRows = ({
  cpItem,
  handleChangeCpList,
  handleChangeCpListComments,
  performRiskAssessmentObject,
}) => {
  const { user } = useSelector((state) => state?.auth);
  return (
    <tr>
      <td>{cpItem?.id}</td>
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
        ></textarea>
        <label className="word-limit-info label-text">Maximum 1500 words</label>
      </td>
    </tr>
  );
};

export default CPListRows;
