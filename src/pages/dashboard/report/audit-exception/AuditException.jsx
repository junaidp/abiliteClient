import React, { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";

const AuditException = lazy(() =>
  import("../../../../components/dashboard/reports/audit-exception")
);

const AuditExceptionPage = () => {
  return (
    <Suspense
      fallback={
        <div className="py-2 px-2">
          <CircularProgress />
        </div>
      }
    >
      <AuditException />
    </Suspense>
  );
};

export default AuditExceptionPage;
