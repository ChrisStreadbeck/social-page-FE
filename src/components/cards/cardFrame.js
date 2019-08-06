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
        longdescription:
          "You are smart. This aint your first rodeo, and you are not about to fall for the preposterous claims made by so many of the profiles on this site. So heres a refreshing perspective—the truth.I pay my mortgage. I wear socks that match. I am an honest man, with a decent career and strong values. So While I could regale you with stories of my trips to Paris or how I resemble Ryan Gosling…I know that good communication is a foundation for every relationship. So if we are on the same wavelength, read on…",
        name: "Bob Loblaw",
        shortdescription: "I, Bob, like to take long walks on the beach..."
      },
      {
        id: 2,
        image:
          "https://vignette.wikia.nocookie.net/arresteddevelopment/images/e/e6/3x3_Bob_Loblaw.png/revision/latest?cb=20121117203508",
        longdescription:
          "You are smart. This aint your first rodeo, and you are not about to fall for the preposterous claims made by so many of the profiles on this site. So heres a refreshing perspective—the truth.I pay my mortgage. I wear socks that match. I am an honest man, with a decent career and strong values. So While I could regale you with stories of my trips to Paris or how I resemble Ryan Gosling…I know that good communication is a foundation for every relationship. So if we are on the same wavelength, read on…",
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

          slug={user.slug}
        />
      );
    });
  }

  render() {
    return <div className="card-page">{this.renderUsers()}</div>;
  }
}

export default CardFrame;
