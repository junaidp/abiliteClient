import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import GeneratePlaningReportDialog from "../../../../modals/generate-planing-report-dialog";

const GeneratePlanningReport = () => {
  const [generatePlaningReportDialog, setGeneratePlaningReportDialog] =
    React.useState(false);
  const navigate = useNavigate();
  return (
    <div>
      {generatePlaningReportDialog && (
        <div className="audit-settings-modal">
          <div className="model-wrap">
            <GeneratePlaningReportDialog
              setGeneratePlaningReportDialog={setGeneratePlaningReportDialog}
            />
          </div>
        </div>
      )}
      <header className="section-header my-3">
        <div className="row align-items-center mb-4">
          <div className="col-lg-12 d-flex align-items-center">
            <i
              className="fa fa-arrow-left text-primary fs-5 pe-3 cursor-pointer"
              onClick={() => navigate("/audit/planning-report")}
            ></i>

            <div className="mb-0 heading">Internal Audit Planning Report</div>
          </div>
        </div>
      </header>

      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-8 d-flex">
              <div className="mb-3 d-flex me-3  align-items-end">
                <label className="form-label me-2">From</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Select Date"
                />
              </div>
              <div className="mb-3 d-flex me-3 align-items-end">
                <label className="form-label me-2">To</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Select Date"
                />
              </div>
            </div>

            <div className="col-lg-4 d-flex text-end justify-content-end">
              <div className="mb-3">
                <div
                  className="btn btn-labeled btn-primary px-3 shadow fitContent"
                  onClick={() => setGeneratePlaningReportDialog(true)}
                >
                  <span className="btn-label me-2">
                    <i className="fa fa-plus"></i>
                  </span>
                  Add Section
                </div>
              </div>
              <i
                className="fa fa-info-circle ps-3 text-secondary mt-2 cursor-pointer"
                title="Info"
              ></i>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-lg-12"></div>
      </div>
      <div className="row mb-3">
        <div className="col-lg-12">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Executive Summary
          </label>
          <textarea
            className="form-control"
            placeholder="Enter Here"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
          <p className="word-limit-info mb-0">Maximum 1500 words</p>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-lg-12">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Audit Planning Methodology
          </label>
          <textarea
            className="form-control"
            placeholder="Enter Here"
            id="exampleFormControl1"
            rows="3"
          ></textarea>
          <p className="word-limit-info mb-0">Maximum 1500 words</p>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-lg-12">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Risk assessment summary
          </label>
          <textarea
            className="form-control"
            placeholder="Enter Here"
            id="exampleFormControl2"
            rows="3"
          ></textarea>
          <p className="word-limit-info mb-0">Maximum 1500 words</p>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-lg-12">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Organizational strategy, key areas of focus, key risks, and
            associated assurance strategies in the audit plan.
          </label>
          <textarea
            className="form-control"
            placeholder="Enter Here"
            id="example                                                                                        "
            rows="3"
          ></textarea>
          <p className="word-limit-info mb-0">Maximum 1500 words</p>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-lg-12">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Summary of risks.
          </label>
          <textarea
            className="form-control"
            placeholder="Enter Here"
            id="exampleFormContr"
            rows="3"
          ></textarea>
          <p className="word-limit-info mb-0">Maximum 1500 words</p>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-lg-12">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Analyses (or summary) of inherent and/or residual risk levels of
            auditable units.{" "}
          </label>

          <table className="table table-bordered table-hover rounded">
            <thead>
              <tr>
                <th>Sr. #</th>
                <th className="w-220">Business Objective</th>
                <th>Inherent Level of Risk</th>
                <th>Control Effectiveness</th>
                <th>Residual Level of Risk</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry.
                </td>
                <td>Moderate</td>
                <td>Needs Improvement</td>
                <td>Moderate</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-lg-12">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Risk scores/ratings for auditable units.
          </label>

          <table className="table table-bordered table-hover rounded">
            <thead>
              <tr>
                <th className="sr-col" rowSpan="2">
                  Sr. #
                </th>
                <th colSpan="1">Business Objective</th>
                <th colSpan="2">Risk 1</th>
                <th colSpan="2">Risk 2</th>
                <th colSpan="2">Risk 3</th>
                <th colSpan="2">Risk 4</th>
                <th colSpan="2">Risk 5</th>
                <th colSpan="2">Risk 6</th>
                <th colSpan="2">Risk 7</th>
                <th rowSpan="2">Total Score</th>
                <th rowSpan="2">Level</th>
              </tr>
              <tr>
                <th>L = Likelihood, I = Impact</th>
                <th>L</th>

                <th>I</th>
                <th>L</th>
                <th>I</th>
                <th>L</th>
                <th>I</th>
                <th>L</th>
                <th>I</th>
                <th>L</th>
                <th>I</th>
                <th>L</th>
                <th>I</th>
                <th>L</th>
                <th>I</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td className="w-300">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry.
                </td>
                <td className="w-45">2</td>
                <td className="w-45">3</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="fw-bold width-50">40</td>
                <td className=" text-white width-50 text-center bg-lightYellow">
                  M
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td className="w-300">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry.
                </td>
                <td className="w-45">2</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="fw-bold width-50">30</td>
                <td className="bg-success  text-white width-50 text-center">
                  L
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td className="w-300">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry.
                </td>
                <td className="w-45">2</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="fw-bold width-50">50</td>
                <td className=" text-white bg-orange text-center width-50">
                  H
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td className="w-300">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry.
                </td>
                <td className="w-45">2</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="width-50">3</td>
                <td className="fw-bold width-50">60</td>
                <td className="bg-danger text-white bg-orange text-center width-50">
                  E
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-lg-12">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Risk Factor Approach with Total Risk Score
          </label>

          <table className="table table-bordered table-hover rounded">
            <thead>
              <tr>
                <th className="bg-transparent"></th>
                <th className="bg-transparent"></th>
                <th className="bg-secondary text-white" colSpan="3">
                  Impact-Related Risk Factors
                </th>
                <th className="bg-secondary text-white" colSpan="5">
                  Impact-Related Risk Factors
                </th>
                <th className="bg-transparent"></th>
              </tr>
              <tr>
                <th>Sr. #</th>
                <th>Business Objective</th>
                <th>Loss/Material Exposure</th>
                <th>Strategic Risk</th>
                <th>Sub Total</th>
                <th>Control Environment</th>
                <th>Complexity</th>
                <th>Assurance Coverage</th>
                <th>Management Assurance</th>
                <th>Sub Total</th>
                <th>Total Risk Score</th>
              </tr>

              <tr>
                <th className="bg-transparent" colSpan="2">
                  {" "}
                  Weight
                </th>
                <th className="bg-transparent">2</th>
                <th className="bg-transparent">4</th>

                <th className="bg-transparent"></th>
                <th className="bg-transparent">5</th>
                <th className="bg-transparent">6</th>
                <th className="bg-transparent">8</th>
                <th className="bg-transparent">9</th>
                <th className="bg-transparent"></th>
                <th className="bg-transparent"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry.
                </td>
                <td>5</td>
                <td>5</td>
                <td>
                  <div className="fw-bold">4</div>
                </td>
                <td>8</td>
                <td>6</td>
                <td>4</td>
                <td>3</td>
                <td className="fw-bold">3.45</td>
                <td className="fw-bold">6.45</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-lg-12">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Add Heading
          </label>
          <textarea
            className="form-control"
            placeholder="Enter Here"
            id="exampleFormControlTextarea2"
            rows="3"
          ></textarea>
          <p className="word-limit-info mb-0">Maximum 1500 words</p>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-lg-12">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label me-3 mb-3"
          >
            Annexure
          </label>

          <input type="file" id="file-upload" name="file-upload" />

          <div className="table-responsive">
            <table className="table table-bordered  table-hover rounded">
              <thead className="bg-secondary text-white">
                <tr>
                  <th className="sr-col">Sr No.</th>
                  <th>Attach Files </th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <a href="#">Loram File will be displayed here</a>
                  </td>

                  <td className="w-130">
                    <i className="fa fa-eye text-primary f-18"></i>
                    <i className="fa fa-edit mx-3 text-secondary f-18"></i>
                    <i className="fa fa-trash text-danger f-18"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-lg-12 d-flex justify-content-between">
          <div className="btn btn-labeled btn-primary px-3 shadow fitContent">
            <span className="btn-label me-2">
              <i className="fa fa-file-pdf f-18"></i>
            </span>
            Download PDF
          </div>
          <div className="btn btn-labeled btn-primary px-3 shadow me-3 fitContent">
            <span className="btn-label me-2">
              <i className="fa fa-check-circle f-18"></i>
            </span>
            Save
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratePlanningReport;
