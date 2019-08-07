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
        `https://social-page-be.herokuapp.com/social/${this.props.match.params.slug}`
      )
      .then(response => {
        this.setState({
          users: response.data
        });
      })
      .catch(error => console.log("getUsers error", error));
  }

  render() {
    const { image, longdescription, name } = this.state.users;
    return (
      <div className="card-detail-wrapper">
        <div className="centered-profile">
          <div className="card-detail-pic">
            <img src={image} alt="profile-pic" />
          </div>
          <div className="card-detail-username">{name}</div>
        </div>
        <div className="card-detail-long-text">{longdescription}</div>
      </div>
    );
  }
}

export default CardDetail;
