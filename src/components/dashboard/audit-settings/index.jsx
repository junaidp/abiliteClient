import React from "react";
import AddCheckListManagementDialog from "../../modals/add-checklist-management-dialog/index";
import UserManagementDialog from "../../modals/add-user-dialog/index";
import { useDispatch, useSelector } from "react-redux";
import * as XLSX from "xlsx";
import "./index.css";
import AddCompanyDialog from "../../modals/add-company-dialog/index";
import CheckList from "./components/checklist";
import SupportingDocs from "./components/supporting-docs/index";
import Location from "./components/location";
import Company from "./components/company";
import { toast } from "react-toastify";
import RiskFactor from "./components/risk-factor";
import EmailManagement from "./components/email";
import Notifications from "./components/notification";
import UserManagement from "./components/user";
import Modules from "./components/modules";
import Process from "./components/process";
const AuditSettings = () => {
  const { companies } = useSelector((state) => state.company);
  const [companySearch, setCompanySearch] = React.useState("");
  const [activeEmailTab, setActiveEmailTab] = React.useState("systemEmail");
  const [checkListManagementDialog, setCheckListManagementDialog] =
    React.useState(false);
  const [excelData, setExcelData] = React.useState(null);
  const [userManagementDialog, setUserManagementDialog] = React.useState(false);
  const [addCompanyDialog, setAddCompantDialog] = React.useState(false);
  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (!file) {
      toast.error("Please select a file.");
      return;
    }

    const fileType = file.name.slice(
      ((file.name.lastIndexOf(".") - 1) >>> 0) + 2
    );

    if (fileType !== "xls" && fileType !== "xlsx") {
      toast.error("Invalid file type. Please upload an Excel file.");
      return;
    }

    const reader = new FileReader();

    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet);

      setExcelData(jsonData);
    };

    reader.readAsArrayBuffer(file);
  };
  const dispatch = useDispatch();
  return (
    <div>
      {checkListManagementDialog && (
        <div className="audit-settings-modal">
          <div className="model-wrap">
            <AddCheckListManagementDialog
              setCheckListManagementDialog={setCheckListManagementDialog}
            />
          </div>
        </div>
      )}
      {userManagementDialog && (
        <div className="audit-settings-modal">
          <div className="model-wrap">
            <UserManagementDialog
              setUserManagementDialog={setUserManagementDialog}
            />
          </div>
        </div>
      )}
      {addCompanyDialog && (
        <div className="audit-settings-modal">
          <div className="model-wrap">
            <AddCompanyDialog setAddCompantDialog={setAddCompantDialog} />
          </div>
        </div>
      )}
      <div className="card p-3 shadow-sm setting-tab">
        <h2 className="text-center heading p-3">Settings</h2>

        <div className="row">
          <div className="col-lg-2">
            <nav className="mt-4 pb-10">
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
                <button
                  className="nav-link shadow-sm  border-0 mb-3  rounded-0 me-3 "
                  id="nav-com-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-process"
                  type="button"
                  role="tab"
                  aria-controls="nav-com"
                  aria-="false"
                >
                  Process
                </button>
              </div>
            </nav>
          </div>

          <div className="col-lg-10">
            <div
              className="tab-content p-3 mt-4 border bg-light"
              id="nav-tabContent"
            >
              <SupportingDocs
                handleFileUpload={handleFileUpload}
                setExcelData={setExcelData}
                excelData={excelData}
              />

              <Location />

              <RiskFactor />
              <EmailManagement
                activeEmailTab={activeEmailTab}
                setActiveEmailTab={setActiveEmailTab}
              />

              <CheckList
                setCheckListManagementDialog={setCheckListManagementDialog}
              />

              <Notifications />

              <UserManagement
                setUserManagementDialog={setUserManagementDialog}
              />

              <Modules />
              <Company
                setCompanySearch={setCompanySearch}
                setAddCompantDialog={setAddCompantDialog}
                companySearch={companySearch}
                companies={companies}
              />
              <Process />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditSettings;