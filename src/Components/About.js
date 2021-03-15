import React from "react";
import profilePic from "../Images/1605922102521.jpg"

const About = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xs12">
          <div className="profile-pic-styles">
            <img className="profile-pic" src={profilePic} alt="profile-pic" />
          </div>
        </div>
        <div className="col-lg-6 col-xs12">
          <h1 className="blurb-header">About Me</h1>
          <p className="personal-blurb">

          </p>
        </div>
      </div>
    </div>
  );
};

export default About;