import React, { Component } from "react";
import axios from "axios";

import ProfileCard from "./profileCard";

class CardFrame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      data: []
    };

    this.getProfileItems = this.getProfileItems.bind(this);
  }

  getProfileItems() {
    axios
      .get("https://social-page-be.herokuapp.com/socials")
      .then(response => {
        this.setState({
          data: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  renderUsers() {
    return this.state.data.map(user => {
      return (
        <ProfileCard
          key={user.id}
          id={user.id}
          image={user.image}
          person={user.name}
          tag={user.shortdescription}
          bio={user.longdescription}
          slug={user.id}
          form={this.props.form}
        />
      );
    });
  }

  componentDidMount() {
    this.getProfileItems();
  }

  render() {
    return <div className="card-page">{this.renderUsers()}</div>;
  }
}

export default CardFrame;
