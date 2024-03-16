import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setupUploadFile,
  resetFileAddSuccess,
  setupGetAllFiles,
  setupUpdateFile,
} from "../../../../../global-redux/reducers/settings/supporting-docs/slice";
import { toast } from "react-toastify";
import Table from "./components/Table";

const SupportingDocs = ({ userHierarchy, userRole }) => {
  const dispatch = useDispatch();
  const fileInputRef = React.useRef(null);
  const { allFiles, loading, fileAddSuccess } = useSelector(
    (state) => state?.settingsDocs
  );
  const { user } = useSelector((state) => state.auth);
  const { company } = useSelector((state) => state.common);
  const [page, setPage] = React.useState(1);
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [selectedUpdateFile, setSelectedUpdateFile] = React.useState(null);
  const [searchValue, setSearchValue] = React.useState("");
  const handleChangePage = (_, value) => {
    setPage(value);
  };

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
      const companyId = user[0]?.company?.find(
        (item) => item?.companyName === company
      )?.id;
      const formData = new FormData();
      formData.append("file", file);
      formData.append("companyId", Number(companyId));
      dispatch(setupUploadFile(formData));
    }
  };

  const updateFileApiCal = async (file, id) => {
    if (!loading) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("supportingDocId", Number(id));
      dispatch(setupUpdateFile(formData));
    }
  };

  const handleFileUpdate = (id) => {
    if (selectedUpdateFile) {
      updateFileApiCal(selectedUpdateFile, id);
    } else {
      toast.error("No file selected.");
    }
  };
  const handleFileUpload = () => {
    if (selectedFile) {
      onApiCall(selectedFile);
    } else {
      toast.error("No file selected.");
    }
  };

  React.useEffect(() => {
    if (fileAddSuccess) {
      const companyId = user[0]?.company?.find(
        (item) => item?.companyName === company
      )?.id;
      dispatch(setupGetAllFiles(`?companyId=${companyId}`));
      setSelectedFile(null);
      setSelectedUpdateFile(null);
      setPage(1);
      setSearchValue("");
      dispatch(resetFileAddSuccess());
    }
  }, [fileAddSuccess]);

  return (
    <div
      className="tab-pane fade active show"
      id="nav-home"
      role="tabpanel"
      aria-labelledby="nav-home-tab"
    >
      {(userRole === "ADMIN" || userHierarchy === "IAH") && (
        <div>
          <div className="row my-3">
            <div className="col-lg-12">
              <div className="sub-heading  fw-bold">Supporting Documents</div>
            </div>
          </div>
          <div className="row position-relative">
            <div className="col-lg-12 text-center settings-form">
              <form>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
                <p className="mb-0">
                  Drag your files here or click in this area.
                </p>
              </form>
            </div>
            <p className="my-2">
              {selectedFile?.name ? selectedFile?.name : "Select file"}
            </p>
          </div>
          <div className="row my-3">
            <div className="col-lg-12 text-end">
              <button
                className={`btn btn-labeled btn-primary px-3 mt-3 shadow ${
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
        </div>
      )}

      <div className="my-3">
        <div className="flex">
          <div className="row position-relative">
            <div className="col-lg-12 text-center settings-form h-0 border-none">
              <form>
                <input type="file" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-lg-6">
          <label className="w-100">Search File Name:</label>
          <input
            className="form-control w-100"
            placeholder="Enter"
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e?.target?.value)}
          />
        </div>
      </div>

      <Table
        userRole={userRole}
        userHierarchy={userHierarchy}
        allFiles={allFiles}
        loading={loading}
        searchValue={searchValue}
        handleUpdateFileChange={handleUpdateFileChange}
        handleFileUpdate={handleFileUpdate}
        handleChangePage={handleChangePage}
        page={page}
        selectedUpdateFile={selectedUpdateFile}
      />
    </div>
  );
};

export default SupportingDocs;
