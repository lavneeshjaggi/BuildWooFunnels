import React from "react";
import { useLocation } from 'react-router-dom';

import User from '../../components/user/user.component';

const ProfilePage = () => {
  const location = useLocation();

  return (
    <div className="profile">
      <h1>Profile</h1>
      <User user={location.state.user} />
    </div>
  )
}

export default ProfilePage;
