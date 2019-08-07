import React, { Component } from "react";
import axios from "axios";

class CardDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {}
    };
  }

  componentWillMount() {
    this.getUsers();
  }

  getUsers() {
    axios
      .get(
        `https://social-page-be.herokuapp.com/social/${
          this.props.match.params.slug
        }`
      )
      .then(response => {
        this.setState({
          users: response.data
        });
        console.log(this.state.users);
      })
      .catch(error => console.log("getUsers error", error));
  }

  render() {
    const { image, longdescription, name, shortdescription } = this.state.users;
    return (
      <div className="card-detail-wrapper">
        <div className="centered-profile">
          <div className="card-detail-pic">{image}</div>
          <div className="card-detail-username">{name}</div>
          <div className="card-detail-long-text">{longdescription}</div>
        </div>
      </div>
    );
  }
}

export default CardDetail;
