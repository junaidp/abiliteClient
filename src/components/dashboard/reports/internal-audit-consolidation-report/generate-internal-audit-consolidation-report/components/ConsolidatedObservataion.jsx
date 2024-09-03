import React from "react";
import Chip from "@mui/material/Chip";
import FollowUpItem from "./FollowUpItem";

const KeyFindings = ({ consolidatedObservations, reportObject }) => {
  return (
    <div>
      <div className="col-lg-12 mt-4">
        <div className="heading  fw-bold">Consolidated Findings</div>
      </div>
      <div className="mt-3 mb-3">
        {consolidatedObservations?.map((singleGroup) => {
          return (
            <div>
              <p className="mb-3 consolidatedTitle">
                {singleGroup?.commonTitle}
              </p>
              <div className="border rounded px-3 py-2 mb-3">
                {singleGroup?.observations?.map((singleItem, index) => {
                  return (
                    <div key={index}>
                      <div className="d-flex items-center justify-content-between">
                        <div></div>
                        <Chip
                          label={
                            reportObject?.subLocationList?.find(
                              (subLocation) =>
                                subLocation?.id === singleItem?.subLocation
                            )?.description
                          }
                        />
                      </div>
                      <FollowUpItem
                        item={singleItem}
                        consolidatedObservationsItem={true}
                      />
                      <hr />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KeyFindings;
