import React from "react";
import { Link } from "react-router-dom";

const ProfileCard = props => {
  const [socials, setSocial] = React.useState([]);

  const handleUpdateButtonClick = id => {
    console.log(props.id);
  };

  const handleDeleteButtonClick = id => {
    fetch(`https://social-page-be.herokuapp.com/social/${props.id}`, {
      method: "DELETE"
    })
      .then(setSocial(socials.filter(social => social.id !== id)))
      .then(console.log("Deleted!"))
      .catch(error => console.log("deletion error", error));
  };

  return (
    <div className="profile-card-wrapper">
      <div className="profile-card">
        <img src={props.image} alt="" />
        <div className="profile-card-body">
          <h2>{props.person}</h2>
          <h3>{props.tag}</h3>
        </div>
      </div>
      <Link to={`/c/${props.slug}`}>
        <button>Profile</button>
      </Link>
      {props.form ? (
        <div className="update-delete-btns-wrapper">
          <button className="btn" onClick={() => handleUpdateButtonClick()}>
            Edit
          </button>
          <button className="btn" onClick={() => handleDeleteButtonClick()}>
            Delete
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default ProfileCard;
