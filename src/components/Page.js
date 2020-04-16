import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import image1 from '../images/ccounsel.jpg';
import AppointButton from "./AppointButton";
import GridImages from '../components/GridImages';

const styles={ 
    header:{ 
    backgroundImage:`url(${image1})`,
    height: '100vh', 
    backgroundPosition:'center', 
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover' 
    },

    content: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(15,79,70, 0.8)',       
      }
   }

const Page = () => {
return (
<MDBContainer fluid>
  <MDBRow>
    <MDBCol className="colheight" md="1"></MDBCol>

    <MDBCol md="10" className="pageback z-depth-1"
    style={styles.content}>
        <div className="text-center ">
        <h1  className="boldtext"><b>WELCOME BACK </b></h1> <br/>
        <p className="moretext">some text here or anything else that may come up in the construction of the main content</p> <br/>
        <div className="appointbutton">
            <AppointButton />
        </div><br/>
        <GridImages />
        </div>
              
    </MDBCol>

    <MDBCol md="1" className="colheight"></MDBCol>
  </MDBRow>
</MDBContainer>
);
}

export default Page;