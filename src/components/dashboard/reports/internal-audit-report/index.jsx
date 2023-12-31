import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const InternalAuditReport = () => {
  let navigate = useNavigate();
  return (
    <div>
      <header className="section-header my-3 text-start d-flex align-items-center justify-content-between">
        <div className="mb-0 heading">Internal Audit Report</div>
        <div className="">
          <div
            className="btn btn-labeled btn-primary px-3 shadow"
            onClick={() => navigate("/audit/generate-internal-audit-report")}
          >
            <span className="btn-label me-2">
              <i className="fa fa-eye"></i>
            </span>
            Generate Report
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
                  <th>Job Name</th>
                  <th>Report Date</th>
                  <th>Prepared By</th>
                  <th>Approved By</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </td>
                  <td>12/7/2023</td>
                  <td>AR</td>
                  <td>FP</td>
                  <td>Draft</td>
                  <td>
                    <i className="fa-eye fa f-18"></i>
                    <i className="fa fa-edit  px-3 f-18"></i>

                    <i className="fa fa-trash text-danger f-18"></i>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </td>
                  <td>12/7/2023</td>
                  <td>AR</td>
                  <td>FP</td>
                  <td>Finalized</td>
                  <td>
                    <i className="fa-eye fa f-18"></i>
                    <i className="fa fa-edit  px-3 f-18"></i>

                    <i className="fa fa-trash text-danger f-18"></i>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </td>
                  <td>12/7/2023</td>
                  <td>AR</td>
                  <td>FP</td>
                  <td>Approved</td>
                  <td>
                    <i className="fa-eye fa f-18"></i>
                    <i className="fa fa-edit  px-3 f-18"></i>

                    <i className="fa fa-trash text-danger f-18"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternalAuditReport;
