import React from "react";

const ProfileCard = props => {
  return (
    <div className="profile-card-wrapper">
      <div className="profile-card">
        <img
          src="http://ericsnaturalpharmacy.com/wp-content/uploads/2019/02/blank-profile-picture.png"
          alt=""
        />
        <div className="profile-card-body">
          <h2>Name: {props.details.name}</h2>
          <p>Bio: {props.details.description}</p>
          <button>Button</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
