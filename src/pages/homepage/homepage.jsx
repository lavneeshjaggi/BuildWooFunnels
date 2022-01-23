import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import CardList from "../../components/card-list/card-list.component";

import { fetchUsers } from '../../redux/user/user.actions';

import "./homepage.styles.scss";

const HomePage = ({ userData, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="homepage">
      <h1>List of Profiles</h1>
      {
        userData.loading ? <h1>Loading</h1> :
        <CardList users={userData.users} /> 
      }
    </div>
  );
};

const mapStateToProps = (state) => ({
  userData: state.user
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
