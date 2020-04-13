import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact';
import SubForm from '../components/SubForm';

class ModalComp extends Component {
state = {
  modal14: false
}

toggle = nr => () => {
  let modalNumber = 'modal' + nr
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
}

render() {
  return (
      <MDBContainer>
          <MDBBtn outline color="white"onClick={this.toggle(14)}><i className="subtext">Subscribe !</i></MDBBtn>
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <MDBModalHeader toggle={this.toggle(14)}><b>Subscribe to <i>Ecounselor</i></b></MDBModalHeader>
          <MDBModalBody>
            <SubForm />
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalComp;