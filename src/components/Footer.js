import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter className="font-small pt-4 footcolor">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title"><b><i>eCounselor</i></b></h5>
            <p>
              Mental Health for Everyone.
            </p>
          </MDBCol>
          <MDBCol md="6">
          <MDBIcon icon="phone"/> <i className="infotext"> 0 (+233) 500 409 008</i> 
                  <MDBIcon className="lineIcon" icon="grip-lines-vertical" />
                  <MDBIcon icon="map-marker" />  <i className="infotext"> Accra </i>
                  <MDBIcon className="lineIcon" icon="grip-lines-vertical" />
                  <MDBIcon far icon="envelope" /> <i className="infotext">ecounsel2020@gmail.com</i>  
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href=""> eCounselor.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;