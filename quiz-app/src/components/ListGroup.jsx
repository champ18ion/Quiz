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
  // state to toggle the modal
  const [basicModal, setBasicModal] = useState(false);

  // function to toggle the modal
  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <>
      {/* button to trigger the modal */}
      <MDBBtn rounded color="info" onClick={toggleShow}>
        Start Quiz
      </MDBBtn>

      {/* modal component */}
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog size="lg" position="bottom">
          <MDBModalContent>
            {/* modal header */}
            <MDBModalHeader>
              <MDBModalTitle> Quiz Rules</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>

            {/* modal body */}
            <MDBModalBody>
              {/* list group to show the rules */}
              <MDBListGroup style={{ minWidth: "22rem" }} light>
                <MDBListGroupItem
                  noBorders
                  color="info"
                  className="px-3 w-75 mb-2 rounded-3"
                >
                  <MDBIcon fas icon="award" /> Answer more than 7 questions to pass
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
                  <MDBIcon fas icon="stopwatch" /> Complete test in 1 minute
                </MDBListGroupItem>
              </MDBListGroup>
            </MDBModalBody>

            {/* modal footer */}
            <MDBModalFooter>
              {/* button to start the quiz */}
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
