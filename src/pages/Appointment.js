import React from 'react';
import {MDBContainer, MDBRow, MDBCol} from 'mdbreact';
import SmallNav from '../components/SmallNav';
import MainNav from '../components/MainNav';
import appoint from '../images/fcounsel.jpg';



const Appointment = () => {
  return (
    <div>
      <SmallNav />
      <MainNav />
      <MDBContainer className= "smallbox">
        <MDBRow>
          <MDBCol md="12">
              <h2>Booking Appointment<br/>made Easy</h2>
              <img src={appoint} alt="appointment image" height="200px" width="100px"
              className="float-right" />
              <br/>
              <p>Hassle-free booking for our clients at your<br/>convenient time</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBContainer>
      <MDBRow>
            <MDBCol size="4">
            <h3 className="servicetext">Select a Service</h3><br/>
            </MDBCol>
            <MDBCol size="4">.col-4</MDBCol>
            <MDBCol size="4">.col-4</MDBCol>
          </MDBRow>
     
      </MDBContainer>
    </div>
  );
};

export default Appointment;
