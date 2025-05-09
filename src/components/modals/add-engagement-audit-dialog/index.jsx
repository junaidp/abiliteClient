import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import {
  setupAddNewEngagement,
  resetAddEngagementSuccess,
} from "../../../global-redux/reducers/planing/engagement/slice";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import { encryptAndEncode } from "../../../config/helper";

const AddEngagementAuditDialog = ({ setBusinessObjectiveDialog }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [route, setRoute] = React.useState("");
  const { engagementAddSuccess, loading, planingEngagementSingleObject } =
    useSelector((state) => state.planningEngagement);
  const { user } = useSelector((state) => state?.auth);
  const { company } = useSelector((state) => state?.common);

  function addEngagement(routeName, name) {
    setRoute(routeName);
    if (!loading) {
      const companyId = user[0]?.company.find(
        (item) => item?.companyName === company
      )?.id;
      const userId = user[0]?.id;
      dispatch(
        setupAddNewEngagement({
          natureThrough: name,
          engagementName: "",
          initiatedBy: userId,
          company: companyId,
        })
      );
    }
  }

  React.useEffect(() => {
    if (engagementAddSuccess) {
      dispatch(resetAddEngagementSuccess());

      if (planingEngagementSingleObject?.engagement) {
        const encryptedId = encryptAndEncode(
          planingEngagementSingleObject?.engagement.toString()
        );
        navigate(`${route}/${encryptedId}`);
      }
    }
  }, [planingEngagementSingleObject]);

  return (
    <div className="container px-5 p-3">
      <div className="d-flex justify-content-between">
        <div className="heading fs-5 px-1" id="staticBackdropLabel">
          Select Option
        </div>
        <button
          type="button"
          className="btn-close f-22"
          onClick={() => setBusinessObjectiveDialog(false)}
        ></button>
      </div>

      <div className="row pt-5">
        <div className="col-lg-4">
          <a
            className="w-100"
            type="button"
            onClick={() =>
              addEngagement(
                "/audit/business-objectives-redirect",
                "Business Objective"
              )
            }
          >
            <div className="card card p-0 border-0">
              <div className="card-content">
                <div className="card main-card border shadow rounded">
                  {loading &&
                  route === "/audit/business-objectives-redirect" ? (
                    <div className="d-flex justify-center min-h-140 align-items-center">
                      <CircularProgress />
                    </div>
                  ) : (
                    <>
                      <div className="card-header bg-secondary text-center py-3">
                        <svg
                          width="54"
                          height="54"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6L0 18C0 19.5913 0.632141 21.1174 1.75736 22.2426C2.88258 23.3679 4.4087 24 6 24H18C19.5913 24 21.1174 23.3679 22.2426 22.2426C23.3679 21.1174 24 19.5913 24 18V6C24 4.4087 23.3679 2.88258 22.2426 1.75736C21.1174 0.632141 19.5913 0 18 0L6 0ZM16.125 3C16.4234 3 16.7095 3.11853 16.9205 3.3295C17.1315 3.54048 17.25 3.82663 17.25 4.125V6.6615C17.2811 6.68935 17.3107 6.71889 17.3385 6.75H19.875C20.1734 6.75 20.4595 6.86853 20.6705 7.0795C20.8815 7.29048 21 7.57663 21 7.875C21 8.17337 20.8815 8.45952 20.6705 8.6705C20.4595 8.88147 20.1734 9 19.875 9H16.59L14.175 11.4165C14.2639 11.75 14.2751 12.0995 14.2075 12.4381C14.1399 12.7766 13.9954 13.095 13.7853 13.3688C13.5751 13.6427 13.3048 13.8645 12.9952 14.0173C12.6857 14.1701 12.3452 14.2497 12 14.25C11.6803 14.2489 11.3645 14.1798 11.0737 14.0471C10.7828 13.9144 10.5236 13.7213 10.3132 13.4806C10.1028 13.2398 9.9462 12.957 9.8537 12.651C9.7612 12.345 9.73498 12.0228 9.77677 11.7059C9.81856 11.3889 9.92742 11.0845 10.0961 10.8129C10.2647 10.5414 10.4893 10.3089 10.7549 10.1309C11.0205 9.95292 11.3209 9.83359 11.6362 9.78085C11.9515 9.7281 12.2745 9.74315 12.5835 9.825L15 7.41V4.125C15 3.82663 15.1185 3.54048 15.3295 3.3295C15.5405 3.11853 15.8266 3 16.125 3ZM12.876 5.586C12.8818 5.73364 12.8585 5.88099 12.8074 6.01962C12.7563 6.15825 12.6783 6.28545 12.578 6.39396C12.4778 6.50247 12.3571 6.59016 12.2229 6.65202C12.0887 6.71388 11.9436 6.7487 11.796 6.7545C10.7756 6.79405 9.78889 7.13032 8.95671 7.72213C8.12453 8.31394 7.483 9.13559 7.11069 10.0865C6.73839 11.0373 6.65147 12.0761 6.86059 13.0757C7.0697 14.0752 7.56577 14.992 8.28804 15.7139C9.01031 16.4358 9.92742 16.9313 10.9271 17.1399C11.9267 17.3485 12.9654 17.261 13.9161 16.8881C14.8668 16.5153 15.6881 15.8733 16.2794 15.0408C16.8708 14.2083 17.2065 13.2214 17.2455 12.201C17.257 11.9026 17.3866 11.6211 17.6058 11.4182C17.8249 11.2154 18.1156 11.108 18.414 11.1195C18.7124 11.131 18.9939 11.2606 19.1968 11.4798C19.3996 11.6989 19.507 11.9896 19.4955 12.288C19.4395 13.7456 18.9598 15.1553 18.1149 16.3443C17.27 17.5334 16.0967 18.4503 14.7387 18.9828C13.3807 19.5152 11.8969 19.6401 10.4689 19.3422C9.04103 19.0442 7.73099 18.3363 6.69925 17.3051C5.66751 16.274 4.95886 14.9644 4.66006 13.5366C4.36126 12.1089 4.48529 10.625 5.01696 9.26666C5.54862 7.90833 6.46486 6.73452 7.65345 5.88896C8.84205 5.0434 10.2514 4.56279 11.709 4.506C12.0069 4.49464 12.2972 4.602 12.516 4.80451C12.7348 5.00701 12.8643 5.28809 12.876 5.586Z"
                            fill="white"
                          />
                        </svg>
                      </div>

                      <div className="card-body">
                        <h6 className=" text-center fw-bold">
                          Business Objective
                        </h6>
                      </div>
                    </>
                  )}
                </div>
              </div>
              {!loading && (
                <div className="card-hover-text text-center">
                  Define and assess the goals, risks, and controls to ensure
                  alignment with organizational objectives.
                </div>
              )}
            </div>
          </a>
        </div>
        <div className="col-lg-4">
          <a
            className="w-100 "
            type="button"
            onClick={() =>
              addEngagement(
                "/audit/special-project-audit",
                "Special Project/Audit"
              )
            }
          >
            <div className="card card p-0 border-0">
              <div className="card-content">
                <div className="card border main-card shadow rounded">
                  {loading && route === "/audit/special-project-audit" ? (
                    <div className="d-flex justify-center min-h-140 align-items-center">
                      <CircularProgress />
                    </div>
                  ) : (
                    <>
                      <div className="card-header bg-secondary text-center py-3">
                        <svg
                          width="52"
                          height="56"
                          viewBox="0 0 18 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.9375 4.85938C3.83437 4.85938 3.75 4.94375 3.75 5.04688V6.17188C3.75 6.275 3.83437 6.35938 3.9375 6.35938H12.9375C13.0406 6.35938 13.125 6.275 13.125 6.17188V5.04688C13.125 4.94375 13.0406 4.85938 12.9375 4.85938H3.9375ZM8.25 8.23438H3.9375C3.83437 8.23438 3.75 8.31875 3.75 8.42188V9.54688C3.75 9.65 3.83437 9.73438 3.9375 9.73438H8.25C8.35313 9.73438 8.4375 9.65 8.4375 9.54688V8.42188C8.4375 8.31875 8.35313 8.23438 8.25 8.23438ZM7.125 18.9688H1.875V2.46875H15V9.96875C15 10.0719 15.0844 10.1562 15.1875 10.1562H16.5C16.6031 10.1562 16.6875 10.0719 16.6875 9.96875V1.53125C16.6875 1.11641 16.3523 0.78125 15.9375 0.78125H0.9375C0.522656 0.78125 0.1875 1.11641 0.1875 1.53125V19.9062C0.1875 20.3211 0.522656 20.6562 0.9375 20.6562H7.125C7.22813 20.6562 7.3125 20.5719 7.3125 20.4688V19.1562C7.3125 19.0531 7.22813 18.9688 7.125 18.9688ZM17.4375 16.9062H14.0625V16.0484C15.1477 15.725 15.9375 14.7219 15.9375 13.5312C15.9375 12.0805 14.7633 10.9062 13.3125 10.9062C11.8617 10.9062 10.6875 12.0805 10.6875 13.5312C10.6875 14.7195 11.4773 15.725 12.5625 16.0484V16.9062H9.1875C8.98125 16.9062 8.8125 17.075 8.8125 17.2812V20.8438C8.8125 21.05 8.98125 21.2188 9.1875 21.2188H17.4375C17.6438 21.2188 17.8125 21.05 17.8125 20.8438V17.2812C17.8125 17.075 17.6438 16.9062 17.4375 16.9062ZM12.1406 13.5312C12.1406 12.8844 12.6656 12.3594 13.3125 12.3594C13.9594 12.3594 14.4844 12.8844 14.4844 13.5312C14.4844 14.1781 13.9594 14.7031 13.3125 14.7031C12.6656 14.7031 12.1406 14.1781 12.1406 13.5312ZM16.3594 19.7656H10.2656V18.3594H16.3594V19.7656Z"
                            fill="white"
                          />
                        </svg>
                      </div>

                      <div className="card-body">
                        <h6 className=" text-center fw-bold">
                          Special Project/Audit
                        </h6>
                      </div>
                    </>
                  )}
                </div>
              </div>
              {!loading && (
                <div className="card-hover-text text-center">
                  Initiate a focused audit or special project to address
                  specific issues or areas of concern.
                </div>
              )}
            </div>
          </a>
        </div>
        <div className="col-lg-4">
          <a
            className="w-100 "
            type="button"
            onClick={() =>
              addEngagement(
                "/audit/compliance-checklist",
                "Compliance Checklist"
              )
            }
          >
            <div className="card p-0 border-0">
              <div className="card-content">
                <div className="card border main-card shadow rounded">
                  {loading && route === "/audit/compliance-checklist" ? (
                    <div className="d-flex justify-center min-h-140 align-items-center">
                      <CircularProgress />
                    </div>
                  ) : (
                    <>
                      <div className="card-header bg-secondary text-center py-3">
                        <svg
                          width="52"
                          height="56"
                          viewBox="0 0 18 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.9375 4.85938C3.83437 4.85938 3.75 4.94375 3.75 5.04688V6.17188C3.75 6.275 3.83437 6.35938 3.9375 6.35938H12.9375C13.0406 6.35938 13.125 6.275 13.125 6.17188V5.04688C13.125 4.94375 13.0406 4.85938 12.9375 4.85938H3.9375ZM8.25 8.23438H3.9375C3.83437 8.23438 3.75 8.31875 3.75 8.42188V9.54688C3.75 9.65 3.83437 9.73438 3.9375 9.73438H8.25C8.35313 9.73438 8.4375 9.65 8.4375 9.54688V8.42188C8.4375 8.31875 8.35313 8.23438 8.25 8.23438ZM7.125 18.9688H1.875V2.46875H15V9.96875C15 10.0719 15.0844 10.1562 15.1875 10.1562H16.5C16.6031 10.1562 16.6875 10.0719 16.6875 9.96875V1.53125C16.6875 1.11641 16.3523 0.78125 15.9375 0.78125H0.9375C0.522656 0.78125 0.1875 1.11641 0.1875 1.53125V19.9062C0.1875 20.3211 0.522656 20.6562 0.9375 20.6562H7.125C7.22813 20.6562 7.3125 20.5719 7.3125 20.4688V19.1562C7.3125 19.0531 7.22813 18.9688 7.125 18.9688ZM17.4375 16.9062H14.0625V16.0484C15.1477 15.725 15.9375 14.7219 15.9375 13.5312C15.9375 12.0805 14.7633 10.9062 13.3125 10.9062C11.8617 10.9062 10.6875 12.0805 10.6875 13.5312C10.6875 14.7195 11.4773 15.725 12.5625 16.0484V16.9062H9.1875C8.98125 16.9062 8.8125 17.075 8.8125 17.2812V20.8438C8.8125 21.05 8.98125 21.2188 9.1875 21.2188H17.4375C17.6438 21.2188 17.8125 21.05 17.8125 20.8438V17.2812C17.8125 17.075 17.6438 16.9062 17.4375 16.9062ZM12.1406 13.5312C12.1406 12.8844 12.6656 12.3594 13.3125 12.3594C13.9594 12.3594 14.4844 12.8844 14.4844 13.5312C14.4844 14.1781 13.9594 14.7031 13.3125 14.7031C12.6656 14.7031 12.1406 14.1781 12.1406 13.5312ZM16.3594 19.7656H10.2656V18.3594H16.3594V19.7656Z"
                            fill="white"
                          />
                        </svg>
                      </div>

                      <div className="card-body">
                        <h6 className=" text-center fw-bold">
                          Compliance Checklist
                        </h6>
                      </div>
                    </>
                  )}
                </div>
              </div>
              {!loading && (
                <div className="card-hover-text text-center">
                  Start an engagement to verify adherence to laws, regulations,
                  and internal policies.
                </div>
              )}
            </div>
          </a>
        </div>
        <div className="col-lg-4"></div>

        <div className="col-lg-4"></div>
      </div>

      <div className="modal-footer px-2 mt-4">
        <button
          type="button"
          className="btn btn-danger relative top-nagative-40"
          onClick={() => setBusinessObjectiveDialog(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AddEngagementAuditDialog;
