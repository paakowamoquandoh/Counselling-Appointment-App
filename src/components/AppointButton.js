import React, { Fragment } from "react";
import { MDBBtn, MDBNavLink } from "mdbreact";

const AppointButton = () => {
  return (
    <MDBNavLink to="#!">
      <Fragment>
      <MDBBtn gradient="purple">Book Appointment</MDBBtn>
    </Fragment>
    </MDBNavLink>
    
  );
}

export default AppointButton;