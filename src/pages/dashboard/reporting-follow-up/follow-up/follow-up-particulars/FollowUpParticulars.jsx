import React from "react";
import FollowUpParticulars from "../../../../../components/dashboard/reporting-follow-up/follow-up/follow-up-particulars/index";
import { Helmet } from "react-helmet-async";

const FollowUpParticularsPage = () => {
  return (
    <div>
      <Helmet>
        <title>Follow Up Particulars</title>
        <meta name="description" content="Nested component" />
      </Helmet>
      <FollowUpParticulars />
    </div>
  );
};

export default FollowUpParticularsPage;
