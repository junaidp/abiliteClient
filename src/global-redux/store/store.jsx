import { configureStore } from "@reduxjs/toolkit";
import commonReducer from "../reducers/common/slice";
import authReducer from "../reducers/auth/slice";
import settingsCheckListReducer from "../reducers/settings/check-list/slice";
import settingsRiskControlMatrixReducer from "../reducers/settings/risk-control-matrix/slice";
import settingsLocationReducer from "../reducers/settings/location/slice";
import settingsUserManagementReducer from "../reducers/settings/user-management/slice";
import settingsProcessReducer from "../reducers/settings/process/slice";
import planningEngagementReducer from "../reducers/planing/engagement/slice";
import planningAuditPlanSummaryReducer from "../reducers/planing/audit-plan-summary/slice";
import planningRiskAssessmentReducer from "../reducers/planing/risk-assessment/slice";
import planningAuditableUnitReducer from "../reducers/planing/auditable-units/slice";
import planningJobPrioritizationReducer from "../reducers/planing/job-prioritization/slice";
import planningJobSchedulingReducer from "../reducers/planing/job-scheduling/slice";
import planningReportReducer from "../reducers/reports/planing-report/slice";
import internalAuditReportReducer from "../reducers/reports/internal-audit-report/slice";
import reportingReducer from "../reducers/reporting/slice";
import auditEngagementReducer from "../reducers/audit-engagement/slice";
import settingsCPListReducer from "../reducers/settings/cp-list/slice";
import settingsRiskFactorReducer from "../reducers/settings/risk-factor/slice";
import settingsDocsReducer from "../reducers/settings/supporting-docs/slice";
import consolidationReportReducer from "../reducers/reports/consolidation-report/slice";
import tasksManagementReducer from "../reducers/tasks-management/slice";
export const store = configureStore({
  reducer: {
    common: commonReducer,
    auth: authReducer,
    // settings
    settingsCheckList: settingsCheckListReducer,
    settingsLocation: settingsLocationReducer,
    settingsRiskControlMatrix: settingsRiskControlMatrixReducer,
    settingsProcess: settingsProcessReducer,
    settingsUserManagement: settingsUserManagementReducer,
    settingsCPList: settingsCPListReducer,
    settingsRiskFactor: settingsRiskFactorReducer,
    settingsDocs: settingsDocsReducer,
    // planing
    planningEngagement: planningEngagementReducer,
    planningRiskAssessment: planningRiskAssessmentReducer,
    planningAuditableUnit: planningAuditableUnitReducer,
    planningJobPrioritization: planningJobPrioritizationReducer,
    planningJobScheduling: planningJobSchedulingReducer,
    planningAuditPlanSummary: planningAuditPlanSummaryReducer,
    // Report
    planningReport: planningReportReducer,
    internalAuditReport: internalAuditReportReducer,
    consolidationReport: consolidationReportReducer,
    reporting: reportingReducer,
    // Audit Enagagement
    auditEngagement: auditEngagementReducer,
    // Task Management & Information Request
    tasksManagement: tasksManagementReducer,
  },
});
