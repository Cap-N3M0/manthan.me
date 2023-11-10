import React from "react";

import "./contact.css";

const Contact = () => { 
  return (
    <div className="row col-12">
      <div className="d-flex m-auto col-12 col-md-6 justify-content-center">
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
      <div className="d-flex col-12 col-md-6">
        <form className="col-12 justify-content-center ">

            <div>
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
