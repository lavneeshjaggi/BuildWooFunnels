import React from "react";

import Card from "../card/card.component";

import "./card-list.styles.scss";

const CardList = (props) => (
  <div className="card-list">
    {
      props.users.map(user => (
        <Card key={user.id} user={user} users={props.users} />
      ))
    }
  </div>
);

export default CardList;
