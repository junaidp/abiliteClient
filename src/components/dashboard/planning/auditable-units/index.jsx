import React from "react";
import "./index.css";
import EditAuditableUnitDialog from "../../../modals/edit-auditable-unit-dialog";
import AuditableUnitRatingDialog from "../../../modals/auditable-unit-rating-dialog/index";
import {
  setupGetAllAuditableUnits,
  resetAuditableUnitSuccess,
} from "../../../../global-redux/reducers/planing/auditable-units/slice";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import AuditableUnitRow from "./components/auditable-unit-row";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SubmitDialog from "./components/submit-dialog";
import ViewDialog from "./components/view-dialog";

const AuditableUnits = () => {
  const dispatch = useDispatch();
  const [showSubmitDialog, setShowSubmitDialog] = React.useState(false);
  const {
    loading,
    allAuditableUnits,
    auditableUnitAddSuccess,
    totalNoOfRecords,
  } = useSelector((state) => state?.planningAuditableUnit);
  const [currentObject, setCurrentObject] = React.useState({});
  const { user } = useSelector((state) => state?.auth);
  const { company } = useSelector((state) => state?.common);
  const [auditableUnitRatingDialog, setAuditableUnitRatingDialog] =
    React.useState(false);
  const [page, setPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(10);
  const [selectedAuditableUnitId, setSelectedAuditableUnitId] =
    React.useState("");
  const [selectedAuditableSubUnitId, setSelectedAuditableSubUnitId] =
    React.useState("");
  const [showViewDialog, setShowViewDialog] = React.useState(false);
  const [showEditAuditableUnit, setShowEditAuditableUnit] =
    React.useState(false);

  const handleChange = (_, value) => {
    setPage(value);
  };

  function handleChangeItemsPerPage(event) {
    const companyId = user[0]?.company?.find(
      (item) => item?.companyName === company
    )?.id;
    if (companyId) {
      setPage(1);
      setItemsPerPage(Number(event.target.value));
      dispatch(
        setupGetAllAuditableUnits({
          companyId,
          page: 1,
          itemsPerPage: Number(event.target.value),
        })
      );
    }
  }

  React.useEffect(() => {
    if (auditableUnitAddSuccess) {
      const companyId = user[0]?.company?.find(
        (item) => item?.companyName === company
      )?.id;
      if (companyId) {
        dispatch(setupGetAllAuditableUnits({ companyId, page, itemsPerPage }));
      }
      dispatch(resetAuditableUnitSuccess());
    }
  }, [auditableUnitAddSuccess]);

  React.useEffect(() => {
    const companyId = user[0]?.company?.find(
      (item) => item?.companyName === company
    )?.id;
    if (companyId) {
      dispatch(setupGetAllAuditableUnits({ companyId, page, itemsPerPage }));
    }
  }, [dispatch, page]);

  return (
    <div>
      {showSubmitDialog && (
        <div className="model-parent d-flex justify-content-between items-center">
          <div className="model-wrap">
            <SubmitDialog
              object={currentObject}
              setShowSubmitDialog={setShowSubmitDialog}
            />
          </div>
        </div>
      )}
      {auditableUnitRatingDialog && (
        <div className="model-parent">
          <div className="model-wrap">
            <AuditableUnitRatingDialog
              setAuditableUnitRatingDialog={setAuditableUnitRatingDialog}
              selectedAuditableUnitId={selectedAuditableUnitId}
            />
          </div>
        </div>
      )}
      {showViewDialog && (
        <div className="model-parent">
          <div className="model-wrap">
            <ViewDialog
              setShowViewDialog={setShowViewDialog}
              selectedAuditableUnitId={selectedAuditableUnitId}
              selectedAuditableSubUnitId={selectedAuditableSubUnitId}
            />
          </div>
        </div>
      )}
      {showEditAuditableUnit && (
        <div className="model-parent">
          <div className="model-wrap">
            <EditAuditableUnitDialog
              setShowEditAuditableUnit={setShowEditAuditableUnit}
              selectedAuditableUnitId={selectedAuditableUnitId}
              selectedAuditableSubUnitId={selectedAuditableSubUnitId}
            />
          </div>
        </div>
      )}
      <>
        <header className="section-header my-3 align-items-center  text-start d-flex ">
          <div className="mb-0 heading">Business Objectives</div>
        </header>
        <div className="row">
          <div className="col-md-12">
            <div className="accordion" id="accordionFlushExample">
              {loading ? (
                <CircularProgress />
              ) : allAuditableUnits?.length === 0 ? (
                <p>No Audit Jobs To Show.</p>
              ) : (
                allAuditableUnits?.map((item, index) => {
                  return (
                    <AuditableUnitRow
                      setSelectedAuditableUnitId={setSelectedAuditableUnitId}
                      key={index}
                      item={item}
                      setAuditableUnitRatingDialog={
                        setAuditableUnitRatingDialog
                      }
                      setSelectedAuditableSubUnitId={
                        setSelectedAuditableSubUnitId
                      }
                      index={index}
                      loading={loading}
                      setCurrentObject={setCurrentObject}
                      setShowSubmitDialog={setShowSubmitDialog}
                      setShowEditAuditableUnit={setShowEditAuditableUnit}
                      setShowViewDialog={setShowViewDialog}
                    />
                  );
                })
              )}
            </div>
          </div>
          {allAuditableUnits?.length > 0 && (
            <div className="row p-0 m-0">
              <div className="col-lg-6 mb-4">
                <Pagination
                  count={Math.ceil(totalNoOfRecords / itemsPerPage)}
                  page={page}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-6 mb-4 d-flex justify-content-end">
                <div>
                  <FormControl sx={{ minWidth: 200 }} size="small">
                    <InputLabel id="demo-select-small-label">
                      Items Per Page
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      label="Age"
                      value={itemsPerPage}
                      onChange={(event) => handleChangeItemsPerPage(event)}
                    >
                      <MenuItem value={10}>10</MenuItem>
                      <MenuItem value={20}>20</MenuItem>
                      <MenuItem value={30}>30</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
          )}
        </div>
      </>
    </div>
  );
};

export default AuditableUnits;
