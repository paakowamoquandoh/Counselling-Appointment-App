import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import SubButton from './SubButton';
import AppointButton from './AppointButton';

const SmallNav = () => {
    return (
        <div className="smallnavbar">
         <MDBContainer fluid>
              <MDBRow>
                <MDBCol md="3">
                    <SubButton />
                </MDBCol>

                <MDBCol md="6" className= "infoSpace">
                  <MDBIcon icon="phone"/> <i className="infotext"> 0 (+233) 500 409 008</i> 
                  <MDBIcon className="lineIcon" icon="grip-lines-vertical" />
                  <MDBIcon icon="map-marker" />  <i className="infotext"> Accra </i>
                  <MDBIcon className="lineIcon" icon="grip-lines-vertical" />
                  <MDBIcon far icon="envelope" /> <i className="infotext">ecounsel2020@gmail.com</i>               
                </MDBCol>

                <MDBCol md="3">
                    <AppointButton />
                </MDBCol>
              </MDBRow>
        </MDBContainer>
        </div>
    )
}


export default SmallNav;
