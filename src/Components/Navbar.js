import React, { useEffect } from "react";
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
          <a href="#!" className="brand-logo right ">
            Portfolio
          </a>
          <ul className="left hide-on-med-and-down">
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/Portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/Contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
