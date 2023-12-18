import React from "react";
import "./index.css";
import { changeUserLoggedIn } from "../../../../global-redux/reducers/auth/slice";
import { useDispatch } from "react-redux";
const AuditSettings = () => {
  let dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(changeUserLoggedIn(false));
  }, []);
  return (
    <div>
      <div className="card p-3 shadow-sm setting-tab">
        <h2 className="text-center heading p-3">Settings</h2>

        <div className="row">
          <div className="col-lg-2">
            <nav className="mt-4" style={{ paddingBottom: "10px" }}>
              <div
                className="nav d-grid nav-tabs glass-effect border-0"
                id="nav-tab"
                role="tablist"
              >
                <button
                  className="nav-link active  border-0 shadow-sm mb-3  rounded-0 me-3 "
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-="true"
                >
                  Supporting Doc
                </button>
                <button
                  className="nav-link shadow-sm  border-0 mb-3  rounded-0  me-3 "
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-profile"
                  type="button"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-="false"
                >
                  Location
                </button>
                <button
                  className="nav-link shadow-sm border-0 mb-3  rounded-0 me-3 "
                  id="nav-risk-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-risk"
                  type="button"
                  role="tab"
                  aria-controls="nav-risk"
                  aria-="false"
                >
                  Risk Factor
                </button>
                <button
                  className="nav-link shadow-sm  border-0 mb-3  rounded-0 me-3 "
                  id="nav-email-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-email"
                  type="button"
                  role="tab"
                  aria-controls="nav-email"
                  aria-="false"
                >
                  Email
                </button>
                <button
                  className="nav-link shadow-sm  border-0 mb-3  rounded-0 me-3 "
                  id="nav-check-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-check"
                  type="button"
                  role="tab"
                  aria-controls="nav-check"
                  aria-="false"
                >
                  Checklist Management
                </button>
                <button
                  className="nav-link shadow-sm  border-0 mb-3   rounded-0 me-3 "
                  id="nav-noti-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-noti"
                  type="button"
                  role="tab"
                  aria-controls="nav-noti"
                  aria-="false"
                >
                  Notification
                </button>
                <button
                  className="nav-link shadow-sm  border-0 mb-3  rounded-0 me-3 "
                  id="nav-user-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-user"
                  type="button"
                  role="tab"
                  aria-controls="nav-user"
                  aria-="false"
                >
                  User Management
                </button>
                <button
                  className="nav-link shadow-sm  border-0 mb-3  rounded-0 me-3 "
                  id="nav-mod-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-mod"
                  type="button"
                  role="tab"
                  aria-controls="nav-mod"
                  aria-="false"
                >
                  Modules
                </button>
                <button
                  className="nav-link shadow-sm  border-0 mb-3  rounded-0 me-3 "
                  id="nav-com-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-com"
                  type="button"
                  role="tab"
                  aria-controls="nav-com"
                  aria-="false"
                >
                  Company Management
                </button>
              </div>
            </nav>
          </div>

          <div className="col-lg-10">
            <div
              className="tab-content p-3 mt-4 border bg-light"
              id="nav-tabContent"
            >
              <div
                className="tab-pane fade active show"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <div className="row my-3">
                  <div className="col-lg-12">
                    <div className="sub-heading  fw-bold">
                      Supporting Documents
                    </div>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-lg-6">
                    <label className="w-100">Enter File Name:</label>
                    <input
                      className="form-control w-100"
                      placeholder="Enter"
                      type="text"
                    />
                  </div>
                </div>
                <div className="row position-relative">
                  <div className="col-lg-12 text-center settings-form">
                    <form action="upload.php" method="POST">
                      <input type="file" multiple />
                      <p className="mb-0">
                        Drag your files here or click in this area.
                      </p>
                    </form>
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-lg-12 text-end">
                    <button className="btn btn-labeled btn-primary px-3 mt-3 shadow">
                      <span className="btn-label me-2">
                        <i className="fa fa-save"></i>
                      </span>
                      Submit
                    </button>
                  </div>
                </div>

                <div className="row my-3">
                  <div className="col-lg-12">
                    <div className="table-responsive">
                      <table className="table table-bordered  table-hover rounded">
                        <thead className="bg-secondary text-white">
                          <tr>
                            <th style={{ width: "80px" }}>Sr No.</th>
                            <th>Particulars</th>
                            <th style={{ width: "180px" }}>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>File Name here</td>
                            <td>
                              <i className="fa-eye fa "></i>

                              <i className="fa fa-trash text-danger   px-3"></i>

                              <i className="fa fa-download"></i>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>File Name here</td>
                            <td>
                              <i className="fa-eye fa "></i>

                              <i className="fa fa-trash text-danger  px-3"></i>

                              <i className="fa fa-download "></i>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                <div className="row">
                  <div className="col-lg-12">
                    <div className="sub-heading  fw-bold">
                      Location & Departments Management
                    </div>
                    <label className="fw-light">
                      Create and manage your dropdown list for your organisation
                      Location Division / Department
                    </label>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-lg-6">
                    <label>Department/Division/ Location:</label>
                    <input
                      className="form-control w-100"
                      placeholder="Enter Text here"
                      type="text"
                    />
                  </div>
                  <div className="col-lg-6 text-end float-end align-self-end">
                    <div className="btn btn-labeled btn-primary px-3 shadow">
                      <span className="btn-label me-2">
                        <i className="fa fa-plus"></i>
                      </span>
                      Add New Section
                    </div>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-lg-12">
                    <div className="accordion" id="accordionFlushExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingeight">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                          >
                            <div className="d-flex w-100 me-3 align-items-center justify-content-between">
                              <div className=" d-flex align-items-center">
                                1. Show Department/Division/ Location
                              </div>
                            </div>
                          </button>
                        </h2>
                        <div
                          id="flush-collapseOne"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            <div className="row mb-3">
                              <div className="col-lg-12 text-end">
                                <button className="btn btn-labeled btn-primary px-3 mt-3 shadow">
                                  <span className="btn-label me-2">
                                    <i className="fa fa-plus"></i>
                                  </span>
                                  Add
                                </button>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-lg-12">
                                <div className="table-responsive">
                                  <table className="table table-bordered  table-hover rounded">
                                    <thead className="bg-secondary text-white">
                                      <tr>
                                        <th style={{ width: "80px" }}>
                                          Sr No.
                                        </th>
                                        <th>Particulars</th>
                                        <th>Actions</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>
                                          Show
                                          Sub-Department/Sub-Division/Sub-Location
                                        </td>
                                        <td>
                                          <i className="fa fa-edit  px-3"></i>

                                          <i className="fa fa-trash text-danger"></i>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>2</td>
                                        <td>
                                          Show
                                          Sub-Department/Sub-Division/Sub-Location
                                        </td>
                                        <td>
                                          <i className="fa fa-edit  px-3"></i>

                                          <i className="fa fa-trash text-danger"></i>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>

                            <div className="row my-3">
                              <div className="col-lg-12 text-end">
                                <button className="btn btn-labeled btn-primary px-3 mt-3 shadow">
                                  <span className="btn-label me-2">
                                    <i className="fa fa-save"></i>
                                  </span>
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingeightt">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwo"
                          >
                            <div className="d-flex w-100 me-3 align-items-center justify-content-between">
                              <div className=" d-flex align-items-center">
                                2. Show Department/Division/ Location
                              </div>
                            </div>
                          </button>
                        </h2>
                        <div
                          id="flush-collapseTwo"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            <div className="row mb-3">
                              <div className="col-lg-12 text-end">
                                <button className="btn btn-labeled btn-primary px-3 mt-3 shadow">
                                  <span className="btn-label me-2">
                                    <i className="fa fa-plus"></i>
                                  </span>
                                  Add
                                </button>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-lg-12">
                                <div className="table-responsive">
                                  <table className="table table-bordered  table-hover rounded">
                                    <thead className="bg-secondary text-white">
                                      <tr>
                                        <th style={{ width: "80px" }}>
                                          Sr No.
                                        </th>
                                        <th>Particulars</th>
                                        <th>Actions</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>
                                          Show
                                          Sub-Department/Sub-Division/Sub-Location
                                        </td>
                                        <td>
                                          <i className="fa fa-edit  px-3"></i>

                                          <i className="fa fa-trash text-danger"></i>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>2</td>
                                        <td>
                                          Show
                                          Sub-Department/Sub-Division/Sub-Location
                                        </td>
                                        <td>
                                          <i className="fa fa-edit  px-3"></i>

                                          <i className="fa fa-trash text-danger"></i>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>

                            <div className="row my-3">
                              <div className="col-lg-12 text-end">
                                <button className="btn btn-labeled btn-primary px-3 mt-3 shadow">
                                  <span className="btn-label me-2">
                                    <i className="fa fa-save"></i>
                                  </span>
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-lg-12 text-end">
                    <button className="btn btn-labeled btn-primary px-3 mt-3 shadow">
                      <span className="btn-label me-2">
                        <i className="fa fa-print"></i>
                      </span>
                      print
                    </button>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="nav-risk"
                role="tabpanel"
                aria-labelledby="nav-risk-tab"
              >
                <div className="row">
                  <div className="col-lg-12">
                    <div className="sub-heading  fw-bold">Risk Factor</div>
                    <label className="fw-light">
                      Define list of Risk factors here for Risk Factor approach
                      at Universe Level Risk Assessment{" "}
                    </label>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-lg-6">
                    <label>Add New Risk Factor:</label>
                    <input
                      className="form-control w-100"
                      placeholder="Enter Text here"
                      type="text"
                    />
                  </div>
                  <div className="col-lg-3  align-self-end">
                    <div className="btn btn-labeled btn-primary px-3 shadow">
                      <span className="btn-label me-2">
                        <i className="fa fa-save"></i>
                      </span>
                      Save
                    </div>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-lg-12">
                    <div className="table-responsive">
                      <table className="table table-bordered  table-hover rounded">
                        <thead className="bg-secondary text-white">
                          <tr>
                            <th style={{ width: "80px" }}>Sr No.</th>
                            <th>Particulars</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>
                              Show Sub-Department/Sub-Division/Sub-Location
                            </td>
                            <td>
                              <i className="fa fa-edit  px-3"></i>

                              <i className="fa fa-trash text-danger"></i>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>
                              Show Sub-Department/Sub-Division/Sub-Location
                            </td>
                            <td>
                              <i className="fa fa-edit  px-3"></i>

                              <i className="fa fa-trash text-danger"></i>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-lg-12 text-end">
                    <button className="btn btn-labeled btn-primary px-3 mt-3 shadow">
                      <span className="btn-label me-2">
                        <i className="fa fa-save"></i>
                      </span>
                      Save
                    </button>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="nav-email"
                role="tabpanel"
                aria-labelledby="nav-email-tab"
              >
                <div className="row">
                  <div className="col-lg-12">
                    <div className="sub-heading  fw-bold">Email</div>
                    <label className="fw-light">
                      Define your email template here
                    </label>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-lg-12">
                    <textarea
                      className="form-control"
                      placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                      id="exampleFormControlT"
                      rows="15"
                    ></textarea>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-lg-12">
                    <div className="col-lg-6 text-end float-end align-self-end">
                      <div className="btn btn-labeled btn-primary px-3 shadow">
                        <span className="btn-label me-2">
                          <i className="fa fa-save"></i>
                        </span>
                        Save
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="nav-check"
                role="tabpanel"
                aria-labelledby="nav-check-tab"
              >
                <div className="row">
                  <div className="col-lg-12">
                    <div className="sub-heading  fw-bold">
                      Checklist Management
                    </div>
                    <label className="fw-light">
                      Create and manage your dropdown list for your organisation
                      Location Division / Department
                    </label>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-lg-6">
                    <label>Checklist Name:</label>
                    <input
                      className="form-control w-100"
                      placeholder="Enter Text here"
                      type="text"
                    />
                  </div>
                  <div className="col-lg-3  align-self-end">
                    <div className="btn btn-labeled btn-primary px-3 shadow">
                      <span className="btn-label me-2">
                        <i className="fa fa-plus"></i>
                      </span>
                      Add
                    </div>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-lg-12">
                    <div className="accordion" id="accordionFlushExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree"
                            aria-expanded="false"
                            aria-controls="flush-collapseThree"
                          >
                            <div className="d-flex w-100 me-3 align-items-center justify-content-between">
                              <div className=" d-flex align-items-center">
                                1. Name of Checklist will show here
                              </div>
                            </div>
                          </button>
                        </h2>
                        <div
                          id="flush-collapseThree"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            <div className=" mt-3 bg-white p-3">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="sub-heading  fw-bold">
                                    1. Name of Checklist will show here
                                  </div>
                                </div>
                              </div>

                              <div className="row mt-3">
                                <div className="col-lg-6">
                                  <label>
                                    Would you like to keep Standard Observation?
                                  </label>
                                  <select
                                    className="form-select"
                                    aria-label="Default select example"
                                  >
                                    <option>Yes</option>
                                    <option value="2">No</option>
                                  </select>
                                </div>
                              </div>

                              <div className="row mt-3">
                                <div className="col-lg-6">
                                  <label>Bulk Upload:</label>
                                  <label for="fileInput">Add Attachment:</label>
                                  <input
                                    className="ms-3"
                                    style={{ fontSize: "10px" }}
                                    type="file"
                                    id="fileInput"
                                  />
                                </div>
                                <div className="col-lg-6 float-end text-end  align-self-end">
                                  <div className="btn btn-labeled btn-primary me-3 px-3 shadow">
                                    <span className="btn-label me-2">
                                      <i className="fa fa-download"></i>
                                    </span>
                                    Download Template
                                  </div>

                                  <div className="btn btn-labeled btn-primary px-3 shadow">
                                    <span className="btn-label me-2">
                                      <i className="fa fa-plus"></i>
                                    </span>
                                    Add
                                  </div>
                                </div>
                              </div>

                              <div className="row mt-3">
                                <div className="col-lg-12">
                                  <div className="table-responsive">
                                    <table className="table table-bordered  table-hover rounded">
                                      <thead className="bg-secondary text-white">
                                        <tr>
                                          <th style={{ width: "80px" }}>
                                            Sr No.
                                          </th>
                                          <th>Area</th>
                                          <th>Subject</th>
                                          <th>Particulars</th>
                                          <th>Observation</th>
                                          <th>Actions</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>1</td>
                                          <td>xxxx</td>
                                          <td>xxxx</td>
                                          <td>xxxx</td>
                                          <td>xxxxxxx</td>
                                          <td>
                                            <i className="fa fa-edit  px-3"></i>

                                            <i className="fa fa-trash text-danger"></i>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>2</td>
                                          <td>xxxx</td>
                                          <td>xxxx</td>
                                          <td>xxxx</td>
                                          <td>xxxxxxx</td>
                                          <td>
                                            <i className="fa fa-edit  px-3"></i>

                                            <i className="fa fa-trash text-danger"></i>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>3</td>
                                          <td>xxxx</td>
                                          <td>xxxx</td>
                                          <td>xxxx</td>
                                          <td>xxxxxxx</td>
                                          <td>
                                            <i className="fa fa-edit  px-3"></i>

                                            <i className="fa fa-trash text-danger"></i>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>4</td>
                                          <td>xxxx</td>
                                          <td>xxxx</td>
                                          <td>xxxx</td>
                                          <td>xxxxxxx</td>
                                          <td>
                                            <i className="fa fa-edit  px-3"></i>

                                            <i className="fa fa-trash text-danger"></i>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseFour"
                            aria-expanded="false"
                            aria-controls="flush-collapseFour"
                          >
                            <div className="d-flex w-100 me-3 align-items-center justify-content-between">
                              <div className=" d-flex align-items-center">
                                2. Name of Checklist will show here
                              </div>
                            </div>
                          </button>
                        </h2>
                        <div
                          id="flush-collapseFour"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            <div className=" mt-3 bg-white p-3">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="sub-heading  fw-bold">
                                    1. Name of Checklist will show here
                                  </div>
                                </div>
                              </div>

                              <div className="row mt-3">
                                <div className="col-lg-6">
                                  <label>
                                    Would you like to keep Standard Observation?
                                  </label>
                                  <select
                                    className="form-select"
                                    aria-label="Default select example"
                                  >
                                    <option>Yes</option>
                                    <option value="2">No</option>
                                  </select>
                                </div>
                              </div>

                              <div className="row mt-3">
                                <div className="col-lg-6">
                                  <label>Bulk Upload:</label>
                                  <label for="fileInput">Add Attachment:</label>
                                  <input
                                    className="ms-3"
                                    style={{ fontSize: "10px" }}
                                    type="file"
                                    id="fileInput"
                                  />
                                </div>
                                <div className="col-lg-6 float-end text-end  align-self-end">
                                  <div className="btn btn-labeled btn-primary me-3 px-3 shadow">
                                    <span className="btn-label me-2">
                                      <i className="fa fa-download"></i>
                                    </span>
                                    Download Template
                                  </div>

                                  <div className="btn btn-labeled btn-primary px-3 shadow">
                                    <span className="btn-label me-2">
                                      <i className="fa fa-plus"></i>
                                    </span>
                                    Add
                                  </div>
                                </div>
                              </div>

                              <div className="row mt-3">
                                <div className="col-lg-12">
                                  <div className="table-responsive">
                                    <table className="table table-bordered  table-hover rounded">
                                      <thead className="bg-secondary text-white">
                                        <tr>
                                          <th style={{ width: "80px" }}>
                                            Sr No.
                                          </th>
                                          <th>Area</th>
                                          <th>Subject</th>
                                          <th>Particulars</th>
                                          <th>Observation</th>
                                          <th>Actions</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>1</td>
                                          <td>xxxx</td>
                                          <td>xxxx</td>
                                          <td>xxxx</td>
                                          <td>xxxxxxx</td>
                                          <td>
                                            <i className="fa fa-edit  px-3"></i>

                                            <i className="fa fa-trash text-danger"></i>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>2</td>
                                          <td>xxxx</td>
                                          <td>xxxx</td>
                                          <td>xxxx</td>
                                          <td>xxxxxxx</td>
                                          <td>
                                            <i className="fa fa-edit  px-3"></i>

                                            <i className="fa fa-trash text-danger"></i>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>3</td>
                                          <td>xxxx</td>
                                          <td>xxxx</td>
                                          <td>xxxx</td>
                                          <td>xxxxxxx</td>
                                          <td>
                                            <i className="fa fa-edit  px-3"></i>

                                            <i className="fa fa-trash text-danger"></i>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>4</td>
                                          <td>xxxx</td>
                                          <td>xxxx</td>
                                          <td>xxxx</td>
                                          <td>xxxxxxx</td>
                                          <td>
                                            <i className="fa fa-edit  px-3"></i>

                                            <i className="fa fa-trash text-danger"></i>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="nav-noti"
                role="tabpanel"
                aria-labelledby="nav-noti-tab"
              >
                <div className="row">
                  <div className="col-lg-12">
                    <div className="sub-heading  fw-bold">Notifications</div>
                    <label className="fw-light">
                      Manage your notifications from here
                    </label>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-lg-6">
                    <label>Department/Division/ Location:</label>
                    <input
                      className="form-control w-100"
                      placeholder="Enter Text here"
                      type="text"
                    />
                  </div>
                  <div className="col-lg-6 text-end float-end align-self-end">
                    <div className="btn btn-labeled btn-primary px-3 shadow">
                      <span className="btn-label me-2">
                        <i className="fa fa-plus"></i>
                      </span>
                      Add New Section
                    </div>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-lg-12">
                    <div className="table-responsive">
                      <table className="table table-bordered  table-hover rounded">
                        <thead className="bg-secondary text-white">
                          <tr>
                            <th style={{ width: "80px" }}>Sr No.</th>
                            <th>Enable all Notification</th>
                            <th>Email Notification</th>
                            <th>System Notification</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>On Login</td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>User Creation</td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Password recovery</td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Forget password</td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>On meeting request</td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>6</td>
                            <td>Audit Plan Submitted for approval</td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>7</td>
                            <td>Audit Plan Approved</td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>8</td>
                            <td>On job assignment</td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>9</td>
                            <td>Job change request</td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>10</td>
                            <td>Job change request Approved</td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>11</td>
                            <td>Checklist Change request</td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>12</td>
                            <td>Checklist Change request Approved</td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>13</td>
                            <td>Job due for Kick-off in a week</td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>14</td>
                            <td>Audit Notification</td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>15</td>
                            <td>On Information request</td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>16</td>
                            <td>Risk Control Matrix Submission</td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>17</td>
                            <td>Risk Control Matrix Approval</td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>18</td>
                            <td>Audit Program Submission</td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>19</td>
                            <td>Audit Program Approval</td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>20</td>
                            <td>Management comments received</td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>21</td>
                            <td>Management comments sent</td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>22</td>
                            <td>Management comments due</td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>23</td>
                            <td>Exceptions due for implementation</td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>24</td>
                            <td>Exceptions Implemented</td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>25</td>
                            <td>Exceptions date change request</td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>26</td>
                            <td>Job complete</td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>27</td>
                            <td>Audit Plan report - draft received</td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>28</td>
                            <td>Audit Plan report - Feedback Issued</td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>29</td>
                            <td>Audit Plan report - Feedback Received</td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>30</td>
                            <td>Audit Plan report Approved</td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>31</td>
                            <td>Internal Audit Report - Draft Received</td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>32</td>
                            <td>Internal Audit Report - Feedback Issued</td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>33</td>
                            <td>Internal Audit Report - Feedback Received</td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>34</td>
                            <td>Internal Audit Report Approved</td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>35</td>
                            <td>Weekly Reminder for Job List in Follow-up</td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>36</td>
                            <td>
                              Fortnightly Reminder for Job List in Follow-up
                            </td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>37</td>
                            <td>Task allocation</td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>38</td>
                            <td>Task Received</td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>39</td>
                            <td>Task due date</td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>40</td>
                            <td>Raise information request</td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>41</td>
                            <td>Receive information request</td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>42</td>
                            <td>Information request due</td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="nav-user"
                role="tabpanel"
                aria-labelledby="nav-user-tab"
              >
                <div className="row">
                  <div className="col-lg-12">
                    <div className="sub-heading  fw-bold">User Management</div>
                  </div>
                </div>

                <div className="row my-3">
                  <div className="col-lg-4">
                    <label>Fiscal Year:</label>
                    <input
                      className="form-control w-100"
                      placeholder="Enter Text here"
                      type="date"
                    />
                  </div>
                  <div className="col-lg-4">
                    <label>End Year:</label>
                    <input
                      className="form-control w-100"
                      placeholder="Enter Text here"
                      type="date"
                    />
                  </div>
                  <div className="col-lg-4 text-end float-end align-self-end">
                    <div className="btn btn-labeled btn-primary px-3 shadow">
                      <span className="btn-label me-2">
                        <i className="fa fa-plus"></i>
                      </span>
                      Add New
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12">
                    <div className="table-responsive">
                      <table className="table table-bordered  table-hover rounded">
                        <thead className="bg-secondary text-white">
                          <tr>
                            <th style={{ width: "80px" }}>Sr No.</th>
                            <th>Username</th>
                            <th>Designation</th>
                            <th>Email ID</th>
                            <th>Skill Set</th>
                            <th>Role</th>
                            <th>Reporting To</th>
                            <th>Department</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>xxxxxxxx</td>
                            <td>xxxxxxxx</td>
                            <td>xxxxxxxx</td>
                            <td>xxxxxxxx</td>
                            <td>xxxxxxxx</td>
                            <td>xxxxxxxx</td>
                            <td>xxxxxxxx</td>
                            <td>
                              <i className="fa fa-edit  px-3"></i>

                              <i className="fa fa-trash text-danger"></i>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>xxxxxxxx</td>
                            <td>xxxxxxxx</td>
                            <td>xxxxxxxx</td>
                            <td>xxxxxxxx</td>
                            <td>xxxxxxxx</td>
                            <td>xxxxxxxx</td>
                            <td>xxxxxxxx</td>
                            <td>
                              <i className="fa fa-edit  px-3"></i>

                              <i className="fa fa-trash text-danger"></i>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-lg-12 text-end">
                    <button className="btn btn-labeled btn-primary px-3 mt-3 shadow">
                      <span className="btn-label me-2">
                        <i className="fa fa-save"></i>
                      </span>
                      Save
                    </button>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="nav-mod"
                role="tabpanel"
                aria-labelledby="nav-mod-tab"
              >
                <div className="row">
                  <div className="col-lg-12">
                    <div className="sub-heading  fw-bold">
                      Modules Management
                    </div>
                    <label className="fw-light">Super Admin view</label>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12">
                    <div className="table-responsive">
                      <table className="table table-bordered  table-hover rounded">
                        <thead className="bg-secondary text-white">
                          <tr>
                            <th style={{ width: "80px" }}>Sr No.</th>
                            <th>Name of Company</th>
                            <th>Audit Planning & Scheduling</th>
                            <th>Audit Engagement</th>
                            <th>Compliance Checklist</th>
                            <th>RCM Library</th>
                            <th>Reporting & Follow-up</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>xxxxxxxxxx</td>
                            <td className="checkbox-cell">
                              <input type="checkbox" className="checkbox" />
                            </td>
                            <td className="checkbox-cell">
                              <input type="checkbox" className="checkbox" />
                            </td>
                            <td className="checkbox-cell">
                              <input type="checkbox" className="checkbox" />
                            </td>
                            <td className="checkbox-cell">
                              <input type="checkbox" className="checkbox" />
                            </td>
                            <td className="checkbox-cell">
                              <input type="checkbox" className="checkbox" />
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>xxxxxxxxxx</td>
                            <td className="checkbox-cell">
                              <input type="checkbox" className="checkbox" />
                            </td>
                            <td className="checkbox-cell">
                              <input type="checkbox" className="checkbox" />
                            </td>
                            <td className="checkbox-cell">
                              <input type="checkbox" className="checkbox" />
                            </td>
                            <td className="checkbox-cell">
                              <input type="checkbox" className="checkbox" />
                            </td>
                            <td className="checkbox-cell">
                              <input type="checkbox" className="checkbox" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-lg-12 text-end">
                    <button className="btn btn-labeled btn-primary px-3 mt-3 shadow">
                      <span className="btn-label me-2">
                        <i className="fa fa-save"></i>
                      </span>
                      Save
                    </button>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="nav-com"
                role="tabpanel"
                aria-labelledby="nav-com-tab"
              >
                <div className="row">
                  <div className="col-lg-12">
                    <div className="sub-heading  fw-bold">
                      Company Management
                    </div>
                    <label className="fw-light">Super user setting</label>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-lg-6">
                    <label>Search Company:</label>
                    <input
                      className="form-control w-100"
                      placeholder="Search Company here"
                      type="text"
                    />
                  </div>
                  <div className="col-lg-6 text-end float-end align-self-end">
                    <div className="btn btn-labeled btn-primary px-3 shadow">
                      <span className="btn-label me-2">
                        <i className="fa fa-plus"></i>
                      </span>
                      Add New
                    </div>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-lg-12">
                    <div className="table-responsive overflow-x-auto">
                      <table className="table table-bordered overflow-x-auto table-hover rounded">
                        <thead className="bg-secondary text-white">
                          <tr>
                            <th style={{ minWidth: "50px" }}>Sr No.</th>
                            <th style={{ width: "130px" }}>Company Name</th>
                            <th style={{ width: "100px" }}>Company ID</th>
                            <th style={{ width: "100px" }}>Email ID</th>
                            <th style={{ width: "190px" }}>
                              Contact Person Name
                            </th>
                            <th style={{ width: "190px" }}>
                              Contact Person No.
                            </th>
                            <th style={{ minWidth: "50px" }}>Role</th>
                            <th style={{ width: "180px" }}>
                              Fiscal Year From:
                            </th>
                            <th style={{ width: "180px" }}>Fiscal Year To:</th>
                            <th>No. of Users</th>
                            <th>Management Accounts</th>
                            <th>Modules Management</th>
                            <th>Company Status</th>
                            <th>Package</th>
                            <th style={{ width: "80px" }}>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>xxxxxxxx</td>
                            <td>xxxxxxxx</td>
                            <td>xxxxxxxx</td>
                            <td>xxxxxxxx</td>
                            <td>+9209078601</td>
                            <td>Admin</td>
                            <td className="highlight-orange">DD:MM:YYYY</td>
                            <td className="highlight-orange">DD:MM:YYYY</td>
                            <td>12</td>
                            <td>12</td>
                            <td className="highlight-yellow"></td>
                            <td>
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option>Active</option>
                                <option value="1">Deactive</option>
                                <option value="2">Remove</option>
                              </select>
                            </td>
                            <td>
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option value="1">Trial</option>

                                <option>Standard</option>
                                <option value="2">Premium</option>
                              </select>
                            </td>
                            <td>
                              <i className="fa fa-edit  px-3"></i>

                              <i className="fa fa-trash text-danger"></i>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-lg-12 text-end">
                    <button className="btn btn-labeled btn-primary px-3 mt-3 shadow">
                      <span className="btn-label me-2">
                        <i className="fa fa-save"></i>
                      </span>
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditSettings;
