import { CircularProgress } from "@mui/material";
import React from "react";

const AccordionItem = ({
  item,
  index,
  handleChangeCurrentCheckListId,
  setShowEditCheckListDialog,
  handleChangeCheckListRemarks,
  setCheckListManagementDialog,
  checkListItems,
  setShowEditCheckListItemDialog,
  changeCurrentSubListItem,
  dispatch,
  subLoading,
  userHierarchy,
  userRole,
}) => {
  return (
    <div className="accordion-item" id={"a" + index}>
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#flush-collapse${"a" + index}`}
          aria-expanded="false"
          aria-controls={`flush-collapse${"a" + index}`}
          onClick={() => handleChangeCurrentCheckListId(item?.id)}
        >
          <div className="d-flex w-100 me-3 align-items-center justify-content-between">
            <div className=" d-flex align-items-center">
              {item?.description}
            </div>
            {(userRole === "ADMIN" || userHierarchy === "IAH") && (
              <div
                className=" d-flex align-items-center underline"
                onClick={() => setShowEditCheckListDialog(true)}
              >
                Rename Checklist
              </div>
            )}
          </div>
        </button>
      </h2>
      <div
        id={`flush-collapse${"a" + index}`}
        className="accordion-collapse collapse"
        data-bs-parent="#accordionCheckListExample"
      >
        {subLoading ? (
          <CircularProgress />
        ) : (
          <div>
            {(userRole === "ADMIN" || userHierarchy === "IAH") && (
              <div className="rows mt-4 mb-4 px-3">
                <select
                  className="col-lg-6 form-select px-3"
                  value={item?.defaultRemarks}
                  onChange={(e) => handleChangeCheckListRemarks(e)}
                >
                  <option value="">Select One</option>
                  <option value={1}>Yes</option>
                  <option value={2}>Partially Applicable</option>
                  <option value={3}>No</option>
                  <option value={4}>Not Applicable</option>
                </select>
              </div>
            )}

            <div className="accordion-body">
              <div className=" mt-3 bg-white p-3">
                {(userRole === "ADMIN" || userHierarchy === "IAH") && (
                  <div
                    className="btn btn-labeled btn-primary px-3 shadow col-lg-2"
                    onClick={() => setCheckListManagementDialog(true)}
                  >
                    <span className="btn-label me-2">
                      <i className="fa fa-plus"></i>
                    </span>
                    Add
                  </div>
                )}

                <div className="row mt-3">
                  <div className="col-lg-12">
                    <div className="table-responsive">
                      <table className="table table-bordered  table-hover rounded">
                        <thead className="bg-secondary text-white">
                          <tr>
                            <th className="w-80">Sr No.</th>
                            <th>Area</th>
                            <th>Subject</th>
                            <th>Particulars</th>
                            <th>Observation</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {checkListItems &&
                          checkListItems[0]?.error !== "Not Found" ? (
                            checkListItems?.map((item, i) => {
                              return (
                                <tr key={i}>
                                  <td>{i + 1}</td>
                                  <td>{item?.area}</td>
                                  <td>{item?.subject}</td>
                                  <td>{item?.particulars}</td>
                                  <td>{item?.observation}</td>
                                  <td>
                                    {(userRole === "ADMIN" ||
                                      userHierarchy === "IAH") && (
                                      <div
                                        onClick={() => {
                                          setShowEditCheckListItemDialog(true);
                                          dispatch(
                                            changeCurrentSubListItem(item)
                                          );
                                        }}
                                      >
                                        <i className="fa fa-edit  px-3 f-18"></i>
                                      </div>
                                    )}
                                  </td>
                                </tr>
                              );
                            })
                          ) : (
                            <tr>
                              <td className="w-300">
                                No CheckListItem to show. Please Add One
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccordionItem;
