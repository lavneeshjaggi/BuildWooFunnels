import React from "react";
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import PhoneEnabledOutlinedIcon from '@material-ui/icons/PhoneEnabledOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

import "./user.styles.scss";

const User = ({ user }) => (
<div className="user">
    <img className="image" alt="avatar" src={`https://avatars.dicebear.com/v2/avataaars/${user.name}.svg`} />
    <div className="information">
        <h1><strong>{user.name}</strong></h1>
        <div className="info">
            <h1><EmailOutlinedIcon fontSize="large" /> {user.email}</h1>
            <h1><PhoneEnabledOutlinedIcon fontSize="large" /> {user.phone}</h1>
            <h1><LanguageOutlinedIcon fontSize="large" /> https://{user.website}</h1>
            <h1><BusinessOutlinedIcon fontSize="large" /> {user.company.name}</h1>
            <h1><HomeOutlinedIcon fontSize="large" /> {user.address.street} {user.address.suite}</h1>
        </div>
    </div>
</div>
);

export default User;
