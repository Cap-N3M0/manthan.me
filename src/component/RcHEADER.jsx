/* system import */
import React from "react";
import { Link } from "react-router-dom";

import { RxHamburgerMenu } from "react-icons/rx";

/* user-defined import */
import RcMyButtons from "./RcMyButtons";

import "./RcHEADER.css";

const RC_HEADER = (props) => {
  return (

      <header>
         {/* for medium and bigger  */}
        <ul className="d-none d-md-flex">
          <li>
            <Link to={"/"}>PORTFOLIO</Link>
          </li>
          <li>
            <Link to={"/project"}>PROJECTS</Link>
          </li>
          <li>
            <Link to={"/contact"}>CONTACT ME</Link>
          </li>
          <li>
            <RcMyButtons type={'primary'}>Download CV</RcMyButtons>
          </li>
        </ul>

        {/* for small and smaller  */}
        <ul className="d-sm-flex d-md-none">
          <li className="menu">
            <input type="checkbox" id="cbwMenu" hidden />
            <label
              for="cbwMenu"
              style={{ position: "relative", inset: "3vmin 0 0 0" }}
            >
              <RxHamburgerMenu size={50} color="var(--black)" />
            </label>

            {/* sideMenu */}
            <div class="sideMenu d-flex">
              <ul className="sideMenuList">
                <li><a href={"/"}>PORTFOLIO</a></li>
                <li><a href={"/project"}>PROJECTS</a></li>
                <li><a href={"/contact"}>CONTACT ME</a></li>
              </ul>
            </div>
          </li>
          <li>
            <RcMyButtons type={'primary'}>Download CV</RcMyButtons>
          </li>
        </ul>
      </header>
  );
};

export default RC_HEADER;
