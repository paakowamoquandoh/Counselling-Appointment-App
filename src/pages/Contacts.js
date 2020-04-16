import React from 'react';
import { MDBNavLink } from "mdbreact";
import SmallNav from '../components/SmallNav';
import MainNav from '../components/MainNav';


let active = "";

const Contacts = (props) => {
    active = props === true ? "active" : "";
  return (
    <MDBNavLink to="/Contacts" className={`omega nav-link ${active}`}>
        <SmallNav />
        <MainNav />
      
    </MDBNavLink>
  );
};

export default Contacts;
