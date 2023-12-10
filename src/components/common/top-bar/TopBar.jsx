import React from "react";
import "./TopBar.css";
import user1 from "../../../assets/user-1.jpg";
import user2 from "../../../assets/user-2.jpg";
import user3 from "../../../assets/user-3.jpg";
import user4 from "../../../assets/user-4.jpg";
import user5 from "../../../assets/user-5.jpg";
import accountIcon from "../../../assets/icon-account.svg";
import logo from "../../../assets/light-logo-.png";
import { Link } from "react-router-dom";
import { changeShowSidebar } from "../../../global-redux/reducers/common/slice";
import { useDispatch, useSelector } from "react-redux";
import { useDetectClickOutside } from "react-detect-click-outside";

const TopBar = () => {
  let dispatch = useDispatch();
  let { showSidebar } = useSelector((state) => state.common);
  let [showUserProfile, setShowUserProfile] = React.useState(false);
  let [shownotification, setShowNotification] = React.useState(false);
  const notificationRef = useDetectClickOutside({
    onTriggered: closeNotficationDropDown,
  });
  const userRef = useDetectClickOutside({
    onTriggered: closeUserProfileDropDown,
  });
  function closeNotficationDropDown() {
    setShowNotification(false);
  }
  function closeUserProfileDropDown() {
    setShowUserProfile(false);
  }
  return (
    <header className="app-header shadow-sm mb-3 px-0 ">
      <nav className="navbar navbar-expand-lg navbar-light px-5">
        <a className="text-nowrap mx-auto logo-img"></a>

        <div>
          <Link to="/">
            <img src={logo} className="light-logo" width="154" alt="" />
          </Link>
        </div>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <button
            style={{ marginLeft: "100px" }}
            className="btn btn-light"
            onClick={() => dispatch(changeShowSidebar(!showSidebar))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                // fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </button>

          <div className="d-flex align-items-center justify-content-between">
            <a
              className="nav-link d-flex d-lg-none align-items-center justify-content-center"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#mobilenavbar"
              aria-controls="offcanvasWithBothOptions"
            ></a>
            <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-center">
              <li
                className="nav-item dropdown"
                onClick={() => {
                  setShowNotification((pre) => !pre);
                  setShowUserProfile(false);
                }}
                ref={notificationRef}
              >
                <a
                  className="nav-link nav-icon-hover"
                  id="drop2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-bell-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                  </svg>
                  <div className="notification bg-primary rounded-circle"></div>
                </a>
                {shownotification && (
                  <div
                    className="notification-wrap"
                    aria-labelledby="drop2"
                  >
                    <div className="d-flex align-items-center justify-content-between py-3 px-7">
                      <h5 className="mb-0 fs-5 fw-semibold">Notifications</h5>
                      <span className="badge bg-primary rounded-4 px-3 py-1 lh-sm">
                        5 new
                      </span>
                    </div>
                    <div className="message-body" data-simplebar="">
                      <a className="py-6 px-7 d-flex align-items-center dropdown-item">
                        <span className="me-3">
                          <img
                            src={user1}
                            alt="user"
                            className="rounded-circle"
                            width="48"
                            height="48"
                          />
                        </span>
                        <div className="w-75 d-inline-block v-middle">
                          <h6 className="mb-1 fw-semibold">
                            Roman Joined the Team!
                          </h6>
                          <span className="d-block">Congratulate him</span>
                        </div>
                      </a>
                      <a className="py-6 px-7 d-flex align-items-center dropdown-item">
                        <span className="me-3">
                          <img
                            src={user2}
                            alt="user"
                            className="rounded-circle"
                            width="48"
                            height="48"
                          />
                        </span>
                        <div className="w-75 d-inline-block v-middle">
                          <h6 className="mb-1 fw-semibold">New message</h6>
                          <span className="d-block">
                            Salma sent you new message
                          </span>
                        </div>
                      </a>
                      <a className="py-6 px-7 d-flex align-items-center dropdown-item">
                        <span className="me-3">
                          <img
                            src={user3}
                            alt="user"
                            className="rounded-circle"
                            width="48"
                            height="48"
                          />
                        </span>
                        <div className="w-75 d-inline-block v-middle">
                          <h6 className="mb-1 fw-semibold">Bianca sent payment</h6>
                          <span className="d-block">Check your earnings</span>
                        </div>
                      </a>
                      <a className="py-6 px-7 d-flex align-items-center dropdown-item">
                        <span className="me-3">
                          <img
                            src={user4}
                            alt="user"
                            className="rounded-circle"
                            width="48"
                            height="48"
                          />
                        </span>
                        <div className="w-75 d-inline-block v-middle">
                          <h6 className="mb-1 fw-semibold">
                            Jolly completed tasks
                          </h6>
                          <span className="d-block">Assign her new tasks</span>
                        </div>
                      </a>
                      <a className="py-6 px-7 d-flex align-items-center dropdown-item">
                        <span className="me-3">
                          <img
                            src={user5}
                            alt="user"
                            className="rounded-circle"
                            width="48"
                            height="48"
                          />
                        </span>
                        <div className="w-75 d-inline-block v-middle">
                          <h6 className="mb-1 fw-semibold">
                            John received payment
                          </h6>
                          <span className="d-block">
                            $230 deducted from account
                          </span>
                        </div>
                      </a>
                      <a className="py-6 px-7 d-flex align-items-center dropdown-item">
                        <span className="me-3">
                          <img
                            src={user1}
                            alt="user"
                            className="rounded-circle"
                            width="48"
                            height="48"
                          />
                        </span>
                        <div className="w-75 d-inline-block v-middle">
                          <h6 className="mb-1 fw-semibold">
                            Roman Joined the Team!
                          </h6>
                          <span className="d-block">Congratulate him</span>
                        </div>
                      </a>
                    </div>
                    <div className="py-6 px-7 mb-1">
                      <button className="btn btn-outline-primary w-100">
                        {" "}
                        See All Notifications{" "}
                      </button>
                    </div>
                  </div>
                )}
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link pe-0"
                  id="drop1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={() => {
                    setShowUserProfile((pre) => !pre);
                    setShowNotification(false);
                  }}
                  ref={userRef}
                >
                  <div className="d-flex align-items-center">
                    <div className="user-profile-img">
                      <img
                        src={user1}
                        className="rounded-circle"
                        width="35"
                        height="35"
                        alt=""
                      />
                    </div>
                  </div>
                </a>
                {showUserProfile && (
                  <div
                    className="px-4 content-dd dropdown-menu-end  dropdown-menu-animate-up user-profile-dropdown"
                    aria-labelledby="drop1"
                    style={{ position: "absolute" }}
                  >
                    <div
                      data-simplebar=""
                    >
                      <div className="py-3 px-7 pb-0">
                        <h5 className="mb-0 fs-5 fw-semibold">User Profile</h5>
                      </div>
                      <div className="d-flex align-items-center py-9 mx-7 border-bottom">
                        <img
                          src={user1}
                          className="rounded-circle"
                          width="80"
                          height="80"
                          alt=""
                        />
                        <div className="ms-3">
                          <h5 className="mb-1 fs-3">Abdullah Shafique</h5>
                          <span className="mb-1 d-block text-dark">Admin</span>
                          <p className="mb-0 d-flex text-dark align-items-center gap-2">
                            <i className="fa fa-envelope fs-4"></i> info@abilite.com
                          </p>
                        </div>
                      </div>
                      <div
                        className="message-body d-grid"
                        style={{ overflow: "hidden" }}
                      >
                        <a
                          href="page-user-profile.html"
                          className="py-8 px-7 mt-8 d-flex align-items-center"
                        >
                          <span className="d-flex align-items-center justify-content-center bg-light rounded-1 p-6">
                            <img
                              src={accountIcon}
                              alt=""
                              width="24"
                              height="24"
                            />
                          </span>
                          <div className="w-75 d-inline-block v-middle ps-3">
                            <h6 className="mb-1 bg-hover-primary fw-semibold">
                              {" "}
                              My Profile{" "}
                            </h6>
                            <span className="d-block text-dark">
                              Account Settings
                            </span>
                          </div>
                        </a>
                        <button
                          className="btn btn-outline-primary w-75 my-3"
                          style={{ justifySelf: "center", margin: "auto" }}
                        >
                          {" "}
                          Logout{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default TopBar;
