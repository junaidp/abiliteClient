import React from "react";
import { toast } from "react-toastify";
import {
  setupUploadAuditStepCheckListFile,
  setupDeleteAuditStepCheckListFile,
  setupUpdateAuditStepCheckListFile,
} from "../../../../global-redux/reducers/audit-engagement/slice";
import { useSelector, useDispatch } from "react-redux";
import { baseUrl } from "../../../../constants/index";
import "./index.css";

const ObservationFileUpload = ({ item }) => {
  const dispatch = useDispatch();
  const { loading, auditEngagementObservationAddSuccess } = useSelector(
    (state) => state?.auditEngagement
  );
  const updatedFileInputRef = React.useRef(null);
  const fileInputRef = React.useRef(null);
  const [selectedUpdateFile, setSelectedUpdateFile] = React.useState(null);
  const [selectedFile, setSelectedFile] = React.useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpdateFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedUpdateFile(file);
    }
  };

  const onApiCall = async (file) => {
    if (!loading) {
      const formData = new FormData();
      formData.append("file", file);
      dispatch(
        setupUploadAuditStepCheckListFile({ formData: formData, id: item?.id })
      );
    }
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      onApiCall(selectedFile);
    } else {
      toast.error("No file selected.");
    }
  };

  const updateFileApiCal = async (file, id) => {
    if (!loading) {
      const formData = new FormData();
      formData.append("file", file);
      dispatch(
        setupUpdateAuditStepCheckListFile({
          formData: formData,
          id: Number(id),
        })
      );
    }
  };

  const handleFileUpdate = (id) => {
    if (selectedUpdateFile) {
      updateFileApiCal(selectedUpdateFile, id);
    } else {
      toast.error(
        "Please select update file from above in order to change the file."
      );
    }
  };

  function handleDownload(id) {
    window.open(
      `${baseUrl}/auditEngagement/auditStep/auditStepChecklist/ObservationDataAttachments/download?fileId=${id}`,
      "_blank"
    );
  }
  React.useEffect(() => {
    if (auditEngagementObservationAddSuccess) {
      setSelectedFile(null);
      setSelectedUpdateFile(null);
      if (fileInputRef?.current) {
        fileInputRef.current.value = null;
      }
      if (updatedFileInputRef?.current) {
        updatedFileInputRef.current.value = null;
      }
    }
  }, [auditEngagementObservationAddSuccess]);
  return (
    <td className="fileObservationCol fileSubObservationColItem">
      <div className="row mb-3 fileSubObservationColItem">
        <div className="col-lg-12">
          <label className="form-label me-3 mb-3">Attach files</label>

          <div className="row mb-3">
            <div className="col-lg-4 row">
              <div className="col-lg-12">
                <input
                  type="file"
                  id="fileInpu"
                  className="f-10"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
              </div>
              <div className="col-lg-12 mt-4">
                <button
                  className={`btn btn-labeled btn-primary  shadow ${
                    loading && "disabled"
                  }`}
                  onClick={handleFileUpload}
                >
                  <span className="btn-label me-2">
                    <i className="fa fa-save"></i>
                  </span>
                  {loading ? "Loading..." : "Upload"}
                </button>
              </div>
            </div>

            <div className="col-lg-8 row flex flex-end">
              <div className="col-lg-8">
                <label>Updated File here:</label>
                <input
                  type="file"
                  id="fileInpu"
                  className="f-10"
                  ref={updatedFileInputRef}
                  onChange={handleUpdateFileChange}
                />
              </div>
            </div>
          </div>

          <div className="table-responsive">
            <table className="table table-bordered  table-hover rounded">
              <thead className="bg-secondary text-white">
                <tr>
                  <th>Attach Files </th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {!item?.observationsDataAttachmentsList ||
                item?.observationsDataAttachmentsList?.length == 0 ? (
                  <tr>
                    <td className="w-300">No Files Added Yet!</td>
                  </tr>
                ) : (
                  item?.observationsDataAttachmentsList?.map(
                    (fileItem, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <a>{fileItem?.fileName}</a>
                          </td>
                          <td className="w-130">
                            <i
                              class="fa fa-download f-18 mx-2 cursor-pointer"
                              onClick={() => handleDownload(fileItem?.id)}
                            ></i>
                            <i
                              className="fa fa-trash text-danger f-18 cursor-pointer px-2"
                              onClick={() => {
                                if (!loading) {
                                  dispatch(
                                    setupDeleteAuditStepCheckListFile({
                                      fileId: Number(fileItem?.id),
                                      ChecklistObservationsId: Number(item?.id),
                                    })
                                  );
                                }
                              }}
                            ></i>
                            <i
                              className="fa fa-edit px-2 f-18 cursor-pointer"
                              onClick={() => handleFileUpdate(fileItem?.id)}
                            ></i>
                          </td>
                        </tr>
                      );
                    }
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </td>
  );
};

export default ObservationFileUpload;