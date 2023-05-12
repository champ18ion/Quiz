import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <>
      <MDBNavbar light bgColor='light' sticky >
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://www.bing.com/th?id=OIP.hbTz9ByVWaF-LBTfij_zrQHaFm&w=149&h=110&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'
              height='30'
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