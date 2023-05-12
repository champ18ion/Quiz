import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBListGroupItem,
  MDBListGroup,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function App({ onStart }) {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <>
      <MDBBtn rounded color="info" onClick={toggleShow}>
        Start Quiz
      </MDBBtn>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog size="lg" position="bottom">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle> Quiz Rules</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBListGroup style={{ minWidth: "22rem" }} light>
                <MDBListGroupItem
                  noBorders
                  color="info"
                  className="px-3 w-75 mb-2 rounded-3"
                >
                  <MDBIcon fas icon="award" /> Answer more than 7 questios to
                  pass
                </MDBListGroupItem>
                <MDBListGroupItem
                  noBorders
                  color="dark"
                  className="px-3 w-75 mb-2 rounded-3"
                >
                  <MDBIcon far icon="edit" /> A total of 10 questions
                </MDBListGroupItem>
                <MDBListGroupItem
                  noBorders
                  color="info"
                  className="px-3 w-75 mb-2 rounded-3"
                >
                  <MDBIcon fas icon="stopwatch" /> complete test in 1 min
                </MDBListGroupItem>
              </MDBListGroup>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn rounded onClick={onStart}>
                Start quiz
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
