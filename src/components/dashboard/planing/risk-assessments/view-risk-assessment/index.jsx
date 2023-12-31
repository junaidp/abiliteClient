import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const ViewRiskAssessment = () => {
  const [activeBar, setActiveBar] = React.useState("riskApproach");
  const navigate = useNavigate();
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <div className="section-header my-3  text-start d-flex align-items-center justify-content-between">
            <div className="align-items-center  text-start d-flex my-3">
              <a
                className="text-primary"
                onClick={() => navigate("/audit/risk-assessment")}
              >
                <i className="fa fa-arrow-left text-primary fs-5 pe-3"></i>
              </a>
              <div className="mb-0 heading">
                Specific Risk Approach with Total Risk Score
              </div>
            </div>
          </div>
          <ul
            className="nav nav-tabs mb-3 border-0 glass-effect"
            id="myTab0"
            role="tablist"
          >
            <li
              className="nav-item"
              role="presentation"
              onClick={() => setActiveBar("riskApproach")}
            >
              <button
                className={`nav-link border-start border-end shadow-sm rounded-0  ${
                  activeBar === "riskApproach" && "active"
                }`}
                id="home-tab0"
                data-mdb-toggle="tab"
                data-mdb-target="#home0"
                type="button"
                role="tab"
                aria-controls="home"
              >
                <i className="fa fa-chart-pie me-2"></i>
                Specific Risk Approach
              </button>
            </li>
            <li
              className="nav-item mx-2 mb-2"
              role="presentation"
              onClick={() => setActiveBar("factorApproach")}
            >
              <button
                className={`nav-link border-start border-end shadow-sm rounded-0  ${
                  activeBar === "factorApproach" && "active"
                }`}
                id="profile-tab0"
                data-mdb-toggle="tab"
                data-mdb-target="#profile0"
                type="button"
                role="tab"
                aria-controls="profile"
              >
                <i className="fa fa-chart-line me-2"></i>
                Risk Factor Approach
              </button>
            </li>
            <li
              className="nav-item"
              role="presentation"
              onClick={() => setActiveBar("residualRisk")}
            >
              <button
                className={`nav-link border-start border-end shadow-sm rounded-0 ${
                  activeBar === "residualRisk" && "active"
                }`}
                id="contact-tab0"
                data-mdb-toggle="tab"
                data-mdb-target="#contact0"
                type="button"
                role="tab"
                aria-controls="contact"
              >
                <i className="fa fa-balance-scale me-2"></i>
                Determination of Residual Risk
              </button>
            </li>
          </ul>
          <div className="tab-content mt-3" id="myTabContent0">
            {activeBar === "riskApproach" && (
              <div
                className="tab-pane fade show active"
                id="home0"
                role="tabpanel"
                aria-labelledby="home-tab0"
              >
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
                      <td className="w-45">
                        <select
                          className="form-select w-45 p-0-6"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select"
                          aria-label="Default select example p-0-6 width-50"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="fw-bold width-50">40</td>
                      <td className=" text-white w-50 text-center bg-lightYellow">
                        M
                      </td>
                    </tr>

                    <tr>
                      <td>2</td>
                      <td className="w-300">
                        Lorem ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </td>
                      <td className="w-45">
                        <select
                          className="form-select w-45 p-0-6"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="fw-bold width-50">30</td>
                      <td className="bg-success  text-white w-50 text-center">
                        L
                      </td>
                    </tr>

                    <tr>
                      <td>2</td>
                      <td className="w-300">
                        Lorem ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </td>
                      <td className="w-45">
                        <select
                          className="form-select w-45 p-0-6"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="fw-bold width-50">50</td>
                      <td className=" text-white w-50 text-center bg-orange">
                        H
                      </td>
                    </tr>

                    <tr>
                      <td>2</td>
                      <td className="w-300">
                        Lorem ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </td>
                      <td className="w-45">
                        <select
                          className="form-select w-45 p-0-6"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select width-50 p-0-6"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select width-50 p-0-6"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="width-50">
                        <select
                          className="form-select p-0-6 width-50"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </td>
                      <td className="fw-bold width-50">60</td>
                      <td className="bg-danger text-white w-50 text-center bg-orange">
                        E
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="row mt-5 mb-1">
                  <div className="col-lg-12">
                    <h6 className="mb-0">Rating of Score Ranges</h6>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-3">
                    <div className="px-3 py-2 border-0 card mb-0 label-text bg-success text-white">
                      Low(L) = 0 to 32
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="px-3 py-2 border-0 card mb-0 label-text text-white bg-yellow">
                      Moderate(M) = 33 to 45
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="px-3 py-2 border-0 card mb-0 label-text  text-white bg-orange">
                      High(H) = 46 to 59
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="px-3 py-2 border-0 card mb-0 label-text bg-danger text-white">
                      Extreme(E) = 60
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeBar === "factorApproach" && (
              <div id="profile0" role="tabpanel" aria-labelledby="profile-tab0">
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
                      <td>
                        <select
                          className="form-select border-2 w-60 p-0-6"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option>4</option>
                          <option value="2">5</option>
                          <option value="3">6</option>
                          <option>7</option>
                          <option value="2">8</option>
                          <option value="3">9</option>
                          <option value="3">10</option>
                        </select>
                      </td>
                      <td>
                        <select
                          className="form-select border-2 w-60 p-0-6"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option>4</option>
                          <option value="2">5</option>
                          <option value="3">6</option>
                          <option>7</option>
                          <option value="2">8</option>
                          <option value="3">9</option>
                          <option value="3">10</option>
                        </select>
                      </td>
                      <td>
                        <div className="fw-bold">4</div>
                      </td>
                      <td>
                        <select
                          className="form-select border-2 w-60 p-0-6"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option>4</option>
                          <option value="2">5</option>
                          <option value="3">6</option>
                          <option>7</option>
                          <option value="2">8</option>
                          <option value="3">9</option>
                          <option value="3">10</option>
                        </select>
                      </td>
                      <td>
                        <select
                          className="form-select border-2 w-60 p-0-6"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option>4</option>
                          <option value="2">5</option>
                          <option value="3">6</option>
                          <option>7</option>
                          <option value="2">8</option>
                          <option value="3">9</option>
                          <option value="3">10</option>
                        </select>
                      </td>
                      <td>
                        <select
                          className="form-select border-2 w-60 p-0-6"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option>4</option>
                          <option value="2">5</option>
                          <option value="3">6</option>
                          <option>7</option>
                          <option value="2">8</option>
                          <option value="3">9</option>
                          <option value="3">10</option>
                        </select>
                      </td>
                      <td>
                        <select
                          className="form-select border-2 w-60 p-0-6"
                          aria-label="Default select example"
                        >
                          <option>1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option>4</option>
                          <option value="2">5</option>
                          <option value="3">6</option>
                          <option>7</option>
                          <option value="2">8</option>
                          <option value="3">9</option>
                          <option value="3">10</option>
                        </select>
                      </td>
                      <td className="fw-bold">3.45</td>
                      <td className="fw-bold">6.45</td>
                    </tr>
                  </tbody>
                </table>

                <div className="row mt-5 mb-1">
                  <div className="col-lg-12">
                    <h6 className="mb-0">Rating of Score Ranges</h6>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-3">
                    <div className="px-3 py-2 border-0 card mb-0 label-text bg-success text-white">
                      2-4 = Low
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="px-3 py-2 border-0 card mb-0 label-text text-white  bg-yellow">
                      4.1 to 6.5 = Moderate
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="px-3 py-2 border-0 card mb-0  label-text text-white bg-orange">
                      6.6 to 8.5 = High
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="px-3 py-2 border-0 card mb-0 label-text bg-danger text-white">
                      9 = Extreme
                    </div>
                  </div>
                </div>
                <label className="label-text">
                  Ranking Scale: 1 is lowest; 5 is Highest. Lowest possible
                  total score = 2. Highest Possible total score = 10.
                </label>
              </div>
            )}

            {activeBar === "residualRisk" && (
              <div id="contact0" role="tabpanel" aria-labelledby="contact-tab0">
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewRiskAssessment;
