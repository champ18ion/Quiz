import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import logo from './download.jfif'

export default function Header() {
  return (
    <>
      <MDBNavbar light bgColor='light' sticky >
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src={logo}
              height='35'
              alt=''
              loading='lazy'
            />
            Quiz Quiz
            
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}