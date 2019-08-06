import React, { Component } from "react";

import ProfileCard from "./profileCard";

class CardFrame extends Component {
  state = {
    people: [
      { name: "Dan", description: "I like donuts" },
      { name: "Steph", description: "I like candy" },
      { name: "Kevin", description: "I like pizza" },
      { name: "Steve", description: "I like friends" },
      { name: "Cindy", description: "I like long walks on beach" },
      { name: "Levi", description: "I like free samples" },
      { name: "Pete", description: "I like pretzels" },
      { name: "Mike", description: "I like cheese" }
    ]
  };
  render() {
    let details = this.state.people.map(singleUser => {
      return (
        <div className="profile-cards">
          <ProfileCard details={singleUser} />
        </div>
      );
    });
    return <div className="card-page">{details}</div>;
  }
}

export default CardFrame;
