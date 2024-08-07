import React from "react";
import UserDetails from "../../../user/user-profile/UserProfile";

const UserInfo = ({ tab }) => {
  return (
    <div
      className="tab-pane fade"
      id="nav-user"
      role="tabpanel"
      aria-labelledby="nav-user-tab"
    >
      {tab === "user" && <UserDetails />}
    </div>
  );
};

export default UserInfo;
