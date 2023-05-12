import React from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <>
      <MDBNavbar fixed='default' bgColor='transparent' className='mb-2'>
        <MDBContainer fluid className='justify-content-center'>
          <MDBNavbarBrand href='#' >Quiz mania</MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}