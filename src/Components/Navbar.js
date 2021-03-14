import React, { useEffect, useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";


const Navbar = (props) => {
  useEffect(() => {
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems, {});
  }, []);

    return (
      <div>
        <nav className="nav-extended grey darken-4">
          <div className="nav-wrapper grey darken-4 container">
            <a href="#!" className="brand-logo">
              Portfolio
            </a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="/">Portfolio</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li>
            <a href="/">Portfolio</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    );
}

export default Navbar
