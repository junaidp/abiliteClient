import React from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  changeKickOffRequest,
  changeActiveLink,
} from "../../../../global-redux/reducers/common/slice";
import {
  setupGetSingleAuditEngagement,
  resetAuditEngagementAddSuccess,
  resetAuditEngagementObservationAddSuccess,
  handleCleanUp,
  setupGetInitialSingleAuditEngagement,
  setupUpdateSingleAuditEngagement,
} from "../../../../global-redux/reducers/audit-engagement/slice";
import AddKickOffObjectiveDialog from "../../../modals/add-kickoff-objective-dialog";
import AddKickOffRatingDialog from "../../../modals/add-kickoff-rating-dialog";
import AddKickOffControlDialog from "../../../modals/add-kickoff-control-dialog";
import ViewRiskLibraryDialog from "../../../modals/view-risk-control-matrix-library-dialog/index";
import AuditStepsDialog from "../../../modals/audit-steps-dialog/index";
import ComplianceCheckListDialog from "../../../modals/compliance-checklist-dialog/index";
import AddAuditProgramDialog from "../../../modals/add-audit-program-dialog";
import JobName from "./component/job-name";
import AuditNotifications from "./component/audit-notifications";
import RiskControlMatrix from "./component/risk-control-matrix";
import AuditProgram from "./component/audit-program";
import AuditSteps from "./component/audit-steps";
import DefaultRCM from "./component/default-rcm/index";
import ComplianceCheckList from "./component/compliace-checklist";
import { CircularProgress } from "@mui/material";
import { decryptString } from "../../../../config/helper";
import { useParams } from "react-router-dom";

const KickOff = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const auditEngagementId = decryptString(id);
  const { user } = useSelector((state) => state?.auth);
  const {
    auditEngagementAddSuccess,
    auditEngagementObservationAddSuccess,
    singleAuditEngagementObject,
    loading,
    initialLoading,
  } = useSelector((state) => state?.auditEngagement);

  const [currentAuditEngagement, setCurrentAuditEngagement] = React.useState(
    {}
  );
  const [showViewLibrary, setShowViewLibrary] = React.useState(false);
  let [showComplianceCheckListDialog, setShowComplianceCheckListDialog] =
    React.useState(false);
  const [showAuditStepsDialog, setShowAuditStepsDialog] = React.useState(false);
  const [showKickOffObjectiveDialog, setShowKickOffObjectiveDialog] =
    React.useState(false);
  const [showKickOffRatingDialog, setShowKickOffRatingDialog] =
    React.useState(false);
  const [showKickOffControlDialog, setShowKickOffControlDialog] =
    React.useState(false);
  const [showAddAuditProgramDialog, setShowAddAuditProgramDialog] =
    React.useState(false);
  const [auditStepId, setAuditStepId] = React.useState("");
  const [complianceCheckListMainId, setComplianceCheckListMainId] =
    React.useState("");

  React.useEffect(() => {
    const isEmptyObject =
      Object.keys(singleAuditEngagementObject).length === 0 &&
      singleAuditEngagementObject.constructor === Object;
    if (!isEmptyObject) {
      let currentItem = singleAuditEngagementObject;
      if (currentItem?.riskControlMatrix !== null) {
        currentItem = {
          ...currentItem,
          riskControlMatrix: {
            ...currentItem?.riskControlMatrix,
            objectives: currentItem?.riskControlMatrix?.objectives?.map(
              (objective) => {
                return {
                  ...objective,
                  editable: false,
                  riskRatingList: objective?.riskRatingList?.map((rating) => {
                    return {
                      ...rating,
                      editable: false,
                      controlRiskList: rating?.controlRiskList?.map(
                        (control) => {
                          return {
                            ...control,
                            editable: false,
                          };
                        }
                      ),
                    };
                  }),
                };
              }
            ),
          },
        };
      }
      if (
        currentItem?.auditProgram !== null &&
        currentItem?.auditProgram?.programList?.length !== 0
      ) {
        currentItem = {
          ...currentItem,
          auditProgram: {
            ...currentItem?.auditProgram,
            programList: currentItem?.auditProgram?.programList?.map(
              (program) => {
                return {
                  ...program,
                  editable: false,
                };
              }
            ),
          },
        };
      }
      setCurrentAuditEngagement(currentItem);
    }
  }, [singleAuditEngagementObject]);

  React.useEffect(() => {
    if (auditEngagementAddSuccess) {
      dispatch(setupGetSingleAuditEngagement(auditEngagementId));
      dispatch(resetAuditEngagementAddSuccess());
    }
  }, [auditEngagementAddSuccess]);

  React.useEffect(() => {
    if (auditEngagementObservationAddSuccess) {
      dispatch(resetAuditEngagementObservationAddSuccess());
    }
  }, [auditEngagementObservationAddSuccess]);

  React.useEffect(() => {
    if (user[0]?.token && auditEngagementId) {
      dispatch(setupGetInitialSingleAuditEngagement(auditEngagementId));
    }
  }, [dispatch]);

  React.useEffect(() => {
    if (singleAuditEngagementObject?.status === "Kick Off") {
      dispatch(
        setupUpdateSingleAuditEngagement({
          ...singleAuditEngagementObject,
          status: "In Progress",
        })
      );
    }
  }, [singleAuditEngagementObject]);

  React.useEffect(() => {
    dispatch(changeKickOffRequest(""));
  }, []);

  React.useEffect(() => {
    if (!auditEngagementId) {
      navigate("/audit/audit-engagement");
    }
  }, [auditEngagementId]);

  React.useEffect(() => {
    dispatch(changeActiveLink("li-audit-engagement"));
    return () => {
      dispatch(handleCleanUp());
    };
  }, []);

  return (
    <div>
      {initialLoading ? (
        <div className="my-3">
          <CircularProgress />
        </div>
      ) : singleAuditEngagementObject[0]?.error === "Not Found" ? (
        "Audit Engagement Not Found"
      ) : (
        <>
          {showViewLibrary && (
            <div className="model-parent">
              <div className="model-wrap">
                <ViewRiskLibraryDialog
                  setShowViewLibrary={setShowViewLibrary}
                  currentAuditEngagement={currentAuditEngagement}
                />
              </div>
            </div>
          )}

          {showAuditStepsDialog && (
            <div className="model-parent">
              <div className="model-wrap">
                <AuditStepsDialog
                  setShowAuditStepsDialog={setShowAuditStepsDialog}
                  auditStepId={auditStepId}
                  currentAuditEngagement={currentAuditEngagement}
                />
              </div>
            </div>
          )}
          {showComplianceCheckListDialog && (
            <div className="model-parent">
              <div className="model-wrap-compliance">
                <ComplianceCheckListDialog
                  setShowComplianceCheckListDialog={
                    setShowComplianceCheckListDialog
                  }
                  currentAuditEngagement={currentAuditEngagement}
                  complianceCheckListMainId={complianceCheckListMainId}
                />
              </div>
            </div>
          )}
          {showAddAuditProgramDialog && (
            <div className="model-parent">
              <div className="model-wrap">
                <AddAuditProgramDialog
                  setShowAddAuditProgramDialog={setShowAddAuditProgramDialog}
                  auditEngagementId={auditEngagementId}
                  currentAuditEngagement={currentAuditEngagement}
                />
              </div>
            </div>
          )}
          {/* Risk Control Matrix Dialogs */}
          {showKickOffObjectiveDialog && (
            <div className="model-parent">
              <div className="model-wrap">
                <AddKickOffObjectiveDialog
                  setShowKickOffObjectiveDialog={setShowKickOffObjectiveDialog}
                  auditEngagementId={auditEngagementId}
                />
              </div>
            </div>
          )}
          {showKickOffRatingDialog && (
            <div className="model-parent">
              <div className="model-wrap">
                <AddKickOffRatingDialog
                  setShowKickOffRatingDialog={setShowKickOffRatingDialog}
                  currentAuditEngagement={currentAuditEngagement}
                />
              </div>
            </div>
          )}
          {showKickOffControlDialog && (
            <div className="model-parent">
              <div className="model-wrap">
                <AddKickOffControlDialog
                  setShowKickOffControlDialog={setShowKickOffControlDialog}
                  currentAuditEngagement={currentAuditEngagement}
                  auditEngagementId={auditEngagementId}
                />
              </div>
            </div>
          )}

          <header className="section-header my-3  text-start d-flex align-items-center justify-content-between">
            <div className="mb-0 heading d-flex align-items-center">
              <i
                onClick={() => navigate("/audit/audit-engagement")}
                className="fa fa-arrow-left text-primary fs-5 pe-3 cursor-pointer"
              ></i>

              <h2 className="mx-2 m-2 heading">
                {currentAuditEngagement?.aetitle}
              </h2>
            </div>
          </header>

          <div className="row px-4">
            <div className="col-md-12">
              <div className="accordion" id="accordionFlushExample">
                <JobName currentAuditEngagement={currentAuditEngagement} />
                <AuditNotifications
                  currentAuditEngagement={currentAuditEngagement}
                  auditEngagementId={auditEngagementId}
                />
                {currentAuditEngagement?.jobType !== "Compliance Checklist" &&
                  currentAuditEngagement?.riskControlMatrix === null && (
                    <DefaultRCM auditEngagementId={auditEngagementId} />
                  )}
                {currentAuditEngagement?.jobType !== "Compliance Checklist" && (
                  <RiskControlMatrix
                    setShowViewLibrary={setShowViewLibrary}
                    currentAuditEngagement={currentAuditEngagement}
                    setCurrentAuditEngagement={setCurrentAuditEngagement}
                    setShowKickOffObjectiveDialog={
                      setShowKickOffObjectiveDialog
                    }
                    setShowKickOffRatingDialog={setShowKickOffRatingDialog}
                    setShowKickOffControlDialog={setShowKickOffControlDialog}
                    auditEngagementId={auditEngagementId}
                  />
                )}
                {currentAuditEngagement?.jobType !== "Compliance Checklist" && (
                  <AuditProgram
                    currentAuditEngagement={currentAuditEngagement}
                    setCurrentAuditEngagement={setCurrentAuditEngagement}
                    setShowAddAuditProgramDialog={setShowAddAuditProgramDialog}
                    auditEngagementId={auditEngagementId}
                    singleAuditEngagementObject={singleAuditEngagementObject}
                  />
                )}
                {currentAuditEngagement?.jobType !== "Compliance Checklist" && (
                  <AuditSteps
                    setShowAuditStepsDialog={setShowAuditStepsDialog}
                    currentAuditEngagement={currentAuditEngagement}
                    setAuditStepId={setAuditStepId}
                    singleAuditEngagementObject={singleAuditEngagementObject}
                    loading={loading}
                  />
                )}
                {currentAuditEngagement?.jobType === "Compliance Checklist" && (
                  <ComplianceCheckList
                    setShowComplianceCheckListDialog={
                      setShowComplianceCheckListDialog
                    }
                    currentAuditEngagement={currentAuditEngagement}
                    setComplianceCheckListMainId={setComplianceCheckListMainId}
                    singleAuditEngagementObject={singleAuditEngagementObject}
                  />
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default KickOff;
