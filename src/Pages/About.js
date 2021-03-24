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
            Hello, My name is Nicolas Martinez (Nick for short). I am 30 and I have a BA degree in
            Interpersonal Communications and I am currently attending UC
            Berkeley Extension Coding Bootcamp to become a Full Stack Web
            Developer. I am located in Las Vegas, NV where I have Bartended at
            The Wynn and Encore Resorts for the last 5 years. My experience
            Bartending has taught me how to work as a part of a team and how to
            help that team achieve a common goal. I am a hard worker, with high
            energy, and a self-motivated individual who never misses a deadline.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;