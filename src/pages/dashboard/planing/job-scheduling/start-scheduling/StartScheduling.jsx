import React from "react";
import StartScheduling from "../../../../../components/dashboard/planing/job-scheduling/start-scheduling/index";
import { Helmet } from "react-helmet-async";

const StartSchedulingPage = () => {
  return (
    <div>
      <Helmet>
        <title>Start Scheduling</title>
        <meta name="description" content="Nested component" />
      </Helmet>
      <StartScheduling />
    </div>
  );
};

export default StartSchedulingPage;
