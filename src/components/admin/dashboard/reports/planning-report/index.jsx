import React from "react";
import TopBar from "../../../../common/top-bar/TopBar";
import Sidebar from "../../../../common/sidebar/Sidebar";
import "./index.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Pagination from "../../../../common/pagination/Pagination";

const Reports = () => {
  let { showSidebar } = useSelector((state) => state.common);
  let navigate = useNavigate();

  let data = [
    {
      no: "1",
      objective: "Lorem Ipsum Lorem Ipsum",
      reportDate: "23-Nov-23",
      preparedBy: "AR",
      approvedBy: "FP",
      status: "Draft",
    },
    {
      no: "1",
      objective: "Lorem Ipsum Lorem Ipsum",
      reportDate: "23-Nov-23",
      preparedBy: "AR",
      approvedBy: "FP",
      status: "Published",
    },
    {
      no: "1",
      objective: "Lorem Ipsum Lorem Ipsum",
      reportDate: "23-Nov-23",
      preparedBy: "AR",
      approvedBy: "FP",
      status: "Draft",
    },
    {
      no: "1",
      objective: "Lorem Ipsum Lorem Ipsum",
      reportDate: "23-Nov-23",
      preparedBy: "AR",
      approvedBy: "FP",
      status: "Published",
    },
    {
      no: "1",
      objective: "Lorem Ipsum Lorem Ipsum",
      reportDate: "23-Nov-23",
      preparedBy: "AR",
      approvedBy: "FP",
      status: "Published",
    },
  ];
  return (
    <div>
      <TopBar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div
          className="row"
          id={showSidebar ? "SideComponents" : "SideComponentsFullWidth"}
        >
          <header className="section-header my-3 text-start d-flex align-items-center justify-content-between">
            <div className="mb-0 heading">Report</div>
            <button
              className="btn btn-outline-light text-black"
              onClick={() => navigate("/audit/generate-planning-report")}
            >
              Generate Report
            </button>
          </header>

          <div className="row">
            <div className="col-lg-12">
              <div className="example-header">
                <div className="mb-2 w-100">
                  <input
                    matInput
                    placeholder="Filter"
                    id="inputField"
                    style={{ borderBottom: "1px solid black" }}
                  />
                </div>
              </div>
              <div className="table-responsive">
                <table className="table table-bordered  table-hover rounded">
                  <thead className="bg-secondary text-white">
                    <tr>
                      <th style={{ width: "80px" }}>Sr. #</th>
                      <th>Job Name</th>
                      <th>Report Date</th>
                      <th>Prepared by</th>
                      <th>Approved By</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((item, index) => {
                      return (
                        <tr style={{ height: "40px" }} key={index}>
                          <td>{item?.no}</td>
                          <td>{item?.objective}</td>
                          <td>{item?.reportDate}</td>
                          <td>{item?.preparedBy}</td>
                          <td>{item?.approvedBy}</td>
                          <td>{item?.status}</td>
                          <td mat-cell className="text-center pt-3">
                            <i className="fa fa-eye text-primary"></i>
                            <i className="fa fa-edit mx-3 text-secondary"></i>
                            <i className="fa fa-trash text-danger"></i>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;