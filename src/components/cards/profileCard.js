import React from "react";
import { Link } from "react-router-dom";

const ProfileCard = props => {
  return (
    <div className="profile-card-wrapper">
      <div className="profile-card">

        <img src={props.image} alt="" />
        <div className="profile-card-body">
          <h2>{props.person}</h2>
          <h3>{props.tag}</h3>
          <p>{props.bio}</p>  
          <Link to={`/c/${props.slug}`}>
            <button>Button</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
