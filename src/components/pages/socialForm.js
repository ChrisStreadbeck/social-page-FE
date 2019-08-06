import React, { useState } from "react";
import DropzoneComponent from "react-dropzone-component";
import request from "superagent";

import "../../../node_modules/react-dropzone-component/styles/filepicker.css";
import "../../../node_modules/dropzone/dist/min/dropzone.min.css";

import CardFrame from "../cards/cardFrame";

const SocialForm = props => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [id, setId] = useState("");
  const [shortdescription, setShortdescription] = useState("");
  const [longdescription, setLongdescription] = useState("");

  const imageRef = React.createRef();

  const componentConfig = () => {
    return {
      iconFiletypes: [".jpg", ".png"],
      showFiletypeIcon: true,
      postUrl: "https://httpbin.org/post"
    };
  };

  const djsConfig = () => {
    return {
      addRemoveLinks: true,
      maxFiles: 1
    };
  };

  const handleSocialDrop = () => {
    return {
      addedfile: file => {
        let upload = request
          .post("https://api.cloudinary.com/v1_1/cstread/image/upload")
          .field("upload_preset", "donut-images")
          .field("file", file);
        upload.end((error, response) => {
          if (error) {
            console.log(error);
          }
          if (response) {
            setImage(response.body.secure_url);
          }
        });
      }
    };
  };

  const handleNewSocialSubmission = e => {
    e.preventDefault();
    fetch("https://social-page-be.herokuapp.com/add-social", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: name,
        shortdescription: shortdescription,
        longdescription: longdescription,
        image: image,
        id: id,
        userId: props.userId
      })
    })
      .then(result => result.json())
      .then(setName(""))
      .then(setLongdescription(""))
      .then(setShortdescription(""))
      .then(setImage(""))
      .then(setId(""))

      .then(imageRef.current.dropzone.removeAllFiles())
      .catch(error => console.log("form submit", error));
  };

  return (
    <div>
      <div className="form-wrapper">
        <form className="form" onSubmit={e => handleNewSocialSubmission(e)}>
          <div className="inputs-wrapper">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Short Bio"
              value={shortdescription}
              onChange={e => setShortdescription(e.target.value)}
            />
            <input
              type="text"
              placeholder="Long Bio"
              value={longdescription}
              onChange={e => setLongdescription(e.target.value)}
            />

            <div className="dropzone-wrapper">
              <DropzoneComponent
                className="dropzone-image"
                ref={imageRef}
                config={componentConfig()}
                djsConfig={djsConfig()}
                eventHandlers={handleSocialDrop()}
              >
                <div className="message">Profile Picture</div>
              </DropzoneComponent>
            </div>

            <button className="btn" type="submit">
              SAVE
            </button>
          </div>
        </form>
        <div className="side-bar">
          <CardFrame form={true} />
        </div>
      </div>
    </div>
  );
};

export default SocialForm;
