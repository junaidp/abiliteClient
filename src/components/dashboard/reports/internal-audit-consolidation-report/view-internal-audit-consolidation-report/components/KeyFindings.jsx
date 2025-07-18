import RichTextEditor from "./RichText";
import Chip from "@mui/material/Chip";
import FollowUpItem from "./FollowUpItem";
import LazyLoad from 'react-lazyload';

const KeyFindings = ({ reportObject }) => {
  return (
    <div>
      <div className="col-lg-12 mt-4">
        <div className="heading  fw-bold">Summary Of Key Findings</div>
      </div>
      <div className="border px-3 py-2  mt-3 rounded">
        {reportObject?.reportingsList?.filter(
          (observation) => Number(observation?.implicationRating) === 1
        )?.length === 0 ? (
          <p>No summary of key findings in this job!</p>
        ) : (
          reportObject?.reportingsList
            ?.filter(
              (observation) => Number(observation?.implicationRating) === 1
            )
            ?.map((singleItem, index) => {
              return (
                <LazyLoad key={index} height={window.innerHeight * 2} offset={300}>
                  <div key={index} className="mb-4">
                    <div className="sub-heading  fw-bold mb-2">
                      Finding {index + 1}
                    </div>
                    <div className="mb-4">
                      <RichTextEditor
                        initialValue={singleItem?.observationName}
                      />
                    </div>
                  </div>
                </LazyLoad>
              );
            })
        )}
      </div>
      {/*  */}
      <div className="col-lg-12 mt-4">
        <div className="heading  fw-bold">All Findings</div>
      </div>
      <div className="mt-3">
        {reportObject?.reportingsList?.map((singleMainItem, index) => {
          return (
            <LazyLoad key={index} height={window.innerHeight * 2} offset={300}>
              <div key={index} className="border rounded px-3 py-2 mb-3">
                <div className="d-flex items-center justify-content-between">
                  <div></div>
                  <Chip
                    label={
                      reportObject?.subLocationList?.find(
                        (subLocation) =>
                          subLocation?.id === singleMainItem?.subLocation
                      )?.description
                    }
                  />
                </div>
                <FollowUpItem item={singleMainItem} consolidatedObservationsItem={false} />
              </div>
            </LazyLoad>
          );
        })}
      </div>
    </div>
  );
};

export default KeyFindings;
