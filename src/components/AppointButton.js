import React, { Fragment } from "react";
import { MDBBtn, MDBNavLink } from "mdbreact";

let active = "";
  


const AppointButton = (props) => {
  active = props === true ? "active" : "";
  return (
    <MDBNavLink to="/Appointment" className={`omega nav-link ${active}`}>
      <Fragment>
      <MDBBtn gradient="purple">Book Appointment</MDBBtn>
    </Fragment>
    </MDBNavLink>
    
  );
}

export default AppointButton;