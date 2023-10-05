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
            <label for="name"> NAME
                <input type="text" id="name"></input>
            </label>
            </div>

            <div>
            <label for="email">EMAIL 
                <input type="email" id="email"></input>
            </label>
            </div>

            <div>
            <label for="message"> YOUR MESSAGE HERE:
                <textarea id="message" cols={50}></textarea>
            </label>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
