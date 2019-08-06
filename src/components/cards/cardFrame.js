import React, { Component } from "react";

import ProfileCard from "./profileCard";

class CardFrame extends Component {
  state = {
    people: [
      { name: "Dan", description: "I like donuts", slug: "Dan" },
      { name: "Steph", description: "I like candy", slug: "Steph" },
      { name: "Kevin", description: "I like pizza", slug: "Kevin" },
      { name: "Steve", description: "I like friends", slug: "Steve" },
      {
        name: "Cindy",
        description: "I like long walks on beach",
        slug: "Cindy"
      },
      { name: "Levi", description: "I like free samples", slug: "Levi" },
      { name: "Pete", description: "I like pretzels", slug: "Pete" },
      { name: "Mike", description: "I like cheese", slug: "Mike" }
    ]
  };

  renderUsers() {
    return this.state.people.map(user => {
      return (
        <ProfileCard
          user={user.name}
          description={user.description}
          slug={user.slug}
        />
      );
    });
  }

  render() {
    return <div className="profile-cards">{this.renderUsers()}</div>;
  }
}

export default CardFrame;
