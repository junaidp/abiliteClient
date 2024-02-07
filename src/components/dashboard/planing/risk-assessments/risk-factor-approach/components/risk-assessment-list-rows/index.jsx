import React from "react";

const RiskAssessmentListRows = ({
  item,
  handleChangeSingleRiskAssessmentItem,
}) => {
  return (
    <tr>
      <td>{item?.id}</td>
      <td>
        <p>{item?.description || ""}</p>
      </td>
      <td className="w-80">
        <select
          className="form-select"
          aria-label="Default select example"
          name="likelihood"
          value={item?.likelihood}
          onChange={(event) =>
            handleChangeSingleRiskAssessmentItem(event, item?.id)
          }
        >
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
        </select>
      </td>
      <td className="w-80">
        <select
          className="form-select"
          aria-label="Default select example"
          name="impact"
          value={item?.impact}
          onChange={(event) =>
            handleChangeSingleRiskAssessmentItem(event, item?.id)
          }
        >
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
        </select>
      </td>
      <td className="bold width-50">
        {Number(item?.likelihood) + Number(item?.impact)}
      </td>
      <td>
        <textarea
          className="form-control"
          placeholder="Enter Reason"
          id="exampleFormControlTextarea1"
          rows="3"
          name="comments"
          value={item?.comments || ""}
          onChange={(event) =>
            handleChangeSingleRiskAssessmentItem(event, item?.id)
          }
        ></textarea>
        <label className="word-limit-info label-text">Maximum 1500 words</label>
      </td>
      <td className="text-center justify-content-center pt-3">
        <i className="fa fa-trash text-danger f-18"></i>
      </td>
    </tr>
  );
};

export default RiskAssessmentListRows;
