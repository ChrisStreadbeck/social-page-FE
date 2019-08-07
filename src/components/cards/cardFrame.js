import React, { Component } from "react";

import ProfileCard from "./profileCard";

const CardFrame = props => {
  const [socials, setSocial] = React.useState([]);

  React.useEffect(() => {
    fetch("https://social-page-be.herokuapp.com/socials")
      .then(response => response.json())
      .then(data => setSocial(data))
      .catch(error => console.log(error));
  }, []);

  const renderUsers = () => {
    return socials.map(social => {
      return (
        <ProfileCard
          key={social.id}
          id={social.id}
          image={social.image}
          person={social.name}
          tag={social.shortdescription}
          bio={social.longdescription}
          slug={social.id}
          form={props.form}
        />
      );
    });
  };

  return <div className="card-page">{renderUsers()}</div>;
};

export default CardFrame;
