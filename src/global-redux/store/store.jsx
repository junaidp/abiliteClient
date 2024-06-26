import { configureStore } from "@reduxjs/toolkit";
import commonReducer from "../reducers/common/slice";
import authReducer from "../reducers/auth/slice";
import settingsCheckListReducer from "../reducers/settings/check-list/slice";
import settingsCompanyReducer from "../reducers/settings/company-management/slice";
import settingsRiskControlMatrixReducer from "../reducers/settings/risk-control-matrix/slice";
import settingsLocationReducer from "../reducers/settings/location/slice";
import settingsAddUserReducer from "../reducers/settings/user-management/slice";
import settingsProcessReducer from "../reducers/settings/process/slice";
import planingEngagementsReducers from "../reducers/planing/engagement/slice";
import planingAuditPlanSummaryReducers from "../reducers/planing/audit-plan-summary/slice";
import planingRiskAssessmentReducer from "../reducers/planing/risk-assessment/slice";
import planingAuditableUnitReducer from "../reducers/planing/auditable-units/slice";
import planingJobPrioritizationReducer from "../reducers/planing/job-prioritization/slice";
import planingJobSchedulingReducer from "../reducers/planing/job-scheduling/slice";
import reportReducer from "../reducers/reports/slice";
import InternalAuditReportReducer from "../reducers/reports/internal-audit-report/slice";
import reportingReducer from "../reducers/reporting/slice";
import auditEngagementReducer from "../reducers/audit-engagement/slice";
import settingCPListReducer from "../reducers/settings/cp-list/slice";
import settingRiskFactorReducer from "../reducers/settings/risk-factor/slice";
import settingsSupportingDocumentReducer from "../reducers/settings/supporting-docs/slice";
import consolidationReportReducer from "../reducers/reports/consolidation-report/slice";
import tasksManagementReducer from "../reducers/tasks-management/slice";
export const store = configureStore({
  reducer: {
    common: commonReducer,
    auth: authReducer,
    // settings
    setttingsCheckList: settingsCheckListReducer,
    setttingsLocation: settingsLocationReducer,
    setttingsRiskControlMatrix: settingsRiskControlMatrixReducer,
    setttingsProcess: settingsProcessReducer,
    setttingsUserManagement: settingsAddUserReducer,
    settingsCompanyManagement: settingsCompanyReducer,
    settingsCPList: settingCPListReducer,
    settingsRiskFactor: settingRiskFactorReducer,
    settingsDocs: settingsSupportingDocumentReducer,
    // planing
    planingEngagements: planingEngagementsReducers,
    planingRiskAssessments: planingRiskAssessmentReducer,
    planingAuditableUnit: planingAuditableUnitReducer,
    planingJobPrioritization: planingJobPrioritizationReducer,
    planingJobScheduling: planingJobSchedulingReducer,
    planingAuditPlanSummary: planingAuditPlanSummaryReducers,
    // Report
    reports: reportReducer,
    internalAuditReports: InternalAuditReportReducer,
    consolidationReports: consolidationReportReducer,
    reporting: reportingReducer,
    // Audit Enagagement
    auditEngagement: auditEngagementReducer,
    // Task Management & Information Request
    tasksManagement: tasksManagementReducer,
  },
});
