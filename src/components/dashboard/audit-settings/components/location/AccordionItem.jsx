import React from "react";
import { useDispatch } from "react-redux";

const AccordionItem = ({
  index,
  setLocationId,
  setSubLocationText,
  item,
  subLocationText,
  handleAddSubLocation,
  loading,
  setSubLocationId,
  setShowEditLocationDialog,
  setShowEditSubLocationDialog,
  setupDeleteSubLocation,
  userRole,
  userHierarchy,
  setShowDeleteLocationDialog,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="accordion-item" key={index}>
      <h2 className="accordion-header" id={"b" + index}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#flush-collapse${"b" + index}`}
          aria-expanded="false"
          aria-controls={`flush-collapse${"b" + index}`}
          onClick={() => {
            setLocationId(item?.id);
            setSubLocationText("");
          }}
        >
          <div className="d-flex w-100 me-3 align-items-center justify-content-between">
            <div className=" d-flex align-items-center">
              {item?.description}
            </div>
          </div>
        </button>
      </h2>
      <div
        id={`flush-collapse${"b" + index}`}
        className="accordion-collapse collapse"
        data-bs-parent="#accordionLocationExample"
      >
        <div className="accordion-body">
          <div className="row">
            <div className="float-end mb-2 col-lg-12">
              <div
                className={`btn btn-labeled btn-primary px-3 shadow  my-4 `}
                onClick={() => setShowEditLocationDialog(true)}
              >
                <span className="btn-label me-2">
                  <i className="fa fa-check-circle f-18"></i>
                </span>
                Edit
              </div>
              {(userRole === "ADMIN" || userHierarchy === "IAH") && (
                <div
                  className={`btn btn-labeled btn-danger mx-4 px-3 shadow  my-4 `}
                  onClick={() => setShowDeleteLocationDialog(true)}
                >
                  <span className="btn-label me-2">
                    <i className="fa fa-check-circle f-18"></i>
                  </span>
                  Delete
                </div>
              )}
            </div>
            <div className="row mb-3 col-lg-12 mt-2">
              <div className="col-lg-6">
                <label className="w-100">Add SubLocation:</label>
                <input
                  className="form-control w-100"
                  placeholder="Enter"
                  type="text"
                  value={subLocationText}
                  onChange={(event) => setSubLocationText(event?.target?.value)}
                />
              </div>
              <div className="col-lg-6 text-end float-end align-self-end">
                <div
                  className={`btn btn-labeled btn-primary px-3 shadow ${
                    loading && "disabled"
                  }`}
                  onClick={handleAddSubLocation}
                >
                  <span className="btn-label me-2">
                    <i className="fa fa-plus"></i>
                  </span>
                  {loading ? "Loading.." : "Add"}
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="table-responsive">
                <table className="table table-bordered  table-hover rounded">
                  <thead className="bg-secondary text-white">
                    <tr>
                      <th className="w-80">Sr No.</th>
                      <th>Particulars</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {item?.subLocations?.length === 0 ? (
                      <tr>
                        <td className="w-300">No sub location to show!</td>
                      </tr>
                    ) : (
                      item?.subLocations?.map((subItem, subIndex) => {
                        return (
                          <tr key={subIndex}>
                            <td>{subItem?.id}</td>
                            <td>{subItem?.description}</td>
                            <td>
                              <i
                                className="fa fa-edit  px-3 f-18 cursor-pointer"
                                onClick={() => {
                                  setSubLocationId(subItem?.id);
                                  setShowEditSubLocationDialog(true);
                                }}
                              ></i>
                              {(userRole === "ADMIN" ||
                                userHierarchy === "IAH") && (
                                <i
                                  className="fa fa-trash text-danger f-18 cusrsor-pointer"
                                  onClick={() => {
                                    dispatch(
                                      setupDeleteSubLocation(
                                        `?deleteId=${subItem?.id}`
                                      )
                                    );
                                  }}
                                ></i>
                              )}
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
