/* system import */
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { RxHamburgerMenu } from "react-icons/rx";

/* user-defined import */
import RcMyButtons from "./RcMyButtons";
import downloadCV from "./DownloadCV";

import "./RcHEADER.css";

const RC_HEADER = (props) => {

  const [sideMenuCheck, setsideMenuCheck] = useState(false);

  const toggleSideMenuCheck = () =>{
    setsideMenuCheck(!sideMenuCheck);
  }

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
            <RcMyButtons type={'primary'} href='/' onClick={()=>{downloadCV()}}>Download CV</RcMyButtons>
          </li>
        </ul>

        {/* for small and smaller  */}
        <ul className="d-sm-flex d-md-none">
          <li className="menu">
            <input type="checkbox" id="cbwMenu" checked = {sideMenuCheck} onChange={()=>{}} hidden/>
            <RxHamburgerMenu size={50} color="var(--black)" onClick={toggleSideMenuCheck}/>
          

            {/* sideMenu */}
            <div className="sideMenu d-flex">
              <ul className="sideMenuList">
                <li onClick={() => toggleSideMenuCheck()}><Link to={"/"} on>PORTFOLIO</Link></li>
                <li onClick={() => toggleSideMenuCheck()}><Link to={"/project"}>PROJECTS</Link></li>
                <li onClick={() => toggleSideMenuCheck()}><Link to={"/contact"}>CONTACT ME</Link></li>
              </ul>
            </div>
          </li>
          <li>
            <RcMyButtons type={'primary'} onClick={()=>{downloadCV()}}>Download CV</RcMyButtons>
          </li>
        </ul>
      </header>
  );
};

export default RC_HEADER;
