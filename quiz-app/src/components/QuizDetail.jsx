import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import logo from "../game.svg";
import ListGroup from "./ListGroup";

const QuizDetail = ({ onStart }) => {
  return (
    <MDBContainer
      fluid
      className="d-flex flex-column align-items-center justify-content-center"
    >
      {/* Responsive banner */}
      <aside class="responsive-banner first">
        <div class="container-envelope">
          {/* Circles for design */}
          <svg class="cirle-a" height="160" width="160">
            <circle cx="80" cy="80" r="80" />
          </svg>
          <svg class="cirle-b" height="60" width="60">
            <circle cx="30" cy="30" r="30" />
          </svg>
          <svg class="cirle-c" height="600" width="600">
            <circle cx="300" cy="300" r="300" />
          </svg>
          <svg class="cirle-d" height="60" width="60">
            <circle cx="30" cy="30" r="30" />
          </svg>
          {/* Logo */}
          <img src={logo} alt="logo" />
          {/* Quiz description */}
          <div class="col-xs-12" style={{ marginTop: 500 }}>
            <p>Welcome to merchify Quiz</p>
            {/* Start button */}
            <a target="_blank" class="more-link">
              <ListGroup onStart={onStart} />
            </a>
            <p style={{ marginTop: 20, fontFamily: "monospace" }}>
              take this quiz to challenge yourself
            </p>
          </div>
        </div>
      </aside>
    </MDBContainer>
  );
};

export default QuizDetail;
