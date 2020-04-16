import React from 'react';
import {MDBContainer, MDBRow, MDBCol} from 'mdbreact';
import SmallNav from '../components/SmallNav';
import MainNav from '../components/MainNav';

const Appointment = () => {
  return (
    <div>
      <SmallNav />
      <MainNav />
      <MDBContainer className= "smallbox">
        <MDBRow>
          <MDBCol md="12">
              <h2>Booking Appointment<br/>made Easy</h2><hr/><br/>
              <p>Hassle-free booking for our clients at your<br/>convenient time</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Appointment;
