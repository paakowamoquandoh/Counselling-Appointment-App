import React, { Component } from "react";
import {MDBRow, MDBCol, MDBContainer} from "mdbreact";
import Grid1 from '../images/counselorb.jpg'
import Grid2 from '../images/ecounsel.jpg'
import Grid3 from '../images/42.jpg'



class CarouselPage extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-3">
          <img src={Grid1} className="img-fluid z-depth-1" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-3">
            <img src={Grid2} className="img-fluid z-depth-1" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-3">
            <img src={Grid3} className="img-fluid z-depth-1" alt="" />
          </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
  }
}

export default CarouselPage;