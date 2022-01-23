import React from "react";
import { connect } from 'react-redux';

import { changeLikeStatus, deleteUser } from '../../redux/user/user.actions';

import { useNavigate } from 'react-router-dom';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import PhoneEnabledOutlinedIcon from '@material-ui/icons/PhoneEnabledOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteIcon from '@material-ui/icons//Delete';

import "./card.styles.scss";

const Card = ({ user, changeLikeStatus, users, deleteUser }) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`user${user.id}`, { state: { user } });
  }

  return (
    <div className="card">
      <img className="image" alt="avatar" src={`https://avatars.dicebear.com/v2/avataaars/${user.name}.svg`} />
      <div className="information">
        <div className="info">
          <h1 onClick={handleClick}><strong>{user.name}</strong></h1>
          <h1><EmailOutlinedIcon fontSize="small" /> {user.email}</h1>
          <h1><PhoneEnabledOutlinedIcon fontSize="small" /> {user.phone}</h1>
          <h1><LanguageOutlinedIcon fontSize="small" /> https://{user.website}</h1>
        </div>
      </div>
      <div className="events">
        {
          user.like === false ? 
            <FavoriteBorderOutlinedIcon 
              className="icon" 
              fontSize="small"
              onClick={() => changeLikeStatus(users, user)} 
            /> :
            <FavoriteIcon 
              className="icon" 
              color="secondary"
              fontSize="small"
              onClick={() => changeLikeStatus(users, user)} 
            /> 
        }  
        <EditOutlinedIcon 
          className="icon" 
          fontSize="small" 
        />
        <DeleteIcon 
          className="icon" 
          fontSize="small" 
          onClick={() => deleteUser(users, user)} 
        />
      </div>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => ({
  changeLikeStatus: (users, user) => dispatch(changeLikeStatus(users, user)),
  deleteUser: (users, user) => dispatch(deleteUser(users, user))
});

export default connect(null, mapDispatchToProps)(Card);
