import React from "react";
import ViewRiskAssessment from "../../../../../components/dashboard/planing/risk-assessments/view-risk-assessment/index";
import { Helmet } from "react-helmet-async";

const ViewRiskAssessmentPage = () => {
  return (
    <div>
      <Helmet>
        <title>View Risk Assessment</title>
        <meta name="description" content="Nested component" />
      </Helmet>
      <ViewRiskAssessment />
    </div>
  );
};

export default ViewRiskAssessmentPage;
