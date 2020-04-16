import React from 'react';
import { MDBNavLink } from "mdbreact";
import SmallNav from '../components/SmallNav';
import MainNav from '../components/MainNav';

let active = "";

const Services = (props) => {
    active = props === true ? "active" : "";
  return (
    <MDBNavLink to="/Services" className={`omega nav-link ${active}`}>
        <SmallNav />
        <MainNav />
      
    </MDBNavLink>
  );
};



export default Services;
