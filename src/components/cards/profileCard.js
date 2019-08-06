import React from "react";
import { Link } from "react-router-dom";

const ProfileCard = props => {
  return (
    <div className="profile-card-wrapper">
      <div className="profile-card">
        <img
          src="http://ericsnaturalpharmacy.com/wp-content/uploads/2019/02/blank-profile-picture.png"
          alt=""
        />
        <div className="profile-card-body">
          <h2>Name: {props.name}</h2>
          <p>Bio: {props.description}</p>
          <Link to={`/b/${props.slug}`}>
            <button>Button</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
