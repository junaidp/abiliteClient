import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const PerformanceRiskAssessmentDialog = ({ setPerformRiskAssessmentModal }) => {
  let navigate = useNavigate();
  return (
    <div className="container  p-3">
      <div className="modal-content ">
        <div className="modal-header">
          <h1 className="modal-title fs-5 sub-heading" id="exampleModalLabel">
            Select Risk Assessment
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={() => setPerformRiskAssessmentModal(false)}
          ></button>
        </div>
        <div className="modal-body p-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-4">
              <a
                className="w-100 "
                type="button"
                onClick={() => navigate("/audit/risk-factor-approach")}
              >
                <div className="card p-0 border-0">
                  <div className="card-content">
                    <div className="card border main-card shadow rounded">
                      <div className="card-header bg-secondary text-center py-3">
                        <svg
                          width="52"
                          height="56"
                          viewBox="0 0 18 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.9375 4.85938C3.83437 4.85938 3.75 4.94375 3.75 5.04688V6.17188C3.75 6.275 3.83437 6.35938 3.9375 6.35938H12.9375C13.0406 6.35938 13.125 6.275 13.125 6.17188V5.04688C13.125 4.94375 13.0406 4.85938 12.9375 4.85938H3.9375ZM8.25 8.23438H3.9375C3.83437 8.23438 3.75 8.31875 3.75 8.42188V9.54688C3.75 9.65 3.83437 9.73438 3.9375 9.73438H8.25C8.35313 9.73438 8.4375 9.65 8.4375 9.54688V8.42188C8.4375 8.31875 8.35313 8.23438 8.25 8.23438ZM7.125 18.9688H1.875V2.46875H15V9.96875C15 10.0719 15.0844 10.1562 15.1875 10.1562H16.5C16.6031 10.1562 16.6875 10.0719 16.6875 9.96875V1.53125C16.6875 1.11641 16.3523 0.78125 15.9375 0.78125H0.9375C0.522656 0.78125 0.1875 1.11641 0.1875 1.53125V19.9062C0.1875 20.3211 0.522656 20.6562 0.9375 20.6562H7.125C7.22813 20.6562 7.3125 20.5719 7.3125 20.4688V19.1562C7.3125 19.0531 7.22813 18.9688 7.125 18.9688ZM17.4375 16.9062H14.0625V16.0484C15.1477 15.725 15.9375 14.7219 15.9375 13.5312C15.9375 12.0805 14.7633 10.9062 13.3125 10.9062C11.8617 10.9062 10.6875 12.0805 10.6875 13.5312C10.6875 14.7195 11.4773 15.725 12.5625 16.0484V16.9062H9.1875C8.98125 16.9062 8.8125 17.075 8.8125 17.2812V20.8438C8.8125 21.05 8.98125 21.2188 9.1875 21.2188H17.4375C17.6438 21.2188 17.8125 21.05 17.8125 20.8438V17.2812C17.8125 17.075 17.6438 16.9062 17.4375 16.9062ZM12.1406 13.5312C12.1406 12.8844 12.6656 12.3594 13.3125 12.3594C13.9594 12.3594 14.4844 12.8844 14.4844 13.5312C14.4844 14.1781 13.9594 14.7031 13.3125 14.7031C12.6656 14.7031 12.1406 14.1781 12.1406 13.5312ZM16.3594 19.7656H10.2656V18.3594H16.3594V19.7656Z"
                            fill="white"
                          />
                        </svg>
                      </div>

                      <div className="card-body">
                        <h6 className=" text-center fw-bold">
                          Risk Factor Approach
                        </h6>
                      </div>
                    </div>
                  </div>

                  <div className="card-hover-text">New Text on Hover</div>
                </div>
              </a>
            </div>

            <div className="col-lg-4">
              <a
                className="w-100 "
                type="button"
                onClick={() => navigate("/audit/specific-risk-approach")}
              >
                <div className="card p-0 border-0">
                  <div className="card-content">
                    <div className="card border main-card shadow rounded">
                      <div className="card-header bg-secondary text-center py-3">
                        <svg
                          width="52"
                          height="56"
                          viewBox="0 0 18 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.9375 4.85938C3.83437 4.85938 3.75 4.94375 3.75 5.04688V6.17188C3.75 6.275 3.83437 6.35938 3.9375 6.35938H12.9375C13.0406 6.35938 13.125 6.275 13.125 6.17188V5.04688C13.125 4.94375 13.0406 4.85938 12.9375 4.85938H3.9375ZM8.25 8.23438H3.9375C3.83437 8.23438 3.75 8.31875 3.75 8.42188V9.54688C3.75 9.65 3.83437 9.73438 3.9375 9.73438H8.25C8.35313 9.73438 8.4375 9.65 8.4375 9.54688V8.42188C8.4375 8.31875 8.35313 8.23438 8.25 8.23438ZM7.125 18.9688H1.875V2.46875H15V9.96875C15 10.0719 15.0844 10.1562 15.1875 10.1562H16.5C16.6031 10.1562 16.6875 10.0719 16.6875 9.96875V1.53125C16.6875 1.11641 16.3523 0.78125 15.9375 0.78125H0.9375C0.522656 0.78125 0.1875 1.11641 0.1875 1.53125V19.9062C0.1875 20.3211 0.522656 20.6562 0.9375 20.6562H7.125C7.22813 20.6562 7.3125 20.5719 7.3125 20.4688V19.1562C7.3125 19.0531 7.22813 18.9688 7.125 18.9688ZM17.4375 16.9062H14.0625V16.0484C15.1477 15.725 15.9375 14.7219 15.9375 13.5312C15.9375 12.0805 14.7633 10.9062 13.3125 10.9062C11.8617 10.9062 10.6875 12.0805 10.6875 13.5312C10.6875 14.7195 11.4773 15.725 12.5625 16.0484V16.9062H9.1875C8.98125 16.9062 8.8125 17.075 8.8125 17.2812V20.8438C8.8125 21.05 8.98125 21.2188 9.1875 21.2188H17.4375C17.6438 21.2188 17.8125 21.05 17.8125 20.8438V17.2812C17.8125 17.075 17.6438 16.9062 17.4375 16.9062ZM12.1406 13.5312C12.1406 12.8844 12.6656 12.3594 13.3125 12.3594C13.9594 12.3594 14.4844 12.8844 14.4844 13.5312C14.4844 14.1781 13.9594 14.7031 13.3125 14.7031C12.6656 14.7031 12.1406 14.1781 12.1406 13.5312ZM16.3594 19.7656H10.2656V18.3594H16.3594V19.7656Z"
                            fill="white"
                          />
                        </svg>
                      </div>

                      <div className="card-body">
                        <h6 className=" text-center fw-bold">
                          Specific Risk Approach
                        </h6>
                      </div>
                    </div>
                  </div>

                  <div className="card-hover-text">New Text on Hover</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="modal-footer mb-2">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
            onClick={() => setPerformRiskAssessmentModal(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerformanceRiskAssessmentDialog;
