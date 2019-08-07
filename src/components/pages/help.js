import React from "react";
import { Link } from "react-router-dom";

const Help = () => {
  return (
    <div className="help-wrapper">
      <div className="title">
        <h1>There is no help for you here</h1>
      </div>

      <div className="filler">
        <h2>
          If you are looking for help, you have come to the wrong place. There
          is no help here. Only judgement. You may be having problems figuring
          out how the website works. You might want to know how the form
          submission works. You may even be wondering where to go to get help.
          <br />
          <span>Too bad.</span>
          <br />
          You will just have to go somewhere else to find help.
        </h2>
      </div>
      <div className="polite">
        <Link to="real-help">Please Help Me?</Link>
      </div>
    </div>
  );
};

export default Help;
