import React from "react";

import "./contact.css";

const Contact = () => {
  return (
    <div className="row">
      <div className="d-flex m-auto col col-6 justify-content-center align-items-center">
        <div className="circle-grey">
          <div>
            <span style={{ color: "var(--red)" }}>Contact</span> me
          </div>
          <div>
            Let's talk <br /> about
            <span style={{ color: "var(--red)" }}> YOU</span>
          </div>
        </div>
      </div>
      <div className="m-auto col col-6">
        <form className="col col-12 ">

            <div >
                <input type="text" id="name" placeholder=""></input>
            <label for="name"> NAME 
            </label><br/>
            </div>

            <div>
                <input type="email" id="email" placeholder=""></input>
            <label for="email">EMAIL 
            </label><br/>
            </div>

            <div>
                <input id="message" cols={50} placeholder=""></input>
            <label for="message"> YOUR MESSAGE HERE
            </label><br/>
            </div>

            <div>
              <input type="submit" name = "bwSend" value={"Send"}></input>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
