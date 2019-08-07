import React, { Component } from "react";

import ProfileCard from "./profileCard";

class CardFrame extends Component {
  constructor() {
    super();
  }

  renderUsers() {
    const people = [
      {
        id: 1,
        image:
          "https://vignette.wikia.nocookie.net/arresteddevelopment/images/e/e6/3x3_Bob_Loblaw.png/revision/latest?cb=20121117203508",
        longdescription: "long description goes here",
        name: "Bob Loblaw",
        shortdescription: "I, Bob, like to take long walks on the beach..."
      },
      {
        id: 2,
        image:
          "https://vignette.wikia.nocookie.net/arresteddevelopment/images/e/e6/3x3_Bob_Loblaw.png/revision/latest?cb=20121117203508",
        longdescription: "long description goes here",
        name: "Bob Loblaw",
        shortdescription: "I, Bob, like to take long walks on the beach..."
      },
      {
        id: 3,
        image:
          "https://res.cloudinary.com/cstread/image/upload/v1565121532/u5fiacpzralalrpdty3y.png",
        longdescription:
          "Here go Lots of words to fill in his long bio with more information.  There are two sentences.  Oh wait, three...",
        name: "Stuart Hargrave",
        shortdescription: "Super Normal Man "
      }
    ];

    return people.map(user => {
      return (
        <ProfileCard
          image={user.image}
          person={user.name}
          tag={user.shortdescription}
          bio={user.longdescription}
          slug={user.id}
          key={user.id}
        />
      );
    });
  }

  render() {
    return <div className="card-page">{this.renderUsers()}</div>;
  }
}

export default CardFrame;
