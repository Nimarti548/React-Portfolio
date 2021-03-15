import React from "react";
import resume from "../Images/Coding-Resume.pdf"


const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row footer-div">
          <div className="col-lg-4 col-md-6 col-sm-6 footer-div-two align-items-center">
            <div className="email">
              <a href="mailto:Nimarti548@gmail.com">Nimarti548@gmail.com</a>
            </div>
            <div className="phone">
              <a href="tel:2172515203">+1(217)251-5203</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6 ml-auto align-items-center">
            <div className="row">
              <div className="col ">
                <a href="https://github.com/Nimarti548" target="_blank">
                  GitHub
                </a>
                <br />
                <a href={resume} target="_blank">
                  Resume
                </a>
              </div>
                <a
                  href="https://www.linkedin.com/in/nicolas-martinez-a6066575/"
                  target="_blank"
                >
                  Linkedin
                </a>
                <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
