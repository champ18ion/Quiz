import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import ListGroup from "./ListGroup";
import logo from "../Coder.png";

const QuizDetail = ({ onStart }) => {
  return (
    <MDBContainer fluid className="d-flex flex-column align-items-center">
        <img src={logo} alt="" className="img-fluid" style={{width:"300px", marginTop:'50px'}}/>
      <div className="position-absolute bottom-0 p-4 d-flex flex-column justify-content-center align-items-center" >
        <h4 className="p-4">Welcome to Merchify Quiz</h4>
        <ListGroup onStart={onStart}/>
      </div>
    </MDBContainer>
  );
};

export default QuizDetail;
